// app/api/webhooks/stripe/route.js
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';
import { headers } from 'next/headers'; // Para obtener las cabeceras

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

// Helper para obtener detalles del plan desde metadata o descripción
function getPlanDetailsFromSession(session) {
    const planId = session.metadata?.plan_id ? parseInt(session.metadata.plan_id, 10) : null;
    const isAnnual = session.metadata?.is_annual === 'true';
    let planNameSimple = 'Desconocido';
    let billingType = isAnnual ? 'Anual' : 'Mensual';
    let amount = `€${(session.amount_total / 100).toFixed(2)}`; // Total pagado en esta sesión

    if (planId === 1) {
        planNameSimple = 'Standard';
    } else if (planId === 2) {
        planNameSimple = 'VIP';
    }
    // Puedes intentar obtenerlo de la descripción si metadata falla
    else if (session.line_items?.data[0]?.description) {
        const desc = session.line_items.data[0].description.toLowerCase();
        if (desc.includes('standard')) planNameSimple = 'Standard';
        if (desc.includes('vip')) planNameSimple = 'VIP';
        if (desc.includes('anual')) billingType = 'Anual';
        if (desc.includes('mensual')) billingType = 'Mensual';
    }

    return {
        planName: `${planNameSimple} (${billingType})`,
        amountPaid: amount,
        billingType: billingType // Para uso interno si es necesario
    };
}


export async function POST(request) {
  const body = await request.text(); // Necesitamos el cuerpo raw para la verificación
  const signature = headers().get('stripe-signature'); // Obtén la firma

  if (!webhookSecret) {
      console.error("Error: STRIPE_WEBHOOK_SECRET no está configurado.");
      return NextResponse.json({ error: "Configuración interna incorrecta." }, { status: 500 });
  }
  if (!signature) {
      console.error("Error: No se encontró la cabecera stripe-signature.");
      return NextResponse.json({ error: "Falta la firma del webhook." }, { status: 400 });
  }

  let event;

  try {
    // Verifica la firma del webhook
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    console.log(`Webhook recibido y verificado: ${event.id}, Tipo: ${event.type}`);
  } catch (err) {
    console.error(`❌ Error al verificar la firma del webhook: ${err.message}`);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  // Maneja el evento específico
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object; // El objeto Checkout Session

      console.log(`Procesando checkout.session.completed para sesión: ${session.id}`);

      // Verifica si el pago fue realmente exitoso
      if (session.payment_status === 'paid') {
        console.log(`Pago confirmado para sesión: ${session.id}`);

        // Extrae la información necesaria
        // Intenta obtener el email de customer_details primero (más fiable después del checkout)
        const customerEmail = session.customer_details?.email || session.customer?.email;
        const customerName = session.customer_details?.name || 'Cliente de BeFitter'; // Usa un nombre genérico si no está

        if (!customerEmail) {
          console.error(`Error: No se pudo obtener el email del cliente para la sesión ${session.id}`);
          // Aún así devuelve 200 a Stripe para evitar reintentos, pero registra el error.
          return NextResponse.json({ received: true, error: "Email del cliente no encontrado" });
        }

        const { planName, amountPaid } = getPlanDetailsFromSession(session);

        console.log(`Intentando enviar email a: ${customerEmail}`);

        try {
          // Envía el email usando Resend
          const { data, error } = await resend.emails.send({
            from: 'BeFitter <snmedina91@gmail.com>', // SUSTITUYE con tu email verificado en Resend
            to: [customerEmail],
            subject: '¡Gracias por tu suscripción a BeFitter!',
            // Puedes crear un componente React para el cuerpo del email o usar HTML simple
            html: `
              <h1>¡Bienvenido/a a BeFitter, ${customerName}!</h1>
              <p>Tu pago ha sido procesado exitosamente y tu suscripción está activa.</p>
              <h2>Detalles de tu compra:</h2>
              <ul>
                <li><strong>Plan:</strong> ${planName}</li>
                <li><strong>Importe Pagado:</strong> ${amountPaid}</li>
                <li><strong>Email:</strong> ${customerEmail}</li>
              </ul>
              <p>Recibirás más información sobre cómo empezar pronto.</p>
              <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
              <br/>
              <p>El equipo de BeFitter</p>
            `,
          });

          if (error) {
            console.error(`Error al enviar email con Resend para sesión ${session.id}:`, error);
            // Devuelve 200 a Stripe, pero registra el error. Stripe no debe reintentar por fallos de email.
            return NextResponse.json({ received: true, email_error: error.message });
          }

          console.log(`Email enviado exitosamente a ${customerEmail}, ID de email: ${data?.id}`);

        } catch (emailError) {
          console.error(`Excepción al enviar email para sesión ${session.id}:`, emailError);
          // Devuelve 200 a Stripe
          return NextResponse.json({ received: true, email_exception: emailError.message });
        }
      } else {
        console.log(`Sesión ${session.id} completada pero estado de pago no es 'paid' (${session.payment_status}). No se envía email.`);
      }
      break;

    // Puedes manejar otros tipos de eventos aquí si es necesario
    // case 'invoice.paid':
    //   // ... manejo para pagos de renovación, etc.
    //   break;
    // case 'customer.subscription.deleted':
    //   // ... manejo para cancelaciones
    //   break;

    default:
      console.log(`Evento no manejado: ${event.type}`);
  }

  // Responde a Stripe que recibiste el evento correctamente
  return NextResponse.json({ received: true });
}
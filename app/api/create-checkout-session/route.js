// app/api/create-checkout-session/route.js
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Helper para obtener detalles del plan
function getPlanDetails(planId, isAnnual) {
  let productName, unitAmount, description, planNameSimple;

  if (planId === 1) { // Plan Standard
    productName = 'BeFitter Standard Plan';
    unitAmount = isAnnual ? 1200 : 1500;
    planNameSimple = 'Standard';
  } else if (planId === 2) { // Plan VIP
    productName = 'BeFitter VIP Plan';
    unitAmount = isAnnual ? 2000 : 2500;
    planNameSimple = 'VIP';
  } else {
    throw new Error('Plan ID inválido');
  }

  description = isAnnual
    ? `Suscripción anual al plan ${planNameSimple}`
    : `Suscripción mensual al plan ${planNameSimple}`;

  return { productName, unitAmount, description, planNameSimple };
}

export async function POST(request) {
  try {
    const { planId, isAnnual } = await request.json();

    if (!planId || typeof isAnnual !== 'boolean') {
        return NextResponse.json({ error: { message: 'Plan ID y estado anual son requeridos' } }, { status: 400 });
    }

    const { productName, unitAmount, description } = getPlanDetails(parseInt(planId, 10), isAnnual);

    console.log(`Creando sesión para: ${productName}, Precio: €${(unitAmount / 100).toFixed(2)}, Anual: ${isAnnual}`);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: productName,
              description: description, // Descripción simple aquí
            },
            unit_amount: unitAmount,
            recurring: {
              interval: isAnnual ? 'year' : 'month',
            },
          },
          quantity: 1,
        },
      ],
      mode: 'subscription',
      // SOLO necesitamos el session_id en la URL de éxito
      success_url: `${process.env.NEXTAUTH_URL || 'http://localhost:3003'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXTAUTH_URL || 'http://localhost:3003'}/cancel`,
      // --- Colección de datos ---
      // Stripe recoge el email automáticamente
      billing_address_collection: 'required', // Opcional, si necesitas la dirección
      phone_number_collection: {
        enabled: true,
      },
      // --- Metadatos --- (Útil para webhooks o recuperación de sesión)
      metadata: {
        plan_id: planId.toString(),
        is_annual: isAnnual.toString(), // Guardar como string
      },
      // --- Otras opciones ---
      allow_promotion_codes: true,
      // Guarda los detalles de pago para futuras suscripciones si es necesario
      // setup_future_usage: 'on_session', // Descomentar si quieres guardar métodos de pago
      // Asocia la sesión con un cliente existente si tienes su ID
      // customer: 'cus_xxxxxxxxxxxxxx',
      // O crea un email de cliente si no existe uno
      customer_email: undefined, // Permite que el cliente lo introduzca en el checkout si no se proporciona
    });

    return NextResponse.json({ sessionId: session.id });

  } catch (error) {
    console.error('Error en la creación de la sesión de checkout:', error);
    // Devuelve un mensaje de error más genérico al cliente si es necesario
    const errorMessage = error instanceof Error ? error.message : 'Error interno del servidor';
    return NextResponse.json(
      { error: { message: errorMessage } },
      { status: error.statusCode || 500 } // Usa el statusCode de Stripe si está disponible
    );
  }
}
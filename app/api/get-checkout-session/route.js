// app/api/get-checkout-session/route.js
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get('sessionId');

  if (!sessionId) {
    return NextResponse.json({ error: 'Session ID es requerido' }, { status: 400 });
  }

  try {
    console.log(`Recuperando sesión de checkout: ${sessionId}`);
    // Recupera la sesión y expande los objetos que necesitamos (cliente, items de línea, producto)
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['customer', 'line_items.data.price.product', 'payment_intent', 'subscription'],
    });

    // Verifica si el pago fue exitoso (puede ser 'paid' para suscripciones o 'complete' para one-time)
    if (session.payment_status !== 'paid' && session.status !== 'complete') {
       console.warn(`Estado de pago no exitoso para sesión ${sessionId}: ${session.payment_status}, ${session.status}`);
       return NextResponse.json({ error: 'El pago no fue completado exitosamente.' }, { status: 402 }); // Payment Required
    }

    console.log("Sesión recuperada exitosamente. Cliente:", session.customer?.email);

    // Extrae la información necesaria
    const customerEmail = session.customer?.email || 'Email no disponible';
    const customerPhone = session.customer?.phone || session.customer_details?.phone || 'Teléfono no disponible'; // El teléfono puede estar en customer o customer_details
    const lineItem = session.line_items?.data[0]; // Asumimos un solo item
    const price = lineItem?.price;
    const product = price?.product;
    const planName = product?.name || 'Nombre del plan no disponible';
    const billingInterval = price?.recurring?.interval || 'N/A'; // 'month' o 'year'
    const amountTotal = session.amount_total; // Total pagado en céntimos
    const currency = session.currency.toUpperCase();

    // Formatea la información para devolverla al frontend
    const sessionData = {
      customerEmail: customerEmail,
      customerPhone: customerPhone,
      planName: planName,
      billingType: billingInterval.charAt(0).toUpperCase() + billingInterval.slice(1), // Month o Year
      // Formato del importe total pagado en esta sesión
      amountPaid: `${currency}${(amountTotal / 100).toFixed(2)}`,
       // Puedes añadir más datos si los necesitas, como el ID de la suscripción
      subscriptionId: session.subscription?.id || null,
      paymentStatus: session.payment_status, // 'paid'
      checkoutStatus: session.status, // 'complete'
    };

    return NextResponse.json(sessionData);

  } catch (error) {
    console.error(`Error al recuperar la sesión de checkout ${sessionId}:`, error);
    const errorMessage = error instanceof Error ? error.message : 'Error interno del servidor';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const { planId, isAnnual } = await request.json();
    
    // Define el producto según el plan seleccionado
    let productName, unitAmount, description;
    
    if (planId === 1) { // Plan Standard
      productName = 'BeFitter Standard Plan';
      unitAmount = isAnnual ? 1200 : 1500; // 12€ o 15€ en céntimos
      description = isAnnual ? 'Suscripción anual al plan estándar' : 'Suscripción mensual al plan estándar';
    } else { // Plan VIP
      productName = 'BeFitter VIP Plan';
      unitAmount = isAnnual ? 2000 : 2500; // 20€ o 25€ en céntimos
      description = isAnnual ? 'Suscripción anual al plan VIP' : 'Suscripción mensual al plan VIP';
    }

    // Calcular el precio anual total para mostrar en la descripción si es anual
    const totalAnnualAmount = isAnnual ? unitAmount * 12 : null;
    const formattedAnnualAmount = totalAnnualAmount ? `(€${(totalAnnualAmount / 100).toFixed(2)} total anual)` : '';
    const fullDescription = isAnnual 
      ? `${description} ${formattedAnnualAmount}`
      : description;

    console.log(`Creando sesión para: ${productName}, Precio: €${(unitAmount/100).toFixed(2)}, Anual: ${isAnnual}`);

    // Crear una sesión de Checkout
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: productName,
              description: fullDescription,
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
      success_url: `${process.env.NEXTAUTH_URL || 'http://localhost:3003'}/success?session_id={CHECKOUT_SESSION_ID}&plan=${planId}&billing=${isAnnual ? 'annual' : 'monthly'}`,
      cancel_url: `${process.env.NEXTAUTH_URL || 'http://localhost:3003'}/cancel`,
      // Solicita email y teléfono en el checkout
      billing_address_collection: 'required',
      phone_number_collection: {
        enabled: true,
      },
      // Metadatos para identificar la suscripción
      metadata: {
        plan_id: planId.toString(),
        is_annual: isAnnual ? 'true' : 'false'
      },
      // Opciones de envío de correo de recibo
      allow_promotion_codes: true,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error en la creación de la sesión de checkout:', error);
    return NextResponse.json(
      { error: { message: error.message } },
      { status: 400 }
    );
  }
}
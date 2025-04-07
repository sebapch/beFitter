'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

// Carga Stripe fuera del componente para evitar recargas innecesarias
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(null);

  const plans = [
    {
      id: 1,
      name: "Standard",
      description: "Perfect for most fitness enthusiasts.",
      monthlyPrice: 15,
      annualPrice: 12,
      features: [
        "Personalized workout plans",
        "Basic nutrition guidance",
        "Exercise video library",
        "Progress tracking",
        "Email support",
      ],
      popular: false
    },
    {
      id: 2,
      name: "VIP",
      description: "For those serious about achieving their fitness goals faster.",
      monthlyPrice: 25,
      annualPrice: 20,
      features: [
        "Everything in Standard",
        "Priority adaptation",
        "Detailed nutrition tracking",
        "Body measurement tracking",
        "Custom meal planning",
        "Priority support",
        "Goal-specific programs"
      ],
      popular: true
    }
  ];

  const handleSubscription = async (planId) => {
    try {
      setIsLoading(true);
      setButtonClicked(planId);
      
      console.log(`Iniciando checkout para plan ${planId === 1 ? 'Standard' : 'VIP'} ${isAnnual ? 'anual' : 'mensual'}...`);
      
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planId: planId,
          isAnnual: isAnnual
        }),
      });

      const responseData = await response.json();
      
      if (!response.ok) {
        throw new Error(responseData.error?.message || 'Error en la comunicación con el servidor');
      }

      const { sessionId } = responseData;
      console.log("Session ID obtenido:", sessionId);
      
      if (!sessionId) {
        throw new Error('No se recibió un ID de sesión válido');
      }
      
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('No se pudo cargar Stripe');
      }
      
      console.log("Redirigiendo a Stripe Checkout...");
      const { error } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (error) {
        console.error('Error al redirigir a Stripe Checkout:', error);
        throw new Error(error.message);
      }
    } catch (error) {
      console.error('Error al iniciar el checkout:', error);
      alert(`Error: ${error.message}`);
      setIsLoading(false);
      setButtonClicked(null);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple Pricing, Exceptional Value
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Choose the plan that fits your needs and start your fitness transformation today.
          </p>
          <div className="w-20 h-1 bg-[#007BFF] mx-auto mt-6"></div>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="bg-gray-100 p-1 rounded-lg inline-flex">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                !isAnnual 
                  ? "bg-white text-[#007BFF] shadow-sm" 
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-md text-sm font-medium relative ${
                isAnnual 
                  ? "bg-white text-[#007BFF] shadow-sm" 
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Annual
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={itemVariants}
              className={`bg-white rounded-xl overflow-hidden border ${
                plan.popular 
                  ? "border-[#007BFF] shadow-lg shadow-blue-100" 
                  : "border-gray-200 shadow-md"
              } relative`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-[#007BFF] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}
              <div className={`p-6 ${plan.popular ? "bg-blue-50" : "bg-gray-50"}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-gray-600 h-12">{plan.description}</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-end">
                    <span className="text-4xl font-bold text-gray-900">
                      €{isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-600 ml-2 mb-1">/ month</span>
                  </div>
                  {isAnnual && (
                    <p className="text-green-600 text-sm mt-1">
                      €{((plan.monthlyPrice - plan.annualPrice) * 12).toFixed(2)} saved annually
                    </p>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="ml-2 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button 
                    onClick={() => handleSubscription(plan.id)}
                    disabled={isLoading}
                    className={`block w-full text-center py-3 px-4 rounded-lg font-medium ${
                      plan.popular 
                        ? "bg-[#007BFF] text-white hover:bg-blue-600" 
                        : "bg-white border border-[#007BFF] text-[#007BFF] hover:bg-blue-50"
                    } transition-colors duration-300 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isLoading && buttonClicked === plan.id ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Procesando...
                      </span>
                    ) : (
                      'Get Started'
                    )}
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center bg-gray-50 p-6 rounded-lg max-w-4xl mx-auto"
        >
          <p className="text-gray-700 mb-2 font-semibold">
            All plans include:
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 max-w-3xl mx-auto">
            <div className="flex items-center">
              <svg className="h-5 w-5 text-[#007BFF] mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 text-[#007BFF] mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Regular updates</span>
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 text-[#007BFF] mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Cross-platform access</span>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 text-center">
          <div className="flex justify-center items-center mb-2">
            <p className="text-gray-500 text-sm mr-2">Pago seguro con</p>
            <svg className="h-6" viewBox="0 0 60 25" xmlns="http://www.w3.org/2000/svg">
              <path d="M59.4 0H0V25H59.4V0Z" fill="white"/>
              <path d="M59.4 0H0V25H59.4V0ZM55.7 21.2H3.7V3.8H55.7V21.2Z" fill="#32325D"/>
              <path d="M33.1 14.5C33.1 12.1 35.1 10.2 37.5 10.2C39.9 10.2 41.9 12.1 41.9 14.5C41.9 16.9 39.9 18.9 37.5 18.9C35.1 18.9 33.1 16.9 33.1 14.5ZM17.8 14.5C17.8 12.1 19.8 10.2 22.2 10.2C24.6 10.2 26.6 12.1 26.6 14.5C26.6 16.9 24.6 18.9 22.2 18.9C19.8 18.9 17.8 16.9 17.8 14.5Z" fill="#6772E5"/>
            </svg>
          </div>
          <p className="text-gray-500 text-xs">
            Todos los pagos son procesados de forma segura. No se requiere cuenta para comprar.
          </p>
        </div>
      </div>
    </section>
  );
};
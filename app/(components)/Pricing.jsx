'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

console.log("Stripe public key:", process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY); // Keep for debugging if needed

export const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(null); // Tracks which Stripe button is loading

  const plans = [
    {
      id: 1,
      name: "Standard",
      description: "Perfect foundation for your fitness journey.",
      monthlyPrice: 15,
      annualPrice: 12, // (15 * 12 * 0.8) / 12 = 12
      features: [
        "Personalized workout plans",
        "Basic nutrition guidance",
        "Exercise video library",
        "Progress tracking",
        "Email support",
      ],
      popular: false,
      isContact: false, // Indicates if it triggers contact instead of Stripe
    },
    {
      id: 2,
      name: "VIP",
      description: "Accelerate results with advanced features & priority.",
      monthlyPrice: 25,
      annualPrice: 20, // (25 * 12 * 0.8) / 12 = 20
      features: [
        "Everything in Standard",
        "Priority plan adaptation",
        "Detailed nutrition tracking",
        "Body measurement tracking",
        "Custom meal planning",
        "Priority support",
        "Goal-specific programs"
      ],
      popular: true,
      isContact: false,
    },
    {
      id: 3,
      name: "Custom",
      description: "Bespoke coaching & planning for unique requirements.",
      monthlyPrice: null, // No fixed price
      annualPrice: null,
      features: [
        "Everything in VIP",
        "Direct 1-on-1 consultation",
        "Fully tailored program design",
        "Dedicated support channel",
        "Performance analysis",
        "Flexible scheduling",
      ],
      popular: false,
      isContact: true, // This plan leads to contact
    }
  ];

  const handleSubscription = async (planId) => {
    if (isLoading) return; // Prevent multiple clicks
    setIsLoading(true);
    setButtonClicked(planId);

    try {
      console.log(`Iniciando checkout para plan ID ${planId} ${isAnnual ? 'anual' : 'mensual'}...`);
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planId: planId, isAnnual: isAnnual }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Error creating checkout session');
      }

      const { sessionId } = await response.json();
      console.log("Session ID:", sessionId);
      if (!sessionId) throw new Error('Invalid session ID received');

      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe.js failed to load');

      console.log("Redirecting to Stripe Checkout...");
      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        console.error('Stripe redirection error:', error);
        throw new Error(error.message);
      }
      // Note: setIsLoading(false) might not be reached on successful redirect.
      // It's set back to false in the catch block or if the page reloads after purchase.

    } catch (error) {
      console.error('Checkout handling error:', error);
      alert(`Error: ${error.message}`);
      setIsLoading(false);
      setButtonClicked(null);
    }
  };

  const handleContact = () => {
     // Smooth scroll to the CTA/Signup section
     document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring', stiffness: 90 } }
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
            Choose Your Path to Success
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Select the plan that aligns with your goals. Need something unique? Let's talk.
          </p>
          <div className="w-20 h-1 bg-[#007BFF] mx-auto mt-6"></div>
        </motion.div>

        {/* Monthly/Annual Toggle */}
        <div className="flex justify-center mb-10">
          <div className="bg-gray-100 p-1 rounded-lg inline-flex items-center">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 sm:px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                !isAnnual
                  ? "bg-white text-[#007BFF] shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 sm:px-6 py-2 rounded-md text-sm font-medium relative transition-colors duration-200 ${
                isAnnual
                  ? "bg-white text-[#007BFF] shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Annual
              <span className="absolute -top-2.5 -right-3 bg-green-500 text-white text-[10px] leading-none px-2 py-1 rounded-full transform scale-90 sm:scale-100">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch" // Use items-stretch for equal height columns
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={itemVariants}
              className={`bg-white rounded-xl overflow-hidden border flex flex-col ${ // Added flex flex-col
                plan.popular
                  ? "border-[#007BFF] shadow-lg shadow-blue-100"
                  : "border-gray-200 shadow-md"
              } relative transition-shadow duration-300 hover:shadow-xl`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-[#007BFF] text-white text-xs font-bold px-3 py-1 rounded-bl-lg shadow-sm">
                    POPULAR
                  </div>
                </div>
              )}
              <div className={`p-6 ${plan.popular ? "bg-blue-50" : "bg-gray-50"} border-b ${plan.popular ? "border-blue-100" : "border-gray-100"}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-gray-600 text-sm h-10">{plan.description}</p> {/* Fixed height for description */}
              </div>
              <div className="p-6 flex flex-col flex-grow"> {/* Added flex-grow */}
                <div className="mb-6">
                  {plan.monthlyPrice !== null ? (
                    <>
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-gray-900">
                          €{isAnnual ? plan.annualPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-gray-500 ml-1.5 text-sm">/ month</span>
                      </div>
                      {isAnnual && (
                        <p className="text-green-600 text-sm mt-1 font-medium">
                          Billed €{(plan.annualPrice * 12).toFixed(0)} annually
                        </p>
                      )}
                      {!isAnnual && (
                         <p className="text-gray-400 text-sm mt-1 invisible">Placeholder</p> // Keep space consistent
                      )}
                    </>
                  ) : (
                    <div className="h-[60px] flex items-center"> {/* Match height of price area */}
                       <span className="text-2xl font-bold text-gray-900">Let's Talk</span>
                    </div>
                  )}
                </div>
                <ul className="space-y-3 mb-8 flex-grow"> {/* Added flex-grow to UL */}
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="ml-2 text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* Button Wrapper - Pushed to bottom */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-auto" // Pushes button to the bottom
                >
                  <button
                    onClick={() => plan.isContact ? handleContact() : handleSubscription(plan.id)}
                    disabled={isLoading && !plan.isContact} // Only disable Stripe buttons when loading
                    className={`block w-full text-center py-3 px-4 rounded-lg font-semibold text-base transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                      plan.isContact
                        ? "bg-gray-700 text-white hover:bg-gray-800 focus-visible:ring-gray-500" // Style for Contact button
                        : plan.popular
                          ? "bg-[#007BFF] text-white hover:bg-blue-700 focus-visible:ring-[#007BFF]" // Style for Popular button
                          : "bg-white border border-[#007BFF] text-[#007BFF] hover:bg-blue-50 focus-visible:ring-[#007BFF]" // Style for Standard button
                    } ${isLoading && !plan.isContact && buttonClicked === plan.id ? 'opacity-70 cursor-wait' : ''} ${isLoading && !plan.isContact && buttonClicked !== plan.id ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isLoading && !plan.isContact && buttonClicked === plan.id ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      plan.isContact ? 'Contact Us' : 'Get Started'
                    )}
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Included Features Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center bg-gray-50 p-6 rounded-lg max-w-4xl mx-auto border border-gray-200"
        >
          <h4 className="text-gray-800 mb-3 font-semibold text-lg">
            All Plans Also Include:
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 max-w-3xl mx-auto text-gray-600">
            <div className="flex items-center">
              <svg className="h-5 w-5 text-[#007BFF] mr-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Cancel Anytime Guarantee</span>
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 text-[#007BFF] mr-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Regular Feature Updates</span>
            </div>
            <div className="flex items-center">
             <svg className="h-5 w-5 text-[#007BFF] mr-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Cross-Platform Access (Web, Mobile)</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">* Custom plan features tailored during consultation.</p>
        </motion.div>

        {/* Secure Payment Footer */}
        <div className="mt-12 text-center">
          <div className="flex justify-center items-center mb-2 space-x-2">
            <span className="text-gray-500 text-sm">Secure payments via STRIPE</span>
            {/* Basic Stripe Logo SVG */}
          </div>
          <p className="text-gray-500 text-xs">
            Industry-standard encryption. No account needed for purchase.
          </p>
        </div>
      </div>
    </section>
  );
};
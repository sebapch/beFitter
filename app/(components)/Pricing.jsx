'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

// Ensure your Stripe key is correctly set in your .env.local file
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

// Optional: Remove console.log in production
// console.log("Stripe public key:", process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(null);

  const plans = [
    {
      id: 1,
      name: "Standard",
      description: "Perfect foundation for your fitness journey.",
      monthlyPrice: 15,
      annualPrice: 12,
      features: [
        "Personalized workout plans",
        "Basic nutrition guidance",
        "Exercise video library",
        "Progress tracking",
        "Email support",
      ],
      popular: false,
      isContact: false,
      stripePriceIdMonthly: 'price_standard_monthly', // Replace with your actual Stripe Price ID
      stripePriceIdAnnual: 'price_standard_annual',   // Replace with your actual Stripe Price ID
    },
    {
      id: 2,
      name: "VIP",
      description: "Accelerate results with advanced features & priority.",
      monthlyPrice: 25,
      annualPrice: 20,
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
      stripePriceIdMonthly: 'price_vip_monthly', // Replace with your actual Stripe Price ID
      stripePriceIdAnnual: 'price_vip_annual',   // Replace with your actual Stripe Price ID
    },
    {
      id: 3,
      name: "Custom",
      description: "Bespoke coaching & planning for unique requirements.",
      monthlyPrice: null,
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
      isContact: true,
      stripePriceIdMonthly: null, // No Stripe ID for contact plan
      stripePriceIdAnnual: null,
    }
  ];

  const handleSubscription = async (plan) => {
    if (isLoading || plan.isContact) return;
    setIsLoading(true);
    setButtonClicked(plan.id); // Keep track of which button was clicked

    const priceId = isAnnual ? plan.stripePriceIdAnnual : plan.stripePriceIdMonthly;

    // --- Input Validation ---
    if (!plan.id || typeof isAnnual !== 'boolean') { // Added check for plan.id and isAnnual type
      console.error('Internal Error: Plan ID or Annual Status is missing before sending.');
      alert('An internal error occurred. Please try again.');
      setIsLoading(false);
      setButtonClicked(null);
      return;
    }

    if (!priceId) {
      console.error(`Stripe Price ID not found for Plan ID ${plan.id} (${isAnnual ? 'Annual' : 'Monthly'})`);
      alert('Configuration error: Price ID is missing for the selected plan/duration.');
      setIsLoading(false);
      setButtonClicked(null);
      return;
    }

     if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      console.error('Stripe publishable key is not set!');
      alert('Configuration error: Stripe key is missing.');
      setIsLoading(false);
      setButtonClicked(null);
      return;
    }
    // --- End Validation ---

    try {
      console.log(`Initiating checkout for Plan ID ${plan.id}, Annual: ${isAnnual}, Price ID ${priceId}...`); // Log more info

      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // ***** FIX: Send planId and isAnnual along with priceId *****
        body: JSON.stringify({
          planId: plan.id,       // Pass the plan's unique ID (e.g., 1, 2)
          isAnnual: isAnnual,    // Pass the current toggle state (true/false)
          priceId: priceId       // Pass the specific Stripe Price ID
        }),
        // ***********************************************************
      });

      if (!response.ok) {
        let errorData;
        try {
           errorData = await response.json();
        } catch (parseError) {
          // If the response isn't valid JSON
           errorData = { error: { message: `Server error: ${response.statusText}` }};
        }
        // Use the backend's error message if available, otherwise provide a generic one
        throw new Error(errorData.error?.message || `Error creating checkout session (Status: ${response.status})`);
      }

      const { sessionId } = await response.json();
      console.log("Received Session ID:", sessionId);
      if (!sessionId) throw new Error('Invalid session ID received from server');

      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe.js failed to load');

      console.log("Redirecting to Stripe Checkout...");
      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        console.error('Stripe redirection error:', error);
        // Stripe's own UI usually shows the error, but alerting is a fallback
        alert(`Stripe Error: ${error.message}`);
        // Don't throw here, let the user potentially try again
        setIsLoading(false);
        setButtonClicked(null);
      }
      // If redirection is successful, the page navigates away.
      // No need to reset isLoading here in the success path.

    } catch (error) {
      console.error('Checkout handling error:', error);
      alert(`Error: ${error.message}`); // Display the specific error caught
      setIsLoading(false); // Reset loading state on any failure
      setButtonClicked(null);
    }
  };

  const handleContact = () => {
     document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  // Framer Motion variants (no change needed)
  const containerVariants = { /* ... */ };
  const itemVariants = { /* ... */ };

  return (
    // --- Dark Mode Changes Start Here ---
    <section className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900 text-gray-300" id="pricing"> {/* Dark gradient BG */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"> {/* Brighter heading */}
            Choose Your Path to Success
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg"> {/* Lighter paragraph */}
            Select the plan that aligns with your goals. Need something unique? Let's talk.
          </p>
          <div className="w-20 h-1 bg-[#007BFF] mx-auto mt-6"></div> {/* Accent line */}
        </motion.div>

        {/* Monthly/Annual Toggle - Dark Theme */}
        <div className="flex justify-center mb-10">
          <div className="bg-gray-800 p-1 rounded-lg inline-flex items-center border border-gray-700"> {/* Dark toggle BG */}
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 sm:px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800 ${
                !isAnnual
                  ? "bg-gray-900 text-[#007BFF] shadow-md" // Active state dark
                  : "text-gray-400 hover:text-gray-100" // Inactive state dark
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 sm:px-6 py-2 rounded-md text-sm font-medium relative transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800 ${
                isAnnual
                  ? "bg-gray-900 text-[#007BFF] shadow-md" // Active state dark
                  : "text-gray-400 hover:text-gray-100" // Inactive state dark
              }`}
            >
              Annual
              {/* Save badge remains the same, contrasts well */}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={itemVariants}
              // Dark card styling
              className={`bg-gray-800 rounded-xl overflow-hidden border flex flex-col ${
                plan.popular
                  ? "border-blue-500 shadow-xl shadow-blue-900/20" // Popular: Accent border, subtle blue shadow
                  : "border-gray-700 shadow-lg" // Standard: Dark border, standard shadow
              } relative transition-shadow duration-300 hover:shadow-2xl`} // Enhanced hover shadow
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 z-10"> {/* Ensure badge is above header */}
                  <div className="bg-[#007BFF] text-white text-xs font-bold px-3 py-1 rounded-bl-lg shadow-sm">
                    POPULAR
                  </div>
                </div>
              )}
              {/* Card Header - Dark Theme */}
              <div className={`p-6 border-b ${
                  plan.popular
                    ? "bg-blue-900/20 border-blue-800/30" // Popular: Subtle blue tint BG, darker blue border
                    : "bg-gray-700/50 border-gray-600" // Standard: Darker gray BG & border
                 }`}
              >
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-gray-400 text-sm h-10">{plan.description}</p> {/* Lighter description */}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                {/* Price Area - Dark Theme */}
                <div className="mb-6">
                  {plan.monthlyPrice !== null ? (
                    <>
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-white"> {/* Brighter price */}
                          €{isAnnual ? plan.annualPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-gray-400 ml-1.5 text-sm">/ month</span> {/* Lighter suffix */}
                      </div>
                      {isAnnual && (
                        <p className="text-green-400 text-sm mt-1 font-medium"> {/* Brighter green */}
                          Billed €{(plan.annualPrice * 12).toFixed(0)} annually
                        </p>
                      )}
                       {/* Keep placeholder for layout consistency */}
                      {!isAnnual && (
                         <p className="text-transparent text-sm mt-1 invisible">Placeholder</p>
                      )}
                    </>
                  ) : (
                     // "Let's Talk" styling
                    <div className="h-[60px] flex items-center">
                       <span className="text-2xl font-bold text-white">Let's Talk</span>
                    </div>
                  )}
                </div>
                {/* Features List - Dark Theme */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-400 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"> {/* Brighter green check */}
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="ml-2 text-gray-300 text-sm">{feature}</span> {/* Lighter feature text */}
                    </li>
                  ))}
                </ul>
                {/* Button Wrapper - Pushed to bottom */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-auto"
                >
                   {/* Dark Theme Button Styles */}
                  <button
                    onClick={() => plan.isContact ? handleContact() : handleSubscription(plan)}
                    disabled={isLoading && !plan.isContact}
                    className={`block w-full text-center py-3 px-4 rounded-lg font-semibold text-base transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800 ${ // Adjusted offset color
                      plan.isContact
                        ? "bg-gray-600 text-white hover:bg-gray-500 focus-visible:ring-gray-400" // Contact: Dark Gray
                        : plan.popular
                          ? "bg-[#007BFF] text-white hover:bg-blue-600 focus-visible:ring-[#007BFF]" // Popular: Accent Blue
                          : "bg-transparent border border-[#007BFF] text-[#007BFF] hover:bg-blue-900/20 focus-visible:ring-[#007BFF]" // Standard: Outlined Accent Blue
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

        {/* Included Features Footer - Dark Theme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center bg-gray-800 p-6 rounded-lg max-w-4xl mx-auto border border-gray-700 shadow-md" // Dark BG, border, shadow
        >
          <h4 className="text-gray-100 mb-3 font-semibold text-lg"> {/* Brighter heading */}
            All Plans Also Include:
          </h4>
           {/* Lighter text */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 max-w-3xl mx-auto text-gray-400">
            <div className="flex items-center">
              <svg className="h-5 w-5 text-[#007BFF] mr-1.5" /* Icon color */ xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Cancel Anytime Guarantee</span>
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 text-[#007BFF] mr-1.5" /* Icon color */ xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Regular Feature Updates</span>
            </div>
            <div className="flex items-center">
             <svg className="h-5 w-5 text-[#007BFF] mr-1.5" /* Icon color */ xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Cross-Platform Access (Web, Mobile)</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">* Custom plan features tailored during consultation.</p> {/* Lighter footnote */}
        </motion.div>

        {/* Secure Payment Footer - Dark Theme */}
        <div className="mt-12 text-center">
          <div className="flex justify-center items-center mb-2 space-x-2">
            {/* Optional: Add a dark-mode friendly Stripe logo here */}
            <span className="text-gray-500 text-sm">Secure payments via STRIPE</span> {/* Adjusted text color */}
          </div>
          <p className="text-gray-500 text-xs"> {/* Adjusted text color */}
            Industry-standard encryption. No account needed for purchase.
          </p>
        </div>
      </div>
    </section>
     // --- Dark Mode Changes End Here ---
  );
};
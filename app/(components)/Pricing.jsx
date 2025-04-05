'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

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
                  <a 
                    href="#signup" 
                    className={`block w-full text-center py-3 px-4 rounded-lg font-medium ${
                      plan.popular 
                        ? "bg-[#007BFF] text-white hover:bg-blue-600" 
                        : "bg-white border border-[#007BFF] text-[#007BFF] hover:bg-blue-50"
                    } transition-colors duration-300`}
                  >
                    Get Started
                  </a>
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
      </div>
    </section>
  );
};
'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqItems = [
    {
      question: "How does the personalization process work?",
      answer: "When you sign up, you'll complete a short questionnaire about your fitness goals, current level, available equipment, dietary preferences, and schedule. Our AI then creates a customized fitness and nutrition plan based on your answers. As you use the app and provide feedback on workouts and meals, your plan becomes increasingly personalized."
    },
    {
      question: "Do I need previous fitness experience to use BeFitter?",
      answer: "Not at all! BeFitter is designed for all fitness levels, from complete beginners to experienced athletes. Our AI creates plans appropriate for your current level, and all exercises include detailed video demonstrations and instructions to ensure proper form."
    },
    {
      question: "Can I use BeFitter if I don't have gym equipment?",
      answer: "Absolutely. During setup, you'll indicate what equipment you have access to (if any), and your workout plans will be designed accordingly. We have plenty of effective bodyweight-only workouts for those with no equipment, as well as options for minimal equipment like resistance bands or a single pair of dumbbells."
    },
    {
      question: "How is BeFitter different from other fitness apps?",
      answer: "Unlike most fitness apps that offer generic plans or minimal customization, BeFitter uses advanced AI to create truly personalized workouts and nutrition guidance that adapts to your progress and feedback. Our plans evolve with you, becoming more refined and effective over time as the AI learns what works best for your unique body and goals."
    },
    {
      question: "Can I track my nutrition in the app?",
      answer: "Yes! BeFitter includes comprehensive nutrition tracking and guidance. You can log meals, scan barcodes for quick food entry, access personalized meal suggestions, and track macronutrients. The app adjusts your nutrition recommendations based on your goals and workout intensity."
    },
    {
      question: "What if I don't like a workout or it's too difficult?",
      answer: "You can provide feedback after each workout, and the AI will adjust future recommendations accordingly. If a workout feels too challenging, you can select the 'too difficult' option, and the app will scale back the intensity. You can also swap exercises or choose alternative workouts if preferred."
    },
    /* {
      question: "What happens after my free trial ends?",
      answer: "After your 7-day free trial, you'll be automatically subscribed to your selected plan unless you cancel beforehand. You can cancel anytime directly in the app or on your account page with no questions asked. We'll send a reminder email before your trial ends."
    } */
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Everything you need to know to get started on your fitness journey.
          </p>
          <div className="w-20 h-1 bg-[#007BFF] mx-auto mt-6"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4"
        >
          {faqItems.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left focus:outline-none flex justify-between items-center"
              >
                <span className="font-semibold text-gray-900">{item.question}</span>
                <span>
                  {openItem === index ? (
                    <svg className="w-5 h-5 text-[#007BFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </button>
              <AnimatePresence>
                {openItem === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-4 text-gray-600 border-t border-gray-100">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-700">
            Still have questions? We're here to help.{" "}
            <a href="#contact" className="text-[#007BFF] font-semibold hover:underline">
              Contact our support team
            </a>{" "}
            for personalized assistance.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
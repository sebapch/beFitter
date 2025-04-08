'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Replaced Heroicon with inline SVG
const ChevronDownIconSVG = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);


export const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqItems = [
    {
      question: "Do I need previous fitness experience to use BeFitter?",
      answer: "Not at all! BeFitter is designed for all fitness levels, from complete beginners to experienced individuals. We create plans appropriate for your current level, and all exercises include detailed video demonstrations and instructions to ensure proper form."
    },
    {
      question: "Can I use BeFitter if I don't have gym equipment?",
      answer: "Absolutely. During setup, you'll indicate what equipment you have access to (if any), and your workout plans will be designed accordingly. We offer many effective bodyweight-only workouts, as well as options for minimal equipment like resistance bands or dumbbells."
    },
    {
      question: "How does BeFitter create my plan?",
      answer: "When you sign up, you'll complete a short questionnaire about your fitness goals, current level, available equipment, preferences, and schedule. Based on your answers, our system generates a suitable fitness and nutrition plan. As you use the app and provide feedback, your plan can be adjusted to better suit your progress."
    },
    {
      question: "Can I track my nutrition in the app?",
      answer: "Yes! BeFitter includes nutrition tracking and guidance. You can log meals, access personalized meal suggestions based on your profile, and track macronutrients to support your fitness goals alongside your workouts."
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Find answers to common questions about getting started with BeFitter.
          </p>
          <div className="w-20 h-1 bg-[#007BFF] mx-auto mt-6"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4"
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleItem(index)}
                className={`w-full px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007BFF] focus-visible:ring-opacity-50 flex justify-between items-center transition-colors duration-200 ${openItem === index ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
              >
                <span className={`font-medium text-base md:text-lg ${openItem === index ? 'text-[#007BFF]' : 'text-gray-800'}`}>
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: openItem === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0" // Added flex-shrink-0
                >
                  {/* Use the inline SVG component */}
                  <ChevronDownIconSVG className={`w-5 h-5 transition-colors duration-200 ${openItem === index ? 'text-[#007BFF]' : 'text-gray-500'}`} />
                </motion.span>
              </button>
              <AnimatePresence>
                {openItem === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }}
                    animate={{ height: "auto", opacity: 1, paddingTop: '1rem', paddingBottom: '1.25rem' }}
                    exit={{ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 text-gray-600 text-sm md:text-base leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-700">
            Still have questions? We're here to help.{" "}
            <a href="#contact" className="text-[#007BFF] font-semibold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007BFF] rounded">
              Contact our support team
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
};
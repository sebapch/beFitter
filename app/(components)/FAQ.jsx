'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Inline SVG component (no changes needed)
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
     // FAQ data remains the same
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

   // Framer motion variants remain the same
  const containerVariants = { /* ... */ };
  const itemVariants = { /* ... */ };

  return (
    // --- Dark Mode Changes Start Here ---
    // Using a lighter gray gradient as requested
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-700 to-gray-800 text-gray-300" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
           {/* Adjust text for contrast on lighter gray */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-200 max-w-xl mx-auto text-lg"> {/* Slightly brighter text */}
            Find answers to common questions about getting started with BeFitter.
          </p>
           {/* Accent line remains */}
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
              // Accordion item: Darker background than section, adjusted border/shadow
              className="bg-gray-800 rounded-xl shadow-md border border-gray-600 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-gray-500"
            >
              <button
                onClick={() => toggleItem(index)}
                 // Dark theme adjustments for button
                className={`w-full px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800 flex justify-between items-center transition-colors duration-200 ${
                    openItem === index
                     ? 'bg-gray-700/60' // Active: Slightly darker, semi-transparent
                     : 'hover:bg-gray-700/40' // Hover: Subtle dark hover
                    }`}
              >
                {/* Text color adjusted for button states */}
                <span className={`font-medium text-base md:text-lg ${openItem === index ? 'text-[#007BFF]' : 'text-gray-100'}`}>
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: openItem === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4" // Added margin for spacing
                >
                  {/* Icon color adjusted for button states */}
                  <ChevronDownIconSVG className={`w-5 h-5 transition-colors duration-200 ${openItem === index ? 'text-[#007BFF]' : 'text-gray-400'}`} />
                </motion.span>
              </button>
              <AnimatePresence>
                {openItem === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }}
                    animate={{ height: "auto", opacity: 1, paddingTop: '1rem', paddingBottom: '1.25rem' }}
                    exit={{ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden border-t border-gray-700" // Add subtle top border to content
                  >
                    {/* Answer text color adjusted */}
                    <div className="px-5 text-gray-300 text-sm md:text-base leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* "Still have questions?" section - Dark theme */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-300"> {/* Lighter text */}
            Still have questions? We're here to help.{" "}
            <a
                href="#contact" // Ensure you have a #contact section or change this href
                className="text-[#007BFF] font-semibold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-700 rounded" // Adjusted focus ring offset
                >
              Contact our support team
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
     // --- Dark Mode Changes End Here ---
  );
};
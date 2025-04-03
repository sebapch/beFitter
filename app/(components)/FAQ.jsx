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
      question: "How does the white-labeling process work? How long does it take?",
      answer: "White-labeling is simple and fast. Upload your logo, choose your brand colors, and customize key UI elements. We'll handle the rest. Most gyms can set up their branded app in less than a day, and full launch typically happens within 3 business days."
    },
    {
      question: "Is the platform easy for my trainers to learn and use?",
      answer: "Absolutely. The BeFitter platform is designed with a focus on user experience. Most trainers become comfortable with the core features in just 1-2 hours. We also provide comprehensive documentation, video tutorials, and optional live training sessions to ensure your team gets up to speed quickly."
    },
    {
      question: "What kind of support do you offer?",
      answer: "All plans include email support with a 24-hour response time. Our Growth Pro and Enterprise plans also include priority chat support and dedicated account managers. We offer onboarding assistance, regular check-ins, and technical support whenever you need it."
    },
    {
      question: "Is member data secure and private?",
      answer: "Yes, data security is our top priority. We use bank-level encryption for all data transmissions, comply with GDPR and other privacy regulations, and never share or sell your members' data. Your gym owns 100% of your data, and we provide easy export options."
    },
    {
      question: "Can I integrate this with my existing gym management software?",
      answer: "BeFitter offers integrations with popular gym management platforms like Mindbody, Glofox, and Wodify. For custom integrations with other systems, our Enterprise plan includes API access and integration support. Contact us to discuss your specific integration needs."
    },
    {
      question: "What are the setup costs? Are there hidden fees?",
      answer: "We believe in transparent pricing. There are no hidden fees or surprise charges. Setup is included in all plans, and we only charge for optional services like custom development or premium integrations, which we'll always quote upfront."
    },
    {
      question: "Can I customize the exercise library?",
      answer: "Yes! While we provide an extensive library of exercises with professional demonstrations, you can also upload your own custom exercises with videos and instructions. This is perfect for gyms with unique training methodologies or proprietary movements."
    }
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
            Have Questions? We've Got Answers.
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Get the information you need to make the right decision for your gym.
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
            <a href="#demo" className="text-[#007BFF] font-semibold hover:underline">
              Contact our team
            </a>{" "}
            for personalized assistance.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
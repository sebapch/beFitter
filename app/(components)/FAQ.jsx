"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqItems = [ // No se necesita cambiar texto aquí
    { question: "How does the white-labeling process work? How long does it take?", answer: "White-labeling is simple and fast. Upload your logo, choose your brand colors, and customize key UI elements. We'll handle the rest. Most gyms can set up their branded app in less than a day, and full launch typically happens within 3 business days." },
    { question: "Is the platform easy for my trainers to learn and use?", answer: "Absolutely. The BeFitter platform is designed with a focus on user experience. Most trainers become comfortable with the core features in just 1-2 hours. We also provide comprehensive documentation, video tutorials, and optional live training sessions to ensure your team gets up to speed quickly." },
    { question: "What kind of support do you offer?", answer: "All plans include email support with a 24-hour response time. Our Growth Pro and Enterprise plans also include priority chat support and dedicated account managers. We offer onboarding assistance, regular check-ins, and technical support whenever you need it." },
    { question: "Is member data secure and private?", answer: "Yes, data security is our top priority. We use bank-level encryption for all data transmissions, comply with relevant privacy regulations, and never share or sell your members' data. Your gym owns 100% of your data." },
    { question: "Can I integrate this with my existing gym management software?", answer: "BeFitter offers integrations with popular gym management platforms. For custom integrations with other systems, our Enterprise plan includes API access and integration support. Contact us to discuss your specific integration needs." },
    { question: "What are the setup costs? Are there hidden fees?", answer: "We believe in transparent pricing. There are no hidden fees or surprise charges. Setup is included in all plans, and we only charge for optional services like custom development or premium integrations, which we'll always quote upfront." },
    { question: "Can I customize the exercise library?", answer: "Yes! While we provide an extensive library of exercises with professional demonstrations, you can also upload your own custom exercises with videos and instructions. This is perfect for gyms with unique training methodologies or proprietary movements." }
  ];

  const containerVariants = { /* ... */ };
  const itemVariants = { /* ... */ };

  const currentBgColor = "bg-slate-900";

  return (
    <section className={`${currentBgColor} py-16 md:py-24 text-white`} id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Título Sección (Adaptado) --- */}
        <motion.div /* ... */ className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            Have Questions? We've Got Answers.
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg">
            Get the information you need to make the right decision for your gym.
          </p>
          <div className="w-20 h-1 bg-[#007BFF] mx-auto mt-6"></div>
        </motion.div>

        {/* --- Lista de FAQ (Adaptado) --- */}
        <motion.div /* ... */ className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              // Item adaptado a dark mode
              className="bg-slate-800 rounded-lg shadow-md overflow-hidden border border-slate-700"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left focus:outline-none flex justify-between items-center transition-colors hover:bg-slate-700/50"
              >
                <span className="font-semibold text-slate-100">{item.question}</span>
                <span className="ml-4 flex-shrink-0"> {/* Added ml-4 for spacing */}
                  <motion.div
                     animate={{ rotate: openItem === index ? 180 : 0 }}
                     transition={{ duration: 0.3 }}
                  >
                  {openItem === index ? (
                    <svg className="w-5 h-5 text-[#007BFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /> {/* Up arrow */}
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /> {/* Down arrow */}
                    </svg>
                  )}
                  </motion.div>
                </span>
              </button>
              <AnimatePresence>
                {openItem === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden" // Needed for smooth height animation
                  >
                    {/* Respuesta adaptada */}
                    <div className="px-6 pb-5 pt-2 text-slate-300 border-t border-slate-700 text-sm leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Nota Final (Adaptado) --- */}
        <motion.div /* ... */ className="mt-12 text-center">
          <p className="text-slate-400 text-sm">
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
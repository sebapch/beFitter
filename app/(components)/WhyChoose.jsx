"use client";
import { motion } from 'framer-motion';

export const WhyChoose = () => {
  const reasons = [
    {
      id: 1,
      title: "Built for Gyms, By Experts",
      description: "Unlike generic fitness apps, our platform is designed with the specific needs and workflows of gym owners and trainers in mind.",
      icon: ( <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /> </svg> )
    },
    {
      id: 2,
      title: "Your Brand, Front & Center",
      description: "True white-labeling means your gym gets the credit and builds the brand loyalty.",
      icon: ( <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /> </svg> )
    },
    {
      id: 3,
      title: "Adaptive Plans = Better Results", // Cambiado
      description: "Our adaptive personalization system goes beyond templates, creating truly dynamic plans that drive superior member outcomes.", // Cambiado
      icon: ( <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /> </svg> )
    },
    {
      id: 4,
      title: "Increase Revenue Streams",
      description: "Offer premium digital coaching tiers, attract new tech-savvy members, and improve overall retention rates.",
      icon: ( <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg> )
    },
    {
      id: 5,
      title: "Simple Setup, Powerful Impact",
      description: "Get your branded app up and running quickly with our easy onboarding process and dedicated support.",
      icon: ( <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /> </svg> )
    }
  ];

  const containerVariants = { /* ... */ };
  const itemVariants = { /* ... */ };

  const currentBgColor = "bg-slate-800"; // Fondo ligeramente diferente

  return (
    <section className={`${currentBgColor} py-16 md:py-24 text-white`} id="why-choose">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Título Sección (Adaptado) --- */}
        <motion.div /* ... */ className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            The Smartest Investment for Your Gym's Future
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg">
            See why forward-thinking gym owners choose BeFitter to transform their member experience.
          </p>
          <div className="w-20 h-1 bg-[#007BFF] mx-auto mt-6"></div>
        </motion.div>

        {/* --- Grid de Razones (Adaptado) --- */}
        <motion.div /* ... */ className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <motion.div
              key={reason.id}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              // Tarjeta adaptada a dark mode
              className="bg-slate-700 rounded-lg shadow-lg p-8 border border-slate-600"
            >
              <div className="text-[#007BFF] mb-5">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-3">{reason.title}</h3>
              <p className="text-slate-300">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* --- CTA Box (Adaptado) --- */}
        <motion.div /* ... */ className="mt-16 p-8 bg-[#007BFF] text-white rounded-xl shadow-lg relative overflow-hidden">
          {/* Elementos decorativos mantenidos */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/50 rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/50 rounded-full translate-y-32 -translate-x-32 opacity-50"></div>

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="mb-6 lg:mb-0 lg:mr-8">
                <h3 className="text-2xl font-bold mb-3">Ready to Stand Out From the Competition?</h3>
                <p className="text-blue-100 text-lg">
                  Join forward-thinking gym owners who are elevating their member experience with BeFitter.
                </p>
              </div>
              <motion.div /* ... */ className="flex-shrink-0">
                {/* Botón adaptado (ya estaba bien para este fondo) */}
                <a href="#demo" className="inline-block px-8 py-4 bg-white text-[#007BFF] font-bold rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300">
                  Schedule Your Demo Today
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

export const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 1,
      title: "Dynamic Personalization", // Cambiado
      description: "Our platform crafts adaptive training & nutrition plans based on individual goals, experience levels, available gym equipment, and real-time progress.", // Cambiado
      benefit: "Skyrocket Member Results & Retention. Deliver truly bespoke fitness journeys that keep members motivated, achieving goals faster, and staying loyal to your gym.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Ícono representativo de 'ajuste' o 'personalización' podría ser mejor */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    // ... (resto de las features sin cambios en el texto, ya no mencionaban IA)
    {
      id: 2,
      title: "Comprehensive Exercise Library",
      description: "Extensive library with high-quality video demonstrations and clear instructions for hundreds of exercises. Customizable to feature your gym's specific equipment or training style.",
      benefit: "Ensure Quality & Consistency. Empower trainers with vetted resources and guarantee members perform exercises correctly and safely, enhancing your gym's reputation.",
      icon: ( <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /> </svg> ),
    },
    {
      id: 3,
      title: "White-Label Branding",
      description: "Fully customize the app with your gym's logo, colors, and branding elements. It looks and feels like your proprietary technology.",
      benefit: "Strengthen Your Brand Identity. Position your gym as innovative and tech-savvy. Increase brand visibility every time a member opens the app.",
      icon: ( <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /> </svg> ),
    },
    {
      id: 4,
      title: "Trainer Management Dashboard",
      description: "Centralized hub for trainers to manage their client roster, design/assign plans, monitor progress, and provide feedback efficiently.",
      benefit: "Boost Trainer Productivity & Scalability. Allow trainers to manage more clients effectively, reduce administrative work, and focus on high-value coaching interactions.",
      icon: ( <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /> </svg> ),
    },
    {
      id: 5,
      title: "Smart Nutrition Tracking",
      description: "Integrated food logging, calorie/macro tracking, and potentially recipe suggestions tailored to your members' goals.",
      benefit: "Offer Holistic Wellness Solutions. Add significant value beyond just workouts, positioning your gym as a comprehensive health partner and potentially creating upsell opportunities.",
      icon: ( <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.636 18.364a9 9 0 1112.728 0M12 3v9" /> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 21h.01M9 21h.01M12 17a4 4 0 100-8 4 4 0 000 8z"/> </svg> ),
    },
    {
      id: 6,
      title: "Progress Monitoring & Reporting",
      description: "Members and trainers can easily track workouts completed, weight lifted, measurements, photos, and other key metrics. Visual charts and summaries.",
      benefit: "Demonstrate Value & Drive Motivation. Tangible proof of progress keeps members engaged and showcases the effectiveness of your gym's programs.",
      icon: ( <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /> </svg> ),
    },
  ];

  const containerVariants = { /* ... variants sin cambios ... */ };
  const itemVariants = { /* ... variants sin cambios ... */ };

  const currentBgColor = "bg-slate-900";

  return (
    <section className={`${currentBgColor} py-16 md:py-24 text-white`} id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Título de la Sección (Adaptado) --- */}
        <motion.div /* ... animaciones y clases ... */ className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            Features Built for Gym Growth & Member Loyalty
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg">
            Empower your gym with advanced technology that drives results and enhances member experience.
          </p>
          <div className="w-20 h-1 bg-[#007BFF] mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* --- Menú de Navegación (Adaptado) --- */}
          <motion.div /* ... animaciones y clases ... */ className="lg:col-span-4">
            <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg border border-slate-700">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  variants={itemVariants}
                  onClick={() => setActiveFeature(index)}
                  className={`p-4 cursor-pointer transition-all duration-300 flex items-center border-l-4 ${
                    activeFeature === index ? "bg-slate-700 border-[#007BFF] shadow-inner" : "border-transparent hover:bg-slate-700/50 hover:border-slate-600"
                  }`}
                >
                  <div className={`text-[#007BFF] mr-3 transition-opacity duration-300 flex-shrink-0 ${activeFeature === index ? "opacity-100" : "opacity-60 hover:opacity-80"}`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className={`font-semibold text-base md:text-lg transition-colors duration-300 ${
                      activeFeature === index ? "text-[#007BFF]" : "text-slate-200 hover:text-slate-100"
                    }`}>
                      {feature.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* --- Detalle de la Feature (Adaptado) --- */}
          <motion.div /* ... animaciones y clases ... */ key={activeFeature} className="lg:col-span-8">
            <div className="bg-slate-800 rounded-xl shadow-xl overflow-hidden border border-slate-700 h-full flex flex-col">
              <div className="bg-gradient-to-r from-[#007BFF] to-blue-600 p-5 md:p-6 text-white flex-shrink-0">
                <h3 className="text-xl md:text-2xl font-bold">{features[activeFeature].title}</h3>
              </div>
              <div className="p-5 md:p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-slate-100 mb-2">Description</h4>
                    <p className="text-slate-300 leading-relaxed">{features[activeFeature].description}</p>
                  </div>
                  <div className="bg-slate-700 p-4 rounded-lg border border-slate-600 shadow-inner">
                    <h4 className="text-lg font-semibold text-blue-300 mb-2">Gym Benefit</h4>
                    <p className="text-slate-300 leading-relaxed">{features[activeFeature].benefit}</p>
                  </div>
                </div>
                <div className="mt-8 flex justify-center flex-shrink-0">
                   <div className="w-full md:w-3/4 h-40 md:h-48 bg-slate-700 rounded-lg flex items-center justify-center relative overflow-hidden border border-slate-600">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                      <div className="text-6xl md:text-7xl text-[#007BFF] opacity-10 transform scale-150">
                        {features[activeFeature].icon}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-slate-800/70 to-transparent bottom-0 h-2/3"></div>
                    <div className="relative z-10 text-center px-4">
                      <p className="text-slate-400 font-medium text-sm md:text-base">
                        Feature visualization placeholder
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
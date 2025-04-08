'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 1,
      title: "Professional Workout Plans",
      description: "Receive customized training plans that adapt to your progress, preferences, and available equipment. We ensure the perfect match for your goals.",
      benefit: "Skip the guesswork. Get an optimized plan that maximizes your results.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Video Exercise Library",
      description: "Access our extensive library with high-quality video demonstrations and clear instructions for hundreds of exercises.",
      benefit: "Perform every exercise with proper form, reducing injury risk and ensuring effectiveness.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Personalized Nutrition",
      description: "Get tailored meal plans and nutrition advice based on your dietary preferences, restrictions, and goals.",
      benefit: "Take the confusion out of nutrition with easy-to-follow plans that support your goals.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Progress Tracking",
      description: "Monitor your improvements with detailed analytics and visual charts. Track workouts, measurements, and more.",
      benefit: "Stay motivated by seeing your progress visually and optimize your journey.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features to Fuel Your Success
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Everything you need to achieve your fitness goals, simplified.
          </p>
          <div className="w-20 h-1 bg-[#007BFF] mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-4"
          >
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm border border-gray-200">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  variants={itemVariants}
                  onClick={() => setActiveFeature(index)}
                  className={`p-4 sm:p-5 cursor-pointer transition-colors duration-200 flex items-center border-l-4 ${
                    activeFeature === index
                      ? "bg-white border-[#007BFF]"
                      : "border-transparent hover:bg-gray-100"
                  } ${index !== features.length -1 ? 'border-b border-gray-200' : ''}`}
                >
                  <div className={`text-[#007BFF] mr-4 flex-shrink-0 ${activeFeature === index ? "opacity-100" : "opacity-60"}`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className={`font-semibold text-base sm:text-lg ${
                      activeFeature === index ? "text-[#007BFF]" : "text-gray-800"
                    }`}>
                      {feature.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
            key={activeFeature}
            className="lg:col-span-8"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 flex flex-col">
              <div className="bg-gradient-to-r from-[#007BFF] to-blue-600 p-5 sm:p-6 text-white">
                <h3 className="text-xl sm:text-2xl font-bold">{features[activeFeature].title}</h3>
              </div>
              <div className="p-5 sm:p-6 flex-grow">
                <div className="mb-5 sm:mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Description</h4>
                  <p className="text-gray-600 text-sm sm:text-base">{features[activeFeature].description}</p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 sm:p-5 rounded-lg border-l-4 border-blue-300 shadow-sm">
                   <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                          <h4 className="text-base sm:text-lg font-semibold text-blue-800 mb-1">Your Benefit</h4>
                          <p className="text-blue-700 text-sm sm:text-base font-medium">{features[activeFeature].benefit}</p>
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
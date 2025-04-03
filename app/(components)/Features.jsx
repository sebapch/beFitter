'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 1,
      title: "AI-Powered Workout Plans",
      description: "Receive customized training plans that adapt to your progress, preferences, and available equipment. Our AI analyzes thousands of exercises to find the perfect match for your goals.",
      benefit: "Skip the guesswork and trial-and-error. Get a scientifically optimized plan that maximizes your results while minimizing your time investment.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Video Exercise Library",
      description: "Access our extensive library with high-quality video demonstrations and clear instructions for hundreds of exercises. Never wonder if you're doing an exercise correctly again.",
      benefit: "Perform every exercise with proper form, reducing injury risk and ensuring you get the maximum benefit from each movement.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Personalized Nutrition",
      description: "Get tailored meal plans and nutrition advice based on your dietary preferences, restrictions, and goals. Track your food intake easily with our scanner and database of thousands of foods.",
      benefit: "Take the confusion out of nutrition with easy-to-follow meal plans that support your fitness goals while still enjoying foods you love.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Progress Tracking",
      description: "Monitor your improvements with detailed analytics and visual charts. Track workouts, measurements, weight lifted, and more to see your progress over time.",
      benefit: "Stay motivated by seeing your progress visually. Identify what's working and what's not to continuously optimize your fitness journey.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Community Support",
      description: "Join a supportive community of like-minded individuals on similar fitness journeys. Share achievements, ask questions, and get motivation when you need it most.",
      benefit: "Stay accountable and motivated with peer support. Users with social connections are 80% more likely to stick to their fitness programs long-term.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Habit Building Tools",
      description: "Develop lasting fitness habits with reminders, streaks, and rewards that keep you consistent. Build a sustainable routine that fits into your life.",
      benefit: "Transform from sporadic exerciser to consistent fitness enthusiast with psychological tools designed to build lasting habits.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features to Transform Your Fitness Journey
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            BeFitter combines cutting-edge technology with proven fitness science to deliver an unmatched experience.
          </p>
          <div className="w-20 h-1 bg-[#007BFF] mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Feature Navigation Menu */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-4"
          >
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  variants={itemVariants}
                  onClick={() => setActiveFeature(index)}
                  className={`p-4 cursor-pointer transition-colors duration-300 flex items-center border-l-4 ${
                    activeFeature === index
                      ? "bg-white border-[#007BFF] shadow-sm"
                      : "border-transparent hover:bg-gray-100"
                  }`}
                >
                  <div className={`text-[#007BFF] mr-3 ${activeFeature === index ? "opacity-100" : "opacity-50"}`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className={`font-semibold text-lg ${
                      activeFeature === index ? "text-[#007BFF]" : "text-gray-700"
                    }`}>
                      {feature.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Feature Detail */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            key={activeFeature}
            className="lg:col-span-8"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 h-full">
              <div className="bg-gradient-to-r from-[#007BFF] to-blue-600 p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">{features[activeFeature].title}</h3>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Description</h4>
                  <p className="text-gray-600">{features[activeFeature].description}</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Your Benefit</h4>
                  <p className="text-gray-700">{features[activeFeature].benefit}</p>
                </div>

                <div className="mt-6 flex justify-center">
                  <div className="w-full md:w-3/4 h-48 bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                      <div className="text-6xl text-[#007BFF] opacity-30">
                        {features[activeFeature].icon}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent bottom-0 h-24"></div>
                    <div className="relative z-10 text-center px-4">
                      <p className="text-gray-500 font-medium">
                        Feature visualization would appear here
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
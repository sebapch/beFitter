'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 1,
      title: "AI-Powered Personalization",
      description: "Our intelligent engine crafts adaptive training & nutrition plans based on individual goals, experience levels, available gym equipment, and real-time progress.",
      benefit: "Skyrocket Member Results & Retention. Deliver truly bespoke fitness journeys that keep members motivated, achieving goals faster, and staying loyal to your gym.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Comprehensive Exercise Library",
      description: "Extensive library with high-quality video demonstrations and clear instructions for hundreds of exercises. Customizable to feature your gym's specific equipment or training style.",
      benefit: "Ensure Quality & Consistency. Empower trainers with vetted resources and guarantee members perform exercises correctly and safely, enhancing your gym's reputation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "White-Label Branding",
      description: "Fully customize the app with your gym's logo, colors, and branding elements. It looks and feels like your proprietary technology.",
      benefit: "Strengthen Your Brand Identity. Position your gym as innovative and tech-savvy. Increase brand visibility every time a member opens the app.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Trainer Management Dashboard",
      description: "Centralized hub for trainers to manage their client roster, design/assign plans, monitor progress, and provide feedback efficiently.",
      benefit: "Boost Trainer Productivity & Scalability. Allow trainers to manage more clients effectively, reduce administrative work, and focus on high-value coaching interactions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Smart Nutrition Tracking",
      description: "Integrated food logging, calorie/macro tracking, and potentially recipe suggestions tailored to your members' goals.",
      benefit: "Offer Holistic Wellness Solutions. Add significant value beyond just workouts, positioning your gym as a comprehensive health partner and potentially creating upsell opportunities.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Progress Monitoring & Reporting",
      description: "Members and trainers can easily track workouts completed, weight lifted, measurements, photos, and other key metrics. Visual charts and summaries.",
      benefit: "Demonstrate Value & Drive Motivation. Tangible proof of progress keeps members engaged and showcases the effectiveness of your gym's programs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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
            Features Built for Gym Growth & Member Loyalty
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Empower your gym with cutting-edge technology that drives results and enhances member experience.
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
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Gym Benefit</h4>
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
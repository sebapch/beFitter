'use client';
import { motion } from 'framer-motion';

export const AppShowcase = () => {
  const appFeatures = [
    {
      title: "AI-Powered Workout Plans",
      description: "Customized routines that adapt to your progress, preferences, and available equipment",
      color: "bg-blue-500"
    },
    {
      title: "Smart Nutrition Guidance",
      description: "Personalized meal recommendations based on your goals, preferences, and dietary needs",
      color: "bg-green-500"
    },
    {
      title: "Progress Tracking",
      description: "Visual charts and detailed analytics to monitor your improvements over time",
      color: "bg-purple-500"
    },
    {
      title: "Video Exercise Library",
      description: "HD demonstrations and instructions for all exercises in your program",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Ultimate Fitness Experience in Your Pocket
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            BeFitter brings together everything you need to transform your body and health in one intuitive app.
          </p>
          <div className="w-20 h-1 bg-[#007BFF] mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            {/* Phone mockup */}
            <div className="relative mx-auto w-[280px] h-[570px] bg-black rounded-[36px] shadow-xl border-[8px] border-black overflow-hidden">
              {/* Phone notch */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-black z-10">
                <div className="mx-auto w-36 h-5 bg-black rounded-b-xl"></div>
              </div>
              
              {/* Screen content */}
              <div className="h-full bg-[#007BFF] pt-6 pb-4 px-4 overflow-hidden">
                <div className="h-full rounded-2xl bg-white overflow-hidden">
                  {/* App header */}
                  <div className="p-4 bg-[#007BFF] text-white flex justify-between items-center">
                    <div>
                      <h4 className="font-bold">BeFitter</h4>
                      <p className="text-xs text-blue-100">Your Daily Workout</p>
                    </div>
                    <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* App content */}
                  <div className="p-4 space-y-4">
                    <div className="rounded-lg bg-blue-50 p-3">
                      <div className="text-sm font-bold text-blue-800">Today's Workout Progress</div>
                      <div className="h-2 bg-gray-200 rounded-full mt-2">
                        <div className="h-2 bg-[#007BFF] rounded-full w-3/4"></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">3 of 4 exercises completed</div>
                    </div>
                    
                    <div className="space-y-3">
                      {appFeatures.map((feature, index) => (
                        <div key={index} className="rounded-lg bg-gray-100 p-3 relative overflow-hidden">
                          <div className={`absolute top-0 left-0 w-1 h-full ${feature.color}`}></div>
                          <div className="font-semibold">{feature.title}</div>
                          <div className="text-xs text-gray-500 mt-1">{feature.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Designed for Real People, Real Results
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
                <div className="text-[#007BFF] mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Science-Based Approach</h4>
                <p className="text-gray-600">Our AI analyzes thousands of scientific studies to create evidence-based training and nutrition plans that deliver results.</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
                <div className="text-[#007BFF] mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Adaptive Technology</h4>
                <p className="text-gray-600">Our app learns from your feedback and progress, continually refining your program for maximum effectiveness.</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
                <div className="text-[#007BFF] mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Fits Your Schedule</h4>
                <p className="text-gray-600">Whether you have 15 minutes or an hour, at home or in the gym, we create plans that work with your real life.</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
                <div className="text-[#007BFF] mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Community Support</h4>
                <p className="text-gray-600">Connect with like-minded fitness enthusiasts, share achievements, and stay motivated with our supportive community.</p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-[#007BFF]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">
                  <span className="font-semibold">BeFitter users see an average of 32% better results</span> compared to traditional fitness apps, with 86% higher adherence to their programs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a 
            href="#signup" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-md text-base font-medium text-white bg-[#007BFF] hover:bg-blue-700 transition-colors duration-300"
          >
            Try BeFitter Free for 7 Days
          </a>
          <p className="mt-3 text-sm text-gray-500">No credit card required. Cancel anytime.</p>
        </motion.div>
      </div>
    </section>
  );
};
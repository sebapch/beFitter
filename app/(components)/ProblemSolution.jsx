'use client';
import { motion } from 'framer-motion';

export const ProblemSolution = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        delay: custom * 0.1,
      }
    })
  };

  return (
    <section className="py-16 md:py-24 bg-white" id="problem-solution">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={1}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stop Member Churn & Outdated Training Methods. Start Delivering Personalized Fitness at Scale.
          </h2>
          <div className="w-20 h-1 bg-[#007BFF] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={2}
          >
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-red-500 shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">The Challenges</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-semibold">Struggling to keep members engaged long-term?</span> Generic workout sheets and lack of personalization lead to plateaus and drop-offs.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-semibold">Trainers spending too much time creating generic plans?</span> Managing multiple clients efficiently can overwhelm even the best trainers.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-semibold">Missing the modern, tech-forward edge?</span> Competitors might already be offering digital solutions, leaving you behind.
                  </p>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={3}
          >
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-[#007BFF] shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">The Solution</h3>
              <p className="text-gray-700 mb-6 italic">
                "Imagine offering every member a hyper-personalized training and nutrition plan, delivered through an app proudly displaying your gym's brand."
              </p>
              <div className="bg-white p-6 rounded-lg shadow-inner">
                <p className="text-gray-800 font-semibold mb-4">
                  Introducing <span className="text-[#007BFF] font-bold">BeFitter</span> – The intelligent, white-label fitness platform designed specifically for gyms.
                </p>
                <p className="text-gray-700">
                  We put cutting-edge AI technology in the hands of your trainers, supercharging their ability to deliver exceptional, results-driven experiences that keep members coming back.
                </p>
              </div>

              <motion.div
                className="mt-8 bg-[#007BFF] text-white p-4 rounded-lg shadow-md"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex items-center">
                  <div className="p-2 bg-blue-600 rounded-full mr-4">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="font-semibold">
                    Your Gym, Your App, Your Success
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
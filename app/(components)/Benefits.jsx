'use client';
import { motion } from 'framer-motion';

export const Benefits = () => {
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
    <section className="py-16 md:py-24 bg-white" id="benefits">
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
            Stop Guessing, Start Progressing: Your Fitness Journey, Simplified
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
                    <span className="font-semibold">Not seeing results from your workouts?</span> Generic plans and YouTube routines aren't tailored to your body, goals, or limitations.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-semibold">Struggling with consistency and motivation?</span> Without proper guidance and tracking, it's easy to fall off track and lose momentum.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-semibold">Confused about proper nutrition?</span> Contradictory advice and fad diets make it nearly impossible to know what to eat for your goals.
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
                "Imagine having a personal trainer, nutritionist, and accountability coach in your pocket, 24/7, for a fraction of the cost."
              </p>
              <div className="bg-white p-6 rounded-lg shadow-inner">
                <p className="text-gray-800 font-semibold mb-4">
                  Introducing <span className="text-[#007BFF] font-bold">BeFitter</span> – Your AI-powered fitness companion that adapts to your body, goals, and lifestyle.
                </p>
                <p className="text-gray-700">
                  Our app creates personalized workout and nutrition plans that evolve as you progress. Stay accountable, track your results, and finally achieve the fitness goals you've been chasing.
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
                    Personalized Plans, Real Results
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
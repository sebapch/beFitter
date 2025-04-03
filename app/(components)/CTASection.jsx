'use client';
import { motion } from 'framer-motion';

export const CTASection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-[#007BFF] to-blue-600 text-white" id="signup">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-500 opacity-20 rounded-full"></div>
        <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-blue-500 opacity-20 rounded-full"></div>
        
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Fitness Journey?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join thousands of satisfied users who have achieved their fitness goals with BeFitter's personalized approach.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Start Your Free 7-Day Trial</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                    <input
                      type="password"
                      id="password"
                      className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Create a secure password"
                    />
                  </div>
                  <div>
                    <label htmlFor="fitness-goal" className="block text-sm font-medium mb-1">Primary Fitness Goal</label>
                    <select
                      id="fitness-goal"
                      className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                    >
                      <option value="" className="bg-blue-600">Select your goal</option>
                      <option value="weight-loss" className="bg-blue-600">Weight Loss</option>
                      <option value="muscle-gain" className="bg-blue-600">Muscle Gain</option>
                      <option value="strength" className="bg-blue-600">Strength</option>
                      <option value="endurance" className="bg-blue-600">Endurance</option>
                      <option value="general-fitness" className="bg-blue-600">General Fitness</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="fitness-level" className="block text-sm font-medium mb-1">Current Fitness Level</label>
                  <select
                    id="fitness-level"
                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    <option value="" className="bg-blue-600">Select your level</option>
                    <option value="beginner" className="bg-blue-600">Beginner</option>
                    <option value="intermediate" className="bg-blue-600">Intermediate</option>
                    <option value="advanced" className="bg-blue-600">Advanced</option>
                  </select>
                </div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-white text-[#007BFF] font-bold rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300"
                  >
                    Start Your Free Trial
                  </button>
                </motion.div>
                <p className="text-sm text-blue-100 text-center">
                  By signing up, you agree to our <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a>. No credit card required for trial.
                </p>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-5"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 h-full">
                <h3 className="text-2xl font-bold mb-6">Why Start Today?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-blue-50">
                      Get your personalized fitness plan within minutes
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-blue-50">
                      Try all premium features free for 7 days with no commitment
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-blue-50">
                      Join a supportive community of like-minded fitness enthusiasts
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-blue-50">
                      Cancel anytime with no questions asked
                    </p>
                  </li>
                </ul>

                <div className="mt-8 p-4 bg-white/20 rounded-lg">
                  <p className="font-semibold text-center">
                    "I wish I had started sooner. BeFitter changed my life in ways I never thought possible!"
                  </p>
                  <p className="text-blue-100 text-center text-sm mt-2">
                    - Alex W., BeFitter user for 6 months
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
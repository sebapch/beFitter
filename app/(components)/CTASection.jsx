'use client';
import { motion } from 'framer-motion';

export const CTASection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-[#007BFF] to-blue-600 text-white" id="demo">
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
              Ready to Transform Your Gym's Member Experience?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Give your members the personalized, modern fitness tool they deserve, all under your trusted brand. Empower your trainers and watch your retention soar.
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
              <h3 className="text-2xl font-bold mb-6">Request Your Free Demo</h3>
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
                      placeholder="john@yourgym.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="gym-name" className="block text-sm font-medium mb-1">Gym Name</label>
                    <input
                      type="text"
                      id="gym-name"
                      className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Your Gym"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="members" className="block text-sm font-medium mb-1">Number of Members</label>
                  <select
                    id="members"
                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    <option value="" className="bg-blue-600">Select member count</option>
                    <option value="<100" className="bg-blue-600">Less than 100</option>
                    <option value="100-300" className="bg-blue-600">100 - 300</option>
                    <option value="301-500" className="bg-blue-600">301 - 500</option>
                    <option value="501-1000" className="bg-blue-600">501 - 1000</option>
                    <option value=">1000" className="bg-blue-600">More than 1000</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Additional Information (Optional)</label>
                  <textarea
                    id="message"
                    rows="3"
                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Tell us a bit about your gym and what you're looking for..."
                  ></textarea>
                </div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-white text-[#007BFF] font-bold rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300"
                  >
                    Request Your Free Demo
                  </button>
                </motion.div>
                <p className="text-sm text-blue-100 text-center">
                  By submitting, you agree to our <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a>.
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
                <h3 className="text-2xl font-bold mb-6">Why Book a Demo?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-blue-50">
                      See how BeFitter can be customized with your brand and messaging
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-blue-50">
                      Get a personalized walkthrough of features relevant to your specific gym
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-blue-50">
                      Discuss implementation strategy and timeline with our experts
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-blue-50">
                      Get all your questions answered by our product specialists
                    </p>
                  </li>
                </ul>

                <div className="mt-8 p-4 bg-white/20 rounded-lg">
                  <p className="font-semibold text-center">
                    "The demo really showed us how BeFitter could solve our specific challenges. Worth every minute!"
                  </p>
                  <p className="text-blue-100 text-center text-sm mt-2">
                    - Mike Johnson, FitLife Gym Owner
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
    
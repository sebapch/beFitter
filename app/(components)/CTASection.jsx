'use client';
import { motion } from 'framer-motion';

export const CTASection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-[#007BFF] to-blue-600 text-white" id="signup">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-500 opacity-20 rounded-full filter blur-xl"></div>
        <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-blue-500 opacity-20 rounded-full filter blur-xl"></div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Fitness Transformation?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Fill out the form below to get started or contact us directly for more information. Let's build your best self, together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"> {/* Changed to items-stretch */}
            {/* Simplified Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 flex flex-col justify-between" // Added flex utilities
            >
              <div> {/* Wrapper for form content */}
                <h3 className="text-2xl font-bold mb-6">Get Started Now</h3>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name" // Added name attribute
                        required // Added required attribute
                        className="w-full px-4 py-2.5 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50 transition duration-200"
                        placeholder="e.g. Alex Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email" // Added name attribute
                        required // Added required attribute
                        className="w-full px-4 py-2.5 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50 transition duration-200"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="fitness-goal" className="block text-sm font-medium mb-1">Primary Fitness Goal</label>
                    <select
                      id="fitness-goal"
                      name="fitness-goal" // Added name attribute
                      required // Added required attribute
                      className="w-full px-4 py-2.5 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition duration-200 appearance-none bg-no-repeat bg-right pr-8"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23bfdbfe' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.75rem center', backgroundSize: '1.2em 1.2em'}}
                    >
                      <option value="" className="bg-blue-700 text-white">Select your goal...</option>
                      <option value="weight-loss" className="bg-blue-700 text-white">Weight Loss</option>
                      <option value="muscle-gain" className="bg-blue-700 text-white">Muscle Gain</option>
                      <option value="strength" className="bg-blue-700 text-white">Strength</option>
                      <option value="endurance" className="bg-blue-700 text-white">Endurance</option>
                      <option value="general-fitness" className="bg-blue-700 text-white">General Fitness</option>
                    </select>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="pt-2" // Added padding top
                  >
                    <button
                      type="submit"
                      className="w-full py-3 px-6 bg-white text-[#007BFF] font-bold rounded-lg shadow-md hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-500 focus-visible:ring-white transition-all duration-300"
                    >
                      Send My Information
                    </button>
                  </motion.div>
                </form>
               </div> {/* End form content wrapper */}
               <div> {/* Wrapper for policy text */}
                <p className="text-xs text-blue-100 text-center mt-5">
                  By submitting, you agree to our <a href="#" className="underline hover:text-white">Privacy Policy</a> and <a href="#" className="underline hover:text-white">Terms of Service</a>.
                </p>
               </div>
            </motion.div>

            {/* Contact Information Panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-5"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 h-full flex flex-col justify-center"> {/* Added flex utilities */}
                <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Have Questions? Get in Touch</h3>
                <div className="space-y-5">
                  {/* Email Contact */}
                  <div className="flex items-center bg-white/20 p-4 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-sm text-blue-100 mb-0.5">Email Us</p>
                      <a href="mailto:your.email@example.com" className="font-semibold text-white hover:text-blue-200 transition-colors">
                        your.email@example.com {/* Replace with your actual email */}
                      </a>
                    </div>
                  </div>

                  {/* Phone Contact */}
                  <div className="flex items-center bg-white/20 p-4 rounded-lg">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                       <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                     </svg>
                     <div>
                      <p className="text-sm text-blue-100 mb-0.5">Call Us</p>
                      <a href="tel:+1234567890" className="font-semibold text-white hover:text-blue-200 transition-colors">
                        +1 (234) 567-890 {/* Replace with your actual phone number */}
                      </a>
                    </div>
                  </div>
                </div>
                 <p className="text-center text-blue-100 mt-6 text-sm">
                    We typically respond within 24 business hours.
                 </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
'use client';
import { motion } from 'framer-motion';

export const CTASection = () => {
  // Handle form submission logic here (e.g., send to API route, Netlify Forms, etc.)
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic
    console.log("Form submitted!");
    alert("Thank you! We'll be in touch soon."); // Placeholder alert
    // Consider resetting the form: event.target.reset();
  };

  return (
    // --- Dark Mode Changes Start Here ---
    // Dark gradient background, adjust text color base
    <section className="py-16 md:py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-300" id="signup">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative elements - Adjusted for dark background */}
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-600 opacity-10 rounded-full filter blur-2xl"></div>
        <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-blue-600 opacity-10 rounded-full filter blur-2xl"></div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            {/* Brighter heading and adjusted paragraph color */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Fitness Transformation?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Fill out the form below to get started or contact us directly for more information. Let's build your best self, together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Form Panel - Dark Theme */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              // Use solid dark background with border instead of transparency
              className="lg:col-span-7 bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-700 shadow-lg flex flex-col justify-between"
            >
              <div> {/* Wrapper for form content */}
                <h3 className="text-2xl font-bold text-white mb-6">Get Started Now</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        // Dark input styling
                        className="w-full px-4 py-2.5 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF] transition duration-200"
                        placeholder="e.g. Alex Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        // Dark input styling
                        className="w-full px-4 py-2.5 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF] transition duration-200"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="fitness-goal" className="block text-sm font-medium text-gray-300 mb-1">Primary Fitness Goal</label>
                    <select
                      id="fitness-goal"
                      name="fitness-goal"
                      required
                       // Dark select styling
                      className="w-full px-4 py-2.5 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF] transition duration-200 appearance-none bg-no-repeat bg-right pr-8"
                       // Updated SVG arrow color for dark mode (using gray-400 hex #9ca3af)
                      style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.75rem center', backgroundSize: '1.2em 1.2em'}}
                    >
                       {/* Dark option styling */}
                      <option value="" className="bg-gray-800 text-white">Select your goal...</option>
                      <option value="weight-loss" className="bg-gray-800 text-white">Weight Loss</option>
                      <option value="muscle-gain" className="bg-gray-800 text-white">Muscle Gain</option>
                      <option value="strength" className="bg-gray-800 text-white">Strength</option>
                      <option value="endurance" className="bg-gray-800 text-white">Endurance</option>
                      <option value="general-fitness" className="bg-gray-800 text-white">General Fitness</option>
                    </select>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="pt-2"
                  >
                     {/* Dark theme submit button */}
                    <button
                      type="submit"
                      className="w-full py-3 px-6 bg-[#007BFF] text-white font-bold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800 focus-visible:ring-[#007BFF] transition-all duration-300"
                    >
                      Send My Information
                    </button>
                  </motion.div>
                </form>
               </div> {/* End form content wrapper */}
               <div> {/* Wrapper for policy text */}
                 {/* Dark theme policy text */}
                <p className="text-xs text-gray-400 text-center mt-5">
                  By submitting, you agree to our <a href="#" className="underline hover:text-white">Privacy Policy</a> and <a href="#" className="underline hover:text-white">Terms of Service</a>.
                </p>
               </div>
            </motion.div>

            {/* Contact Information Panel - Dark Theme */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-5"
            >
               {/* Use solid dark background with border */}
              <div className="bg-gray-800 rounded-xl p-6 md:p-8 h-full border border-gray-700 shadow-lg flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-6 text-center md:text-left">Have Questions? Get in Touch</h3>
                <div className="space-y-5">
                  {/* Email Contact - Dark Theme */}
                  <div className="flex items-center bg-gray-700/50 p-4 rounded-lg border border-gray-600">
                     {/* Adjusted icon color */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                       {/* Adjusted text colors */}
                      <p className="text-sm text-gray-400 mb-0.5">Email Us</p>
                      <a href="mailto:info@befitter.app" /* Replace with actual email */ className="font-semibold text-white hover:text-blue-300 transition-colors break-all">
                        info@befitter.app
                      </a>
                    </div>
                  </div>

                  {/* Phone Contact - Dark Theme */}
                  <div className="flex items-center bg-gray-700/50 p-4 rounded-lg border border-gray-600">
                      {/* Adjusted icon color */}
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                       <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                     </svg>
                     <div>
                       {/* Adjusted text colors */}
                      <p className="text-sm text-gray-400 mb-0.5">Call Us</p>
                      <a href="tel:+1234567890" /* Replace with actual phone */ className="font-semibold text-white hover:text-blue-300 transition-colors break-all">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                </div>
                 {/* Adjusted text color */}
                 <p className="text-center text-gray-400 mt-6 text-sm">
                    We typically respond within 24 business hours.
                 </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    // --- Dark Mode Changes End Here ---
  );
};
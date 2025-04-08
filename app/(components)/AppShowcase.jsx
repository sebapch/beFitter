'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const AppShowcase = () => {
  // Feature data - no changes needed here
  const appFeatures = [
    // ... (same as before)
  ];

  return (
    // --- Dark Mode Changes Start Here ---
    <section className="py-16 md:py-24 bg-gray-800 text-gray-300" id="features"> {/* Dark background, lighter base text */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
           {/* Brighter heading text */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Ultimate Fitness Experience in Your Pocket
          </h2>
           {/* Lighter paragraph text */}
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            BeFitter brings together everything you need to transform your body and health in one intuitive app.
          </p>
           {/* Accent line color remains the same */}
          <div className="w-20 h-1 bg-[#007BFF] mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
             {/* **Image Framing Container** */}
            <div className="bg-gray-700 p-3 rounded-xl shadow-lg border border-gray-600 inline-block">
              <Image
                src="/captura4.png"
                alt="App Showcase"
                // Ensure the Image component itself doesn't add extra styles that interfere
                className="rounded-md" // Optional: round the image corners slightly if needed
                width={500} // Adjust width/height as needed for container
                height={500} // Adjust width/height as needed for container
              />
            </div>
             {/* End Image Framing Container */}
          </motion.div>

          {/* Text/Features Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
             {/* Brighter heading text */}
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Designed for Real People, Real Results
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Feature Card 1 */}
              <div className="bg-gray-700 p-5 rounded-lg shadow-md border border-gray-600"> {/* Dark card bg, dark border */}
                <div className="text-[#007BFF] mb-3"> {/* Icon color remains */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                 {/* Brighter title text */}
                <h4 className="text-lg font-bold text-white mb-2">Expert-Based Approach</h4>
                 {/* Lighter paragraph text */}
                <p className="text-gray-400">Our team creates evidence-based training and nutrition plans that deliver results based on professional expertise.</p>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-gray-700 p-5 rounded-lg shadow-md border border-gray-600"> {/* Dark card bg, dark border */}
                <div className="text-[#007BFF] mb-3"> {/* Icon color remains */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Adaptive Technology</h4>
                <p className="text-gray-400">Our app learns from your feedback and progress, continually refining your program for maximum effectiveness.</p>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-gray-700 p-5 rounded-lg shadow-md border border-gray-600"> {/* Dark card bg, dark border */}
                 <div className="text-[#007BFF] mb-3"> {/* Icon color remains */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                <h4 className="text-lg font-bold text-white mb-2">Fits Your Schedule</h4>
                <p className="text-gray-400">Whether you have 15 minutes or an hour, at home or in the gym, we create plans that work with your real life.</p>
              </div>

              {/* Feature Card 4 */}
              <div className="bg-gray-700 p-5 rounded-lg shadow-md border border-gray-600"> {/* Dark card bg, dark border */}
                <div className="text-[#007BFF] mb-3"> {/* Icon color remains */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Community Support</h4>
                <p className="text-gray-400">Connect with like-minded fitness enthusiasts, share achievements, and stay motivated with our supportive community.</p>
              </div>
            </div>

            {/* Callout Box */}
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700"> {/* Darker background, darker border */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                   {/* Icon color remains */}
                  <svg className="h-5 w-5 text-[#007BFF]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                 {/* Lighter text */}
                <p className="ml-3 text-gray-300">
                  <span className="font-semibold text-gray-100">BeFitter users see an average of 32% better results</span> compared to traditional fitness apps, with 86% higher adherence to their programs. {/* Adjusted emphasis text color */}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
           {/* Button style remains the same, good contrast */}
          <a
            href="#signup"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-md text-base font-medium text-white bg-[#007BFF] hover:bg-blue-600 transition-colors duration-300" // Slightly adjusted hover
          >
            Get Started with BeFitter
          </a>
           {/* Lighter small text */}
          <p className="mt-3 text-sm text-gray-500">Standard and VIP plans available. Cancel anytime.</p>
        </motion.div>
      </div>
    </section>
     // --- Dark Mode Changes End Here ---
  );
};
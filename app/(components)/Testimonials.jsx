'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image'; // Import Image if you plan to use actual images later

export const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "I've tried dozens of fitness apps but BeFitter is the first one that actually understands my body and goals. I've lost 28 pounds in 3 months following their personalized plan!",
      author: "Sarah M.",
      age: "34",
      achievement: "Lost 28 lbs",
      image: "/placeholder-sarah.jpg" // Replace with actual image path
    },
    {
      id: 2,
      quote: "As a busy parent with limited time, BeFitter has been a game-changer. The 20-minute workouts fit my schedule, and I've gained strength I never thought possible.",
      author: "Michael T.",
      age: "41",
      achievement: "Gained muscle mass",
      image: "/placeholder-michael.jpg" // Replace with actual image path
    },
    {
      id: 3,
      quote: "The nutrition guidance changed everything for me. I finally understand what to eat for my goals, and the meal plans are actually delicious and easy to prepare!",
      author: "Jasmine K.",
      age: "29",
      achievement: "Improved energy levels",
      image: "/placeholder-jasmine.jpg" // Replace with actual image path
    }
  ];

  // Framer Motion variants for the testimonial content swap
  const testimonialVariants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 50 : -50, // Slide in from right or left
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 50 : -50, // Slide out to right or left
        opacity: 0,
      };
    },
  };

  // Basic pagination logic (optional enhancement)
  const paginate = (newDirection) => {
    let newIndex = activeTestimonial + newDirection;
    if (newIndex < 0) {
      newIndex = testimonials.length - 1;
    } else if (newIndex >= testimonials.length) {
      newIndex = 0;
    }
    setActiveTestimonial(newIndex);
  };


  return (
    // --- Dark Mode Changes Start Here ---
    // Use a subtle gradient for the background variation
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black text-gray-300" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
           {/* Brighter heading/text */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Real People, Real Transformations
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            See how BeFitter has helped thousands of people just like you achieve their fitness goals.
          </p>
           {/* Accent line remains */}
          <div className="w-20 h-1 bg-[#007BFF] mx-auto mt-6"></div>
        </motion.div>

        <div className="relative">
           {/* AnimatePresence is needed for exit animations */}
           <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={activeTestimonial} // Key change triggers animation
              custom={1} // You might pass direction here if needed for variants
              variants={testimonialVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 }
              }}
               // Dark card background, add border for definition
              className="bg-gray-800 rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto relative z-10 border border-gray-700"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                 {/* Image Placeholder Area */}
                <div className="md:w-1/3 flex justify-center md:justify-start">
                   {/* Darker placeholder background, adjusted icon color */}
                  <div className="w-32 h-32 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden border-4 border-[#007BFF] shadow-md">
                     {/* Placeholder Icon - Replace with Image component when ready */}
                     {/* Example using Image (comment out the SVG below if using): */}
                     {/* <Image
                        src={testimonials[activeTestimonial].image}
                        alt={testimonials[activeTestimonial].author}
                        width={128}
                        height={128}
                        className="object-cover w-full h-full"
                     /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                 {/* Text Content */}
                <div className="md:w-2/3 text-center md:text-left">
                   {/* Quote icon remains, slightly less opaque */}
                  <svg className="h-10 w-10 text-[#007BFF] mb-4 opacity-40 inline-block md:block" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                   {/* Lighter quote text */}
                  <p className="text-gray-300 text-lg md:text-xl italic mb-6">
                    "{testimonials[activeTestimonial].quote}"
                  </p>
                  <div className="mt-4">
                     {/* Lighter author text */}
                    <p className="font-bold text-white">
                      {testimonials[activeTestimonial].author}, {testimonials[activeTestimonial].age}
                    </p>
                     {/* Achievement text remains accent color */}
                    <p className="text-[#007BFF] font-semibold mt-1">
                      {testimonials[activeTestimonial].achievement}
                    </p>
                  </div>
                </div>
              </div>

              {/* Optional: Arrow navigation - uncomment and style if desired
              <button onClick={() => paginate(-1)} className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-gray-700 text-white p-2 rounded-full z-20 hover:bg-gray-600">Prev</button>
              <button onClick={() => paginate(1)} className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-gray-700 text-white p-2 rounded-full z-20 hover:bg-gray-600">Next</button>
              */}

              {/* Card Tail - matches the card background */}
              {/* Removed the tail - often cleaner without it, especially with borders */}
              {/* <div className="absolute -bottom-3 right-10 transform rotate-45 w-6 h-6 bg-gray-800"></div> */}
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots - Dark theme adjustments */}
          <div className="flex justify-center mt-10 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                aria-label={`Go to testimonial ${index + 1}`}
                onClick={() => setActiveTestimonial(index)}
                 // Darker inactive dots, brighter hover
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ease-in-out ${
                  activeTestimonial === index ? "bg-[#007BFF] scale-125" : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          {/* Bottom Callout Box - Dark theme */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
             {/* Consistent dark background, adjusted text */}
            <div className="bg-gray-800 border border-gray-700 p-4 md:p-6 rounded-lg inline-block max-w-2xl shadow-md">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-[#007BFF]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                 {/* Lighter text */}
                <p className="ml-3 text-gray-300 text-left">
                  <span className="font-semibold text-gray-100">93% of BeFitter users report seeing visible results within the first 30 days</span> of following their personalized fitness plan.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
     // --- Dark Mode Changes End Here ---
  );
};
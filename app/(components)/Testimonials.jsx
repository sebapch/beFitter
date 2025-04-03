'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "I've tried dozens of fitness apps but BeFitter is the first one that actually understands my body and goals. I've lost 28 pounds in 3 months following their personalized plan!",
      author: "Sarah M.",
      age: "34",
      achievement: "Lost 28 lbs",
      image: "/placeholder.jpg" // Replace with actual image path when available
    },
    {
      id: 2,
      quote: "As a busy parent with limited time, BeFitter has been a game-changer. The 20-minute workouts fit my schedule, and I've gained strength I never thought possible.",
      author: "Michael T.",
      age: "41",
      achievement: "Gained muscle mass",
      image: "/placeholder.jpg" // Replace with actual image path when available
    },
    {
      id: 3,
      quote: "The nutrition guidance changed everything for me. I finally understand what to eat for my goals, and the meal plans are actually delicious and easy to prepare!",
      author: "Jasmine K.",
      age: "29",
      achievement: "Improved energy levels",
      image: "/placeholder.jpg" // Replace with actual image path when available
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real People, Real Transformations
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            See how BeFitter has helped thousands of people just like you achieve their fitness goals.
          </p>
          <div className="w-20 h-1 bg-[#007BFF] mx-auto mt-6"></div>
        </motion.div>

        <div className="relative">
          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto relative z-10"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-4 border-[#007BFF]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="md:w-2/3">
                <svg className="h-10 w-10 text-[#007BFF] mb-4 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-700 text-lg md:text-xl mb-6">
                  {testimonials[activeTestimonial].quote}
                </p>
                <div>
                  <p className="font-bold text-gray-900">
                    {testimonials[activeTestimonial].author}, {testimonials[activeTestimonial].age}
                  </p>
                  <p className="text-[#007BFF] font-semibold">
                    {testimonials[activeTestimonial].achievement}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-3 right-10 transform rotate-45 w-6 h-6 bg-white"></div>
          </motion.div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-10 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  activeTestimonial === index ? "bg-[#007BFF]" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="bg-blue-50 p-4 md:p-6 rounded-lg inline-block max-w-2xl">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-[#007BFF]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">
                  <span className="font-semibold">93% of BeFitter users report seeing visible results within the first 30 days</span> of following their personalized fitness plan.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
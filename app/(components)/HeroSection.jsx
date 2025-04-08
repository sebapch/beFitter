"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#007BFF] to-blue-600 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Personal Fitness Coach, Available 24/7
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Achieve your fitness goals faster with personalized workouts,
              nutrition plans, and progress tracking all in one app.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#signup"
                  className="inline-flex justify-center items-center px-8 py-3 border border-transparent rounded-md shadow-lg text-lg font-medium text-[#007BFF] bg-white hover:bg-gray-100 w-full sm:w-auto"
                >
                  Get Started
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#features"
                  className="inline-flex justify-center items-center px-8 py-3 border border-white rounded-md shadow-sm text-lg font-medium text-white hover:bg-blue-700 hover:border-blue-700 w-full sm:w-auto"
                >
                  Explore Features
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full h-[500px] relative">
              <Image
                src="/captura1.png"
                alt="App preview"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative wave shape at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          fill="#ffffff"
        >
          <path d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};

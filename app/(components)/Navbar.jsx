'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Define links in the desired order
  const navItems = [
    { href: "#how-it-works", label: "How It Works" },
    { href: "#features", label: "Features" },
    { href: "#testimonials", label: "Success Stories" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    // --- Dark Mode Changes Start Here ---
    <nav className="bg-gray-900 shadow-lg sticky top-0 z-50"> {/* Dark background, maybe stronger shadow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Logo color remains the same bright blue for contrast */}
              <Link href="/" className="text-2xl font-bold text-[#007BFF]" onClick={() => isOpen && setIsOpen(false)}>
                BeFitter
              </Link>
            </motion.div>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
             {navItems.map((item) => (
                 <NavLink key={item.href} href={item.href}>{item.label}</NavLink>
             ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button colors adjusted slightly if needed, but current ones work well on dark */}
              <Link
                href="#signup"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#007BFF] hover:bg-blue-600 transition-colors duration-200" // Slightly brighter hover
              >
                Get Started
              </Link>
            </motion.div>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              // Hamburger icon color and hover state adjusted for dark bg
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" // Adjusted focus ring color
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        id="mobile-menu"
        // Background is inherited from nav (bg-gray-900)
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ overflow: 'hidden' }}
      >
        {/* Adjusted padding/border for dark mode */}
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 border-t border-gray-700"> {/* Darker border */}
          {navItems.map((item) => (
              <MobileNavLink key={item.href} href={item.href} onClick={() => setIsOpen(false)}>{item.label}</MobileNavLink>
          ))}
          {/* Adjusted padding/border for dark mode */}
          <div className="pt-3 mt-3 border-t border-gray-700"> {/* Darker border */}
            <Link
              href="#signup"
              onClick={() => setIsOpen(false)}
              // Button colors same as desktop
              className="block w-full text-center px-4 py-2.5 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#007BFF] hover:bg-blue-600 transition-colors duration-200" // Slightly brighter hover
            >
              Get Started
            </Link>
          </div>
        </div>
      </motion.div>
    </nav>
    // --- Dark Mode Changes End Here ---
  );
};

// Sub-components adjusted for Dark Mode
const NavLink = ({ href, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative"
    >
      {/* Text color and hover color adjusted */}
      <Link href={href} className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200 px-1 py-1">
        {children}
      </Link>
    </motion.div>
  );
};

const MobileNavLink = ({ href, onClick, children }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      // Text color and hover color/bg adjusted
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200"
    >
      {children}
    </Link>
  );
};
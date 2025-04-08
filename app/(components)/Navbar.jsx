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
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Make logo link also close mobile menu if open */}
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
              <Link
                href="#signup"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#007BFF] hover:bg-blue-700 transition-colors duration-200"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-[#007BFF] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#007BFF]"
              aria-controls="mobile-menu" // Added aria-controls
              aria-expanded={isOpen} // Dynamically set aria-expanded
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
        id="mobile-menu" // Added ID for aria-controls
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`} // Use hidden/block for accessibility
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ overflow: 'hidden' }} // Prevent content flash during animation
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 border-t border-gray-100">
          {navItems.map((item) => (
              <MobileNavLink key={item.href} href={item.href} onClick={() => setIsOpen(false)}>{item.label}</MobileNavLink>
          ))}
          <div className="pt-3 mt-3 border-t border-gray-100">
            <Link
              href="#signup"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-2.5 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#007BFF] hover:bg-blue-700 transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

// Sub-components (no changes needed here, but kept for completeness)
const NavLink = ({ href, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative" // For potential future underline effects
    >
      <Link href={href} className="text-base font-medium text-gray-700 hover:text-[#007BFF] transition-colors duration-200 px-1 py-1">
        {children}
      </Link>
    </motion.div>
  );
};

const MobileNavLink = ({ href, onClick, children }) => {
  return (
    <Link
      href={href}
      onClick={onClick} // Close menu on click
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#007BFF] hover:bg-gray-50 transition-colors duration-200"
    >
      {children}
    </Link>
  );
};
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
              <Link href="/" className="text-2xl font-bold text-[#007BFF]">
                BeFitter
              </Link>
            </motion.div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#how-it-works">How It Works</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#testimonials">Success Stories</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="#signup" 
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#007BFF] hover:bg-blue-700"
              >
                Start Free Trial
              </Link>
            </motion.div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-[#007BFF] hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
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
        className={`${isOpen ? 'block' : 'hidden'} md:hidden`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <MobileNavLink href="#features" onClick={() => setIsOpen(false)}>Features</MobileNavLink>
          <MobileNavLink href="#how-it-works" onClick={() => setIsOpen(false)}>How It Works</MobileNavLink>
          <MobileNavLink href="#pricing" onClick={() => setIsOpen(false)}>Pricing</MobileNavLink>
          <MobileNavLink href="#testimonials" onClick={() => setIsOpen(false)}>Success Stories</MobileNavLink>
          <MobileNavLink href="#faq" onClick={() => setIsOpen(false)}>FAQ</MobileNavLink>
          <div className="mt-4">
            <Link 
              href="#signup"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#007BFF] hover:bg-blue-700"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

const NavLink = ({ href, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={href} className="text-base font-medium text-gray-800 hover:text-[#007BFF]">
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
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#007BFF] hover:bg-gray-50"
    >
      {children}
    </Link>
  );
};
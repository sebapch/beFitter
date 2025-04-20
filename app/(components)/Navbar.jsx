"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Navbar = () => { // Mantenemos el nombre
  const [isOpen, setIsOpen] = useState(false);

  // Links específicos para Gym Owners
  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    // --- Adopta Estilo Dark Navbar Usuario ---
    <nav className="bg-gray-900 shadow-lg sticky top-0 z-50"> {/* Fondo oscuro, sombra */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Logo azul brillante para contraste */}
              <Link href="/" className="text-2xl font-bold text-[#007BFF]" onClick={() => isOpen && setIsOpen(false)}>
                BeFitter<span className="text-xs text-gray-400 ml-1 align-super">for Gyms</span> {/* Opcional: Añadir indicativo */}
              </Link>
            </motion.div>
          </div>
          {/* Menú Desktop */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
             {navItems.map((item) => (
                 <NavLink key={item.href} href={item.href}>{item.label}</NavLink>
             ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Botón con estilo oscuro */}
              <Link
                href="#demo" // Enlace a Demo para Gyms
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#007BFF] hover:bg-blue-600 transition-colors duration-200"
              >
                Request Demo {/* Texto específico Gym */}
              </Link>
            </motion.div>
          </div>
          {/* Botón Menú Móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              // Estilo oscuro para hamburguesa
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? ( /* Icono X */
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> </svg>
              ) : ( /* Icono Hamburguesa */
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /> </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil */}
      <motion.div
        id="mobile-menu"
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ overflow: 'hidden', background: 'inherit' /* Hereda bg-gray-900 */ }}
      >
        {/* Estilo oscuro para el contenido del menú móvil */}
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 border-t border-gray-700"> {/* Borde oscuro */}
          {navItems.map((item) => (
              <MobileNavLink key={item.href} href={item.href} onClick={() => setIsOpen(false)}>{item.label}</MobileNavLink>
          ))}
          <div className="pt-3 mt-3 border-t border-gray-700"> {/* Borde oscuro */}
            <Link
              href="#demo" // Enlace a Demo
              onClick={() => setIsOpen(false)}
              // Estilo oscuro para el botón
              className="block w-full text-center px-4 py-2.5 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#007BFF] hover:bg-blue-600 transition-colors duration-200"
            >
              Request Demo {/* Texto específico Gym */}
            </Link>
          </div>
        </div>
      </motion.div>
    </nav>
    // --- Fin Estilo Dark Navbar ---
  );
};

// Subcomponentes NavLink y MobileNavLink con estilo oscuro (iguales al del usuario)
const NavLink = ({ href, children }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="relative">
      <Link href={href} className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200 px-1 py-1">
        {children}
      </Link>
    </motion.div>
  );
};

const MobileNavLink = ({ href, onClick, children }) => {
  return (
    <Link href={href} onClick={onClick} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200">
      {children}
    </Link>
  );
};
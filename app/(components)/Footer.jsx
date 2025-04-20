"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Footer = () => { // Mantenemos el nombre
  const currentYear = new Date().getFullYear();

  // Links de navegación relevantes para la página de Gym Owners (iguales a los del Navbar)
  const navLinks = [
    { text: "Features", href: "#features" },
    { text: "How It Works", href: "#how-it-works" },
    { text: "Pricing", href: "#pricing" },
    { text: "Testimonials", href: "#testimonials" },
    { text: "FAQ", href: "#faq" },
    { text: "Demo", href: "#demo" }, // Añadido enlace a Demo
  ];

  return (
    // --- Footer Simplificado Estilo Dark Usuario ---
    <footer className="bg-gray-900 text-white pt-10 pb-8"> {/* Fondo oscuro */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sección Superior: Logo, Nav, Social (Layout Flex como el de Usuario) */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl font-bold text-white inline-block">
              BeFitter<span className="text-xs text-gray-400 ml-1 align-super">for Gyms</span> {/* Indicativo opcional */}
            </Link>
            {/* Se elimina la descripción larga */}
          </div>

          {/* Links de Navegación (Estilo Usuario) */}
          <nav className="flex flex-wrap justify-center gap-x-5 sm:gap-x-6 gap-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                // Estilos de links oscuros
                className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-200"
              >
                {link.text}
              </Link>
            ))}
          </nav>

          {/* Iconos Sociales (Estilo Usuario) */}
          <div className="flex justify-center space-x-4">
             <SocialIcon ariaLabel="Twitter"> {/* Twitter Icon SVG */} <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg> </SocialIcon>
             <SocialIcon ariaLabel="LinkedIn"> {/* LinkedIn Icon SVG */} <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg> </SocialIcon>
             <SocialIcon ariaLabel="Facebook"> {/* Facebook Icon SVG */} <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9.101 23.691v-7.98h-2.678v-3.667h2.678v-2.518c0-2.43 1.493-4.544 4.948-4.544 1.4 0 2.603.104 2.953.149v3.431h-2.025c-1.59 0-1.898.755-1.898 1.864v1.618h3.752l-.493 3.667h-3.259v7.98h-3.978z" /></svg> </SocialIcon>
              {/* Añade más si es necesario */}
          </div>
        </div>

        {/* Sección Inferior: Copyright y Texto Opcional (Estilo Usuario) */}
        <div className="text-center md:text-left pt-6 border-t border-gray-800 flex flex-col md:flex-row md:justify-between md:items-center gap-3">
          {/* Copyright (Estilo Usuario) */}
          <p className="text-gray-400 text-xs">© {currentYear} BeFitter for Gyms. All rights reserved.</p>
          {/* Texto opcional a la derecha (puedes mantenerlo o eliminarlo) */}
          <p className="text-gray-500 text-xs max-w-md md:text-right">
            Empowering gyms to elevate their member experience.
          </p>
        </div>
      </div>
    </footer>
    // --- Fin Footer Simplificado ---
  );
};

// Subcomponente SocialIcon (igual al del usuario y anterior Gym Owner)
const SocialIcon = ({ children, ariaLabel }) => {
  return (
    <motion.a
      href="#" // Reemplazar con enlaces reales
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-[#007BFF] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:ring-[#007BFF]"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
};
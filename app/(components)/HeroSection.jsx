"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // Asegúrate de usar Image si tienes una imagen real
import Link from "next/link";

export const HeroSection = () => { // Renombrado para claridad
  // Define el color de fondo asumido para la *siguiente* sección
  // Úsalo para el relleno del SVG de la ola. Ajusta si es necesario.
  // Usaremos un gris muy oscuro, ligeramente diferente al del usuario.
  const nextSectionBgColor = "#0f172a"; // Tailwind's slate-900 o similar

  return (
    // --- Dark Mode Theme for Gym Owners ---
    <section className="relative bg-gradient-to-br from-slate-900 to-indigo-950 text-white overflow-hidden"> {/* Gradiente oscuro distintivo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> {/* Aumentado el gap */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-100"> {/* Texto principal claro */}
              Empower Your Gym & Elevate Member Experience with Your Own Branded AI Fitness App
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-200"> {/* Texto secundario con tono del gradiente */}
              Drive Retention, Boost Trainer Efficiency, and Increase Revenue with the Ultimate White-Label Gym Software Solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Botón Primario: Usa el color de acento (azul) sobre fondo oscuro */}
                <Link
                  href="#demo"
                  className="inline-flex justify-center items-center px-8 py-3 border border-transparent rounded-md shadow-lg text-lg font-medium text-white bg-[#007BFF] hover:bg-blue-600 transition-colors duration-200 w-full sm:w-auto"
                >
                  Request a Personalized Demo
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Botón Secundario: Delineado con colores del tema oscuro */}
                <Link
                  href="#features"
                  className="inline-flex justify-center items-center px-8 py-3 border border-slate-600 rounded-md shadow-sm text-lg font-medium text-slate-300 hover:bg-slate-700 hover:border-slate-700 hover:text-white transition-colors duration-200 w-full sm:w-auto"
                >
                  Learn More About Features
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
            {/* Mockup Adaptado a Dark Mode */}
            <div className="w-full h-[500px] relative">
              <div className="absolute inset-0 bg-slate-800 rounded-lg shadow-xl overflow-hidden border border-slate-700"> {/* Fondo oscuro para mockup */}
                {/* Barra superior simulada */}
                <div className="absolute top-0 w-full h-8 bg-slate-700 flex items-center justify-start px-3 rounded-t-lg">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                {/* Contenido del Mockup */}
                <div className="pt-10 pb-4 px-4">
                  {/* Área del Logo */}
                  <div className="bg-[#007BFF] h-28 rounded-lg mb-4 flex items-center justify-center shadow-inner">
                    <span className="text-white font-bold text-lg opacity-90">YOUR GYM LOGO</span>
                  </div>
                  {/* Elementos de UI simulados */}
                  <div className="space-y-3">
                    <div className="bg-slate-700 h-12 rounded-lg"></div>
                    <div className="bg-slate-700 h-16 rounded-lg"></div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-slate-700 h-20 rounded-lg"></div>
                      <div className="bg-slate-700 h-20 rounded-lg"></div>
                    </div>
                     <div className="bg-slate-700 h-24 rounded-lg"></div>
                      {/* Simulación de barra de navegación inferior */}
                     <div className="absolute bottom-0 left-0 right-0 h-14 bg-slate-900/80 backdrop-blur-sm rounded-b-lg flex items-center justify-around px-4 border-t border-slate-700">
                         <div className="w-6 h-6 bg-slate-600 rounded"></div>
                         <div className="w-6 h-6 bg-slate-600 rounded"></div>
                         <div className="w-6 h-6 bg-[#007BFF] rounded"></div> {/* Icono activo */}
                         <div className="w-6 h-6 bg-slate-600 rounded"></div>
                     </div>
                  </div>
                </div>
              </div>

              {/* Elementos Decorativos Adaptados */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500 opacity-10 rounded-full filter blur-lg"></div>
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-blue-500 opacity-10 rounded-full filter blur-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ola decorativa inferior - Relleno con el color de fondo de la siguiente sección */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          fill={nextSectionBgColor} // Relleno dinámico o hardcodeado
          preserveAspectRatio="none" // Asegura que escale correctamente
          className="block" // Evita espacio extra debajo del SVG
        >
          <path d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"></path>
        </svg>
      </div>
      {/* --- Fin Dark Mode Theme for Gym Owners --- */}
    </section>
  );
};
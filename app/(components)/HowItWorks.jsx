"use client";
import { motion } from "framer-motion";

// NO se cambia el nombre del componente según la petición
export const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Brand It Your Way",
      description: "Easily upload your logo, choose your brand colors, and make the app uniquely yours in minutes. No coding required.",
      icon: (
        // El icono hereda el color del texto padre (text-white)
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Empower Your Trainers",
      description: "Provide your team with an intuitive dashboard to create AI-assisted or fully custom plans, track client progress in real-time, and communicate effectively.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zm5 2a2 2 0 11-4 0 2 2 0 014 0zm-4 7a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zm10 10v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Engage Your Members",
      description: "Members download your branded app, receive personalized workouts and nutrition guidance, track their achievements, and stay connected to your gym ecosystem 24/7.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Analyze & Optimize",
      description: "Gain insights into member progress, popular exercises, and trainer activity to continuously improve your services.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Efecto escalonado para los items
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Fondo ligeramente diferente al anterior para separación visual
  const currentBgColor = "bg-slate-800";

  return (
    // --- Dark Mode Theme for Gym Owners - How It Works Section ---
    <section className={`py-16 md:py-24 ${currentBgColor} text-white`} id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Título de la Sección --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} // Ajustado viewport
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            Seamless Integration, Powerful Results: Your Gym, Your App, Your Success.
          </h2>
          {/* Texto descriptivo adaptado */}
          <p className="text-slate-300 max-w-3xl mx-auto text-lg">
            Our white-label platform is designed to integrate effortlessly with your gym's operations, empowering both trainers and members.
          </p>
          {/* Línea divisora con color de acento */}
          <div className="w-20 h-1 bg-[#007BFF] mx-auto mt-6"></div>
        </motion.div>

        {/* --- Grid de Pasos --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Trigger cuando el 20% es visible
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              // Card con fondo oscuro, borde superior de acento y sombra adaptada
              className="bg-slate-700 rounded-lg shadow-lg p-6 border-t-4 border-[#007BFF] hover:shadow-blue-900/30 transition-shadow duration-300 flex flex-col items-center text-center" // Centrado de contenido
            >
              {/* Icono con fondo de acento */}
              <div className="flex-shrink-0 mb-5">
                <div className="bg-[#007BFF] text-white p-3 rounded-full shadow-md">
                  {step.icon}
                </div>
              </div>

              {/* Contenido de texto */}
              <div className="flex-grow">
                {/* Número del paso con fondo oscuro y texto claro */}
                <span className="inline-block bg-slate-600 text-slate-100 font-bold rounded-full w-8 h-8 flex items-center justify-center mb-4 mx-auto">
                  {step.id}
                </span>
                {/* Título del paso */}
                <h3 className="text-xl font-bold text-gray-100 mb-3">{step.title}</h3>
                {/* Descripción del paso */}
                <p className="text-slate-300 text-sm">{step.description}</p> {/* Texto ligeramente más pequeño */}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Callout Final --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }} // Trigger al 50%
          transition={{ duration: 0.5, delay: 0.4 }} // Delay para aparecer después de los items
          className="mt-16 text-center"
        >
          {/* Caja con fondo oscuro, borde sutil y sombra */}
          <div className="inline-block bg-slate-700 px-6 py-4 rounded-lg shadow-md border border-slate-600">
            {/* Texto adaptado */}
            <p className="text-slate-200 font-medium">
              Ready to transform your gym's digital experience? <span className="text-[#007BFF] font-bold">It only takes 3 days to launch your custom app.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
    // --- Fin Dark Mode Theme ---
  );
};
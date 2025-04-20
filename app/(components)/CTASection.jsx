"use client";
import { motion } from 'framer-motion';

export const CTASection = () => { // Mantenemos el nombre

  // Handle form submission logic here (e.g., send to API route, Netlify Forms, etc.)
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic for the Gym Owner Demo request
    console.log("Gym Owner Demo Request Submitted!");
    alert("Thank you! We'll be in touch soon to schedule your demo."); // Placeholder alert
    // Consider resetting the form: event.target.reset();
  };

  return (
    // --- Dark Mode Theme for Gym Owners - CTA Section ---
    // Adopta el gradiente oscuro del CTA de Usuario
    <section className="py-16 md:py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-300" id="demo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Elementos decorativos como los del Usuario CTA */}
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-600 opacity-10 rounded-full filter blur-2xl"></div>
        <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-blue-600 opacity-10 rounded-full filter blur-2xl"></div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            {/* Texto adaptado del CTA de Gym Owner, con colores del Usuario CTA */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Gym's Member Experience?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Give your members the personalized, modern fitness tool they deserve, all under your trusted brand. Empower your trainers and watch your retention soar.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"> {/* items-stretch */}
            {/* --- Formulario Demo (Estilo Usuario CTA Dark) --- */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              // Fondo sólido oscuro, borde y sombra como el Usuario CTA
              className="lg:col-span-7 bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-700 shadow-lg flex flex-col justify-between"
            >
              <div> {/* Contenedor para el contenido del formulario */}
                <h3 className="text-2xl font-bold text-white mb-6">Request Your Free Demo</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Campos del formulario con estilo oscuro */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                      <input type="text" id="name" name="name" required className="w-full px-4 py-2.5 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF] transition duration-200" placeholder="John Smith"/>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                      <input type="email" id="email" name="email" required className="w-full px-4 py-2.5 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF] transition duration-200" placeholder="john@yourgym.com"/>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                     <div>
                       <label htmlFor="gym-name" className="block text-sm font-medium text-gray-300 mb-1">Gym Name</label>
                       <input type="text" id="gym-name" name="gym-name" required className="w-full px-4 py-2.5 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF] transition duration-200" placeholder="Your Gym"/>
                     </div>
                     <div>
                       <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                       <input type="tel" id="phone" name="phone" className="w-full px-4 py-2.5 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF] transition duration-200" placeholder="(123) 456-7890"/>
                     </div>
                  </div>
                  <div>
                    <label htmlFor="members" className="block text-sm font-medium text-gray-300 mb-1">Number of Members</label>
                    <select id="members" name="members" required className="w-full px-4 py-2.5 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF] transition duration-200 appearance-none bg-no-repeat bg-right pr-8" style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.75rem center', backgroundSize: '1.2em 1.2em'}}>
                       {/* Opciones con fondo oscuro */}
                      <option value="" className="bg-gray-800 text-white">Select member count</option>
                      <option value="<100" className="bg-gray-800 text-white">Less than 100</option>
                      <option value="100-300" className="bg-gray-800 text-white">100 - 300</option>
                      <option value="301-500" className="bg-gray-800 text-white">301 - 500</option>
                      <option value="501-1000" className="bg-gray-800 text-white">501 - 1000</option>
                      <option value=">1000" className="bg-gray-800 text-white">More than 1000</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Additional Information (Optional)</label>
                    <textarea id="message" name="message" rows="3" className="w-full px-4 py-2.5 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF] transition duration-200" placeholder="Tell us a bit about your gym and what you're looking for..."></textarea>
                  </div>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="pt-1">
                    {/* Botón de submit con estilo Usuario CTA */}
                    <button type="submit" className="w-full py-3 px-6 bg-[#007BFF] text-white font-bold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800 focus-visible:ring-[#007BFF] transition-all duration-300">
                      Request Your Free Demo
                    </button>
                  </motion.div>
                </form>
              </div>
              <div> {/* Contenedor para texto de política */}
                 {/* Texto de política con estilo oscuro */}
                 <p className="text-xs text-gray-400 text-center mt-5">
                   By submitting, you agree to our <a href="#" className="underline hover:text-white">Privacy Policy</a> and <a href="#" className="underline hover:text-white">Terms of Service</a>.
                 </p>
              </div>
            </motion.div>

            {/* --- Panel "Why Book?" (Estilo Usuario CTA Dark) --- */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-5"
            >
               {/* Fondo sólido oscuro, borde y sombra como el panel de contacto del Usuario CTA */}
              <div className="bg-gray-800 rounded-xl p-6 md:p-8 h-full border border-gray-700 shadow-lg flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-6 text-center md:text-left">Why Book a Demo?</h3>
                <ul className="space-y-4 mb-6"> {/* Añadido mb-6 */}
                   {/* Lista con estilos oscuros */}
                   <ListItem>See how BeFitter can be customized with your brand and messaging</ListItem>
                   <ListItem>Get a personalized walkthrough of features relevant to your specific gym</ListItem>
                   <ListItem>Discuss implementation strategy and timeline with our experts</ListItem>
                   <ListItem>Get all your questions answered by our product specialists</ListItem>
                 </ul>
                {/* Caja de Cita (Estilo oscuro) */}
                <div className="mt-auto p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                  <p className="font-semibold text-center text-sm text-gray-300 italic">
                    "The demo really showed us how BeFitter could solve our specific challenges. Worth every minute!"
                  </p>
                  <p className="text-gray-400 text-center text-xs mt-2">
                    - Mike Johnson, FitLife Gym Owner
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    // --- Fin Dark Mode Theme ---
  );
};

// Helper component para los items de la lista "Why Book?"
const ListItem = ({ children }) => (
  <li className="flex items-start">
    <div className="flex-shrink-0 mt-1">
      {/* Icono como el panel de contacto del Usuario CTA */}
      <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    {/* Texto con color oscuro */}
    <p className="ml-3 text-gray-300">{children}</p>
  </li>
);
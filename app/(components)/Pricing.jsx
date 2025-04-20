"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';

export const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [ // No se necesita cambiar texto aquí
    { id: 1, name: "Starter Gym", description: "Perfect for small gyms or studios just getting started.", monthlyPrice: 149, annualPrice: 129, features: ["Up to 100 members", "2 trainer accounts", "Basic analytics", "White label branding", "Email support", "Exercise library (200+ exercises)",], popular: false },
    { id: 2, name: "Growth Pro", description: "Ideal for established gyms looking to scale their digital presence.", monthlyPrice: 249, annualPrice: 199, features: ["Up to 500 members", "10 trainer accounts", "Advanced analytics & reporting", "White label branding", "Priority email & chat support", "Exercise library (500+ exercises)", "Custom exercise uploads", "API access"], popular: true },
    { id: 3, name: "Enterprise", description: "For large gyms and multi-location fitness businesses.", monthlyPrice: null, annualPrice: null, features: ["Unlimited members", "Unlimited trainer accounts", "Enterprise analytics & reporting", "White label branding", "Dedicated account manager", "Complete exercise library", "Custom integration support", "Staff training", "Custom development options"], popular: false }
  ];

  const containerVariants = { /* ... */ };
  const itemVariants = { /* ... */ };

  const currentBgColor = "bg-slate-800"; // Fondo oscuro

  return (
    <section className={`${currentBgColor} py-16 md:py-24 text-white`} id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Título Sección (Adaptado) --- */}
        <motion.div /* ... */ className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            Flexible Plans Designed for Your Gym's Size & Goals
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg">
            Choose the perfect plan for your gym's needs with transparent pricing and no hidden fees.
          </p>
          <div className="w-20 h-1 bg-[#007BFF] mx-auto mt-6"></div>
        </motion.div>

        {/* --- Toggle Anual/Mensual (Adaptado) --- */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-700 p-1 rounded-lg inline-flex border border-slate-600">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded text-sm font-medium transition-colors duration-300 ${
                !isAnnual
                  ? "bg-white text-[#007BFF] shadow-md"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded text-sm font-medium relative transition-colors duration-300 ${
                isAnnual
                  ? "bg-white text-[#007BFF] shadow-md"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Annual
              <span className="absolute -top-2.5 -right-2.5 bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded-full shadow">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* --- Grid de Planes (Adaptado) --- */}
        <motion.div /* ... */ className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"> {/* items-stretch para igualar altura */}
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={itemVariants}
              className={`bg-slate-700 rounded-xl overflow-hidden border flex flex-col ${ // Flex col para el botón al final
                plan.popular
                  ? "border-[#007BFF] shadow-lg shadow-blue-900/30"
                  : "border-slate-600 shadow-md"
              } relative`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-[#007BFF] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    POPULAR CHOICE
                  </div>
                </div>
              )}
              {/* Cabecera del Plan */}
              <div className={`p-6 ${plan.popular ? "bg-blue-900/20" : "bg-slate-600"}`}>
                <h3 className="text-xl font-bold text-gray-100 mb-1">{plan.name}</h3>
                <p className="text-slate-300 text-sm h-10">{plan.description}</p> {/* Altura fija para alinear */}
              </div>
              {/* Cuerpo del Plan */}
              <div className="p-6 flex-grow flex flex-col justify-between"> {/* flex-grow y justify-between */}
                <div> {/* Contenedor para precio y features */}
                  {/* Precio */}
                  <div className="mb-6 min-h-[60px]"> {/* Altura mínima para alinear */}
                    {plan.monthlyPrice !== null ? (
                      <>
                        <div className="flex items-baseline">
                          <span className="text-4xl font-bold text-gray-100">
                            ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                          </span>
                          <span className="text-slate-400 ml-1.5">/ month</span>
                        </div>
                         {isAnnual && plan.monthlyPrice && (
                          <p className="text-green-400 text-sm mt-1">
                             Billed annually at ${plan.annualPrice * 12}
                          </p>
                        )}
                         {!isAnnual && plan.monthlyPrice && (
                          <p className="text-slate-400 text-sm mt-1">
                             Billed monthly
                          </p>
                        )}
                      </>
                    ) : (
                      <div className="flex items-end">
                        <span className="text-2xl font-bold text-gray-100">Custom Pricing</span>
                      </div>
                    )}
                  </div>
                  {/* Lista de Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-green-400 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-2 text-slate-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                 {/* Botón */}
                 <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-auto" // Empuja el botón hacia abajo
                 >
                   <a
                    href="#demo"
                    className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-colors duration-300 text-sm ${
                      plan.popular
                        ? "bg-[#007BFF] text-white hover:bg-blue-600"
                        : "bg-slate-600 text-slate-100 hover:bg-slate-500" // Botón secundario oscuro
                         // : "bg-white border border-[#007BFF] text-[#007BFF] hover:bg-blue-50" // Alternativa clara si se prefiere
                    }`}
                  >
                    {plan.monthlyPrice !== null ? 'Get Started' : 'Contact Sales'}
                  </a>
                 </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Nota Adicional (Adaptado) --- */}
        <motion.div /* ... */ className="mt-12 text-center bg-slate-700 p-6 rounded-lg border border-slate-600">
          <p className="text-slate-300 text-sm">
            All plans include white-label branding, core features, and regular platform updates.
            <br />
            Need a custom solution? <a href="#demo" className="text-[#007BFF] font-semibold hover:underline">Contact our sales team</a> for a personalized quote.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
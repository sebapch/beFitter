'use client';
import Link from 'next/link';

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
          <svg className="h-8 w-8 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Pago Cancelado</h2>
        <p className="text-gray-600 mb-6">
          No te preocupes, tu pago ha sido cancelado y no se ha realizado ningún cargo en tu tarjeta.
        </p>
        
        <div className="space-y-4">
          <p className="text-gray-700 text-sm">
            Si has tenido algún problema durante el proceso de pago o necesitas ayuda, no dudes en contactar con nuestro equipo de soporte.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 justify-center">
            <Link href="/pricing" className="inline-block px-6 py-3 border border-[#007BFF] text-[#007BFF] font-medium rounded-lg hover:bg-blue-50 transition-colors">
              Volver a planes
            </Link>
            <Link href="/" className="inline-block px-6 py-3 bg-[#007BFF] text-white font-medium rounded-lg hover:bg-blue-600 transition-colors">
              Ir al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
'use client';
import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

// Componente que utiliza useSearchParams
function SuccessContent() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [sessionData, setSessionData] = useState(null);
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (sessionId) {
      // En una implementación real, aquí verificarías el estado de la sesión con Stripe
      // Aquí simularemos obtener los datos
      const fetchSessionInfo = async () => {
        try {
          // En producción, aquí deberías hacer una llamada a tu API
          // que a su vez consultaría la API de Stripe con el sessionId

          // Simulamos una carga
          await new Promise(resolve => setTimeout(resolve, 1500));
          
          // Datos de ejemplo (en producción, estos datos vendrían de Stripe)
          setSessionData({
            customer_email: 'usuario@ejemplo.com',
            phone: '+34612345678',
            plan: sessionId.includes('vip') ? 'VIP' : 'Standard',
            billing_type: sessionId.includes('annual') ? 'Anual' : 'Mensual',
            amount: sessionId.includes('vip') ? 
              (sessionId.includes('annual') ? '€20' : '€25') : 
              (sessionId.includes('annual') ? '€12' : '€15'),
            status: 'succeeded'
          });
          
          setLoading(false);
        } catch (error) {
          console.error('Error al obtener la información de la sesión:', error);
          setLoading(false);
        }
      };

      fetchSessionInfo();
    } else {
      setLoading(false);
    }
  }, [sessionId]);

  if (!sessionId) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Página no disponible directamente</h1>
          <p className="text-gray-600 mb-6">Esta página está destinada a ser accedida después de completar un pago.</p>
          <Link href="/" className="inline-block px-6 py-3 bg-[#007BFF] text-white font-medium rounded-lg hover:bg-blue-600 transition-colors">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        {loading ? (
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#007BFF] mx-auto mb-4"></div>
            <h2 className="text-xl font-semibold text-gray-700">Verificando tu pago...</h2>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <svg className="h-8 w-8 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">¡Pago Exitoso!</h2>
              <p className="text-gray-600 mt-2">Tu suscripción a BeFitter ha sido activada.</p>
            </div>
            
            <div className="bg-gray-50 rounded-md p-4 mb-6">
              <h3 className="text-sm font-medium text-gray-500 mb-3">Detalles del pedido:</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-medium">{sessionData.customer_email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Teléfono:</span>
                  <span className="font-medium">{sessionData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Plan:</span>
                  <span className="font-medium">{sessionData.plan}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Facturación:</span>
                  <span className="font-medium">{sessionData.billing_type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Importe:</span>
                  <span className="font-medium">{sessionData.amount}/{sessionData.billing_type === 'Anual' ? 'año' : 'mes'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Estado:</span>
                  <span className="text-green-600 font-medium">Completado</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700 text-sm">
                Hemos enviado los detalles de tu suscripción y acceso a la plataforma a tu correo electrónico. 
                Pronto un asesor se pondrá en contacto contigo a través del número de teléfono proporcionado 
                para ayudarte con la configuración inicial.
              </p>
              
              <div className="flex justify-center">
                <Link href="/" className="inline-block px-6 py-3 bg-[#007BFF] text-white font-medium rounded-lg hover:bg-blue-600 transition-colors">
                  Volver al inicio
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// Componente Fallback para el Suspense
function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#007BFF] mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-700">Cargando...</h2>
      </div>
    </div>
  );
}

// Componente principal que envuelve el contenido con Suspense
export default function SuccessPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <SuccessContent />
    </Suspense>
  );
}
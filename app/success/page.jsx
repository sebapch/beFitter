// app/success/page.jsx
'use client';
import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

// Componente que utiliza useSearchParams y obtiene datos reales
function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [loading, setLoading] = useState(true);
  const [sessionData, setSessionData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (sessionId) {
      const fetchSessionInfo = async () => {
        setLoading(true);
        setError(null); // Reset error on new fetch
        try {
          console.log(`Fetching session data for ID: ${sessionId}`);
          // Llama a tu nuevo endpoint del backend
          const response = await fetch(`/api/get-checkout-session?sessionId=${sessionId}`);

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `Error del servidor: ${response.status}`);
          }

          const data = await response.json();
          console.log("Datos de sesión recibidos:", data);
          setSessionData(data);

        } catch (err) {
          console.error('Error al obtener la información de la sesión desde el backend:', err);
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchSessionInfo();
    } else {
      // No hay session_id, no intentar cargar
      setLoading(false);
      setError("No se proporcionó un ID de sesión de checkout.");
    }
  }, [sessionId]); // Dependencia: sessionId

  // Renderizado si no hay session ID
  if (!loading && !sessionId) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Acceso inválido</h1>
          <p className="text-gray-600 mb-6">Esta página requiere un ID de sesión válido.</p>
          <Link href="/" className="inline-block px-6 py-3 bg-[#007BFF] text-white font-medium rounded-lg hover:bg-blue-600 transition-colors">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  // Renderizado durante la carga
  if (loading) {
     return <LoadingFallback message="Verificando tu pago..." />;
  }

  // Renderizado en caso de error
  if (error) {
     return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow p-8 text-center">
           <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
             <svg className="h-8 w-8 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
             </svg>
           </div>
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error al verificar el pago</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link href="/" className="inline-block px-6 py-3 bg-[#007BFF] text-white font-medium rounded-lg hover:bg-blue-600 transition-colors">
            Volver al inicio
          </Link>
        </div>
      </div>
     );
  }

  // Renderizado exitoso con datos reales
  if (sessionData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-6">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
              <svg className="h-8 w-8 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">¡Pago Exitoso!</h2>
            <p className="text-gray-600 mt-2">Tu suscripción a BeFitter ha sido activada.</p>
          </div>

          <div className="bg-gray-50 rounded-md p-4 mb-6 border border-gray-200">
            <h3 className="text-sm font-medium text-gray-500 mb-3">Detalles de la suscripción:</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Email:</span>
                <span className="font-medium text-gray-800">{sessionData.customerEmail}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Teléfono:</span>
                <span className="font-medium text-gray-800">{sessionData.customerPhone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Plan:</span>
                <span className="font-medium text-gray-800">{sessionData.planName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Facturación:</span>
                <span className="font-medium text-gray-800">{sessionData.billingType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Importe pagado:</span>
                <span className="font-medium text-gray-800">{sessionData.amountPaid}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Estado:</span>
                <span className="text-green-600 font-semibold">{sessionData.paymentStatus.charAt(0).toUpperCase() + sessionData.paymentStatus.slice(1)}</span>
              </div>
               {/* Opcional: Mostrar ID de suscripción */}
               {/* {sessionData.subscriptionId && (
                 <div className="flex justify-between">
                   <span className="text-gray-600">ID Suscripción:</span>
                   <span className="font-medium text-gray-500 text-xs">{sessionData.subscriptionId}</span>
                 </div>
               )} */}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700 text-sm">
              Hemos enviado los detalles de tu suscripción y acceso a <strong>{sessionData.customerEmail}</strong>.
              {sessionData.customerPhone !== 'Teléfono no disponible' && (
                 <> Pronto un asesor se pondrá en contacto contigo al número <strong>{sessionData.customerPhone}</strong> para ayudarte.</>
              )}
            </p>

            <div className="flex justify-center">
              
            </div>
             <div className="text-center mt-4">
               <Link href="/" className="text-sm text-gray-500 hover:text-[#007BFF]">
                 Volver al inicio
               </Link>
             </div>
          </div>
        </div>
      </div>
    );
  }

  // Estado por defecto o si algo sale mal inesperadamente
  return <LoadingFallback message="Cargando datos de la sesión..." />;
}

// Componente Fallback para Suspense y estados de carga/error
function LoadingFallback({ message = "Cargando..." }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#007BFF] mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-700">{message}</h2>
      </div>
    </div>
  );
}

// Componente principal que envuelve con Suspense
export default function SuccessPage() {
  return (
    // Suspense es crucial porque useSearchParams solo funciona en Client Components
    // y necesita tiempo para leer la URL después de la carga inicial.
    <Suspense fallback={<LoadingFallback />}>
      <SuccessContent />
    </Suspense>
  );
}
// app/actions.js
'use server'; // ¡Sigue siendo necesario!

import { Resend } from 'resend';
import { z } from 'zod';

// Esquema de validación con Zod (funciona igual en JS)
const TrialSignupSchema = z.object({
  name: z.string().min(1, { message: 'El nombre completo es requerido.' }),
  email: z.string().email({ message: 'Por favor, introduce un email válido.' }),
  password: z.string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres.' }),
  fitnessGoal: z.string().min(1, { message: 'Debes seleccionar un objetivo.' }), // Zod usa camelCase
  fitnessLevel: z.string().min(1, { message: 'Debes seleccionar tu nivel.' }), // Zod usa camelCase
});

// JSDoc para describir la forma del estado (opcional pero útil)
/**
 * @typedef {object} TrialSignupState
 * @property {string} message
 * @property {object} [errors]
 * @property {string[]} [errors.name]
 * @property {string[]} [errors.email]
 * @property {string[]} [errors.password]
 * @property {string[]} [errors.fitnessGoal] - Mapeado a 'fitness-goal' si es necesario
 * @property {string[]} [errors.fitnessLevel] - Mapeado a 'fitness-level' si es necesario
 * @property {boolean} success
 */

const resend = new Resend(process.env.RESEND_API_KEY);
const recipientEmail = process.env.SIGNUP_RECIPIENT_EMAIL;

/**
 * Server Action para manejar el registro de prueba.
 * @param {TrialSignupState} prevState - Estado anterior.
 * @param {FormData} formData - Datos del formulario.
 * @returns {Promise<TrialSignupState>} El nuevo estado.
 */
export async function handleTrialSignup(prevState, formData) {

  if (!recipientEmail) {
    console.error('Error: Falta la variable de entorno SIGNUP_RECIPIENT_EMAIL');
    return {
      message: 'Error de configuración del servidor.',
      success: false,
    };
  }

  // 1. Validar datos
  const validatedFields = TrialSignupSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    // Mapeamos los names del form con guiones a las claves camelCase de Zod
    fitnessGoal: formData.get('fitness-goal'),
    fitnessLevel: formData.get('fitness-level'),
  });

  if (!validatedFields.success) {
      // Mapeamos los errores de Zod (camelCase) a los names del form (con guiones) para mostrarlos correctamente
      const fieldErrors = validatedFields.error.flatten().fieldErrors;
      const mappedErrors = {};
      if(fieldErrors.name) mappedErrors.name = fieldErrors.name;
      if(fieldErrors.email) mappedErrors.email = fieldErrors.email;
      if(fieldErrors.password) mappedErrors.password = fieldErrors.password;
      if(fieldErrors.fitnessGoal) mappedErrors['fitness-goal'] = fieldErrors.fitnessGoal; // Mapeo clave
      if(fieldErrors.fitnessLevel) mappedErrors['fitness-level'] = fieldErrors.fitnessLevel; // Mapeo clave

      console.log("Validation Errors:", mappedErrors);
      return {
        message: 'Por favor, corrige los errores e inténtalo de nuevo.',
        errors: mappedErrors, // Usamos los errores mapeados
        success: false,
      };
  }

  // 2. Extraer datos validados (¡NO ENVIAREMOS PASSWORD POR EMAIL!)
  // Usamos los nombres camelCase de validatedFields.data
  const { name, email, fitnessGoal, fitnessLevel } = validatedFields.data;

  // 3. Enviar email de notificación
  try {
    const { data, error } = await resend.emails.send({
      from: `BeFitter Signup <onboarding@resend.dev>`,
      to: [recipientEmail],
      subject: `🚀 Nuevo Registro de Prueba en BeFitter: ${name}`,
      reply_to: email,
      html: `
        <h1>Nuevo Registro para Prueba Gratuita</h1>
        <p>Un nuevo usuario se ha registrado para la prueba de 7 días:</p>
        <ul>
          <li><strong>Nombre:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Objetivo Fitness:</strong> ${fitnessGoal}</li>
          <li><strong>Nivel Fitness:</strong> ${fitnessLevel}</li>
        </ul>
        <p><em>Nota: La contraseña fue creada pero no se incluye en este email por seguridad.</em></p>
      `,
      text: `Nuevo Registro:\nNombre: ${name}\nEmail: ${email}\nObjetivo: ${fitnessGoal}\nNivel: ${fitnessLevel}\n(Contraseña no incluida)`
    });

    if (error) {
      console.error('Resend Error:', error);
      return { message: `Error al procesar el registro: ${error.message}`, success: false };
    }

    console.log('Notificación de registro enviada:', data);
    return {
        message: '¡Registro completado! Revisa tu email (si aplica) o simplemente ¡bienvenido/a!',
        success: true
    };

  } catch (e) {
    console.error('Catch Error:', e);
    // Asegurarse de que errorMessage sea una cadena
    const errorMessage = (e instanceof Error) ? e.message : String(e || 'Un error desconocido ocurrió');
    return { message: `Error interno del servidor: ${errorMessage}`, success: false };
  }
}
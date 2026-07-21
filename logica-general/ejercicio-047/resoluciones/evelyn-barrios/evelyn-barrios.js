/**
 * Gestiona la personalización del saludo usando localStorage.
 */

const welcomeContainer = document.getElementById('welcome-container');
const nameInput = document.getElementById('name-input');
const saveButton = document.getElementById('save-button');

/**
 * Muestra un mensaje de bienvenida personalizado.
 * Lee el nombre del usuario desde localStorage.
 */
function mostrarBienvenida() {
  // 1. Obtener el nombre guardado desde localStorage
  const nombreGuardado = localStorage.getItem('nombreUsuario');

  if (nombreGuardado) {
    welcomeContainer.textContent = `¡Hola de nuevo, ${nombreGuardado}!`;
  } else {
    welcomeContainer.textContent = '¡Bienvenido! Ingresa tu nombre para personalizar tu visita.';
  }
}

/**
 * Guarda el nombre del usuario en localStorage.
 */
function guardarNombre() {
  const nombre = nameInput.value.trim();

  if (nombre) {
    // 2. Guardar el nombre en localStorage
    localStorage.setItem('nombreUsuario', nombre);
    // Actualizar el mensaje de bienvenida inmediatamente
    mostrarBienvenida();
    // Limpiar el input
    nameInput.value = '';
  }
}

// --- Ejecución Inicial ---

document.addEventListener('DOMContentLoaded', () => {
  // 3. Asignar el evento al botón
  saveButton.addEventListener('click', guardarNombre);
  // 4. Mostrar el mensaje de bienvenida al cargar la página
  mostrarBienvenida();
});
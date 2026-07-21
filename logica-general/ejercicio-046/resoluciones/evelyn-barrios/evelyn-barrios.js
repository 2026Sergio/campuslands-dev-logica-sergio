/**
 * URL de la API para obtener chistes de comida (usando la API de Chuck Norris con categoría "food").
 */
const API_URL = 'https://api.chucknorris.io/jokes/random?category=food';

/**
 * Obtiene un chiste de comida desde una API externa usando fetch.
 * @returns {Promise<string>} Una promesa que se resuelve con el texto del chiste.
 */
async function obtenerChisteDeComida() {
  const jokeContainer = document.getElementById('joke-container');
  jokeContainer.textContent = 'Cargando chiste...';

  try {
    // 1. Realizar la petición a la API
    const response = await fetch(API_URL);

    // 2. Verificar si la respuesta fue exitosa
    if (!response.ok) {
      throw new Error(`Error en la API: ${response.status}`);
    }

    // 3. Convertir la respuesta a formato JSON
    const data = await response.json();

    // 4. Devolver el dato específico que necesitamos (el chiste)
    return data.value;

  } catch (error) {
    console.error('Falló la obtención del chiste:', error);
    return 'No se pudo cargar el chiste. Inténtalo de nuevo más tarde.';
  }
}

/**
 * Muestra el chiste obtenido en el DOM.
 */
async function mostrarChiste() {
  const chiste = await obtenerChisteDeComida();
  const jokeContainer = document.getElementById('joke-container');
  jokeContainer.textContent = chiste;
}

// --- Ejecución Inicial ---

document.addEventListener('DOMContentLoaded', () => {
  const jokeButton = document.getElementById('joke-button');
  // Asignar el evento al botón para que llame a la función `mostrarChiste`
  jokeButton.addEventListener('click', mostrarChiste);
  // Cargar un chiste al iniciar la página
  mostrarChiste();
});
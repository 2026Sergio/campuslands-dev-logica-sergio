# Solución Ejercicio 046: APIs y Fetch - Chistes de Comida

## Razonamiento del Problema

El desafío es conectar nuestra aplicación web a una API (Interfaz de Programación de Aplicaciones) externa para obtener datos y mostrarlos en la página. Esto simula un escenario real donde una aplicación necesita consumir servicios de terceros (por ejemplo, obtener el clima, datos de mapas, o en nuestro caso, chistes).

Utilizaremos la API `fetch` del navegador, que es el estándar moderno para realizar peticiones de red.

## Reglas y Conceptos Aplicados

1.  **API (Application Programming Interface)**: Es un conjunto de reglas y herramientas que permite que diferentes aplicaciones se comuniquen entre sí. Usaremos la API de `chucknorris.io` por su simplicidad (no requiere autenticación).

2.  **`fetch`**: Es una función global del navegador que permite realizar peticiones HTTP (por ejemplo, a una API). Devuelve una `Promise` que se resuelve con el objeto `Response` de la petición.

3.  **`async/await`**: Usamos esta sintaxis para manejar la naturaleza asíncrona de `fetch` de una manera más legible. `await` pausa la ejecución de la función hasta que la `Promise` de `fetch` se complete.

4.  **JSON (JavaScript Object Notation)**: Es el formato de texto estándar para el intercambio de datos en la web. La respuesta de la API viene en formato JSON, por lo que usamos el método `.json()` para convertirla en un objeto de JavaScript con el que podamos trabajar.

5.  **Manejo de Errores (`try...catch`)**: Las peticiones de red pueden fallar por muchas razones (sin conexión a internet, la API no responde, etc.). El bloque `try...catch` nos permite manejar estos errores de forma controlada y mostrar un mensaje amigable al usuario.

6.  **Manipulación del DOM**: Una vez que obtenemos los datos, usamos métodos del DOM como `getElementById` y `.textContent` para mostrar la información en la página.

## Cómo Ejecutar la Solución

Esta solución **requiere una conexión a internet** y se ejecuta en un navegador web.

1.  **Crea un archivo `index.html`** en la misma carpeta donde está `evelyn-barrios.js` y pega el siguiente contenido:

    ```html
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Food Truck - Chiste del Día</title>
      <style>
        body { font-family: sans-serif; text-align: center; padding-top: 50px; }
        #joke-container {
          border: 1px solid #ddd;
          padding: 20px;
          margin: 20px auto;
          width: 80%;
          max-width: 600px;
          min-height: 50px;
          border-radius: 8px;
          background-color: #f9f9f9;
        }
        button { font-size: 16px; padding: 10px 20px; cursor: pointer; }
      </style>
    </head>
    <body>
      <h1>Chiste de Comida del Día</h1>
      <div id="joke-container">
        Haz clic en el botón para cargar un chiste...
      </div>
      <button id="joke-button">Obtener otro chiste</button>

      <script src="evelyn-barrios.js"></script>
    </body>
    </html>
    ```

2.  **Abre el archivo `index.html`** en tu navegador.

## Casos de Prueba (Interacción)

1.  **Carga Inicial**:
    *   Al abrir la página, se realiza automáticamente una petición a la API y se muestra un chiste.

2.  **Clic en el Botón**:
    *   Al hacer clic en el botón "Obtener otro chiste", se realiza una nueva petición a la API y el contenido del contenedor se actualiza con un nuevo chiste.
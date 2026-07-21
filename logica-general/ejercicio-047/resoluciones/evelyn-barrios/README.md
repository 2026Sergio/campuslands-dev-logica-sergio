# Solución Ejercicio 047: Almacenamiento Local - Personalización

## Razonamiento del Problema

El desafío es hacer que nuestra aplicación web "recuerde" al usuario entre visitas. Utilizaremos `localStorage`, una API del navegador que permite guardar datos (clave-valor) de forma persistente en el equipo del usuario.

Implementaremos una función para que el usuario ingrese su nombre, el cual se guardará y se usará para mostrar un saludo personalizado cada vez que regrese a la página.

## Reglas y Conceptos Aplicados

1.  **`localStorage`**: Es un objeto global disponible en el navegador que proporciona acceso al almacenamiento local para un dominio específico. Los datos guardados aquí no tienen fecha de caducidad.

2.  **`localStorage.setItem(clave, valor)`**: Este método se utiliza para guardar un par clave-valor. En nuestro caso, la clave es `'nombreUsuario'` y el valor es el nombre que el usuario ingresa.

3.  **`localStorage.getItem(clave)`**: Este método se utiliza para recuperar el valor asociado a una clave. Si la clave no existe, devuelve `null`.

4.  **Manipulación del DOM**: Al igual que en ejercicios anteriores, usamos `getElementById`, `addEventListener` y `.textContent` para interactuar con los elementos de la página HTML.

5.  **Flujo de la Aplicación**:
    *   Cuando la página carga (`DOMContentLoaded`), se verifica si hay un nombre guardado en `localStorage`.
    *   Si existe, se muestra un saludo de bienvenida personalizado.
    *   Si no, se muestra un mensaje genérico.
    *   El usuario puede escribir su nombre en un campo de texto y hacer clic en un botón para guardarlo.
    *   Al guardar, el nombre se almacena en `localStorage` y el mensaje de bienvenida se actualiza al instante.

## Cómo Ejecutar la Solución

Esta solución se ejecuta en un navegador web.

1.  **Crea un archivo `index.html`** en la misma carpeta donde está `evelyn-barrios.js` y pega el siguiente contenido:

    ```html
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Food Truck - Personalización</title>
      <style>
        body { font-family: sans-serif; text-align: center; padding-top: 50px; }
        #welcome-container { font-size: 24px; margin-bottom: 20px; }
        input { padding: 8px; margin-right: 10px; }
        button { padding: 8px 15px; }
      </style>
    </head>
    <body>
      <div id="welcome-container">
        <!-- El saludo se mostrará aquí -->
      </div>
      <div>
        <input type="text" id="name-input" placeholder="Escribe tu nombre">
        <button id="save-button">Guardar</button>
      </div>

      <script src="evelyn-barrios.js"></script>
    </body>
    </html>
    ```

2.  **Abre el archivo `index.html`** en tu navegador.

## Casos de Prueba (Interacción)

1.  **Primera Visita**:
    *   Al abrir la página por primera vez, verás el mensaje: "¡Bienvenido! Ingresa tu nombre para personalizar tu visita."

2.  **Guardar Nombre**:
    *   Escribe tu nombre en el campo de texto y haz clic en "Guardar". El mensaje se actualizará a "¡Hola de nuevo, [Tu Nombre]!".

3.  **Recargar la Página**:
    *   Recarga la página (F5 o Ctrl+R). Gracias a `localStorage`, el mensaje de bienvenida personalizado seguirá apareciendo, demostrando que el dato se guardó de forma persistente.
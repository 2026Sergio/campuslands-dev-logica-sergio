# Solución Ejercicio 045: Manipulación del DOM - Menú Interactivo

## Razonamiento del Problema

El desafío es crear un menú interactivo para un food truck usando JavaScript para manipular el DOM (Document Object Model). El menú debe generarse dinámicamente a partir de un conjunto de datos (un arreglo de objetos) y debe permitir al usuario filtrar los productos por categoría.

Este ejercicio marca un paso importante hacia el desarrollo de interfaces de usuario web.

## Reglas y Conceptos Aplicados

1.  **DOM (Document Object Model)**: Es la representación en memoria de la estructura de un documento HTML. JavaScript puede acceder y modificar este "árbol" de objetos para cambiar el contenido y la apariencia de la página dinámicamente.

2.  **`document.getElementById` y `document.querySelectorAll`**: Métodos para seleccionar elementos del HTML y poder trabajar con ellos en JavaScript.

3.  **`document.createElement` y `appendChild`**: Se usan para crear nuevos elementos HTML (como `<div>` o `<p>`) desde JavaScript y agregarlos a la página.

4.  **`innerHTML`**: Propiedad que permite leer o escribir el contenido HTML dentro de un elemento. Se usa aquí para limpiar el contenedor del menú y para añadir el contenido a cada item.

5.  **`addEventListener`**: Método para "escuchar" eventos del usuario, como un clic en un botón. Es la base de la interactividad en la web.

6.  **`dataset`**: Permite acceder a atributos `data-*` personalizados en los elementos HTML, una forma limpia de pasar datos (como el nombre de una categoría) desde el HTML al JavaScript.

## Cómo Ejecutar la Solución

A diferencia de los ejercicios anteriores, **esta solución se ejecuta en un navegador web**, no en Node.js.

1.  **Crea un archivo `index.html`** en la misma carpeta donde está `evelyn-barrios.js` y pega el siguiente contenido:

    ```html
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Menú del Food Truck</title>
      <style>
        body { font-family: sans-serif; }
        #menu-container { display: flex; flex-wrap: wrap; gap: 15px; }
        .menu-item { border: 1px solid #ccc; padding: 10px; border-radius: 5px; width: 200px; }
        .filters button { margin: 5px; padding: 10px; }
      </style>
    </head>
    <body>
      <h1>Menú Interactivo</h1>
      <div class="filters">
        <button class="filter-btn" data-categoria="todos">Todos</button>
        <button class="filter-btn" data-categoria="Tacos">Tacos</button>
        <button class="filter-btn" data-categoria="Hamburguesas">Hamburguesas</button>
        <button class="filter-btn" data-categoria="Bebidas">Bebidas</button>
      </div>
      <hr>
      <div id="menu-container">
        <!-- El menú se generará aquí -->
      </div>
      <script src="evelyn-barrios.js"></script>
    </body>
    </html>
    ```

2.  **Abre el archivo `index.html`** en tu navegador (Chrome, Firefox, etc.). Verás el menú y los botones de filtro.

## Casos de Prueba (Interacción)

1.  **Carga Inicial**:
    *   Al abrir la página, se deben mostrar todos los productos del menú.

2.  **Filtro por "Tacos"**:
    *   Al hacer clic en el botón "Tacos", la vista se actualiza y muestra únicamente los productos de la categoría "Tacos".

3.  **Filtro por "Bebidas"**:
    *   Al hacer clic en el botón "Bebidas", solo se deben mostrar los refrescos y aguas.

4.  **Filtro "Todos"**:
    *   Al hacer clic en "Todos", el menú vuelve a mostrar todos los productos disponibles.
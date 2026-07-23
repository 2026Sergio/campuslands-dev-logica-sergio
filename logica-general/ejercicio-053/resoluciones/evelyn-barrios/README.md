# Solución Ejercicio 053: Optimización y Rendimiento

## Razonamiento del Problema

El desafío es optimizar una función de búsqueda que opera sobre una lista muy grande de datos. La implementación inicial recorre todo el arreglo cada vez que busca un elemento, lo cual es muy ineficiente a medida que la lista crece.

La solución consiste en **pre-procesar** los datos, convirtiendo el arreglo en una estructura de datos más adecuada para búsquedas rápidas, como un `Map` (o tabla hash).

## Reglas y Conceptos Aplicados

1.  **Complejidad Algorítmica**:
    *   **Búsqueda Lineal (O(n))**: La función `buscarIngredienteLento` usa `Array.find()`. En el peor de los casos, debe recorrer los **n** elementos del arreglo para encontrar lo que busca. El tiempo de ejecución crece linealmente con el tamaño de los datos.
    *   **Búsqueda con Map (O(1))**: La función `buscarIngredienteRapido` usa `Map.get()`. Un `Map` está optimizado para búsquedas por clave. El tiempo de ejecución es constante, sin importar cuántos elementos haya en el mapa.

2.  **Pre-procesamiento de Datos**: Antes de realizar las búsquedas, invertimos tiempo una sola vez para convertir el arreglo en un `Map`. Esto crea un índice donde las claves son los IDs de los ingredientes. Aunque este paso inicial toma tiempo (O(n)), el beneficio se obtiene en las búsquedas posteriores, que son casi instantáneas.

3.  **Medición de Rendimiento (`console.time` y `console.timeEnd`)**: Utilizamos estas funciones de la consola para medir con precisión el tiempo que tarda en ejecutarse un bloque de código. Esto nos permite comparar de manera objetiva el rendimiento de ambas implementaciones.

## Cómo Ejecutar la Solución

El código está implementado en JavaScript en el archivo `evelyn-barrios.js`. Para ejecutar la medición de rendimiento:

1.  Abre una terminal.
2.  Navega a la carpeta: `logica-general/ejercicio-053/resoluciones/evelyn-barrios/`.
3.  Ejecuta el script con Node.js:

    ```bash
    node evelyn-barrios.js
    ```

La salida mostrará los tiempos de ejecución de ambas funciones de búsqueda.

## Análisis de Resultados

Al ejecutar el script, observarás una diferencia drástica en los tiempos reportados:

*   **Búsqueda Lenta (O(n))**: Tardará una cantidad medible de tiempo (generalmente algunos milisegundos o fracciones de milisegundo).
*   **Búsqueda Rápida (O(1))**: Tardará un tiempo extremadamente corto, a menudo cercano a 0 milisegundos.

Esto demuestra que, para aplicaciones que realizan búsquedas frecuentes sobre grandes conjuntos de datos, la inversión inicial en crear una estructura de datos optimizada (como un `Map`) es una estrategia de optimización fundamental.
# Solución Ejercicio 040: Simulaciones con Fórmulas - Rentabilidad de Producto

## Razonamiento del Problema

El desafío consiste en realizar una simulación para evaluar la rentabilidad de un nuevo producto en el menú de un food truck. Se deben utilizar fórmulas para calcular la ganancia total basada en costos, precios y ventas estimadas, y luego clasificar el producto según su potencial de ganancia.

## Reglas Aplicadas

1.  **Entradas**: La función principal recibe tres argumentos:
    *   `costoPorUnidad`: El costo de producir una sola unidad del nuevo producto.
    *   `precioDeVenta`: El precio al que se venderá cada unidad al público.
    *   `ventasEstimadas`: Un arreglo de números que representa las ventas proyectadas para una serie de días.

2.  **Regla 1 (Cálculo de Ganancia por Unidad)**: Se calcula la ganancia neta por cada unidad vendida restando el `costoPorUnidad` del `precioDeVenta`.

3.  **Regla 2 (Cálculo de Ventas Totales)**: Se suman todas las cifras del arreglo `ventasEstimadas` para obtener el total de unidades que se espera vender.

4.  **Regla 3 (Cálculo de Ganancia Total)**: Se multiplica la ganancia por unidad por el total de ventas estimadas para obtener la ganancia total proyectada.

5.  **Regla 4 (Clasificación de Rentabilidad)**: La ganancia total se clasifica en categorías:
    *   **"Alta"**: Si la ganancia total es mayor a 1000.
    *   **"Media"**: Si la ganancia total está entre 500 y 1000 (inclusive).
    *   **"Baja"**: Si la ganancia total es menor a 500.

6.  **Salida**: La función devuelve un objeto con `gananciaTotal`, la `clasificacion` y una `explicacion` detallada del cálculo.

## Cómo Ejecutar la Solución

El código se encuentra en el archivo `evelyn-barrios.js`. Para ejecutarlo:

1.  Abre una terminal.
2.  Navega a la carpeta: `logica-matematica/ejercicio-040/resoluciones/evelyn-barrios/`.
3.  Ejecuta el script con Node.js:

    ```bash
    node evelyn-barrios.js
    ```

La salida mostrará los resultados de los casos de prueba.

## Casos de Prueba

1.  **Prueba 1 (Rentabilidad Alta)**:
    *   **Entrada**: Un escenario con un buen margen de ganancia y altas ventas.
    *   **Resultado Esperado**: Una clasificación de "Alta".

2.  **Prueba 2 (Rentabilidad Baja)**:
    *   **Entrada**: Un escenario con bajo margen o pocas ventas.
    *   **Resultado Esperado**: Una clasificación de "Baja".

3.  **Prueba 3 (Sin Ventas)**:
    *   **Entrada**: Un escenario donde no se proyectan ventas.
    *   **Resultado Esperado**: Ganancia de 0 y clasificación "Baja".
# Solución Ejercicio 039: Estructuras de Datos - Inventario de Food Truck

## Razonamiento del Problema

El desafío es simular la gestión del inventario de un food truck al final del día. Se parte de un stock inicial de productos y se procesa una lista de ventas. El sistema debe actualizar el inventario y, al mismo tiempo, registrar qué ventas se pudieron completar y cuáles no, ya sea por falta de stock o porque el producto no existía.

## Reglas Aplicadas

1.  **Entradas**:
    *   `inventarioInicial`: Un objeto donde las claves son los nombres de los productos (string) y los valores son las cantidades disponibles (número).
    *   `ventas`: Un arreglo de objetos, donde cada objeto representa una venta con `producto` (string) y `cantidad` (número).

2.  **Regla 1 (Inmutabilidad)**: Para no modificar los datos originales, la función crea una copia del `inventarioInicial` sobre la cual trabajará.

3.  **Regla 2 (Procesamiento de Ventas)**: La función itera sobre cada venta en la lista.
    *   **Venta Exitosa**: Si el producto de la venta existe en el inventario y la cantidad disponible es mayor o igual a la cantidad solicitada, la venta es exitosa. Se resta la cantidad del stock y se añade la venta al reporte de `exitosas`.
    *   **Venta Fallida**: Si el producto no existe en el inventario o la cantidad en stock es insuficiente, la venta es fallida. El inventario no se modifica y la venta se añade al reporte de `fallidas`.

4.  **Salida**: La función devuelve un objeto que contiene dos propiedades:
    *   `inventarioFinal`: El objeto con el stock actualizado después de todas las ventas exitosas.
    *   `reporteVentas`: Un objeto con dos arreglos: `exitosas` y `fallidas`.

## Cómo Ejecutar la Solución

El código está en el archivo `evelyn-barrios.js`. Para ejecutarlo:

1.  Abre una terminal.
2.  Navega a la carpeta: `logica-matematica/ejercicio-039/resoluciones/evelyn-barrios/`.
3.  Ejecuta el script con Node.js:

    ```bash
    node evelyn-barrios.js
    ```

La salida mostrará el inventario final y el reporte de ventas en formato JSON para una mejor legibilidad.

## Casos de Prueba

1.  **Prueba 1 (Resultados del día)**:
    *   **Entrada**: Un stock inicial y una lista de ventas que incluye transacciones exitosas, una que falla por falta de stock y otra que falla porque el producto no existe.
    *   **Resultado Esperado**: El inventario se actualiza solo con las ventas exitosas, y el reporte clasifica correctamente cada venta.

2.  **Prueba 2 (Día sin ventas)**:
    *   **Entrada**: El mismo stock inicial pero con un arreglo de ventas vacío.
    *   **Resultado Esperado**: El inventario final es idéntico al inicial y el reporte de ventas muestra ambos arreglos (`exitosas` y `fallidas`) vacíos. Esto prueba que la función maneja correctamente el caso de que no haya transacciones.
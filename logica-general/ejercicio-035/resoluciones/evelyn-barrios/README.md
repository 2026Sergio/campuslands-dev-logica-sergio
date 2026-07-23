# Resolución Ejercicio 035 - Lógica General

## Análisis del Problema

El ejercicio consiste en crear un sistema de decisión para la gestión de inventario. El objetivo es determinar si se debe reordenar un producto basándose en cuatro factores: el stock actual, un umbral de stock mínimo, las ventas semanales y si el producto está en promoción. La función debe devolver una acción clara (`reordenar` o `no reordenar`) y un motivo que justifique la decisión.

## Reglas Aplicadas

Implementé una serie de reglas condicionales con un orden de prioridad para tomar la decisión:

1.  **Regla de Urgencia:** Si el `stockActual` es menor que el `stockMinimo`, la acción es siempre `"reordenar"`. Esta es la condición de mayor prioridad para evitar la falta de producto.

2.  **Regla de Promoción:** Si `promocionActiva` es `true` y las `ventasSemanales` superan un umbral (20 unidades), se decide `"reordenar"` para prepararse para un aumento de la demanda.

3.  **Regla Preventiva:** Si el `stockActual` es bajo (menor al doble del `stockMinimo`) y las `ventasSemanales` son altas (más de 10), se recomienda `"reordenar"` para evitar que el stock caiga al nivel de urgencia.

4.  **Regla por Defecto:** Si ninguna de las condiciones anteriores se cumple, se concluye que el stock es estable y la acción es `"no reordenar"`.

También se añadió una validación inicial para asegurar que los valores numéricos no sean negativos.

## Cómo Ejecutar la Solución

El código se encuentra en el archivo `evelyn-barrios.js` y se puede ejecutar con Node.js para ver los resultados de las pruebas:

```bash
node evelyn-barrios.js
```

La función `decidirReorden(stockActual, stockMinimo, ventasSemanales, promocionActiva)` es el núcleo de la solución.

## Casos de Prueba

- **Prueba de Urgencia:** `decidirReorden(8, 10, 5, false)` -> Devuelve `{ accion: 'reordenar', ... }` porque el stock (8) es menor al mínimo (10).
- **Prueba de Promoción:** `decidirReorden(25, 10, 22, true)` -> Devuelve `{ accion: 'reordenar', ... }` por la combinación de promoción y ventas altas.
- **Prueba Preventiva:** `decidirReorden(18, 10, 15, false)` -> Devuelve `{ accion: 'reordenar', ... }` porque el stock (18) es menor que el doble del mínimo (20) y las ventas son altas (15).
- **Prueba Normal:** `decidirReorden(50, 10, 5, false)` -> Devuelve `{ accion: 'no reordenar', ... }` ya que el stock es suficiente para las ventas actuales.
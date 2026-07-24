# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo de objetos (`menuPuestos`) que contiene los platos con sus propiedades (`nombre`, `precio`, `calificacion`) y un valor numérico (`presupuestoMaximo`).
* **Proceso**: Validación de disponibilidad en el menú, filtrado de opciones que se ajusten al presupuesto máximo, verificación de existencia de opciones válidas, búsqueda iterativa del plato con la mayor calificación dentro de ese subconjunto, y consolidación del reporte final.
* **Salida**: Un objeto que detalla el `plato_recomendado`, su `precio`, `calificacion` y una `explicacion` (o un objeto con `seleccion: null` y un motivo si ningún plato cumple con el presupuesto).

## Reglas identificadas

1. **Validación de Menú Vacío**: Si la lista de opciones está vacía o es nula, el sistema debe retornar inmediatamente un error indicando la falta de disponibilidad.
2. **Filtrado por Límite de Presupuesto**: Solo se deben considerar aquellos platos cuyo precio sea menor o igual al presupuesto máximo provisto por el usuario.
3. **Optimización por Calificación**: Entre las opciones viables financieramente, el algoritmo debe seleccionar obligatoriamente la que posea la calificación de calidad más alta.

## Pruebas

### Caso normal

* **Entrada**: `menuUrbano` (Hot Dog: 8.50/4.2, Hamburguesa: 12.00/4.8, Tacos: 7.00/4.6) con un presupuesto máximo de `10.00`.
* **Resultado esperado**: `{ plato_recomendado: "Tacos al Pastor", precio: 7, calificacion: 4.6, explicacion: "Se aplicó la estrategia de selección eligiendo la mejor calificación dentro del presupuesto de $10." }`

### Caso borde

* **Entrada**: `menuUrbano` con un presupuesto máximo de `4.00`.
* **Resultado esperado**: `{ seleccion: null, motivo: "Ningún plato se ajusta al presupuesto máximo proporcionado." }`

## Explicacion final

La solución funciona porque implementa una estrategia de filtrado en dos fases bien definidas. Primero, reduce drásticamente el universo de opciones descartando los platos que superan el límite financiero mediante el método `filter`, previniendo compras fuera de rango. Segundo, aplica un recorrido comparativo sobre el subconjunto accesible para identificar de forma precisa el plato con la calificación más alta, garantizando así una recomendación óptima tanto en costo como en calidad.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Filtros previos**: Asegúrate de validar y separar las opciones válidas antes de ejecutar bucles de búsqueda o selección para evitar evaluar elementos que no cumplen con las restricciones iniciales de presupuesto.
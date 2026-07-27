# Plantilla de solucion

## Analisis

* **Entrada**: Los parámetros numéricos `partidosJugados`, `partidosGanados`, `golesAnotados` y `golesRecibidos`.
* **Proceso**: Validación de que el divisor de partidos jugados sea mayor a cero, cálculo del porcentaje de efectividad mediante fórmulas de proporción, obtención de la diferencia neta de goles, clasificación condicional basada en umbrales de éxito y formato de salida.
* **Salida**: Un objeto que detalla el `porcentaje_efectividad` formateado con dos decimales y símbolo de porcentaje, la `diferencia_de_goles`, la `categoria_equipo` y una `explicacion` (o un objeto con un mensaje de `error` si los partidos jugados son menores o iguales a cero).

## Reglas identificadas

1. **Validación contra División por Cero**: El número de partidos jugados debe ser estrictamente mayor a cero para evitar fallos matemáticos en el cálculo de porcentajes.
2. **Cálculo Proporcional y Diferencial**: El porcentaje de efectividad se obtiene dividiendo las victorias entre los partidos jugados y multiplicando por 100, mientras que la diferencia de goles resulta de restar los goles recibidos a los anotados.
3. **Clasificación por Umbrales de Rendimiento**: El equipo se categoriza jerárquicamente en "Líder de Torneo" ($\ge$ 80%), "Competitivo" ($\ge$ 50%) o "Regular" (por debajo del 50%).

## Pruebas

### Caso normal

* **Entrada**: `jugados = 10, ganados = 8, anotados = 35, recibidos = 15`
* **Resultado esperado**: `{ porcentaje_efectividad: "80.00%", diferencia_de_goles: 20, categoria_equipo: "Líder de Torneo", explicacion: "Se calculó el porcentaje de efectividad en base a los partidos ganados y la proporción de goles anotados frente a recibidos." }`

### Caso borde

* **Entrada**: `jugados = 5, ganados = 0, anotados = 2, recibidos = 18`
* **Resultado esperado**: `{ porcentaje_efectividad: "0.00%", diferencia_de_goles: -16, categoria_equipo: "Regular", explicacion: "Se calculó el porcentaje de efectividad en base a los partidos ganados y la proporción de goles anotados frente a recibidos." }`

## Explicacion final

La solución funciona porque aplica principios matemáticos robustos combinados con validaciones defensivas. Primero, previene errores críticos de ejecución al asegurar que no ocurran divisiones entre cero mediante una guarda en los partidos jugados. A continuación, procesa de manera limpia las fórmulas de proporción para el porcentaje y de diferencia para el balance de goles. Finalmente, evalúa la efectividad obtenida a través de umbrales condicionales claros, entregando un reporte estructurado y normalizado.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Guarda preventiva de denominador**: Verifica siempre que el total de elementos de división sea mayor a cero antes de calcular cocientes o porcentajes, evitando así excepciones matemáticas imprevistas en la ejecución.
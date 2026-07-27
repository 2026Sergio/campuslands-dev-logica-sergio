# Plantilla de solucion

## Analisis

* **Entrada**: Dos valores numéricos (`partidosGanadosJugador` y `totalPartidosJugados`) que representan los casos favorables y los casos totales de rendimiento en el torneo.
* **Proceso**: Validación de integridad de tipos numéricos, control defensivo para asegurar que el total de partidos sea mayor a cero y que los partidos ganados se encuentren dentro del rango lógico permitido (sin ser negativos ni mayores al total), aplicación de la fórmula matemática de probabilidad básica (división de favorables entre totales y multiplicación por 100), estandarización de decimales mediante `toFixed` y `parseFloat`, y categorización del nivel de rendimiento por umbrales porcentuales.
* **Salida**: Un objeto que detalla los `partidos_ganados`, el `total_partidos`, la `probabilidad_decimal`, la `probabilidad_porcentaje`, el `nivel_rendimiento` y una `explicacion` (o un objeto con un mensaje de `error` si las validaciones numéricas o de límites fallan).

## Reglas identificadas

1. **Validación de Límites y División Segura**: El total de partidos jugados debe ser obligatoriamente mayor a cero para evitar errores matemáticos de división por cero; asimismo, los partidos ganados no pueden ser negativos ni superar el total de encuentros.
2. **Cálculo de Probabilidad Básica**: La probabilidad de victoria se obtiene aplicando el cociente entre los casos favorables (partidos ganados) y los casos totales (partidos jugados), expresándolo tanto en proporción decimal como en formato porcentual.
3. **Clasificación por Umbrales de Rendimiento**: El porcentaje de éxito obtenido se categoriza automáticamente en "Alto / Favorito" ($\ge$ 75%), "Moderado" ($\ge$ 40% y < 75%) o "Bajo / En Riesgo" (< 40%).

## Pruebas

### Caso normal

* **Entrada**: `partidosGanadosJugador = 14`, `totalPartidosJugados = 20`
* **Resultado esperado**: `{ partidos_ganados: 14, total_partidos: 20, probabilidad_decimal: 0.7, probabilidad_porcentaje: "70%", nivel_rendimiento: "Moderado", explicacion: "Se calculó la probabilidad básica dividiendo los partidos ganados entre el total de partidos jugados, obteniendo el porcentaje de éxito para el torneo de ping pong." }`

### Caso borde

* **Entrada**: `partidosGanadosJugador = 0`, `totalPartidosJugados = 5`
* **Resultado esperado**: `{ partidos_ganados: 0, total_partidos: 5, probabilidad_decimal: 0, probabilidad_porcentaje: "0%", nivel_rendimiento: "Bajo / En Riesgo", explicacion: "Se calculó la probabilidad básica dividiendo los partidos ganados entre el total de partidos jugados, obteniendo el porcentaje de éxito para el torneo de ping pong." }`

## Explicacion final

La solución funciona porque implementa de forma rigurosa la fórmula estadística de probabilidad teórica y empírica, combinando validaciones defensivas exhaustivas de rangos y tipos de datos. Al asegurar que los valores de entrada sean matemáticamente viables, el algoritmo calcula con absoluta precisión los cocientes decimales y porcentuales, permitiendo clasificar correctamente el desempeño competitivo del deportista.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Prueba de escritorio para probabilidad y porcentajes**: Realiza manualmente la división entre tus partidos ganados y el total de encuentros, multiplica por 100 y comprueba los umbrales de rendimiento utilizando papel o una calculadora estándar antes de programar la lógica para asegurar que los resultados coincidan exactamente.
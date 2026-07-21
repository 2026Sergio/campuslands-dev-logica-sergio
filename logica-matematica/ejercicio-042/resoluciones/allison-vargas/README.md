# Plantilla de solucion - Porcentajes y Proporciones (Ranking de Fútbol Sala)

## Analisis

- Entrada:
  - `partidosGanados`: Cantidad de victorias conseguidas por el equipo.
  - `partidosEmpatados`: Cantidad de empates registrados.
  - `partidosJugados`: Número total de encuentros disputados en la liga.
- Proceso:
  - Validar que los valores sean enteros no negativos y que `partidosJugados` sea mayor a cero.
  - Verificar que las victorias más los empates no superen los partidos disputados.
  - Calcular los puntos logrados (3 puntos por victoria, 1 por empate) y los puntos máximos posibles (3 por cada partido disputado).
  - Determinar el porcentaje de efectividad según la proporción de puntos ganados frente a los posibles.
  - Asignar una categoría de rendimiento según el porcentaje obtenido.
- Salida:
  - Partidos jugados, puntos obtenidos, puntos máximos, porcentaje de efectividad, clasificación y explicación textual.

## Reglas identificadas

1. **Cálculo de puntos:**  
   $$\text{Puntos Obtenidos} = (\text{Ganados} \times 3) + (\text{Empatados} \times 1)$$  
   $$\text{Puntos Máximos} = \text{Jugados} \times 3$$
2. **Proporción y Porcentaje:**  
   $$\text{Efectividad (\%)} = \left( \frac{\text{Puntos Obtenidos}}{\text{Puntos Máximos}} \right) \times 100$$
3. **Clasificación por efectividad:**
   - Mayor o igual al 75%: "Líder de Liga (Puestos de Clasificación Directa)".
   - Entre 50% y 74.99%: "Zona Media (Competitivo en Lucha por Play-offs)".
   - Menor al 50%: "Zona Baja (Riesgo de Descenso)".

## Pruebas

### Caso normal

Entrada:
- Ganados: `7`
- Empatados: `2`
- Jugados: `10`

Resultado esperado:
- Puntos obtenidos: `23`
- Puntos máximos: `30`
- Efectividad: `76.67%`
- Clasificación: `Líder de Liga (Puestos de Clasificación Directa)`

### Caso borde

Entrada:
- Ganados: `5`
- Empatados: `0`
- Jugados: `5`

Resultado esperado:
- Puntos obtenidos: `15`
- Puntos máximos: `15`
- Efectividad: `100%`
- Clasificación: `Líder de Liga (Puestos de Clasificación Directa)`

## Explicacion final

La solución analiza el rendimiento de un equipo de fútbol sala evaluando la relación entre los puntos cosechados y los puntos hipotéticos ideales. Mediante la regla de tres y validaciones de coherencia lógica, ofrece un porcentaje exacto para determinar la posición relativa del club en la tabla de la liga.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.
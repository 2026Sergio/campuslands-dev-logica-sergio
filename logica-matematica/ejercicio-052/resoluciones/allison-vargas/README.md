# Plantilla de solucion - Probabilidad Básica (Ping Pong)

## Analisis

- Entrada:
  - `saquesEfectivos`: Cantidad de saques convertidos directamente en punto favorable.
  - `saquesFallados`: Cantidad de saques errados o perdidos.
  - `puntosPistaEfectivos`: Puntos ganados en intercambios de rally.
  - `puntosPistaFallados`: Puntos perdidos en intercambios de rally.
- Proceso:
  - Validar que todos los valores ingresados sean enteros no negativos y que el total acumulado sea mayor a cero.
  - Aplicar la definición clásica de probabilidad de Laplace:
    $$P(E) = \frac{\text{Casos Favorables}}{\text{Casos Posibles}}$$
  - Calcular la probabilidad parcial de efectividad en el saque y en juego libre (pista).
  - Calcular la probabilidad global de victoria dividiendo el total de puntos ganados entre el total de puntos disputados.
  - Categorizar la expectativa de triunfo según el porcentaje global obtenido.
- Salida:
  - Total de puntos jugados, puntos favorables, porcentaje de efectividad de saque, porcentaje de efectividad en pista, probabilidad global de victoria, clasificación y explicación.

## Reglas identificadas

1. **Probabilidad de Laplace (Victoria Global):**  
   $$P(\text{Victoria}) = \frac{\text{Saques Efectivos} + \text{Puntos Pista Efectivos}}{\text{Total Puntos Disputados}}$$
2. **Transformación a Porcentaje:**  
   $$\text{Porcentaje (\%)} = \text{round}_2(P(E) \times 100)$$
3. **Clasificación de Expectativa:**
   - Si $P(\text{Victoria}) \ge 70\%$: "Alta Probabilidad de Victoria (Rendimiento Dominante)".
   - Si $P(\text{Victoria})$ entre $50\%$ y $69.99\%$: "Probabilidad Moderada (Partido Competitivo)".
   - Si $P(\text{Victoria}) < 50\%$: "Baja Probabilidad de Victoria (Requiere Ajuste Técnico)".

## Pruebas

### Caso normal

Entrada:
- Saques efectivos: `12`, Fallados: `4` (Total saques: `16`)
- Pista efectivos: `18`, Fallados: `6` (Total pista: `24`)

Resultado esperado:
- Total puntos disputados: `40`
- Puntos favorables: `30`
- Probabilidad saque: `75%`
- Probabilidad pista: `75%`
- Probabilidad de victoria global: `75%`
- Clasificación: `Alta Probabilidad de Victoria (Rendimiento Dominante)`

### Caso borde

Entrada:
- Saques efectivos: `10`, Fallados: `0`
- Pista efectivos: `15`, Fallados: `0`

Resultado esperado:
- Total puntos disputados: `25`
- Puntos favorables: `25`
- Probabilidad de victoria global: `100%`
- Clasificación: `Alta Probabilidad de Victoria (Rendimiento Dominante)`

## Explicacion final

La solución aplica el modelo probabilístico de Laplace para evaluar objetivamente el desempeño deportivo en un partido de ping pong. Al separar las métricas entre saque y juego de pista, permite aislar fortalezas tácticas e inferir la probabilidad global de triunfo.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.
# Plantilla de solucion - Velocidad, Tiempo y Distancia (Dibujo Digital)

## Analisis

- Entrada:
  - `distanciaPx`: Recorrido del trazo en píxeles ($px$).
  - `tiempoSeg`: Duración del trazo en segundos ($s$).
  - `velocidadMuestraPxSeg` *(opcional)*: Velocidad de muestreo del lápiz óptico o stylus ($px/s$).
- Proceso:
  - Validar tipos de datos y restricciones de dominio ($d \ge 0$, $t > 0$).
  - Si se proporciona distancia y tiempo, calcular velocidad:
    $$v = \frac{d}{t}$$
  - Si se proporciona tiempo y velocidad para una distancia cero, calcular distancia total:
    $$d = v \times t$$
  - Categorizar la técnica del trazo según la velocidad calculada en píxeles por segundo.
- Salida:
  - Distancia ($px$), tiempo ($s$), velocidad ($px/s$), clasificación de fluidez y explicación técnica.

## Reglas identificadas

1. **Relación Kinemática del Trazo:**
   $$d = v \cdot t \quad \Longleftrightarrow \quad v = \frac{d}{t} \quad \Longleftrightarrow \quad t = \frac{d}{v}$$
2. **Clasificación del Estilo de Trazo:**
   - Si $v \ge 800 \text{ px/s}$: "Trazo Rápido (Bocetado ágil)".
   - Si $300 \le v < 800 \text{ px/s}$: "Trazo Moderado (Entintado fluido)".
   - Si $v < 300 \text{ px/s}$: "Trazo Lento (Detalle y precisión)".

## Pruebas

### Caso normal

Entrada:
- Distancia: `1200 px`
- Tiempo: `3 s`

Resultado esperado:
- Velocidad: $\frac{1200}{3} = 400 \text{ px/s}$
- Clasificación: `Trazo Moderado (Entintado fluido)`

### Caso borde

Entrada:
- Distancia: `0 px` (incógnita a calcular)
- Tiempo: `5 s`
- Velocidad dada: `450 px/s`

Resultado esperado:
- Distancia calculada: $450 \times 5 = 2250 \text{ px}$
- Clasificación: `Cálculo de Recorrido Estimado`

## Explicacion final

El ejercicio aplica la física del movimiento rectilíneo uniforme al contexto del dibujo digital sobre tabletas gráficas. Permite analizar el ritmo de trabajo de un artista traduciendo la velocidad del puntero en diferentes dinámicas de ilustración (boceto vs. entintado fino).

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.
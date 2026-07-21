# Plantilla de solucion - Áreas y Perímetros (Tatuajes)

## Analisis

- Entrada:
  - `forma`: Tipo de figura geométrica del diseño (`"rectangulo"` o `"circulo"`).
  - `dimensiones`: Objeto con las medidas del diseño (`{ ancho, alto }` o `{ radio }`).
  - `precioPorCm2`: Tarifa por centímetro cuadrado (cubre gasto de tinta y tiempo de sombreado/relleno).
  - `precioPorCmPerimetro`: Tarifa por centímetro lineal (cubre desgaste de agujas y trabajo de delineado).
- Proceso:
  - Validar que las dimensiones y tarifas sean numéricas y mayores a cero.
  - Calcular el área y el perímetro según la figura:
    - **Rectángulo:** $A = \text{ancho} \times \text{alto}$, $P = 2 \times (\text{ancho} + \text{alto})$
    - **Círculo:** $A = \pi \times r^2$, $P = 2 \times \pi \times r$
  - Calcular los costos parciales de delineado y sombreado para determinar la tarifa final.
  - Clasificar el tatuaje según el área ocupada.
- Salida:
  - Forma del diseño, área ($\text{cm}^2$), perímetro ($\text{cm}$), costos desglosados, costo total, clasificación y explicación.

## Reglas identificadas

1. **Fórmulas Geométricas:**
   - Rectángulo: $A = a \cdot b \quad | \quad P = 2(a + b)$
   - Círculo: $A = \pi \cdot r^2 \quad | \quad P = 2\pi \cdot r$
2. **Costo Total:**  
   $$\text{Costo Total} = (A \times \text{precio}_{cm^2}) + (P \times \text{precio}_{cm})$$
3. **Clasificación del Tamaño:**
   - Si $A \le 25 \text{ cm}^2$: "Tatuaje Pequeño (Minimalista)".
   - Si $25 < A \le 100 \text{ cm}^2$: "Tatuaje Mediano (Estándar)".
   - Si $A > 100 \text{ cm}^2$: "Tatuaje Grande (Pieza Completa)".

## Pruebas

### Caso normal

Entrada:
- Forma: `"rectangulo"`, dimensiones: `{ ancho: 10, alto: 5 }`
- Tarifa $cm^2$: `$1.5$`, Tarifa $cm$ delineado: `$0.8$`

Resultado esperado:
- Área: $50 \text{ cm}^2$
- Perímetro: $30 \text{ cm}$
- Costo sombreado: $50 \times 1.5 = \$75.00$
- Costo delineado: $30 \times 0.8 = \$24.00$
- Costo Total: $\$99.00$
- Clasificación: `Tatuaje Mediano (Estándar)`

### Caso borde

Entrada:
- Forma: `"circulo"`, dimensiones: `{ radio: 2 }`
- Tarifa $cm^2$: `$2.0$`, Tarifa $cm$ delineado: `$1.0$`

Resultado esperado:
- Área: $\pi \times 2^2 \approx 12.57 \text{ cm}^2$
- Perímetro: $2\pi \times 2 \approx 12.57 \text{ cm}$
- Costo Total: $\$37.71$
- Clasificación: `Tatuaje Pequeño (Minimalista)`

## Explicacion final

El ejercicio aplica conceptos de geometría plana básica para tarifar un trabajo de arte corporal. Al separar el cálculo de área (relleno/sombreado) y perímetro (lineado/contorno), el modelo refleja con precisión el costo de insumos y tiempo requerido por el artista.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.
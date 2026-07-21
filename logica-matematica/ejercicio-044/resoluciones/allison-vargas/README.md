# Plantilla de solucion - Rangos y Máximos (Inventario de Motos)

## Analisis

- Entrada:
  - `motosStock`: Lista de números enteros que representan las unidades disponibles de cada modelo de motocicleta.
  - `capacidadMaximaPermitida`: Límite máximo total de unidades que puede albergar la bodega del concesionario.
- Proceso:
  - Validar que los datos ingresados correspondan a arreglos válidos y que las capacidades sean enteros positivos.
  - Recorrer el arreglo para acumular el stock total de unidades.
  - Determinar el modelo con la mayor cantidad de unidades (`máximo`) y la menor cantidad (`mínimo`).
  - Calcular el rango de variación ($Rango = Máximo - Mínimo$) y el porcentaje de ocupación global del almacén.
  - Categorizar la condición del inventario según la ocupación alcanzada.
- Salida:
  - Total de modelos evaluados, stock global, capacidad máxima, porcentaje de ocupación, valor máximo, valor mínimo, rango, clasificación y resumen explicativo.

## Reglas identificadas

1. **Cálculo del Rango de Inventario:**
   $$\text{Rango} = \text{Unidades Máximas} - \text{Unidades Mínimas}$$
2. **Cálculo de Porcentaje de Ocupación:**
   $$\text{Porcentaje de Ocupación} = \left( \frac{\text{Total Unidades}}{\text{Capacidad Máxima}} \right) \times 100$$
3. **Clasificación del Estado del Almacén:**
   - Si $\text{Total Unidades} > \text{Capacidad Máxima}$: "Sobrestock (Excede la Capacidad Máxima del Almacén)".
   - Si el porcentaje es $\ge 80\%$: "Capacidad Óptima (Nivel de Almacenamiento Alto)".
   - Si el porcentaje está entre $40\%$ y $79.99\%$: "Capacidad Estándar (Nivel de Almacenamiento Estabilizado)".
   - Si el porcentaje es $< 40\%$: "Bajo Stock (Requiere Reabastecimiento urgente)".

## Pruebas

### Caso normal

Entrada:
- Stock de modelos: `[15, 30, 8, 22, 45]`
- Capacidad máxima: `150`

Resultado esperado:
- Total unidades: `120`
- Porcentaje de ocupación: `80%`
- Máximo: `45` | Mínimo: `8`
- Rango de variación: `37`
- Clasificación: `Capacidad Óptima (Nivel de Almacenamiento Alto)`

### Caso borde (Sobrestock)

Entrada:
- Stock de modelos: `[50, 60]`
- Capacidad máxima: `100`

Resultado esperado:
- Total unidades: `110`
- Porcentaje de ocupación: `110%`
- Máximo: `60` | Mínimo: `50`
- Rango de variación: `10`
- Clasificación: `Sobrestock (Excede la Capacidad Máxima del Almacén)`

## Explicacion final

La solución permite controlar los límites de stock de un concesionario de motocicletas evaluando extremos (mínimo y máximo) e identificando discrepancias en el almacenamiento. Al comparar el volumen total retenido frente al espacio disponible, la herramienta previene desbordamientos y detecta faltantes de mercancía.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.
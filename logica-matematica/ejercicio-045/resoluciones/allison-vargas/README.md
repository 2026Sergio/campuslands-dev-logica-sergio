# Plantilla de solucion - Mínimos y Límites (Taller Mecánico)

## Analisis

- Entrada:
  - `tiemposReparacionMinutos`: Arreglo de números positivos que representan la duración en minutos de cada servicio mecánico.
  - `limiteMinimoGarantizado`: Tiempo mínimo aceptable para asegurar una inspección completa.
  - `limiteMaximoAceptable`: Tiempo máximo tolerado antes de considerar que el servicio sufrió un retraso.
- Proceso:
  - Validar que los límites y el arreglo contengan valores numéricos coherentes.
  - Recorrer los tiempos registrados identificando la menor y la mayor duración.
  - Contabilizar cuántos servicios están por debajo del límite mínimo (trabajos apresurados), cuántos superan el límite máximo (retrasos) y cuántos están dentro del rango óptimo.
  - Calcular el porcentaje de cumplimiento operativo.
  - Categorizar la calidad operativa del taller mecánico.
- Salida:
  - Resumen con total de trabajos, mínimo, máximo, servicios en rango, fuera de rango, porcentaje de cumplimiento, clasificación y mensaje explicativo.

## Reglas identificadas

1. **Rango de Tolerancia Operativa:**  
   Un trabajo es **Aceptable** si:  
   $$\text{Límite Mínimo} \le \text{Tiempo} \le \text{Límite Máximo}$$
2. **Cálculo de Porcentaje de Cumplimiento:**  
   $$\text{Cumplimiento (\%)} = \left( \frac{\text{Trabajos Aceptables}}{\text{Total Trabajos}} \right) \times 100$$
3. **Clasificación del Estado del Taller:**
   - Cumplimiento $\ge 85\%$: "Operación Eficiente (Alta Calidad y Tiempos Óptimos)".
   - Cumplimiento entre $60\%$ y $84.99\%$: "Operación Regular (Requiere Ajuste de Procesos)".
   - Cumplimiento $< 60\%$: "Operación Crítica (Desviación Alta en Tiempos de Entrega)".

## Pruebas

### Caso normal

Entrada:
- Tiempos de reparación: `[30, 45, 60, 90, 120, 40]`
- Límite mínimo: `30`
- Límite máximo: `100`

Resultado esperado:
- Trabajos aceptables: `5`
- Trabajo retrasado: `1` (120 min)
- Porcentaje de cumplimiento: `83.33%`
- Clasificación: `Operación Regular (Requiere Ajuste de Procesos)`

### Caso borde

Entrada:
- Tiempos de reparación: `[15, 150]`
- Límite mínimo: `30`
- Límite máximo: `100`

Resultado esperado:
- Trabajos apresurados: `1` (15 min)
- Trabajos retrasados: `1` (150 min)
- Trabajos aceptables: `0`
- Porcentaje de cumplimiento: `0%`
- Clasificación: `Operación Crítica (Desviación Alta en Tiempos de Entrega)`

## Explicacion final

La solución monitorea la calidad de atención en un taller mecánico mediante el control de fronteras mínimas y máximas de tiempo. Al delimitar el proceso, permite alertar sobre revisiones apresuradas que comprometan la seguridad vehicular y detectar cuellos de botella que generen demoras en las entregas.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.
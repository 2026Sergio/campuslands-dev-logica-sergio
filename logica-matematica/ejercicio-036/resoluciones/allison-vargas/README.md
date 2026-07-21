# Plantilla de solucion - Presupuestos y Descuentos (Animación 3D)

## Analisis

- Entrada:
  - `costoBase`: Precio por segundo de renderizado en dólares.
  - `cantidadSegundos`: Duración total de la animación en segundos.
  - `esClienteFrecuente`: Indicador verdadero/falso si el cliente tiene convenio previa.
- Proceso:
  - Validar que el costo por segundo y la cantidad de segundos sean mayores a cero.
  - Calcular el subtotal (Costo base × Cantidad de segundos).
  - Aplicar porcentaje de descuento por volumen (5%, 10% o 15%).
  - Sumar 5% adicional de descuento si es cliente frecuente.
  - Restar el total del descuento al subtotal y clasificar el proyecto según el presupuesto final.
- Salida:
  - Subtotal, descuento aplicado, total a pagar, clasificación de presupuesto y explicación.

## Reglas identificadas

1. **Descuento por volumen de segundos:**
   - Menos de 10 segundos: 0% de descuento.
   - Entre 10 y 29 segundos: 5% de descuento.
   - Entre 30 y 59 segundos: 10% de descuento.
   - 60 segundos o más: 15% de descuento.
2. **Beneficio cliente frecuente:** Se le suma un 5% extra al porcentaje de descuento.
3. **Clasificación por total:**
   - Hasta $500: "Presupuesto Bajo (Render Básico)".
   - De $501 a $2000: "Presupuesto Medio (Render Estándar)".
   - Más de $2000: "Presupuesto Alto (Producción Completa)".

## Pruebas

### Caso normal

Entrada:
- Costo base por segundo: `$50`
- Cantidad de segundos: `35`
- Cliente frecuente: `Sí (true)`

Resultado esperado:
- Subtotal: `$1750`
- Descuento aplicado: `15%` (10% por volumen + 5% por cliente frecuente)
- Total a pagar: `$1487.50`
- Clasificación: `Presupuesto Medio (Render Estándar)`

### Caso borde

Entrada:
- Costo base por segundo: `$30`
- Cantidad de segundos: `5`
- Cliente frecuente: `No (false)`

Resultado esperado:
- Subtotal: `$150`
- Descuento aplicado: `0%`
- Total a pagar: `$150`
- Clasificación: `Presupuesto Bajo (Render Básico)`

## Explicacion final

La solución funciona porque primero calcula el costo bruto de la animación multiplicando la tarifa base por los segundos de trabajo. Después evalúa si el proyecto califica para un descuento por volumen y suma el beneficio de cliente frecuente si corresponde. Finalmente, aplica ese descuento al subtotal para obtener el precio final ajustado de forma transparente.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.
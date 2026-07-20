# Plantilla de solucion

## Analisis

- Entrada:
  - Presupuesto inicial del proyecto.
  - Porcentaje de descuento aplicado.

- Proceso:
  - Validar que el presupuesto sea mayor que cero.
  - Validar que el descuento esté entre 0 y 100.
  - Calcular el valor del descuento.
  - Restar el descuento al presupuesto inicial.
  - Mostrar el presupuesto final.

- Salida:
  - Valor del descuento aplicado.
  - Presupuesto final.

## Reglas identificadas

1. El presupuesto debe ser mayor que cero.
2. El porcentaje de descuento debe estar entre 0 y 100.
3. El presupuesto final se obtiene restando el descuento al presupuesto inicial.

## Pruebas

### Caso normal

Entrada:

Presupuesto: 2500

Descuento: 15%

Resultado esperado:

Descuento: 375.00

Presupuesto final: 2125.00

### Caso borde

Entrada:

Presupuesto: 0

Descuento: 10%

Resultado esperado:

El presupuesto debe ser mayor que cero.

## Explicacion final

La solución funciona porque primero verifica que el presupuesto y el porcentaje de descuento sean válidos. Luego calcula el monto del descuento utilizando una regla de porcentaje y lo resta del presupuesto original para obtener el valor final. Si los datos no cumplen las condiciones establecidas, se informa el error al usuario.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.
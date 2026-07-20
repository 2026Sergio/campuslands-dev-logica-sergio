# Plantilla de solucion

## Analisis

- Entrada:
  - Precio inicial de un producto de comida urbana.
  - Cantidad de productos vendidos.
  - Porcentaje de descuento aplicado.

- Proceso:
  - Validar que el precio y la cantidad sean valores positivos.
  - Calcular el costo total sin descuento:
    - total = precio × cantidad
  - Calcular el valor del descuento:
    - descuento = total × porcentaje / 100
  - Restar el descuento al total inicial.
  - Obtener el valor final de la venta.

- Salida:
  - Total antes del descuento.
  - Valor del descuento.
  - Total final de la venta.

## Reglas identificadas

1. El precio y la cantidad deben ser mayores que cero.
2. El porcentaje de descuento debe estar entre 0 y 100.
3. El valor final se obtiene restando el descuento al costo total.

## Pruebas

### Caso normal

Entrada:

Precio producto: 20

Cantidad: 5

Descuento: 10%

Resultado esperado:

Total sin descuento: 100

Descuento aplicado: 10

Total final: 90

### Caso borde

Entrada:

Precio producto: 0

Cantidad: 5

Descuento: 10%

Resultado esperado:

El precio y la cantidad deben ser mayores que cero.

## Explicacion final

La solución funciona porque primero valida los datos ingresados para evitar cálculos incorrectos. Después aplica las fórmulas necesarias para simular una compra, calculando el costo total, el descuento correspondiente y finalmente el valor que debe pagar el cliente.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.
# Plantilla de solucion

## Analisis

- Entrada:
  - Un arreglo con pedidos de comida urbana.
  - Cada pedido contiene producto, precio y cantidad.

- Proceso:
  - Recorrer cada pedido.
  - Calcular el subtotal multiplicando precio por cantidad.
  - Calcular un impuesto del 12%.
  - Obtener el valor total del pedido.

- Salida:
  - Producto vendido.
  - Subtotal.
  - Impuesto aplicado.
  - Total a pagar.

## Reglas identificadas

1. El subtotal se obtiene multiplicando precio por cantidad.
2. Cada pedido debe incluir un impuesto del 12%.
3. El total corresponde a la suma del subtotal más el impuesto.

## Pruebas

### Caso normal

Entrada:

- Hamburguesa:
  - Precio: 8
  - Cantidad: 3

- Tacos:
  - Precio: 5
  - Cantidad: 4

Resultado esperado:

- Hamburguesa:
  - Subtotal: 24.00
  - Impuesto: 2.88
  - Total: 26.88

- Tacos:
  - Subtotal: 20.00
  - Impuesto: 2.40
  - Total: 22.40

### Caso borde

Entrada:

- Producto:
  - Hot Dog
  - Precio: 6
  - Cantidad: 0

Resultado esperado:

- Subtotal: 0.00
- Impuesto: 0.00
- Total: 0.00

## Explicacion final

La solución funciona porque aplica fórmulas comerciales para calcular el costo de cada pedido. Recorre la lista de productos, calcula el subtotal, agrega el impuesto correspondiente y genera un resultado detallado para cada venta de comida urbana.
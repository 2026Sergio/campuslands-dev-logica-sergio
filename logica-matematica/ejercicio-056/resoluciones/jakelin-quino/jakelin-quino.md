# Logica matematica 056 - presupuestos y descuentos

## Analisis

- Entrada: Precio original y porcentaje de descuento.
- Proceso: Calcular el precio con descuento.
- Salida: El precio final.

## Reglas identificadas

1. Calcular el descuento: precio * (porcentaje / 100).
2. Restar el descuento del precio original.

## Pruebas

### Caso normal

Entrada: precio: 100, descuento: 20

Resultado esperado: 80

### Caso borde

Entrada: precio: 50, descuento: 0

Resultado esperado: 50

## Explicacion final

La función calcula el descuento multiplicando el precio por el porcentaje dividido entre 100, y luego resta ese valor al precio original.
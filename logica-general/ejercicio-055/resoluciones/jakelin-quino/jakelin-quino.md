# Logica general 055 - reglas de negocio

## Analisis

- Entrada: Un monto de compra y el tipo de cliente.
- Proceso: Aplicar descuento según el tipo de cliente.
- Salida: El monto final con descuento.

## Reglas identificadas

1. Si el cliente es "VIP", aplicar 20% de descuento.
2. Si el cliente es "regular", aplicar 10% de descuento.
3. Si el cliente es "nuevo", no aplicar descuento.

## Pruebas

### Caso normal

Entrada: monto: 100, tipo: "VIP"

Resultado esperado: 80

### Caso borde

Entrada: monto: 50, tipo: "nuevo"

Resultado esperado: 50

## Explicacion final

La función revisa el tipo de cliente y aplica el descuento correspondiente al monto de compra.
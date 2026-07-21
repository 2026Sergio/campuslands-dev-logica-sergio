# Logica general 059 - inventarios logicos

## Analisis

- Entrada: Un objeto con productos y cantidades, y un nombre de producto.
- Proceso: Verificar si el producto existe en el inventario.
- Salida: Mensaje indicando si está disponible o no.

## Reglas identificadas

1. Buscar el producto en el inventario.
2. Si existe y la cantidad es mayor que 0, está disponible.
3. Si existe y la cantidad es 0, no hay stock.
4. Si no existe, el producto no está registrado.

## Pruebas

### Caso normal

Entrada: inventario: {manzanas: 5, peras: 0}, producto: "manzanas"

Resultado esperado: disponible

### Caso borde

Entrada: inventario: {manzanas: 5, peras: 0}, producto: "uvas"

Resultado esperado: no registrado

## Explicacion final

La función busca el producto en el inventario y revisa su cantidad para decidir el mensaje.
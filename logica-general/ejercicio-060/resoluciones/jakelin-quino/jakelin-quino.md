# Logica general 060 - estrategias de seleccion

## Analisis

- Entrada: Un arreglo de opciones y un criterio.
- Proceso: Seleccionar la mejor opción según el criterio.
- Salida: La opción seleccionada.

## Reglas identificadas

1. Si el criterio es "menor", seleccionar el número más pequeño.
2. Si el criterio es "mayor", seleccionar el número más grande.
3. Si el criterio es "medio", seleccionar el número del centro.

## Pruebas

### Caso normal

Entrada: opciones: [5, 2, 8, 1, 9], criterio: "mayor"

Resultado esperado: 9

### Caso borde

Entrada: opciones: [3], criterio: "menor"

Resultado esperado: 3

## Explicacion final

La función revisa el criterio y recorre las opciones para encontrar la que cumple con la regla.
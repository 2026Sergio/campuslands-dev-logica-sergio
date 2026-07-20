# Logica general 056 - matrices simples

## Analisis

- Entrada: Una matriz de 2x2 (arreglo de arreglos).
- Proceso: Sumar todos los elementos de la matriz.
- Salida: La suma total.

## Reglas identificadas

1. Recorrer cada fila de la matriz.
2. Recorrer cada elemento de la fila.
3. Sumar todos los elementos.

## Pruebas

### Caso normal

Entrada: [[1, 2], [3, 4]]

Resultado esperado: 10

### Caso borde

Entrada: [[0, 0], [0, 0]]

Resultado esperado: 0

## Explicacion final

La función usa dos ciclos para recorrer la matriz y sumar todos los números.
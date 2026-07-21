# Logica matematica 057 - estadisticas de ranking

## Analisis

- Entrada: Un arreglo de números (puntuaciones).
- Proceso: Calcular el puntaje más alto, el más bajo y el promedio.
- Salida: Máximo, mínimo y promedio.

## Reglas identificadas

1. Recorrer el arreglo para encontrar el número más alto.
2. Recorrer el arreglo para encontrar el número más bajo.
3. Sumar todos los números y dividir entre la cantidad para el promedio.

## Pruebas

### Caso normal

Entrada: puntuaciones: [12, 18, 25, 30]

Resultado esperado: max: 30, min: 12, promedio: 21.25

### Caso borde

Entrada: puntuaciones: []

Resultado esperado: max: 0, min: 0, promedio: 0

## Explicacion final

La función busca el número más alto y más bajo del arreglo, y calcula el promedio sumando todos y dividiendo entre la cantidad.
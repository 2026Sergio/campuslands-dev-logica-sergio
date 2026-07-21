# Logica matematica 048 - patrones de puntuacion

## Analisis

- Entrada: Un arreglo de números (puntuaciones).
- Proceso: Contar cuántas puntuaciones son pares y cuántas son impares.
- Salida: Cantidad de pares e impares.

## Reglas identificadas

1. Recorrer el arreglo de puntuaciones.
2. Si un número es divisible por 2, es par.
3. Si no es divisible por 2, es impar.
4. Contar cuántos hay de cada tipo.

## Pruebas

### Caso normal

Entrada: puntuaciones: [12, 18, 25, 30]

Resultado esperado: pares: 3, impares: 1

### Caso borde

Entrada: puntuaciones: []

Resultado esperado: pares: 0, impares: 0

## Explicacion final

La función recorre el arreglo y revisa si cada número es par o impar usando el operador de módulo (%).
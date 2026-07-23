# Logica matematica 051 - conteo combinatorio simple

## Analisis

- Entrada: Un número total de elementos y un número a elegir.
- Proceso: Calcular las combinaciones posibles usando la fórmula n! / (r! * (n-r)!).
- Salida: El número de combinaciones.

## Reglas identificadas

1. Calcular el factorial del total (n!).
2. Calcular el factorial de los elegidos (r!).
3. Calcular el factorial de la diferencia (n-r)!.
4. Dividir n! entre (r! * (n-r)!).

## Pruebas

### Caso normal

Entrada: total: 5, elegir: 2

Resultado esperado: 10

### Caso borde

Entrada: total: 3, elegir: 0

Resultado esperado: 1

## Explicacion final

La función calcula el factorial de cada parte y aplica la fórmula de combinaciones. Si se eligen 0 elementos, solo hay 1 combinación posible.
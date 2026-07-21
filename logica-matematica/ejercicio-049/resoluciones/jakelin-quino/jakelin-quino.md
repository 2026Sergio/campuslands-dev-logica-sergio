# Logica matematica 049 - modulos y divisibilidad

## Analisis

- Entrada: Un número y un divisor.
- Proceso: Verificar si el número es divisible por el divisor.
- Salida: Mensaje indicando si es divisible o no.

## Reglas identificadas

1. Dividir el número entre el divisor.
2. Si el residuo es 0, es divisible.
3. Si el residuo no es 0, no es divisible.

## Pruebas

### Caso normal

Entrada: numero: 20, divisor: 5

Resultado esperado: 20 es divisible por 5

### Caso borde

Entrada: numero: 7, divisor: 3

Resultado esperado: 7 no es divisible por 3

## Explicacion final

La función usa el operador % para calcular el residuo de la división. Si el residuo es 0, el número es divisible.
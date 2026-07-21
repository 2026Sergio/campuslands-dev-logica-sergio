# Logica matematica 050 - redondeo y precision

## Analisis

- Entrada: Un número decimal.
- Proceso: Redondear el número a 2 decimales.
- Salida: El número redondeado.

## Reglas identificadas

1. Multiplicar el número por 100.
2. Redondear al entero más cercano.
3. Dividir entre 100 para obtener 2 decimales.

## Pruebas

### Caso normal

Entrada: numero: 3.14159

Resultado esperado: 3.14

### Caso borde

Entrada: numero: 2.675

Resultado esperado: 2.68

## Explicacion final

La función multiplica por 100, redondea y divide entre 100 para tener 2 decimales.
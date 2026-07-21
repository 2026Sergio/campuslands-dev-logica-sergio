# Logica matematica 060 - simulaciones con formulas

## Analisis

- Entrada: Un número inicial, un incremento y una cantidad de pasos.
- Proceso: Simular el crecimiento aplicando la fórmula: valor = valor + incremento en cada paso.
- Salida: El valor final después de los pasos.

## Reglas identificadas

1. Empezar con el número inicial.
2. Repetir la cantidad de pasos veces.
3. En cada paso, sumar el incremento al valor actual.

## Pruebas

### Caso normal

Entrada: inicial: 10, incremento: 5, pasos: 3

Resultado esperado: 25

### Caso borde

Entrada: inicial: 0, incremento: 0, pasos: 10

Resultado esperado: 0

## Explicacion final

La función repite la suma del incremento tantas veces como pasos se indiquen.
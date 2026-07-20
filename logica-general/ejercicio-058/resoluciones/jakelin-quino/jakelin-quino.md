# Logica general 058 - sistemas de turnos

## Analisis

- Entrada: Un número de turno y la cantidad de personas.
- Proceso: Calcular a quién le toca el turno.
- Salida: El número de persona que debe tomar el turno.

## Reglas identificadas

1. Si el turno es menor o igual a la cantidad de personas, le toca a la persona con ese número.
2. Si el turno es mayor, se repite el ciclo: turno % cantidad de personas.

## Pruebas

### Caso normal

Entrada: turno: 7, personas: 5

Resultado esperado: 2

### Caso borde

Entrada: turno: 5, personas: 5

Resultado esperado: 5

## Explicacion final

La función usa el operador módulo para repetir el ciclo de turnos cuando se acaban las personas.
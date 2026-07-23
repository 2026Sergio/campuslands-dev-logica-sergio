# Logica general 057 - tablas de decision

## Analisis

- Entrada: Una condición (verdadero o falso) y un valor.
- Proceso: Aplicar la tabla de decisión para obtener el resultado.
- Salida: El resultado según la tabla.

## Reglas identificadas

1. Si la condición es verdadera y el valor es mayor que 10, resultado "A".
2. Si la condición es verdadera y el valor es menor o igual a 10, resultado "B".
3. Si la condición es falsa y el valor es mayor que 10, resultado "C".
4. Si la condición es falsa y el valor es menor o igual a 10, resultado "D".

## Pruebas

### Caso normal

Entrada: condicion: true, valor: 15

Resultado esperado: A

### Caso borde

Entrada: condicion: false, valor: 10

Resultado esperado: D

## Explicacion final

La función revisa la condición y el valor para decidir el resultado según la tabla.
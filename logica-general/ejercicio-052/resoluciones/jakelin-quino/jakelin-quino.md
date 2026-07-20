# Logica general 052 - comparacion de opciones

## Analisis

- Entrada: Dos números (opcion1 y opcion2).
- Proceso: Comparar los dos números y decidir cuál es mejor según una regla.
- Salida: La opción seleccionada.

## Reglas identificadas

1. Comparar los dos números.
2. Si opcion1 es mayor que opcion2, seleccionar opcion1.
3. Si opcion2 es mayor que opcion1, seleccionar opcion2.
4. Si son iguales, seleccionar cualquiera.

## Pruebas

### Caso normal

Entrada: opcion1: 15, opcion2: 20

Resultado esperado: opcion2 es mejor

### Caso borde

Entrada: opcion1: 10, opcion2: 10

Resultado esperado: ambas son iguales

## Explicacion final

La función compara los dos números y selecciona el mayor. Si son iguales, lo indica.
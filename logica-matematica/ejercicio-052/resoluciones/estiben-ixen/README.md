# Plantilla de solucion

## Analisis

- Entrada:
  - Cantidad de resultados favorables.
  - Cantidad total de resultados posibles.

- Proceso:
  - Validar que el total de resultados posibles sea mayor que cero.
  - Calcular la probabilidad dividiendo los casos favorables entre el total de casos posibles.
  - Convertir el resultado a porcentaje.
  - Redondear el porcentaje a dos decimales.

- Salida:
  - La probabilidad expresada en porcentaje.

## Reglas identificadas

1. El total de resultados posibles debe ser mayor que cero.
2. La probabilidad se calcula dividiendo los casos favorables entre el total de casos posibles.
3. El resultado final debe mostrarse como porcentaje con dos decimales.

## Pruebas

### Caso normal

Entrada:

Casos favorables: 7

Casos posibles: 10

Resultado esperado:

Probabilidad: 70.00%

### Caso borde

Entrada:

Casos favorables: 5

Casos posibles: 0

Resultado esperado:

No es posible calcular la probabilidad.

## Explicacion final

La solución funciona porque primero valida que exista un número válido de resultados posibles. Después aplica la fórmula básica de probabilidad, convierte el resultado a porcentaje y lo redondea a dos decimales para facilitar su interpretación.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.
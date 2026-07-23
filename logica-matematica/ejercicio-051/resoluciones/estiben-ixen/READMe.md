# Plantilla de solucion

## Analisis

- Entrada:
  - La cantidad de participantes inscritos en un torneo de kickboxing.

- Proceso:
  - Validar que haya al menos dos participantes.
  - Aplicar la fórmula de combinaciones simples para obtener todos los posibles enfrentamientos sin repetir parejas.
  - Utilizar la fórmula:
    - enfrentamientos = n × (n - 1) / 2

- Salida:
  - La cantidad total de enfrentamientos posibles.

## Reglas identificadas

1. Deben existir al menos dos participantes para formar un enfrentamiento.
2. Cada pareja de participantes solo puede contarse una vez.
3. El resultado se obtiene mediante la fórmula de combinaciones simples.

## Pruebas

### Caso normal

Entrada:

Participantes: 8

Resultado esperado:

Enfrentamientos posibles: 28

### Caso borde

Entrada:

Participantes: 1

Resultado esperado:

No hay suficientes participantes para generar enfrentamientos.

## Explicacion final

La solución funciona porque primero verifica que exista el mínimo número de participantes requerido. Luego aplica la fórmula de combinaciones simples para contar todas las parejas posibles sin repetir enfrentamientos. De esta manera se obtiene el número correcto de combates que pueden organizarse.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.
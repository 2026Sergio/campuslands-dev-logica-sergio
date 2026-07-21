# Plantilla de solucion

## Analisis

- Entrada:
  - Un arreglo con las puntuaciones obtenidas por los proyectos de arquitectura 3D.

- Proceso:
  - Validar que el arreglo no esté vacío.
  - Recorrer todas las puntuaciones para obtener la suma.
  - Identificar la puntuación más alta y la más baja.
  - Calcular el promedio de las puntuaciones.

- Salida:
  - Puntuación más alta.
  - Puntuación más baja.
  - Promedio de las puntuaciones.

## Reglas identificadas

1. Debe existir al menos una puntuación para realizar el análisis.
2. El promedio se obtiene sumando todas las puntuaciones y dividiendo entre la cantidad de elementos.
3. Se debe identificar el valor máximo y el mínimo del ranking.

## Pruebas

### Caso normal

Entrada:

Puntuaciones:

- 85
- 92
- 78
- 96
- 88

Resultado esperado:

Mayor puntuación: 96

Menor puntuación: 78

Promedio: 87.80

### Caso borde

Entrada:

Puntuaciones:

[]

Resultado esperado:

No hay puntuaciones para analizar.

## Explicacion final

La solución funciona porque primero verifica que existan datos para procesar. Luego recorre el arreglo acumulando la suma de las puntuaciones mientras compara cada valor para encontrar el mayor y el menor. Finalmente calcula el promedio y devuelve todas las estadísticas del ranking.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.
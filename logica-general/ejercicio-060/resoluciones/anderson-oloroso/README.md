# Plantilla de solucion

## Analisis

- Entrada:
  - Un arreglo con opciones de menú de comida urbana.
  - Cada menú contiene nombre, puntuación y precio.

- Proceso:
  - Comparar los menús disponibles.
  - Seleccionar el que tenga mayor puntuación.
  - Si tienen la misma puntuación, elegir el de menor precio.

- Salida:
  - Menú seleccionado como la mejor opción.

## Reglas identificadas

1. El menú con mayor puntuación tiene prioridad.
2. Si dos menús tienen la misma puntuación, se selecciona el más económico.
3. Solo debe existir una opción final seleccionada.

## Pruebas

### Caso normal

Entrada:

- Hamburguesa clásica:
  - Puntuación: 8
  - Precio: 12

- Tacos urbanos:
  - Puntuación: 9
  - Precio: 15

- Pizza callejera:
  - Puntuación: 9
  - Precio: 10

Resultado esperado:

- Menú seleccionado:
  - Pizza callejera
  - Puntuación: 9
  - Precio: 10

### Caso borde

Entrada:

- Menú:
  - Perro urbano
  - Puntuación: 10
  - Precio: 20

Resultado esperado:

- Perro urbano seleccionado

## Explicacion final

La solución funciona porque aplica una estrategia de selección comparando cada opción disponible. Primero prioriza la puntuación más alta y utiliza el precio como criterio secundario cuando existen empates, obteniendo la mejor alternativa según las reglas definidas.
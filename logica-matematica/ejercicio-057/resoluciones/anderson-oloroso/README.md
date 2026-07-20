# Plantilla de solucion

## Analisis

- Entrada:
  - Un arreglo con modelos de arquitectura 3D.
  - Cada modelo contiene nombre y puntuación obtenida.

- Proceso:
  - Ordenar los modelos desde la mayor puntuación hasta la menor.
  - Asignar una posición según el orden obtenido.
  - Crear una lista con el ranking final.

- Salida:
  - Posición del modelo.
  - Nombre del modelo.
  - Puntuación obtenida.

## Reglas identificadas

1. El modelo con mayor puntuación ocupa la primera posición.
2. El ranking debe ordenarse de forma descendente.
3. Cada modelo debe recibir una posición única dentro de la clasificación.

## Pruebas

### Caso normal

Entrada:

- Edificio moderno: 92
- Casa ecológica: 85
- Centro comercial: 98
- Museo futurista: 90

Resultado esperado:

- Posición 1: Centro comercial - 98
- Posición 2: Edificio moderno - 92
- Posición 3: Museo futurista - 90
- Posición 4: Casa ecológica - 85

### Caso borde

Entrada:

- Modelo:
  - Casa simple
  - Puntuación: 100

Resultado esperado:

- Posición 1: Casa simple - 100

## Explicacion final

La solución funciona porque ordena los modelos utilizando su puntuación como criterio principal. Después del ordenamiento, recorre la lista para asignar posiciones consecutivas y generar un ranking organizado de los diseños arquitectónicos 3D.
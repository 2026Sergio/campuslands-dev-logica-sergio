# Plantilla de solucion

## Analisis

- Entrada:
  - Un arreglo de proyectos de dibujo digital.
  - Cada proyecto contiene el nombre, tamaño del archivo y velocidad de renderizado.

- Proceso:
  - Recorrer cada proyecto.
  - Calcular el tiempo de render dividiendo el tamaño del archivo entre la velocidad de renderizado.
  - Guardar el tiempo calculado para cada proyecto.

- Salida:
  - Nombre del proyecto.
  - Tiempo estimado de render.

## Reglas identificadas

1. El tiempo se calcula dividiendo el tamaño del archivo entre la velocidad de renderizado.
2. La velocidad de renderizado debe ser mayor que cero.
3. Cada proyecto debe calcularse de forma independiente.

## Pruebas

### Caso normal

Entrada:

- Paisaje 3D:
  - Tamaño: 120 GB
  - Velocidad: 30 GB/h

- Personaje:
  - Tamaño: 90 GB
  - Velocidad: 45 GB/h

Resultado esperado:

- Paisaje 3D: 4.00 horas
- Personaje: 2.00 horas

### Caso borde

Entrada:

- Boceto:
  - Tamaño: 0 GB
  - Velocidad: 20 GB/h

Resultado esperado:

- Boceto: 0.00 horas

## Explicacion final

La solución funciona porque aplica la fórmula de tiempo igual a distancia entre velocidad, adaptándola al contexto del renderizado de proyectos digitales. Recorre cada proyecto, calcula el tiempo necesario según el tamaño del archivo y la velocidad de procesamiento, y almacena el resultado para cada uno.
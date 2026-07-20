# Plantilla de solucion

## Analisis

- Entrada:
  - Base del diseño del tatuaje.
  - Altura del diseño del tatuaje.

- Proceso:
  - Validar que la base y la altura sean mayores que cero.
  - Calcular el área utilizando la fórmula:
    - área = base × altura
  - Calcular el perímetro utilizando la fórmula:
    - perímetro = 2 × (base + altura)

- Salida:
  - Área del diseño.
  - Perímetro del diseño.

## Reglas identificadas

1. La base y la altura deben ser mayores que cero.
2. El área se obtiene multiplicando la base por la altura.
3. El perímetro se obtiene sumando todos los lados del rectángulo.

## Pruebas

### Caso normal

Entrada:

Base: 12

Altura: 8

Resultado esperado:

Área: 96

Perímetro: 40

### Caso borde

Entrada:

Base: 0

Altura: 5

Resultado esperado:

Las dimensiones deben ser mayores que cero.

## Explicacion final

La solución funciona porque primero valida que las dimensiones sean válidas. Si cumplen la condición, aplica las fórmulas matemáticas para calcular el área y el perímetro de un rectángulo. Finalmente muestra ambos resultados de forma clara para verificar el tamaño del diseño del tatuaje.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.
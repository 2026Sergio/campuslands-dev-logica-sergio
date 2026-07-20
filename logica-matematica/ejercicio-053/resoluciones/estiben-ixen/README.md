# Plantilla de solucion

## Analisis

- Entrada:
  - Coordenada x1 del punto de partida.
  - Coordenada y1 del punto de partida.
  - Coordenada x2 del punto de llegada.
  - Coordenada y2 del punto de llegada.

- Proceso:
  - Calcular la diferencia entre las coordenadas en el eje X.
  - Calcular la diferencia entre las coordenadas en el eje Y.
  - Aplicar la fórmula de distancia entre dos puntos:
    - √((x2 - x1)² + (y2 - y1)²)
  - Redondear el resultado a dos decimales.

- Salida:
  - La distancia entre ambos puntos.

## Reglas identificadas

1. Se deben recibir dos coordenadas válidas.
2. La distancia se calcula utilizando el teorema de Pitágoras.
3. El resultado final debe mostrarse con dos decimales.

## Pruebas

### Caso normal

Entrada:

Punto 1: (2, 3)

Punto 2: (8, 11)

Resultado esperado:

Distancia: 10.00

### Caso borde

Entrada:

Punto 1: (5, 5)

Punto 2: (5, 5)

Resultado esperado:

Distancia: 0.00

## Explicacion final

La solución funciona porque aplica la fórmula matemática para calcular la distancia entre dos puntos en un plano cartesiano. Primero obtiene la diferencia entre las coordenadas, luego calcula la suma de los cuadrados y finalmente obtiene la raíz cuadrada del resultado, mostrando la distancia con dos decimales.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.
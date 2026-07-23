# Logica matematica 053 - coordenadas y distancia

## Analisis

- Entrada: Dos puntos (x1, y1) y (x2, y2).
- Proceso: Calcular la distancia entre los dos puntos.
- Salida: La distancia.

## Reglas identificadas

1. Restar x2 - x1 y elevar al cuadrado.
2. Restar y2 - y1 y elevar al cuadrado.
3. Sumar ambos resultados.
4. Calcular la raíz cuadrada de la suma.

## Pruebas

### Caso normal

Entrada: (0, 0) y (3, 4)

Resultado esperado: 5

### Caso borde

Entrada: (1, 1) y (1, 1)

Resultado esperado: 0

## Explicacion final

La función aplica la fórmula de distancia entre dos puntos: raíz de (dx² + dy²).
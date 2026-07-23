# Plantilla de solucion

## Analisis

- Entrada:
  - Un arreglo con soldadores evaluados.
  - Cada soldador contiene nombre y puntaje obtenido sobre 100.

- Proceso:
  - Recorrer cada evaluación.
  - Convertir el puntaje de una escala de 100 a una escala de 10.
  - Guardar el resultado normalizado.

- Salida:
  - Nombre del soldador.
  - Puntaje original.
  - Puntaje convertido a escala de 10.

## Reglas identificadas

1. La puntuación original está basada en una escala de 100 puntos.
2. La puntuación final debe estar en una escala de 10 puntos.
3. La conversión se realiza dividiendo el puntaje entre 100 y multiplicando por 10.

## Pruebas

### Caso normal

Entrada:

- Carlos: 95 puntos
- Ana: 80 puntos
- Luis: 70 puntos

Resultado esperado:

- Carlos: 9.50
- Ana: 8.00
- Luis: 7.00

### Caso borde

Entrada:

- Soldador:
  - Pedro
  - Puntaje: 0

Resultado esperado:

- Pedro: 0.00

## Explicacion final

La solución funciona porque transforma los puntajes utilizando una fórmula de conversión de escala. Recorre todas las evaluaciones, calcula el valor equivalente sobre 10 puntos y genera una lista con los resultados normalizados de cada soldador.
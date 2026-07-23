# Plantilla de solucion

## Analisis

- Entrada:
  - Un número que indica la cantidad de canciones que tendrá la secuencia.

- Proceso:
  - Validar que la cantidad de canciones sea mayor que cero.
  - Generar una secuencia numérica consecutiva comenzando desde 1.
  - Guardar cada número en un arreglo utilizando un ciclo.
  - Mostrar la secuencia obtenida.

- Salida:
  - Una lista con la secuencia numérica de las canciones o un mensaje indicando que la cantidad es inválida.

## Reglas identificadas

1. La cantidad de canciones debe ser mayor que cero.
2. La secuencia inicia en 1 y aumenta de uno en uno.
3. Si la cantidad es inválida, se informa al usuario sin generar la secuencia.

## Pruebas

### Caso normal

Entrada:

Cantidad de canciones: 5

Resultado esperado:

Secuencia: 1, 2, 3, 4, 5

### Caso borde

Entrada:

Cantidad de canciones: 0

Resultado esperado:

Cantidad de canciones inválida.

## Explicacion final

La solución funciona porque primero valida que la cantidad ingresada sea válida. Luego utiliza un ciclo para generar una secuencia numérica ordenada agregando cada número a un arreglo. Finalmente devuelve la secuencia generada o un mensaje de error cuando la entrada no cumple las condiciones.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.
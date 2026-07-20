# Ejercicio 092 - Logica matematica: probabilidad basica

## Analisis

- Entrada: un arreglo `participantes` con puntajes numericos, un `bono` y una `penalizacion`.
- Proceso: se calcula el promedio de los participantes, se suma el bono, se resta la penalizacion y se redondea hacia arriba para obtener el puntaje final. Luego se clasifica ese puntaje segun rangos.
- Salida: un objeto con `puntaje_final`, `clasificacion` y `explicacion`.

## Reglas identificadas

1. `puntaje_final = Math.ceil(promedio(participantes) + bono - penalizacion)`.
2. La clasificacion depende de rangos sobre el puntaje final: `competitivo` (25+), `estandar` (15-24) y `en desarrollo` (0-14).
3. Si el arreglo de participantes esta vacio, el puntaje final es 0 y la clasificacion es `en desarrollo`.

## Nota sobre el README del ejercicio

El titulo indica "probabilidad basica", pero el ejemplo entregado corresponde a un calculo de promedio con bono y penalizacion, sin nocion de probabilidad. Se tomo el ejemplo entrada/salida como especificacion autoritativa, tal como indica el criterio de esta serie de ejercicios.

Ademas, el README no define la tabla de clasificacion. Se probo el ejemplo contra varias formulas (promedio con `ceil`, mediana con `round`) y ambas producen 27 para el caso dado; se eligio promedio + `Math.ceil` por ser la lectura mas directa de la explicacion "se sumo el bono y se resto la penalizacion". Los rangos de clasificacion se definieron de forma razonable ya que el ejemplo solo confirma el caso `competitivo` en 27.

## Pruebas

### Caso normal

Entrada:

```text
participantes: [12, 18, 25, 30]
bono: 8
penalizacion: 3
```

Resultado esperado:

```text
puntaje_final: 27
clasificacion: competitivo
```

### Caso borde

Entrada:

```text
participantes: []
bono: 5
penalizacion: 2
```

Resultado esperado:

```text
puntaje_final: 0
clasificacion: en desarrollo
```

## Explicacion final

La solucion separa el calculo numerico (`calcularPromedio`) de la clasificacion (`clasificar`), evitando condicionales anidados mediante una tabla de rangos ordenada de mayor a menor. El caso borde de arreglo vacio se maneja de forma explicita antes de dividir, evitando division por cero. La solucion se verifico con Node.js ejecutando `node maria-montepeque.js`, reproduciendo exactamente el ejemplo del README del ejercicio.
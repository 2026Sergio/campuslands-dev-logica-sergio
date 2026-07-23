# Ejercicio 079 - Validaciones numericas (formulas quimicas)

## Analisis

- Entrada: un arreglo `participantes` (numeros), un `bono` y una `penalizacion`.
- Proceso: se calcula el promedio de `participantes`, se le suma el `bono`, se le resta la `penalizacion` y el resultado se redondea hacia arriba para obtener el `puntaje_final`. Luego se clasifica ese puntaje segun rangos.
- Salida: un objeto con `puntaje_final`, `clasificacion` y `explicacion`.

## Reglas identificadas

1. `puntaje_final = Math.ceil(promedio(participantes) + bono - penalizacion)`.
2. La clasificacion se define por rango de `puntaje_final`:
   - `>= 30`: excelente
   - `>= 20`: competitivo
   - `>= 10`: regular
   - `< 10`: bajo
3. Si `participantes` esta vacio no se puede calcular un promedio, por lo que se retorna `puntaje_final: null` y `clasificacion: 'sin datos'`.

## Supuesto sobre la clasificacion

El README del ejercicio no especifica los rangos de `clasificacion`, solo el ejemplo (`27` -> `competitivo`). Se definieron los rangos anteriores de forma que el ejemplo se cumpla exactamente y la escala sea consistente y progresiva.

## Pruebas

### Caso normal

Entrada:

```text
participantes: [12, 18, 25, 30]
bono: 8
penalizacion: 3
```

Resultado esperado (segun README del ejercicio):

```text
puntaje_final: 27
clasificacion: competitivo
```

Resultado obtenido: coincide exactamente.

### Caso borde

Entrada:

```text
participantes: []
bono: 5
penalizacion: 2
```

Resultado obtenido:

```text
puntaje_final: null
clasificacion: sin datos
```

## Explicacion final

El promedio de `[12, 18, 25, 30]` es `21.25`. Sumando el bono (`8`) y restando la penalizacion (`3`) da `26.25`, y al redondear hacia arriba con `Math.ceil` se obtiene `27`, que coincide con el valor esperado en el ejemplo del README. La clasificacion usa una tabla de rangos ordenada para evitar condicionales anidados, y el caso de un arreglo vacio se maneja antes de calcular el promedio para evitar una division entre cero.

## Como ejecutar

```bash
node maria-montepeque.js
```
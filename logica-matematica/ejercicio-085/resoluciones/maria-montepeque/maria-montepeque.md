# Ejercicio 085 - minimos y limites

## Analisis

- Entrada: lista de puntajes de `participantes`, un `bono` y una `penalizacion`.
- Proceso: se calcula el promedio de los participantes, se le suma el bono, se le resta la penalizacion y se redondea hacia arriba. Con ese puntaje se determina una clasificacion segun rangos.
- Salida: objeto con `puntaje_final`, `clasificacion` y `explicacion`.

## Reglas identificadas

1. El puntaje final se obtiene con `Math.ceil(promedio + bono - penalizacion)`. Se determino usando el ejemplo del README: promedio de `[12, 18, 25, 30]` es `21.25`, mas `8` de bono, menos `3` de penalizacion, da `26.25`, y `Math.ceil` produce `27`, que coincide con el resultado esperado.
2. La clasificacion se define por rangos sobre el `puntaje_final`: menor a 15 es "bajo", menor a 25 es "regular", menor a 35 es "competitivo" y desde 35 en adelante es "elite". El README no especifica esta tabla explicitamente, asi que se definio con rangos razonables que hacen que el ejemplo (27) caiga en "competitivo", tal como lo pide la salida esperada.
3. Si `participantes` esta vacio o no es un arreglo, se retorna un puntaje de 0 con clasificacion "sin_datos", evitando division entre cero al calcular el promedio.

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
clasificacion: sin_datos
```

## Explicacion final

La solucion separa el calculo del promedio, el calculo del puntaje final y la clasificacion en funciones independientes, evitando condicionales anidados. La tabla de clasificacion se recorre con `find`, buscando el primer rango cuyo limite superior sea mayor al puntaje. El caso de arreglo vacio se valida antes de cualquier operacion matematica para evitar un resultado `NaN`.

## Como ejecutar

```bash
node maria-montepeque.js
```

## Sugerencia

Se verificaron ambos calculos manualmente antes de confiar en el codigo, confirmando que el promedio y el redondeo con `Math.ceil` producen el `puntaje_final: 27` esperado.
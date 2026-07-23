# Ejercicio 076 - Logica matematica - presupuestos y descuentos

## Analisis

- Entrada: un arreglo `participantes` con puntajes numericos, un `bono` y una `penalizacion`.
- Proceso: se calcula la mediana de `participantes`, se suma el `bono` y se resta la `penalizacion`, redondeando el resultado.
- Salida: un objeto con `puntaje_final`, `clasificacion` y `explicacion`.

## Reglas identificadas

1. El puntaje base es la mediana del arreglo `participantes`, no el promedio ni la suma.
2. Al puntaje base se le suma el `bono` y se le resta la `penalizacion`.
3. El resultado se redondea con `Math.round` para obtener el `puntaje_final`.
4. La clasificacion se obtiene comparando el `puntaje_final` contra rangos ordenados: `elite` (>=30), `competitivo` (>=20), `regular` (>=10) y `bajo` (menor a 10).
5. Si `participantes` esta vacio, no hay puntaje que calcular y se retorna un resultado explicito de "sin datos".

La formula se dedujo probando distintas combinaciones (promedio, suma, mediana) contra el ejemplo del README (`puntaje_final: 27`). Solo la mediana con redondeo produce el resultado esperado: mediana de `[12, 18, 25, 30]` es `21.5`, mas `8` de bono, menos `3` de penalizacion, da `26.5`, que redondeado es `27`.

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
bono: 8
penalizacion: 3
```

Resultado esperado:

```text
puntaje_final: 0
clasificacion: sin datos
```

### Caso adicional

Entrada:

```text
participantes: [10, 20, 40]
bono: 5
penalizacion: 2
```

Resultado esperado:

```text
puntaje_final: 23
clasificacion: competitivo
```

## Explicacion final

La solucion separa el calculo en funciones pequenas: `calcularMediana` obtiene el valor central del arreglo (promediando los dos valores medios si la cantidad es par), `obtenerClasificacion` recorre una tabla de rangos ordenada de mayor a menor para asignar la etiqueta correspondiente, y `calcularPuntajeFinal` orquesta el flujo completo, incluyendo el caso borde de un arreglo vacio. Se verifico con Node.js que el caso del ejemplo produce exactamente `puntaje_final: 27`.

## Como ejecutar

```bash
node maria-montepeque.js
```

## Nota sobre el README del ejercicio

El README original no especifica los rangos de clasificacion ni el metodo de calculo del puntaje base; se definieron rangos razonables (`elite`, `competitivo`, `regular`, `bajo`) y se reverse-engineerio la formula (mediana) usando el ejemplo dado como especificacion autoritativa.
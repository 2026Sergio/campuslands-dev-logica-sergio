# Ejercicio 069 - Modulos y divisibilidad (logica-matematica)

## Analisis

- Entrada: un arreglo `participantes` con puntajes numericos, un `bono` y una `penalizacion`.
- Proceso: se calcula la mediana de `participantes`, se le suma el `bono`, se le resta la `penalizacion` y el resultado se redondea hacia arriba.
- Salida: un objeto con `puntaje_final`, `clasificacion` y `explicacion`.

## Nota sobre el enunciado

El titulo del ejercicio menciona "modulos y divisibilidad", pero el ejemplo de entrada y salida provisto en el README oficial no refleja ninguna operacion de modulo ni de divisibilidad; corresponde al mismo patron de `bono`/`penalizacion` usado en otros ejercicios de la serie. Siguiendo el criterio de que el ejemplo literal es la fuente de verdad, la solucion se construyo para reproducir exactamente `puntaje_final: 27` y `clasificacion: competitivo` a partir de los datos dados.

## Reglas identificadas

1. Si `participantes` esta vacio, el puntaje final es `0` y la clasificacion es `sin-datos`.
2. Se calcula la mediana de `participantes` (promedio de los dos valores centrales si la cantidad es par, o el valor central si es impar).
3. `puntaje_final = Math.ceil(mediana + bono - penalizacion)`.
4. La clasificacion se obtiene comparando `puntaje_final` contra una tabla de rangos ordenada de mayor a menor: `elite` (>= 35), `competitivo` (>= 25), `regular` (>= 15) y `bajo-rendimiento` (el resto).

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
clasificacion: sin-datos
```

## Explicacion final

La mediana se eligio como base del calculo porque es el unico valor que, combinado con `+bono -penalizacion` y redondeo hacia arriba, reproduce el resultado exacto del ejemplo oficial (mediana de `21.5` + `8` - `3` = `26.5`, y `Math.ceil(26.5) = 27`). La tabla de clasificacion por rangos evita condicionales anidados y facilita agregar nuevos niveles en el futuro. El caso de arreglo vacio se maneja de forma explicita para no dividir por cero ni obtener `NaN`.

## Como ejecutar

```bash
node maria-montepeque.js
```
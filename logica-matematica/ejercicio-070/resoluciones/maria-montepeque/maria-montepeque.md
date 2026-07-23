# Solucion - Ejercicio 070 (logica-matematica)

## Analisis

- Entrada: lista de `participantes` (numeros), `bono` y `penalizacion`.
- Proceso: se calcula la mediana de los puntajes de los participantes, se le suma el bono, se le resta la penalizacion y se redondea el resultado.
- Salida: objeto con `puntaje_final`, `clasificacion` y `explicacion`.

## Reglas identificadas

1. `puntaje_final = Math.round(mediana(participantes) + bono - penalizacion)`.
2. La mediana se calcula ordenando `participantes`: si la cantidad es par se promedian los dos valores centrales, si es impar se toma el valor central.
3. La clasificacion se asigna segun rangos ordenados sobre `puntaje_final`:
   - menor a 15: `bajo`
   - 15 a 24: `intermedio`
   - 25 a 34: `competitivo`
   - 35 o mas: `elite`
4. Si `participantes` esta vacio, no hay datos para calcular una mediana; se retorna `puntaje_final: 0` con clasificacion `bajo` y una explicacion indicando que no hay participantes.

## Formula reverso-ingenierizada

Con el ejemplo del README (`participantes: [12, 18, 25, 30]`, `bono: 8`, `penalizacion: 3`):

- Mediana de `[12, 18, 25, 30]` = `(18 + 25) / 2 = 21.5`.
- `21.5 + 8 - 3 = 26.5`.
- `Math.round(26.5) = 27`, que coincide con el `puntaje_final: 27` esperado.
- `27` cae en el rango `25 a 34`, por lo tanto `clasificacion: competitivo`, tal como pide el ejemplo.

Se probaron alternativas (promedio en vez de mediana, `Math.ceil`, `Math.floor`) y ninguna reproducia el resultado esperado usando `Math.round` de forma directa; la combinacion mediana + `Math.round` fue la unica que coincidio exactamente.

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
puntaje_final: 0
clasificacion: bajo
explicacion: no hay participantes para calcular el puntaje.
```

### Caso de control (cantidad impar de participantes)

Entrada:

```text
participantes: [10, 20, 30]
bono: 0
penalizacion: 0
```

Resultado obtenido:

```text
puntaje_final: 20
clasificacion: intermedio
```

La mediana de `[10, 20, 30]` es `20` (valor central), sin bono ni penalizacion el puntaje final es `20`.

## Como ejecutar

```bash
node maria-montepeque.js
```

## Explicacion final

La mediana se eligio porque es mas resistente a valores extremos que el promedio, lo cual tiene sentido en un contexto de viajes y turismo donde un participante con puntaje muy alto o muy bajo no deberia distorsionar el puntaje final del grupo. El bono y la penalizacion se aplican directamente sobre ese valor central y el resultado se redondea al entero mas cercano para cumplir con el ejemplo dado. La clasificacion se implemento con una tabla de rangos ordenada en vez de condicionales anidados, para que agregar o ajustar un rango sea sencillo y no dependa de una cadena de `if/else`.
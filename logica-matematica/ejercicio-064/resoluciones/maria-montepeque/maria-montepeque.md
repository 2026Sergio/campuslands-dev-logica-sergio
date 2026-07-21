# Ejercicio 064 - rangos y maximos

## Analisis

- Entrada: lista de `participantes` (numeros), `bono`, `penalizacion`.
- Proceso: calcular el promedio de los participantes, sumar el bono, restar la penalizacion y redondear hacia arriba.
- Salida: objeto con `puntaje_final`, `clasificacion` y `explicacion`.

## Nota sobre el README del ejercicio

El titulo y la tematica del ejercicio mencionan "rangos y maximos" e "inventario de motos", pero el ejemplo de entrada/salida corresponde a un calculo de puntaje con bono, penalizacion y clasificacion. Se tomo el ejemplo literal como especificacion, tal como indica el resultado esperado (`puntaje_final: 27`, `clasificacion: competitivo`).

## Reglas identificadas

1. El promedio se calcula como la suma de `participantes` dividida entre su cantidad.
2. El puntaje final es `Math.ceil(promedio + bono - penalizacion)`.
3. La clasificacion se obtiene comparando el puntaje final contra rangos ordenados: elite (>=30), competitivo (20-29), regular (10-19), bajo (<10).
4. Si `participantes` esta vacio, no se calcula promedio y se devuelve la clasificacion "sin datos".

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
explicacion: se sumo el bono y se resto la penalizacion segun las reglas.
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
explicacion: no hay participantes para calcular un promedio.
```

## Explicacion final

El promedio de `[12, 18, 25, 30]` es 21.25. Al sumar el bono (8) y restar la penalizacion (3) se obtiene 26.25, que redondeado hacia arriba con `Math.ceil` da 27, coincidiendo con el resultado esperado del ejercicio. La clasificacion se resuelve con una tabla de rangos en lugar de condicionales anidados, y el caso de arreglo vacio se maneja de forma explicita para evitar una division entre cero.
# Ejercicio 090 - Redondeo y precision

## Analisis

- Entrada: una lista de participantes con puntajes numericos, un bono y una penalizacion.
- Proceso: se calcula el promedio de los puntajes, se le suma el bono, se le resta la penalizacion y se redondea hacia arriba. Con ese puntaje final se determina una clasificacion segun rangos.
- Salida: el puntaje final, la clasificacion obtenida y una explicacion del resultado.

## Reglas identificadas

1. El puntaje final se obtiene como `Math.ceil(promedio + bono - penalizacion)`, donde el promedio es la suma de los participantes dividida entre la cantidad de participantes.
2. La clasificacion se define por rangos ordenados: hasta 15 es "principiante", hasta 25 es "intermedio", hasta 35 es "competitivo" y en adelante es "elite".
3. Si la lista de participantes esta vacia, el promedio se trata como 0 para evitar division entre cero.

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
puntaje_final: 3
clasificacion: principiante
```

## Explicacion final

El promedio de `[12, 18, 25, 30]` es 21.25. Sumando el bono (8) y restando la penalizacion (3) se obtiene 26.25, que redondeado hacia arriba con `Math.ceil` da 27, coincidiendo exactamente con el ejemplo del README del reto. Se probaron varias formulas de redondeo (`round`, `floor`, `ceil`) y solo `Math.ceil` reproduce el valor esperado. La clasificacion se implemento con una tabla de rangos ordenada en vez de condicionales anidados, y el caso de arreglo vacio se maneja devolviendo un promedio de 0 sin lanzar errores.
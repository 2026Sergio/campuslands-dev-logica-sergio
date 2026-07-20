# Ejercicio 094 - Logica matematica

## Analisis

- Entrada: lista de `participantes` (numeros), `bono` y `penalizacion`.
- Proceso: se calcula el promedio de los participantes, se suma el bono, se resta la penalizacion y se redondea hacia arriba para obtener el puntaje final. Luego se clasifica el puntaje segun rangos definidos.
- Salida: objeto con `puntaje_final`, `clasificacion` y `explicacion`.

## Reglas identificadas

1. `puntaje_final = Math.ceil(promedio(participantes) + bono - penalizacion)`.
2. La clasificacion se define por rangos ordenados: hasta 15 es `principiante`, hasta 25 es `intermedio`, hasta 35 es `competitivo` y de ahi en adelante es `elite`.
3. Si `participantes` esta vacio, no se puede calcular un promedio, por lo que se retorna `puntaje_final: 0` y `clasificacion: sin_datos`.

## Nota sobre el README del ejercicio

El titulo del ejercicio menciona "areas y perimetros", pero el ejemplo de entrada y salida no involucra figuras geometricas, sino una lista de participantes, un bono y una penalizacion, igual que otros ejercicios de puntaje de esta serie. Se tomo el ejemplo literal como especificacion valida, siguiendo el criterio de que el ejemplo manda sobre el titulo o la tematica.

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

El promedio de `[12, 18, 25, 30]` es `21.25`. Al sumarle el bono (8) y restarle la penalizacion (3) da `26.25`, que redondeado hacia arriba con `Math.ceil` resulta en `27`, coincidiendo exactamente con el ejemplo del README. La clasificacion se resuelve con una tabla de rangos ordenada en lugar de condicionales anidados, y el caso de arreglo vacio se maneja de forma explicita para evitar division por cero.
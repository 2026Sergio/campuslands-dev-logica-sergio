# Ejercicio 097 - Estadisticas de ranking

## Analisis

- Entrada: un arreglo `participantes` con puntajes numericos, un `bono` y una `penalizacion`.
- Proceso: se calcula la mediana de `participantes`, se le suma el `bono`, se le resta la `penalizacion` y se redondea el resultado al entero mas cercano.
- Salida: un objeto con `puntaje_final`, `clasificacion` y `explicacion`.

## Reglas identificadas

1. El puntaje final se basa en la mediana de los participantes, no en el promedio, porque el ejercicio pide una "estadistica de ranking" y la mediana es la medida de posicion central mas representativa ante datos dispersos.
2. Al resultado de la mediana se le suma el bono y se le resta la penalizacion, y luego se redondea con `Math.round`.
3. La clasificacion se obtiene ubicando `puntaje_final` en una tabla de rangos ordenados: bajo (menor a 10), regular (10-19), competitivo (20-29), elite (30 o mas).
4. Si `participantes` esta vacio, se retorna un puntaje base de 0 con clasificacion `bajo`, evitando division o calculo sobre una lista sin datos.

## Nota sobre el README del ejercicio

El README solo entrega un ejemplo, y con ese unico dato tanto `promedio + Math.ceil` como `mediana + Math.round` producen `puntaje_final: 27`. Se opto por mediana + Math.round por ser mas consistente con el nombre del ejercicio ("estadisticas de ranking") y con el patron de redondeo mas usado en esta serie de ejercicios.

## Pruebas

### Caso normal (ejemplo del README)

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

### Caso normal (participantes impar)

Entrada:

```text
participantes: [5, 10, 15]
bono: 2
penalizacion: 1
```

Resultado obtenido:

```text
puntaje_final: 11
clasificacion: regular
```

### Caso borde: arreglo vacio

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
```

### Caso borde: puntaje negativo

Entrada:

```text
participantes: [1, 2]
bono: 0
penalizacion: 10
```

Resultado obtenido:

```text
puntaje_final: -8
clasificacion: bajo
```

## Explicacion final

La solucion usa la mediana como base estadistica de ranking, aplica el bono y la penalizacion de forma directa, y redondea con `Math.round` para obtener un puntaje entero. La clasificacion se resuelve con una tabla de rangos en lugar de condicionales anidados, lo que facilita ajustar los limites sin tocar la logica de calculo. Se valido el caso vacio para evitar que la mediana de un arreglo sin elementos genere un resultado invalido.
# Ejercicio 099 - Logica matematica: validaciones numericas

## Analisis

- Entrada: un arreglo `participantes` con puntajes numericos, un `bono` y una `penalizacion`.
- Proceso: se calcula el promedio de los participantes, se le suma el bono, se le resta la penalizacion y se redondea hacia arriba. Con ese puntaje final se determina una clasificacion segun rangos.
- Salida: un objeto con `puntaje_final`, `clasificacion` y `explicacion`.

## Reglas identificadas

1. El puntaje final se calcula como `Math.ceil(promedio(participantes) + bono - penalizacion)`.
2. La clasificacion se asigna segun el puntaje final:
   - hasta 15: principiante
   - hasta 25: intermedio
   - hasta 35: competitivo
   - mas de 35: elite
3. Si `participantes` esta vacio, no se puede calcular un promedio, por lo que se retorna `puntaje_final: 0` con clasificacion `sin_datos`.

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
bono: 5
penalizacion: 2
```

Resultado esperado:

```text
puntaje_final: 0
clasificacion: sin_datos
explicacion: no hay participantes para calcular el puntaje.
```

## Explicacion final

El promedio de `[12, 18, 25, 30]` es 21.25. Sumando el bono (8) y restando la penalizacion (3) se obtiene 26.25, que redondeado hacia arriba con `Math.ceil` da 27, coincidiendo con el resultado esperado del ejemplo. La clasificacion se resuelve con una tabla de rangos ordenada en vez de condicionales anidados, y el caso de arreglo vacio se maneja explicitamente para evitar una division por cero.
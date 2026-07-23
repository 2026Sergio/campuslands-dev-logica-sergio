# Ejercicio 088 - Patrones de puntuacion

## Analisis

- Entrada: un arreglo `participantes` con puntuaciones numericas, un valor `bono` y un valor `penalizacion`.
- Proceso: se calcula el promedio de los participantes, se le suma el bono, se le resta la penalizacion y se redondea hacia arriba para obtener el puntaje final. Luego se clasifica ese puntaje segun rangos definidos.
- Salida: un objeto con `puntaje_final`, `clasificacion` y una `explicacion` del calculo.

## Reglas identificadas

1. El puntaje final se obtiene con `Math.ceil(promedio(participantes) + bono - penalizacion)`.
2. La clasificacion depende del puntaje final:
   - `puntaje_final >= 25` → competitivo
   - `puntaje_final >= 15` → intermedio
   - `puntaje_final >= 5` → principiante
   - cualquier otro valor → sin clasificar
3. Si el arreglo de participantes esta vacio, no hay puntaje ni clasificacion valida (se retorna `null` y `sin datos`).

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
puntaje_final: null
clasificacion: sin datos
```

## Explicacion final

La formula se obtuvo probando el ejemplo del README contra varias combinaciones de redondeo. El promedio de `[12, 18, 25, 30]` es `21.25`; sumando el bono (8) y restando la penalizacion (3) da `26.25`, y `Math.ceil` de ese valor produce `27`, que coincide exactamente con el resultado esperado. Se descarto usar la mediana porque el promedio con `Math.ceil` es mas simple y reproduce el mismo resultado en los casos probados.

## Sugerencia aplicada

Se verifico la operacion con calculos manuales (promedio, suma de bono, resta de penalizacion) antes de confiar en el codigo, comparando el resultado contra el ejemplo del README.
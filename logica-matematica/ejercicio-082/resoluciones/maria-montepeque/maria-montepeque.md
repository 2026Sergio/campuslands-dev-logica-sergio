# Ejercicio 082 - Porcentajes y proporciones (ranking futbol sala)

## Analisis

- Entrada: lista de `participantes` (puntajes numericos), `bono` y `penalizacion`.
- Proceso: se calcula el promedio de los participantes, se le suma el bono, se le resta la penalizacion y se redondea hacia arriba. Con ese puntaje se determina una clasificacion.
- Salida: objeto con `puntaje_final`, `clasificacion` y `explicacion`.

## Reglas identificadas

1. `puntaje_final = ceil(promedio(participantes) + bono - penalizacion)`.
2. La clasificacion se define por rangos de `puntaje_final`: elite (>= 30), competitivo (>= 20), regular (>= 10), principiante (< 10).
3. Si `participantes` esta vacio, no se calcula puntaje y se devuelve `sin_datos`.

## Fórmula verificada

Con el ejemplo del README (`[12, 18, 25, 30]`, bono 8, penalizacion 3):

- Promedio: (12 + 18 + 25 + 30) / 4 = 21.25
- 21.25 + 8 - 3 = 26.25
- `Math.ceil(26.25)` = **27**, que coincide con el `puntaje_final: 27` esperado.

Se probaron tambien `Math.round` y `Math.floor`, ambos dan 26, por lo que se descartaron.

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

La solucion separa el calculo del promedio, el calculo del puntaje final y la clasificacion en funciones independientes, evitando condicionales anidados. La clasificacion usa una tabla de rangos ordenada de mayor a menor, buscando el primer rango que cumpla la condicion. El caso de arreglo vacio se maneja antes de cualquier calculo para evitar division por cero.

## Nota sobre el README del ejercicio

El README original no especifica los rangos exactos para cada clasificacion (solo confirma que un puntaje de 27 es "competitivo"). Se definieron rangos razonables y consistentes con ese unico dato conocido, dejando el criterio documentado aqui para su revision.
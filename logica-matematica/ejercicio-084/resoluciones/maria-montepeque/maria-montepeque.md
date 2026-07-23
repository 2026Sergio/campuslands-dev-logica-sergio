# Solucion - Ejercicio 084 (logica-matematica)

## Analisis

- Entrada: un arreglo `participantes` con valores numericos (inventario de motos), un `bono` y una `penalizacion`.
- Proceso: se calcula el promedio de `participantes`, se le suma el `bono`, se le resta la `penalizacion` y se redondea hacia arriba. Con ese puntaje se determina la clasificacion segun un rango, y se identifica el valor maximo del arreglo.
- Salida: un objeto con `puntaje_final`, `clasificacion`, `maximo_participante` y `explicacion`.

## Reglas identificadas

1. `puntaje_final = Math.ceil(promedio(participantes) + bono - penalizacion)`.
2. La clasificacion se define por rangos: `bajo` (<=15), `regular` (<=25), `competitivo` (<=35), `elite` (mayor a 35).
3. `maximo_participante` es el valor mas alto del arreglo `participantes`.
4. Si `participantes` esta vacio, la solucion lanza un error controlado en vez de calcular con datos invalidos.

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
maximo_participante: 30
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
Error: El arreglo de participantes no puede estar vacio.
```

### Casos adicionales verificados

- `[20]` con bono 5 y penalizacion 2 → `puntaje_final: 23`, `clasificacion: regular`.
- `[5, 6, 7]` con bono 0 y penalizacion 0 → `puntaje_final: 6`, `clasificacion: bajo`.
- `[40, 42, 45]` con bono 5 y penalizacion 0 → `puntaje_final: 48`, `clasificacion: elite`.

## Explicacion final

La formula se obtuvo reconstruyendo el ejemplo del README: el promedio de `[12, 18, 25, 30]` es 21.25, sumando el bono (8) y restando la penalizacion (3) da 26.25, y `Math.ceil` de ese valor produce 27, que coincide con el `puntaje_final` esperado. Los rangos de clasificacion se definieron en una tabla ordenada para evitar condicionales anidados, y el maximo se calcula por separado con `Math.max` para mantener el codigo desacoplado en funciones pequenas, tal como pide el ejercicio.
# Ejercicio 081 - Operaciones aritmeticas controladas

## Analisis

- Entrada: un arreglo `participantes` con puntajes numericos, un `bono` y una `penalizacion`.
- Proceso: se calcula la mediana de `participantes`, se redondea, se suma el `bono` y se resta la `penalizacion` para obtener el `puntaje_final`. Con ese puntaje se determina una `clasificacion`.
- Salida: un objeto con `puntaje_final`, `clasificacion` y `explicacion`.

## Reglas identificadas

1. Se calcula la mediana del arreglo `participantes` (promedio de los dos valores centrales si la cantidad es par).
2. La mediana se redondea con `Math.round` antes de continuar.
3. El `puntaje_final` es la mediana redondeada, mas el `bono`, menos la `penalizacion`.
4. La `clasificacion` se determina por rangos de `puntaje_final`: hasta 15 es `principiante`, hasta 25 es `intermedio`, hasta 35 es `competitivo` y por encima es `elite`.
5. Si `participantes` esta vacio, no se calcula mediana y se retorna `clasificacion: sin datos`.

## Nota sobre el README del ejercicio

El README original no especifica los rangos exactos para cada clasificacion, ni el metodo de calculo (mediana, promedio, etc.). Se reverso-ingenieria la formula a partir del ejemplo provisto (`participantes: [12, 18, 25, 30]`, `bono: 8`, `penalizacion: 3` -> `puntaje_final: 27`), confirmando que la mediana redondeada es el metodo correcto. Los rangos de clasificacion se definieron de forma razonable ya que el ejemplo solo confirma que 27 corresponde a `competitivo`.

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
clasificacion: sin datos
```

## Explicacion final

La solucion separa el calculo de la mediana, el calculo del puntaje final y la clasificacion en funciones independientes, evitando condicionales anidados. La clasificacion usa una tabla de rangos recorrida con `find`, lo que permite agregar o modificar niveles sin tocar la logica principal. El caso de arreglo vacio se maneja de forma explicita para evitar resultados invalidos.

## Como ejecutar

```bash
node -e "console.log(require('./maria-montepeque.js').calcularPuntajeFinal({ participantes: [12, 18, 25, 30], bono: 8, penalizacion: 3 }))"
```
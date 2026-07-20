# Ejercicio 083 - Logica matematica

## Analisis

- Entrada: lista de puntajes de `participantes`, un `bono` y una `penalizacion`.
- Proceso: se calcula la mediana de los participantes, se le suma el bono, se le resta la penalizacion y se redondea al entero mas cercano.
- Salida: `puntaje_final`, `clasificacion` y una `explicacion` del calculo.

## Reglas identificadas

1. La mediana se calcula ordenando los participantes: si la cantidad es par se promedian los dos valores centrales, si es impar se toma el valor central.
2. `puntaje_final = round(mediana + bono - penalizacion)`.
3. La clasificacion depende de rangos sobre el `puntaje_final`: `elite` (>=30), `competitivo` (>=20), `regular` (>=10), `principiante` (resto).
4. Si `participantes` esta vacio, no se puede calcular una mediana; se retorna `puntaje_final: 0` y `clasificacion: sin_datos`.

## Nota sobre el README del ejercicio

El README no especifica el metodo de redondeo ni los rangos de clasificacion. Se reverse-ingenieria la formula contra el ejemplo (`puntaje_final: 27`) probando `promedio` y `mediana` combinados con `round`, `ceil` y `floor`. Tanto `round(mediana + bono - penalizacion)` como `ceil(mediana + bono - penalizacion)` producen 27; se eligio `round` por ser matematicamente mas natural y consistente con el titulo "promedios y medianas". Los rangos de clasificacion tampoco estan definidos en el README, por lo que se construyo una tabla razonable documentada aqui.

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

### Caso adicional (numero impar de participantes)

Entrada:

```text
participantes: [10, 15, 40]
bono: 2
penalizacion: 1
```

Resultado esperado:

```text
puntaje_final: 16
clasificacion: regular
```

## Explicacion final

La solucion separa el calculo de la mediana, el calculo del puntaje final y la clasificacion en funciones independientes, evitando condicionales anidados. La clasificacion usa una tabla de rangos recorrida con `find`, lo que facilita agregar o modificar niveles sin tocar la logica principal. El caso de participantes vacio se maneja de forma explicita para evitar dividir por cero o calcular una mediana invalida.
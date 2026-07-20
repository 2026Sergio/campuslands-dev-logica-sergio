# Ejercicio 093 - coordenadas y distancia

## Analisis

- Entrada: una lista de `participantes` (numeros), un `bono` y una `penalizacion`.
- Proceso: se calcula el promedio de los participantes, se suma el bono y se resta la penalizacion; el resultado se redondea hacia arriba.
- Salida: `puntaje_final`, `clasificacion` y una `explicacion` del calculo.

## Nota sobre el README del ejercicio

El titulo del ejercicio menciona "coordenadas y distancia", pero el ejemplo de entrada/salida no usa coordenadas: usa `participantes`, `bono` y `penalizacion` con un resultado de puntaje. Se tomo el ejemplo literal como especificacion, ya que es la unica referencia verificable.

## Reglas identificadas

1. El promedio de `participantes` se calcula como la suma dividida entre la cantidad de elementos.
2. Al promedio se le suma el `bono` y se le resta la `penalizacion`.
3. El resultado se redondea con `Math.ceil` para obtener el `puntaje_final`.
4. La `clasificacion` se determina por rangos: elite (>=30), competitivo (>=20), regular (>=10), bajo (resto).
5. Si `participantes` esta vacio, se lanza un error de validacion.

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
participantes: [5]
bono: 0
penalizacion: 0
```

Resultado esperado:

```text
puntaje_final: 5
clasificacion: bajo
explicacion: se sumo el bono y se resto la penalizacion segun las reglas.
```

## Explicacion final

La formula fue reconstruida a partir del ejemplo dado en el README: promedio(12,18,25,30) = 21.25, mas bono 8, menos penalizacion 3 = 26.25, y `Math.ceil(26.25)` da 27, que coincide exactamente con el `puntaje_final` esperado. La clasificacion se implemento con una tabla de rangos ordenada en lugar de condicionales anidados, y se valida el caso de lista vacia para evitar division por cero.
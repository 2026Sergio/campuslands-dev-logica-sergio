# Ejercicio 096 - Presupuestos y descuentos

## Analisis

- Entrada: un arreglo `participantes` con puntajes numericos, un `bono` y una `penalizacion`.
- Proceso: se calcula el promedio de `participantes`, se le suma el `bono`, se le resta la `penalizacion` y se redondea hacia arriba con `Math.ceil`. Con ese puntaje se determina una clasificacion segun rangos.
- Salida: un objeto con `puntaje_final`, `clasificacion` y una `explicacion` del calculo.

## Reglas identificadas

1. `puntaje_final = Math.ceil(promedio(participantes) + bono - penalizacion)`.
2. El redondeo se hace con `Math.ceil` porque es el unico metodo que reproduce el resultado esperado del ejemplo (26.25 -> 27).
3. La clasificacion se define por rangos: menor a 10 es "bajo", menor a 20 es "regular", menor a 40 es "competitivo", 40 o mas es "elite".
4. Si `participantes` esta vacio, el promedio se toma como 0 para evitar division por cero.

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
clasificacion: bajo
```

## Explicacion final

El promedio de `[12, 18, 25, 30]` es 21.25. Sumando el bono (8) y restando la penalizacion (3) se obtiene 26.25. Al redondear hacia arriba con `Math.ceil` se llega a 27, que coincide con el resultado esperado en el ejemplo del README del ejercicio. La tabla de clasificacion se definio para que 27 caiga en el rango "competitivo", como indica el ejemplo. El caso borde con arreglo vacio se maneja devolviendo promedio 0, evitando division por cero.

## Como ejecutar

```bash
node maria-montepeque.js
```
# Ejercicio 078 - Normalizacion de puntajes

## Analisis

- Entrada: lista `participantes` (numeros), `bono` y `penalizacion`.
- Proceso: se calcula el promedio de `participantes`, se redondea hacia arriba, se suma el bono y se resta la penalizacion. Con ese puntaje final se determina una clasificacion segun rangos.
- Salida: objeto con `puntaje_final`, `clasificacion` y `explicacion`.

## Reglas identificadas

1. El promedio de `participantes` se redondea con `Math.ceil` antes de aplicar bono y penalizacion.
2. `puntaje_final = Math.ceil(promedio(participantes)) + bono - penalizacion`.
3. La clasificacion se obtiene comparando `puntaje_final` contra una tabla de rangos ordenada: bajo (<=14), regular (<=24), competitivo (<=34), elite (resto).
4. Si `participantes` esta vacio, el promedio se toma como 0 para evitar division por cero.

## Como se dedujo la formula

El README solo da un ejemplo, asi que se probo por ingenieria inversa hasta igualar `puntaje_final: 27`:

- Promedio de `[12, 18, 25, 30]` = 21.25.
- `Math.ceil(21.25)` = 22.
- `22 + 8 (bono) - 3 (penalizacion)` = 27. Coincide con el resultado esperado.

Los rangos de clasificacion no estan definidos en el enunciado, por lo que se definieron de forma razonable para que 27 caiga en "competitivo": bajo, regular, competitivo, elite, en escalones de 10 puntos aproximadamente.

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

Se probo tambien un caso adicional con penalizacion mayor al puntaje base para confirmar que el resultado puede ser negativo sin romper la logica de clasificacion.

## Explicacion final

El promedio se redondea hacia arriba antes de sumar el bono y restar la penalizacion, ya que esa es la unica combinacion de redondeo y orden de operaciones que reproduce el resultado del ejemplo (`27`). La clasificacion se resuelve con una tabla de rangos recorrida en orden, evitando condicionales anidados y facilitando agregar nuevos niveles en el futuro.
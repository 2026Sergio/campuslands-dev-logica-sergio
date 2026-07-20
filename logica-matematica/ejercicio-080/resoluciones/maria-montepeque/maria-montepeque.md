# Solucion ejercicio 080 - logica matematica

## Analisis

- Entrada: un arreglo `participantes` con puntajes numericos, un `bono` y una `penalizacion`.
- Proceso: se calcula el promedio de los puntajes, se le suma el bono, se le resta la penalizacion y el resultado se redondea hacia arriba para obtener el puntaje final. Con ese puntaje se determina la clasificacion segun un rango.
- Salida: un objeto con `puntaje_final`, `clasificacion` y una `explicacion` del calculo.

## Reglas identificadas

1. El puntaje final es `Math.ceil(promedio(participantes) + bono - penalizacion)`.
2. La clasificacion depende del puntaje final:
   - 30 o mas: `excelente`
   - 20 a 29: `competitivo`
   - 10 a 19: `regular`
   - menos de 10: `bajo`
3. Si `participantes` esta vacio no hay promedio posible, por lo que el puntaje final es `0` y la clasificacion es `sin datos`.

## Formula reverse-engineered

Con el ejemplo del README (`participantes: [12, 18, 25, 30]`, `bono: 8`, `penalizacion: 3`) el promedio es `21.25`. Sumando el bono y restando la penalizacion queda `26.25`, y `Math.ceil(26.25)` da `27`, que coincide con el `puntaje_final` esperado y cae dentro del rango `competitivo`.

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

### Casos adicionales propios

- `[40, 45, 50]` con `bono: 10`, `penalizacion: 2` -> `puntaje_final: 53`, `clasificacion: excelente`.
- `[1, 2, 3]` con `bono: 0`, `penalizacion: 5` -> `puntaje_final: -3`, `clasificacion: bajo`.
- `[10, 12, 14]` con `bono: 2`, `penalizacion: 1` -> `puntaje_final: 13`, `clasificacion: regular`.

## Explicacion final

El README solo da un ejemplo, por lo que los limites exactos de cada rango de clasificacion (`excelente`, `competitivo`, `regular`, `bajo`) no estan explicitos en el enunciado. Se definieron rangos de 10 puntos de forma consistente con el unico dato confirmado (27 -> competitivo) y se documenta aqui esa decision para que sea revisable.

## Como ejecutar

```bash
node -e "console.log(require('./maria-montepeque.js').resolverReto([12, 18, 25, 30], 8, 3))"
```
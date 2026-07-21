# Ejercicio 095 - velocidad tiempo distancia

## Analisis

- Entrada: un objeto con `participantes` (arreglo de numeros), `bono` (numero) y `penalizacion` (numero).
- Proceso: se calcula el promedio de los participantes, se suma el bono, se resta la penalizacion y se redondea el resultado hacia arriba.
- Salida: un objeto con `puntaje_final`, `clasificacion` y `explicacion`.

## Reglas identificadas

1. `puntaje_final = Math.ceil(promedio(participantes) + bono - penalizacion)`.
2. La clasificacion se asigna segun rangos de `puntaje_final`:
   - `>= 30`: elite
   - `>= 20`: competitivo
   - `>= 10`: regular
   - `< 10`: bajo
3. Si `participantes` esta vacio, no existe promedio valido; se asigna `puntaje_final: 0` y clasificacion `bajo` para evitar division por cero.

## Nota sobre el README del ejercicio

El README original no especifica los rangos exactos de clasificacion, solo confirma con el ejemplo que un `puntaje_final` de 27 corresponde a `competitivo`. Los limites de los demas rangos (elite, regular, bajo) fueron definidos de forma razonable a partir de ese unico dato, ya que no hay otro ejemplo que los contraste.

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
clasificacion: bajo
```

## Explicacion final

La formula se obtuvo por ingenieria inversa a partir del ejemplo del enunciado: se probaron distintos metodos de redondeo (`floor`, `round`, `ceil`) sobre `promedio + bono - penalizacion`, y solo `Math.ceil` reproduce el resultado esperado de `27`. El caso borde de arreglo vacio se maneja explicitamente para evitar una division por cero al calcular el promedio.

## Como ejecutar

```bash
node maria-montepeque.js
```
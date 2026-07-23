# Ejercicio 073 - Logica matematica

## Analisis

- Entrada: `participantes` (arreglo de numeros), `bono` (numero), `penalizacion` (numero).
- Proceso: se calcula el promedio de `participantes`, se redondea hacia arriba y se le suma el bono y se le resta la penalizacion.
- Salida: objeto con `puntaje_final`, `clasificacion` y `explicacion`.

## Nota sobre el README del ejercicio

El titulo y la tematica del ejercicio ("coordenadas y distancia", "paracaidismo") no coinciden con el ejemplo de entrada/salida provisto (participantes, bono, penalizacion, puntaje_final). Se tomo el ejemplo literal como especificacion valida, siguiendo la convencion de que el ejemplo prevalece sobre el titulo cuando hay inconsistencia.

## Reglas identificadas

1. El promedio de `participantes` se calcula como la suma dividida entre la cantidad de elementos.
2. El promedio se redondea hacia arriba con `Math.ceil` para obtener el puntaje base.
3. `puntaje_final = puntaje_base + bono - penalizacion`.
4. La clasificacion se obtiene por rangos de `puntaje_final`:
   - `>= 30`: elite
   - `>= 20`: competitivo
   - `>= 10`: regular
   - `< 10`: principiante
5. La explicacion se arma segun si hubo bono, penalizacion, ambos o ninguno.
6. Si `participantes` es un arreglo vacio o no es un arreglo, el promedio se toma como 0.

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

Resultado obtenido (verificado con Node.js): coincide exactamente con lo esperado.

### Caso borde

Entrada:

```text
participantes: []
bono: 0
penalizacion: 0
```

Resultado obtenido:

```text
puntaje_final: 0
clasificacion: principiante
explicacion: no se aplicaron ajustes adicionales al promedio.
```

## Explicacion final

El promedio de `participantes` refleja el desempeno base del grupo. Se redondea hacia arriba porque, al verificar el ejemplo (promedio 21.25 con `puntaje_final` esperado en 22 antes de aplicar bono/penalizacion), `Math.ceil` fue el unico metodo de redondeo que reprodujo el resultado exacto del README. El arreglo vacio se maneja devolviendo un promedio de 0 en lugar de lanzar un error, evitando divisiones por cero.

## Como ejecutar

```bash
node maria-montepeque.js
```
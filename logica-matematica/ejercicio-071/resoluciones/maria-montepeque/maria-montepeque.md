# Ejercicio 071 - Logica matematica

## Analisis

- Entrada: `participantes` (arreglo de puntajes numericos), `bono` (numero), `penalizacion` (numero).
- Proceso: se calcula el promedio de `participantes`, se le suma el `bono`, se le resta la `penalizacion` y se redondea hacia arriba. Con ese resultado se determina una clasificacion segun rangos.
- Salida: objeto con `puntaje_final`, `clasificacion` y `explicacion`.

## Nota sobre el README del ejercicio

El titulo del ejercicio dice "conteo combinatorio simple", pero el ejemplo de entrada y salida corresponde a un calculo de promedio con bono y penalizacion, no a un conteo combinatorio. Se tomo el ejemplo literal como especificacion valida, siguiendo la convencion de que el ejemplo manda sobre el titulo.

## Reglas identificadas

1. El promedio de `participantes` se calcula como la suma de sus valores dividida entre la cantidad de elementos.
2. El `puntaje_final` es `Math.ceil(promedio + bono - penalizacion)`. Se probo con `Math.round` y `Math.floor` y ninguno reproducia el `27` del ejemplo (promedio 21.25 + 8 - 3 = 26.25); solo `Math.ceil` da 27.
3. La clasificacion se define por rangos ordenados sobre `puntaje_final`:
   - menor a 15: `novato`
   - 15 a 24: `intermedio`
   - 25 a 34: `competitivo`
   - 35 o mas: `elite`
   Estos rangos no estan definidos en el README del ejercicio, por lo que se disenaron para que el ejemplo (27 -> competitivo) encaje de forma coherente con una escala de dificultad creciente.
4. Si `participantes` esta vacio, no se puede calcular un promedio, por lo que se retorna `puntaje_final: null` y `clasificacion: 'sin_participantes'` en vez de dividir entre cero.

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
puntaje_final: null
clasificacion: sin_participantes
```

## Explicacion final

La solucion separa el calculo del promedio, el calculo del puntaje final y la clasificacion en funciones independientes, evitando condicionales anidados. La clasificacion usa una tabla ordenada de rangos recorrida con `find`, lo que permite agregar o ajustar categorias sin tocar la logica principal. El caso borde de `participantes` vacio se maneja de forma explicita para evitar una division entre cero.

## Como ejecutar

```bash
node maria-montepeque.js
```
# Ejercicio 066 - logica-matematica

## Analisis

- Entrada: un arreglo `participantes` (numeros), un `bono` y una `penalizacion`.
- Proceso: se calcula el promedio de `participantes`, se suma el `bono`, se resta la `penalizacion` y se redondea hacia arriba. Con ese puntaje se determina una clasificacion segun rangos.
- Salida: un objeto con `puntaje_final`, `clasificacion` y `explicacion`.

## Discrepancia detectada en el README

El titulo del ejercicio indica "conversion de unidades" y la tematica es "autos hiperdeportivos", pero el ejemplo de entrada/salida corresponde a un calculo de puntaje con `participantes`, `bono` y `penalizacion` (igual al patron de ejercicios anteriores de puntaje). Se tomo el ejemplo literal como especificacion valida, siguiendo el criterio de que el ejemplo prevalece sobre el titulo o la tematica.

## Reglas identificadas

1. Si `participantes` esta vacio, se retorna `puntaje_final: 0` con clasificacion `sin datos`.
2. El promedio de `participantes` se suma con `bono` y se resta `penalizacion`.
3. El resultado se redondea hacia arriba con `Math.ceil` (verificado contra el ejemplo: promedio 21.25 + 8 - 3 = 26.25 -> 27).
4. La clasificacion se obtiene de una tabla de rangos ordenada de mayor a menor:
   - 35 o mas: `elite`
   - 25 a 34: `competitivo`
   - 15 a 24: `regular`
   - menos de 15: `bajo`

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
bono: 8
penalizacion: 3
```

Resultado esperado:

```text
puntaje_final: 0
clasificacion: sin datos
```

## Explicacion final

El promedio de `participantes` resume el desempeno del grupo antes de aplicar ajustes. Sumar el `bono` y restar la `penalizacion` refleja incentivos y descuentos sobre ese desempeno base, y `Math.ceil` asegura que el puntaje final se redondee siempre hacia arriba, tal como exige el ejemplo del README (27 a partir de 26.25). La clasificacion usa una tabla de rangos ordenada para evitar condicionales anidados y facilitar agregar nuevos niveles en el futuro. El caso borde de arreglo vacio se maneja antes de dividir, evitando un resultado `NaN`.
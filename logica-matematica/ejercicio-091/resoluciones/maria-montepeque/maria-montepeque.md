# Ejercicio 091 - Logica matematica

## Analisis

- Entrada: lista `participantes` (numeros), `bono` (numero), `penalizacion` (numero).
- Proceso: calcular el promedio de `participantes`, redondear hacia arriba, sumar el `bono` y restar la `penalizacion` para obtener el `puntaje_final`. Luego clasificar ese puntaje segun rangos.
- Salida: objeto con `puntaje_final`, `clasificacion` y `explicacion`.

## Reglas identificadas

1. El promedio de los participantes se calcula sumando todos los valores y dividiendo entre la cantidad de participantes.
2. El promedio se redondea hacia arriba con `Math.ceil` antes de aplicar el bono y la penalizacion.
3. `puntaje_final = Math.ceil(promedio) + bono - penalizacion`.
4. La clasificacion se determina segun el `puntaje_final`:
   - menor a 15: `principiante`
   - menor a 25: `intermedio`
   - menor a 35: `competitivo`
   - 35 o mas: `elite`
5. Si `participantes` esta vacio, el promedio se considera 0 para evitar division entre cero.

## Nota sobre el README original

El titulo del ejercicio menciona "conteo combinatorio simple", pero el ejemplo de entrada/salida corresponde a un calculo de promedio con bono y penalizacion, no a una combinatoria. Se siguio el ejemplo literal como especificacion, ya que el README tampoco define rangos explicitos para la clasificacion; los rangos usados fueron inferidos de forma razonable a partir del unico dato conocido (27 = competitivo).

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
clasificacion: principiante
```

## Explicacion final

La solucion evita condicionales anidados usando una tabla ordenada de rangos para la clasificacion y una funcion separada para el calculo del promedio, lo que mantiene el flujo principal legible y facil de probar. Se valido con Node.js que el caso del ejemplo produce exactamente `puntaje_final: 27` y `clasificacion: competitivo`.
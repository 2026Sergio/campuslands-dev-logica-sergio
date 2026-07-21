# Ejercicio 086 - Logica matematica

## Analisis

- Entrada: un arreglo `participantes` con valores numericos, un `bono` y una `penalizacion`.
- Proceso: se calcula el promedio de `participantes`, se le suma el `bono`, se le resta la `penalizacion` y se redondea hacia arriba para obtener el puntaje final. Con ese puntaje se determina una clasificacion segun rangos.
- Salida: un objeto con `puntaje_final`, `clasificacion` y `explicacion`.

## Nota sobre el README del ejercicio

El titulo del ejercicio menciona "conversion de unidades", pero el ejemplo de entrada y salida corresponde a un calculo de puntaje con bono y penalizacion sobre un grupo de participantes. Se tomo el ejemplo como especificacion autoritativa, siguiendo el mismo criterio usado en ejercicios anteriores cuando el titulo no coincide con el contenido real del reto.

## Reglas identificadas

1. El puntaje final es el promedio de `participantes`, mas el `bono`, menos la `penalizacion`, redondeado hacia arriba (`Math.ceil`).
2. La clasificacion se determina por rangos ordenados sobre el puntaje final:
   - hasta 15: principiante
   - hasta 22: intermedio
   - hasta 30: competitivo
   - mas de 30: elite
3. Si `participantes` esta vacio, se retorna un puntaje de 0 y clasificacion `sin_datos`.

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

## Explicacion final

El promedio de `[12, 18, 25, 30]` es 21.25. Sumando el bono (8) y restando la penalizacion (3) da 26.25, y al redondear hacia arriba se obtiene 27, que coincide con el resultado esperado del README. La clasificacion se resuelve buscando el primer rango cuyo limite sea mayor o igual al puntaje final, lo que evita condicionales anidados y facilita agregar nuevos rangos. El caso borde de arreglo vacio se maneja antes de calcular el promedio para evitar una division por cero.
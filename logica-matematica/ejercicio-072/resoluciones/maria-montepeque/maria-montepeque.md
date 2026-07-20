# Ejercicio 072 - Logica matematica

## Analisis

- Entrada: una lista de puntajes de `participantes`, un `bono` y una `penalizacion`.
- Proceso: se calcula el promedio de los participantes, se le suma el bono y se le resta la penalizacion; el resultado se redondea hacia arriba y se clasifica segun un rango.
- Salida: un objeto con `puntaje_final`, `clasificacion` y `explicacion`.

## Nota sobre el enunciado

El titulo del ejercicio menciona "probabilidad basica", pero el ejemplo de entrada/salida no describe un calculo de probabilidad, sino un puntaje derivado de un promedio, un bono y una penalizacion. Se tomo el ejemplo como la especificacion valida, tal como lo indica la explicacion del resultado esperado: "se sumo el bono y se resto la penalizacion segun las reglas".

## Reglas identificadas

1. Si `participantes` esta vacio, no hay datos suficientes: se retorna `puntaje_final: 0` y `clasificacion: 'sin_datos'`.
2. Se calcula el promedio de los valores en `participantes`.
3. Al promedio se le suma `bono` y se le resta `penalizacion` para obtener el puntaje base.
4. `puntaje_final` es el puntaje base redondeado hacia arriba con `Math.ceil`.
5. La clasificacion se obtiene con una tabla de rangos ordenada de mayor a menor:
   - `puntaje_final >= 30`: elite
   - `puntaje_final >= 20`: competitivo
   - `puntaje_final >= 10`: amateur
   - cualquier otro valor: principiante

## Formula

```
promedio = suma(participantes) / cantidad(participantes)
puntaje_final = ceil(promedio + bono - penalizacion)
```

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

Resultado obtenido: `puntaje_final: 27`, `clasificacion: 'competitivo'`. Coincide con el ejemplo.

### Caso borde (sin participantes)

Entrada:

```text
participantes: []
bono: 5
penalizacion: 2
```

Resultado esperado: no debe intentarse una division por cero; se retorna un puntaje neutro con clasificacion `sin_datos`.

Resultado obtenido: `puntaje_final: 0`, `clasificacion: 'sin_datos'`.

### Caso adicional (puntaje bajo)

Entrada:

```text
participantes: [5, 8, 10]
bono: 2
penalizacion: 1
```

Resultado obtenido: `puntaje_final: 9`, `clasificacion: 'principiante'`. Confirma que la tabla de rangos clasifica correctamente valores por debajo de 10.

## Explicacion final

El promedio de los participantes representa el nivel base del grupo; el bono y la penalizacion ajustan ese nivel segun eventos del reto. Redondear hacia arriba con `Math.ceil` fue la unica operacion que reproduce exactamente el `puntaje_final: 27` del ejemplo oficial. La clasificacion usa una tabla de rangos en lugar de condicionales anidados para que agregar o modificar categorias sea directo. El caso de participantes vacio se maneja explicitamente para evitar una division por cero.

## Como ejecutar

```bash
node maria-montepeque.js
```
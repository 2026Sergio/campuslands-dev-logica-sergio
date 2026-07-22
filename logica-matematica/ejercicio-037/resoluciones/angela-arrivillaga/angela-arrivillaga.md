# Plantilla de solucion

## Analisis

- Entrada: 
  - `planosModelados`: Arreglo en formato JSON de números que representa los planos modelados (ej. `[12, 18, 25, 30]` o vacío `[]`).
  - `bonoDetalle`: Número en formato JSON que representa un bono adicional por detalle (ej. `8` o `10`).
  - `penalizacionRevision`: Número en formato JSON que representa los puntos a restar por revisiones (ej. `3` o `2`).
- Proceso: 
  - Se valida si el arreglo JSON `planosModelados` está vacío. Si la longitud es `0`, se retorna `0` inmediatamente.
  - Si el arreglo contiene elementos, se calcula la cantidad total de planos obteniendo la longitud del arreglo (`planosModelados.length`).
  - Se calcula el `puntajeFinal` sumando la cantidad total de planos y el `bonoDetalle`, y restando la `penalizacionRevision`.
  - Se retorna el valor numérico resultante del `puntajeFinal`.
- Salida: 
  - Un número entero en formato JSON que representa el puntaje final obtenido en el proyecto de arquitectura 3D.

## Reglas identificadas

1. Si no hay planos modelados registrados en la estructura JSON (el arreglo está vacío), el puntaje total por defecto es `0`.
2. El puntaje base de los planos se determina directamente a partir de la cantidad de elementos (longitud) contenidos en el arreglo JSON de planos.
3. El bono por detalle suma puntos al resultado, mientras que la penalización por revisión los resta.

## Pruebas

### Caso normal

Entrada:
```json
{
  "planosModelados": [12, 18, 25, 30],
  "bonoDetalle": 8,
  "penalizacionRevision": 3
}
```

Resultado esperado:

```json
{
  "resultado": 27
}
```

### Caso borde
Entrada:

```json
{
  "planosModelados": [],
  "bonoDetalle": 10,
  "penalizacionRevision": 2
}
```

Resultado esperado:

```json
{
  "resultado": 0
}
```

## Explicacion final
La solución funciona evaluando primero si el arreglo de planos recibido en la estructura JSON se encuentra vacío para retornar cero de forma anticipada. Posteriormente, calcula la cantidad de planos procesados a partir de la longitud del arreglo, aplicando las operaciones aritméticas de suma `bonoDetalle` y resta `penalizacionRevision` para entregar el puntaje final de manera directa y eficiente.
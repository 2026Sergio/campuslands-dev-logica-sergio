# Plantilla de solucion

## Analisis

- Entrada: 
  - `cordonesInspeccionados`: Arreglo en formato JSON de números que representa los cordones de soldadura inspeccionados (ej. `[12, 18, 25, 30]` o `[50]`).
  - `bonoPrecision`: Número en formato JSON que representa un bono adicional por precisión (ej. `8` o `5`).
  - `penalizacionPorosidad`: Número en formato JSON que representa los puntos a restar por porosidad o defectos (ej. `3` o `45`).
- Proceso: 
  - Se valida si el arreglo JSON `cordonesInspeccionados` está vacío. Si la longitud es `0`, se retorna `0` inmediatamente.
  - Si el arreglo contiene elementos, se calcula la cantidad total de cordones obteniendo la longitud del arreglo (`cordonesInspeccionados.length`).
  - Se calcula el `puntajeFinal` sumando la cantidad total de cordones y el `bonoPrecision`, y restando la `penalizacionPorosidad`.
  - Se retorna el valor numérico resultante del `puntajeFinal`.
- Salida: 
  - Un número entero en formato JSON que representa el puntaje final obtenido en el trabajo de soldadura.

## Reglas identificadas

1. Si no hay cordones inspeccionados registrados en la estructura JSON (el arreglo está vacío), el puntaje total por defecto es `0`.
2. El puntaje base de los cordones se determina directamente a partir de la cantidad de elementos (longitud) contenidos en el arreglo JSON de inspección.
3. El bono por precisión suma puntos al resultado, mientras que la penalización por porosidad los resta.

## Pruebas

### Caso normal

Entrada:
```json
{
  "cordonesInspeccionados": [12, 18, 25, 30],
  "bonoPrecision": 8,
  "penalizacionPorosidad": 3
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
  "cordonesInspeccionados": [50],
  "bonoPrecision": 5,
  "penalizacionPorosidad": 45
}
```

Resultado esperado:

```json
{
  "resultado": -39
}
```

## Explicacion final
La solución funciona evaluando primero si el arreglo de cordones recibido en la estructura JSON se encuentra vacío para retornar cero de forma anticipada. Posteriormente, calcula la cantidad de cordones inspeccionados a partir de la longitud del arreglo, aplicando las operaciones aritméticas de suma `bonoPrecision` y resta `penalizacionPorosidad` para entregar el puntaje final de manera directa y eficiente.
# Plantilla de solucion

## Analisis

- Entrada: 
  - `reactivosMezclados`: Arreglo en formato JSON de números que representa los reactivos mezclados en la fórmula química (ej. `[12, 18, 25, 30]` o vacío `[]`).
  - `bonoPureza`: Número en formato JSON que representa un bono adicional por pureza (ej. `8` o `12`).
  - `penalizacionContaminacion`: Número en formato JSON que representa los puntos a restar por contaminación (ej. `3` o `4`).
- Proceso: 
  - Se valida si el arreglo JSON `reactivosMezclados` está vacío. Si la longitud es `0`, se retorna `0` inmediatamente.
  - Si el arreglo contiene elementos, se calcula la cantidad total de reactivos obteniendo la longitud del arreglo (`reactivosMezclados.length`).
  - Se calcula el `puntajeFinal` sumando la cantidad total de reactivos y el `bonoPureza`, y restando la `penalizacionContaminacion`.
  - Se retorna el valor numérico resultante del `puntajeFinal`.
- Salida: 
  - Un número entero en formato JSON que representa el puntaje final obtenido en el ensayo de fórmulas químicas.

## Reglas identificadas

1. Si no hay reactivos mezclados registrados en la estructura JSON (el arreglo está vacío), el puntaje total por defecto es `0`.
2. El puntaje base de los reactivos se determina directamente a partir de la cantidad de elementos (longitud) contenidos en el arreglo JSON de mezcla.
3. El bono por pureza suma puntos al resultado, mientras que la penalización por contaminación los resta.

## Pruebas

### Caso normal

Entrada:
```json
{
  "reactivosMezclados": [12, 18, 25, 30],
  "bonoPureza": 8,
  "penalizacionContaminacion": 3
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
  "reactivosMezclados": [],
  "bonoPureza": 12,
  "penalizacionContaminacion": 4
}
```

Resultado esperado:

```json
{
  "resultado": 0
}
```

## Explicacion final
La solución funciona evaluando primero si el arreglo de reactivos recibido en la estructura JSON se encuentra vacío para retornar cero de forma anticipada. Posteriormente, calcula la cantidad de reactivos analizados a partir de la longitud del arreglo, aplicando las operaciones aritméticas de suma `bonoPureza` y resta `penalizacionContaminacion` para entregar el puntaje final de manera directa y eficiente.
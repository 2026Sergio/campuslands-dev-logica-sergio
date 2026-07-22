# Plantilla de solucion

## Analisis

- Entrada: 
  - `saltosUbicacion`: Arreglo en formato JSON de números que representa los saltos según su ubicación (ej. `[12, 18, 25, 30]` o vacío `[]`).
  - `bonoViento`: Número en formato JSON que representa un bono adicional por condiciones de viento (ej. `8`).
  - `penalizacionDesviacion`: Número en formato JSON que representa los puntos a restar por desviaciones (ej. `3`).
- Proceso: 
  - Se valida si el arreglo JSON `saltosUbicacion` está vacío. Si la longitud es `0`, se retorna `0` inmediatamente.
  - Si el arreglo contiene elementos, se calcula la cantidad total de saltos obteniendo la longitud del arreglo (`saltosUbicacion.length`).
  - Se calcula el `puntajeFinal` sumando la cantidad total de saltos y el `bonoViento`, y restando la `penalizacionDesviacion`.
  - Se retorna el valor numérico resultante del `puntajeFinal`.
- Salida: 
  - Un número entero en formato JSON que representa el puntaje final obtenido en la actividad de paracaidismo.

## Reglas identificadas

1. Si no hay saltos de ubicación registrados en la estructura JSON (el arreglo está vacío), el puntaje total por defecto es `0`.
2. El puntaje base de los saltos se determina directamente a partir de la cantidad de elementos (longitud) contenidos en el arreglo JSON de ubicación.
3. El bono por viento suma puntos al resultado, mientras que la penalización por desviación los resta.

## Pruebas

### Caso normal

Entrada:
```json
{
  "saltosUbicacion": [12, 18, 25, 30],
  "bonoViento": 8,
  "penalizacionDesviacion": 3
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
  "saltosUbicacion": [],
  "bonoViento": 15,
  "penalizacionDesviacion": 2
}
```

Resultado esperado:

```json
{
  "resultado": 0
}
```

## Explicacion final
La solución funciona evaluando primero si el arreglo de saltos recibido en la estructura JSON se encuentra vacío para retornar cero de forma anticipada. Posteriormente, calcula la cantidad de saltos ejecutados a partir de la longitud del arreglo, aplicando las operaciones aritméticas de suma (`bonoViento`) y resta (`penalizacionDesviacion`) para entregar el puntaje final de manera directa y eficiente.
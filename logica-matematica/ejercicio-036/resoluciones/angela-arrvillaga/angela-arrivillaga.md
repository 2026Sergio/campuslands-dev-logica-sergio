# Plantilla de solucion

## Analisis

- Entrada: 
  - `framesRender`: Arreglo en formato JSON de números que representa los frames renderizados de la animación (ej. `[12, 18, 25, 30]` o `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`).
  - `bonoCalidad`: Número en formato JSON que representa un bono adicional por calidad (ej. `8` o `20`).
  - `penalizacionTiempo`: Número en formato JSON que representa los puntos a restar por demoras en el tiempo (ej. `3` o `5`).
- Proceso: 
  - Se valida si el arreglo JSON `framesRender` está vacío. Si la longitud es `0`, se retorna `0` inmediatamente.
  - Si el arreglo contiene elementos, se calcula la cantidad total de frames obteniendo la longitud del arreglo (`framesRender.length`).
  - Se calcula el `puntajeFinal` sumando la cantidad total de frames y el `bonoCalidad`, y restando la `penalizacionTiempo`.
  - Se retorna el valor numérico resultante del `puntajeFinal`.
- Salida: 
  - Un número entero en formato JSON que representa el puntaje final obtenido en el proyecto de animación 3D.

## Reglas identificadas

1. Si no hay frames renderizados registrados en la estructura JSON (el arreglo está vacío), el puntaje total por defecto es `0`.
2. El puntaje base de la animación se determina directamente a partir de la cantidad de elementos (longitud) contenidos en el arreglo JSON de frames.
3. El bono por calidad suma puntos al resultado, mientras que la penalización por tiempo los resta.

## Pruebas

### Caso normal

Entrada:
```json
{
  "framesRender": [12, 18, 25, 30],
  "bonoCalidad": 8,
  "penalizacionTiempo": 3
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
  "framesRender": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  "bonoCalidad": 20,
  "penalizacionTiempo": 5
}
```

Resultado esperado:

```json
{
  "resultado": 25
}
```

## Explicacion final
La solución funciona evaluando primero si el arreglo de frames recibido en la estructura JSON se encuentra vacío para retornar cero de forma anticipada. Posteriormente, calcula la cantidad de frames procesados a partir de la longitud del arreglo, aplicando las operaciones aritméticas de suma `bonoCalidad` y resta `penalizacionTiempo` para entregar el puntaje final de manera directa y eficiente.
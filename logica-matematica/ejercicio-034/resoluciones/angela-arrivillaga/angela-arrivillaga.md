# Plantilla de solucion

## Analisis

- Entrada: 
  - `disenosTinta`: Arreglo en formato JSON de números que representa los diseños de tinta (ej. `[12, 18, 25, 30]` o `[100, 200]`).
  - `bonoComplejidad`: Número en formato JSON que representa un bono adicional por complejidad (ej. `8` o `50`).
  - `penalizacionPiel`: Número en formato JSON que representa los puntos a restar por reacciones o penalizaciones en la piel (ej. `3` o `5`).
- Proceso: 
  - Se valida si el arreglo JSON `disenosTinta` está vacío. Si la longitud es `0`, se retorna `0` inmediatamente.
  - Si el arreglo contiene elementos, se calcula la cantidad total de diseños obteniendo la longitud del arreglo (`disenosTinta.length`).
  - Se calcula el `puntajeFinal` sumando la cantidad total de diseños y el `bonoComplejidad`, y restando la `penalizacionPiel`.
  - Se retorna el valor numérico resultante del `puntajeFinal`.
- Salida: 
  - Un número entero en formato JSON que representa el puntaje final obtenido en el estudio de tatuajes.

## Reglas identificadas

1. Si no hay diseños de tinta registrados en la estructura JSON (el arreglo está vacío), el puntaje total por defecto es `0`.
2. El puntaje base de los diseños se determina directamente a partir de la cantidad de elementos (longitud) contenidos en el arreglo JSON de tinta.
3. El bono por complejidad suma puntos al resultado, mientras que la penalización por piel los resta.

## Pruebas

### Caso normal

Entrada:
```json
{
  "disenosTinta": [12, 18, 25, 30],
  "bonoComplejidad": 8,
  "penalizacionPiel": 3
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
  "disenosTinta": [100, 200],
  "bonoComplejidad": 50,
  "penalizacionPiel": 5
}
```

Resultado esperado:

```json
{
  "resultado": 47
}
```

## Explicacion final
La solución funciona evaluando primero si el arreglo de diseños recibido en la estructura JSON se encuentra vacío para retornar cero de forma anticipada. Posteriormente, calcula la cantidad de diseños ejecutados a partir de la longitud del arreglo, aplicando las operaciones aritméticas de suma `bonoComplejidad` y resta `penalizacionPiel` para entregar el puntaje final de manera directa y eficiente.
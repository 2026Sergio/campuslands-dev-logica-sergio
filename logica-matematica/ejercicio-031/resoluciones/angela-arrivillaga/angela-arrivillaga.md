# Plantilla de solucion

## Analisis

- Entrada: 
  - `combinacionesGolpes`: Arreglo en formato JSON de números que representa las combinaciones de golpes realizadas (ej. `[12, 18, 25, 30]`).
  - `bonoTecnica`: Número en formato JSON que representa un bono adicional por técnica (ej. `8`).
  - `penalizacionBloqueo`: Número en formato JSON que representa los puntos a restar por bloqueos o penalizaciones (ej. `3`).
- Proceso: 
  - Se valida si el arreglo JSON `combinacionesGolpes` está vacío. Si la longitud es `0`, se retorna `0` inmediatamente.
  - Si el arreglo contiene elementos, se calcula la cantidad total de combinaciones obteniendo la longitud del arreglo (`combinacionesGolpes.length`).
  - Se calcula el `puntajeFinal` sumando la cantidad total de combinaciones y el `bonoTecnica`, y restando la `penalizacionBloqueo`.
  - Se retorna el valor numérico resultante del `puntajeFinal`.
- Salida: 
  - Un número entero en formato JSON que representa el puntaje final obtenido en el combate de kickboxing.

## Reglas identificadas

1. Si no hay combinaciones de golpes registradas en la estructura JSON (el arreglo está vacío), el puntaje total por defecto es `0`.
2. El puntaje base de las combinaciones se determina directamente a partir de la cantidad de elementos (longitud) contenidos en el arreglo JSON de golpes.
3. El bono por técnica suma puntos al resultado, mientras que la penalización por bloqueo los resta.

## Pruebas

### Caso normal

Entrada:
```json
{
  "combinacionesGolpes": [12, 18, 25, 30],
  "bonoTecnica": 8,
  "penalizacionBloqueo": 3
}
```

Resultado esperado:

``` json
{
  "resultado": 27
}
```

### Caso borde
Entrada:

```json
{
  "combinacionesGolpes": [10, 20],
  "bonoTecnica": 0,
  "penalizacionBloqueo": 0
}
```

Resultado esperado:

```json
{
  "resultado": 1
}
```

## Explicacion final
La solución funciona evaluando primero si el arreglo de golpes recibido en la estructura JSON se encuentra vacío para retornar cero de forma anticipada. Posteriormente, calcula la cantidad de combinaciones ejecutadas a partir de la longitud del arreglo, aplicando las operaciones aritméticas de suma (`bonoTecnica`) y resta (`penalizacionBloqueo`) para entregar el puntaje final de manera directa y eficiente.
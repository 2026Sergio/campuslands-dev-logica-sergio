# Plantilla de solucion

## Analisis

- Entrada: 
  - `trazosRegistrados`: Arreglo en formato JSON de números que representa los trazos registrados en el dibujo (ej. `[12, 18, 25, 30]` o vacío `[]`).
  - `bonoVelocidad`: Número en formato JSON que representa un bono adicional por velocidad (ej. `8` o `5`).
  - `penalizacionCorreccion`: Número en formato JSON que representa los puntos a restar por correcciones (ej. `3` o `1`).
- Proceso: 
  - Se valida si el arreglo JSON `trazosRegistrados` está vacío. Si la longitud es `0`, se retorna `0` inmediatamente.
  - Si el arreglo contiene elementos, se calcula la cantidad total de trazos obteniendo la longitud del arreglo (`trazosRegistrados.length`).
  - Se calcula el `puntajeFinal` sumando la cantidad total de trazos y el `bonoVelocidad`, y restando la `penalizacionCorreccion`.
  - Se retorna el valor numérico resultante del `puntajeFinal`.
- Salida: 
  - Un número entero en formato JSON que representa el puntaje final obtenido en la actividad de dibujo digital.

## Reglas identificadas

1. Si no hay trazos registrados en la estructura JSON (el arreglo está vacío), el puntaje total por defecto es `0`.
2. El puntaje base de los trazos se determina directamente a partir de la cantidad de elementos (longitud) contenidos en el arreglo JSON de trazos.
3. El bono por velocidad suma puntos al resultado, mientras que la penalización por corrección los resta.

## Pruebas

### Caso normal

Entrada:
```json
{
  "trazosRegistrados": [12, 18, 25, 30],
  "bonoVelocidad": 8,
  "penalizacionCorreccion": 3
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
  "trazosRegistrados": [],
  "bonoVelocidad": 5,
  "penalizacionCorreccion": 1
}
```

Resultado esperado:

```json
{
  "resultado": 0
}
```

## Explicacion final
La solución funciona evaluando primero si el arreglo de trazos recibido en la estructura JSON se encuentra vacío para retornar cero de forma anticipada. Posteriormente, calcula la cantidad de trazos ejecutados a partir de la longitud del arreglo, aplicando las operaciones aritméticas de suma `bonoVelocidad` y resta `penalizacionCorreccion` para entregar el puntaje final de manera directa y eficiente.
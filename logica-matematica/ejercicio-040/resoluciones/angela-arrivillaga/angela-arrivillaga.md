# Plantilla de solucion

## Analisis

- Entrada: 
  - `recetasPreparadas`: Arreglo en formato JSON de números que representa las recetas preparadas (ej. `[12, 18, 25, 30]` o `[1, 2, 3, 4]`).
  - `bonoSabor`: Número en formato JSON que representa un bono adicional por sabor (ej. `8` o `15`).
  - `penalizacionEspera`: Número en formato JSON que representa los puntos a restar por tiempo de espera (ej. `3` o `0`).
- Proceso: 
  - Se valida si el arreglo JSON `recetasPreparadas` está vacío. Si la longitud es `0`, se retorna `0` inmediatamente.
  - Si el arreglo contiene elementos, se calcula la cantidad total de recetas obteniendo la longitud del arreglo (`recetasPreparadas.length`).
  - Se calcula el `puntajeFinal` sumando la cantidad total de recetas y el `bonoSabor`, y restando la `penalizacionEspera`.
  - Se retorna el valor numérico resultante del `puntajeFinal`.
- Salida: 
  - Un número entero en formato JSON que representa el puntaje final obtenido en el proyecto de comida urbana.

## Reglas identificadas

1. Si no hay recetas preparadas registradas en la estructura JSON (el arreglo está vacío), el puntaje total por defecto es `0`.
2. El puntaje base de las recetas se determina directamente a partir de la cantidad de elementos (longitud) contenidos en el arreglo JSON de recetas.
3. El bono por sabor suma puntos al resultado, mientras que la penalización por espera los resta.

## Pruebas

### Caso normal

Entrada:
```json
{
  "recetasPreparadas": [12, 18, 25, 30],
  "bonoSabor": 8,
  "penalizacionEspera": 3
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
  "recetasPreparadas": [1, 2, 3, 4],
  "bonoSabor": 15,
  "penalizacionEspera": 0
}
```

Resultado esperado:

```json
{
  "resultado": 19
}
```

## Explicacion final
La solución funciona evaluando primero si el arreglo de recetas recibido en la estructura JSON se encuentra vacío para retornar cero de forma anticipada. Posteriormente, calcula la cantidad de recetas procesadas a partir de la longitud del arreglo, aplicando las operaciones aritméticas de suma `bonoSabor` y resta `penalizacionEspera` para entregar el puntaje final de manera directa y eficiente.
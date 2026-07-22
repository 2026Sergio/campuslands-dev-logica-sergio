# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo con los destinos visitados, un bono por temporada y una penalización por cancelación.
- **Proceso:** Validar si el arreglo de destinos está vacío para retornar 0, y calcular el puntaje final sumando la cantidad total de elementos registrados en el arreglo más el bono, restando finalmente la penalización.
- **Salida:** Un valor numérico que representa el puntaje final del turismo.

## Reglas identificadas

1. Si no hay destinos registrados en el arreglo, el puntaje resultante es 0.
2. El cálculo base es la suma de la cantidad de elementos en el arreglo (`totalViajes`) y el `bonoTemporada`.
3. El `puntajeFinal` resulta de restar la `penalizacionCancelacion` al resultado del cálculo base.

## Pruebas

### Caso normal

Entrada:
```json
{ 
  "destinosVisitados": [12, 18, 25, 30], 
  "bonoTemporada": 8, 
  "penalizacionCancelacion": 3 
}
```

Resultado esperado:

`9`

### Caso borde
Entrada:

```json
{ 
  "destinosVisitados": [5, 6, 7], 
  "bonoTemporada": 12, 
  "penalizacionCancelacion": 0 
}
```

Resultado esperado:

`15`

## Explicacion final
La función determina el puntaje basándose en la cantidad total de elementos que componen el arreglo `destinosVisitados`. La estructura incluye una validación de seguridad inicial para retornar 0 si la lista está vacía, evitando así cálculos erróneos. Siguiendo el mismo patrón de los ejercicios anteriores, la fórmula aritmética depende exclusivamente de la longitud del arreglo, ignorando los valores numéricos individuales que este contenga.
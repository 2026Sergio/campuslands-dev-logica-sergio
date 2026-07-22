# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo con los puntos de unión, un bono por grosor y una penalización por porosidad.
- **Proceso:** Validar si el arreglo de puntos de unión está vacío para retornar 0, y calcular el puntaje final sumando la cantidad total de elementos registrados en el arreglo más el bono, restando finalmente la penalización.
- **Salida:** Un valor numérico que representa el puntaje final de la soldadura.

## Reglas identificadas

1. Si no hay puntos de unión registrados en el arreglo, el puntaje resultante es 0.
2. El cálculo base es la suma de la cantidad de elementos en el arreglo (`totalPiezas`) y el `bonoGrosor`.
3. El `puntajeFinal` resulta de restar la `penalizacionPorosidad` al resultado del cálculo base.

## Pruebas

### Caso normal

Entrada:
```json
{ 
  "puntosUnion": [12, 18, 25, 30], 
  "bonoGrosor": 8, 
  "penalizacionPorosidad": 3 
}
```

Resultado esperado:

`9`

### Caso borde
Entrada:

```json
{ 
  "puntosUnion": [1, 2, 3, 4, 5, 6], 
  "bonoGrosor": 4, 
  "penalizacionPorosidad": 4 
}
```

Resultado esperado:

`6`

## Explicacion final
La función determina el puntaje basándose en la cantidad total de elementos que componen el arreglo `puntosUnion`. La estructura incluye una validación de seguridad inicial para retornar 0 si la lista está vacía, evitando así cálculos erróneos. Siguiendo el mismo patrón de los ejercicios anteriores, la fórmula aritmética depende exclusivamente de la longitud del arreglo, ignorando los valores numéricos individuales que este contenga.
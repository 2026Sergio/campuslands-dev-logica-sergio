# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo con los pedidos despachados, un bono por rapidez y una penalización por desperdicio.
- **Proceso:** Validar si el arreglo de pedidos está vacío para retornar 0, y calcular el puntaje final sumando la cantidad total de elementos registrados en el arreglo más el bono, restando finalmente la penalización.
- **Salida:** Un valor numérico que representa el puntaje final de la comida urbana.

## Reglas identificadas

1. Si no hay pedidos registrados en el arreglo, el puntaje resultante es 0.
2. El cálculo base es la suma de la cantidad de elementos en el arreglo (`totalOrdenes`) y el `bonoRapidez`.
3. El `puntajeFinal` resulta de restar la `penalizacionDesperdicio` al resultado del cálculo base.

## Pruebas

### Caso normal

Entrada:
```json
{ 
  "pedidosDespachados": [12, 18, 25, 30], 
  "bonoRapidez": 8, 
  "penalizacionDesperdicio": 3 
}
```

Resultado esperado:

`9`

### Caso borde
Entrada:

```json
{ 
  "pedidosDespachados": [10, 12], 
  "bonoRapidez": 15, 
  "penalizacionDesperdicio": 0 
}
```

Resultado esperado:

`17`

## Explicacion final
La función determina el puntaje basándose en la cantidad total de elementos que componen el arreglo `pedidosDespachados`. La estructura incluye una validación de seguridad inicial para retornar 0 si la lista está vacía, evitando así cálculos erróneos. Siguiendo el mismo patrón de los ejercicios anteriores, la fórmula aritmética depende exclusivamente de la longitud del arreglo, ignorando los valores numéricos individuales que este contenga.
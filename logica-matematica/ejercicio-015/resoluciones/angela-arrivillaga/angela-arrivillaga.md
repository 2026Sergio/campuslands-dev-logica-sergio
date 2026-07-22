# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo con las capas utilizadas, un bono por pincel y una penalización por memoria.
- **Proceso:** Validar si el arreglo de capas está vacío para retornar 0, y calcular el puntaje final sumando la cantidad total de elementos registrados en el arreglo más el bono, restando finalmente la penalización.
- **Salida:** Un valor numérico que representa el puntaje final del dibujo digital.

## Reglas identificadas

1. Si no hay capas registradas en el arreglo, el puntaje resultante es 0.
2. El cálculo base es la suma de la cantidad de elementos en el arreglo (`totalIlustraciones`) y el `bonoPincel`.
3. El `puntajeFinal` resulta de restar la `penalizacionMemoria` al resultado del cálculo base.

## Pruebas

### Caso normal

Entrada:
```json
{ 
  "capasUtilizadas": [12, 18, 25, 30], 
  "bonoPincel": 8, 
  "penalizacionMemoria": 3 
}
```

Resultado esperado:

`9`

### Caso borde
Entrada:

```json
{ 
  "capasUtilizadas": [150], 
  "bonoPincel": 2, 
  "penalizacionMemoria": 80 
}
```

Resultado esperado:

`-77`

## Explicacion final
La función determina el puntaje basándose en la cantidad total de elementos que componen el arreglo `capasUtilizadas`. La estructura incluye una validación de seguridad inicial para retornar 0 si la lista está vacía, evitando así cálculos erróneos. Siguiendo el mismo patrón de los ejercicios anteriores, la fórmula aritmética depende exclusivamente de la longitud del arreglo, ignorando los valores numéricos individuales que este contenga.
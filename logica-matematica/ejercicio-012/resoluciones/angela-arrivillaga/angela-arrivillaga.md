# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo con los servicios efectivos, un bono por set y una penalización por fallas.
- **Proceso:** Validar si el arreglo de servicios está vacío para retornar 0, y calcular el puntaje final sumando la cantidad total de elementos registrados en el arreglo más el bono, restando finalmente la penalización.
- **Salida:** Un valor numérico que representa el puntaje final del ping pong.

## Reglas identificadas

1. Si no hay servicios registrados en el arreglo, el puntaje resultante es 0.
2. El cálculo base es la suma de la cantidad de elementos en el arreglo (`cantidadJugadores`) y el `bonoSet`.
3. El `puntajeFinal` resulta de restar la `penalizacionFalla` al resultado del cálculo base.

## Pruebas

### Caso normal

Entrada:
```json
{ 
  "serviciosEfectivos": [12, 18, 25, 30], 
  "bonoSet": 8, 
  "penalizacionFalla": 3 
}
```

Resultado esperado:

`9`

### Caso borde
Entrada:

```json
{ 
  "serviciosEfectivos": [10, 15], 
  "bonoSet": 0, 
  "penalizacionFalla": 0 
}
```
Resultado esperado:

`2`

### Explicacion final
La función determina el puntaje basándose en la cantidad total de elementos que componen el arreglo `serviciosEfectivos`. La estructura incluye una validación de seguridad inicial para retornar 0 si la lista está vacía, evitando así cálculos erróneos. Siguiendo el mismo patrón de los ejercicios anteriores, la fórmula aritmética depende exclusivamente de la longitud del arreglo, ignorando los valores numéricos individuales que este contenga.
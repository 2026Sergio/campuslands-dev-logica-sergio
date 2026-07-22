# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo con los goles registrados, un bono por victoria y una penalización por tarjetas.
- **Proceso:** Validar si el arreglo de goles está vacío para retornar 0, y calcular el puntaje final sumando la cantidad total de elementos registrados en el arreglo más el bono, restando finalmente la penalización.
- **Salida:** Un valor numérico que representa el puntaje final del fútbol sala.

## Reglas identificadas

1. Si no hay goles registrados en el arreglo, el puntaje resultante es 0.
2. El cálculo base es la suma de la cantidad de elementos en el arreglo (`partidosJugados`) y el `bonoVictoria`.
3. El `puntajeFinal` resulta de restar la `penalizacionTarjetas` al resultado del cálculo base.

## Pruebas

### Caso normal

Entrada:
```json
{ 
  "golesRegistrados": [12, 18, 25, 30], 
  "bonoVictoria": 8, 
  "penalizacionTarjetas": 3 
}
```

Resultado esperado:

`9`

### Caso borde
Entrada:

```json
{ 
  "golesRegistrados": [2], 
  "bonoVictoria": 5, 
  "penalizacionTarjetas": 20 
}
```

Resultado esperado:

`-14`

## Explicacion final
La función determina el puntaje basándose en la cantidad total de elementos que componen el arreglo `golesRegistrados`. La estructura incluye una validación de seguridad inicial para retornar 0 si la lista está vacía, evitando así cálculos erróneos. Siguiendo el mismo patrón de los ejercicios anteriores, la fórmula aritmética depende exclusivamente de la longitud del arreglo, ignorando los valores numéricos individuales que este contenga.
# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo con los jugadores de una partida, un bono por victoria y una penalización por derrota.
- **Proceso:** Validar si el arreglo está vacío para retornar 0, y calcular el puntaje final sumando la cantidad de jugadores más el bono, restando finalmente la penalización.
- **Salida:** Un valor numérico que representa el puntaje competitivo total.

## Reglas identificadas

1. Si el arreglo de jugadores está vacío, el puntaje resultante es 0.
2. El cálculo base se obtiene sumando la longitud del arreglo (`totalJugadores`) con el `bonoVictoria`.
3. El `puntajeFinal` se obtiene restando la `penalizacionDerrota` al cálculo anterior.

## Pruebas

### Caso normal

Entrada:
```json
{ 
  "jugadoresPorPartida": [12, 18, 25, 30], 
  "bonoVictoria": 8, 
  "penalizacionDerrota": 3 
}

## Pruebas

### Caso normal

Entrada:
```json
{ 
  "jugadoresPorPartida": [12, 18, 25, 30], 
  "bonoVictoria": 8, 
  "penalizacionDerrota": 3 
}
```

Resultado esperado:

```27```

Caso borde

Entrada:

```json
{ 
  "jugadoresPorPartida": [], 
  "bonoVictoria": 5, 
  "penalizacionDerrota": 2 
}
```

Resultado esperado:

```0```

### Explicacion final

La solución aplica una validación preventiva para manejar arreglos vacíos, asegurando que el cálculo no se ejecute con datos nulos. La lógica aritmética es directa y eficiente, permitiendo obtener el resultado competitivo mediante la manipulación simple de la longitud del arreglo y los parámetros de bonificación o penalización proporcionados.
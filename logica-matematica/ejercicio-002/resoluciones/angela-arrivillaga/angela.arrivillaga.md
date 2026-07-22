## Analisis

- **Entrada:** Un arreglo con la cantidad de goles por partido, un bono de tabla y una penalización por faltas.
- **Proceso:** Validar si no se han jugado partidos para retornar 0, y calcular el puntaje final sumando el número total de partidos jugados más el bono de tabla, restando finalmente la penalización.
- **Salida:** Un valor numérico que representa el puntaje final del ranking.

## Reglas identificadas

1. Si no hay partidos registrados en el arreglo, el puntaje resultante es 0.
2. El cálculo base es la suma de la cantidad de partidos (`totalPartidos`) y el `bonoTabla`.
3. El `puntajeFinal` resulta de restar la `penalizacionFalta` al resultado del cálculo base.

## Pruebas

### Caso normal

#### Entrada:
```json
{ 
  "golesPorPartido": [2, 1, 4, 3], 
  "bonoTabla": 8, 
  "penalizacionFalta": 3 
}
```
#### Resultado esperado:

```9```

### Caso borde

#### Entrada:

```json
{ 
  "golesPorPartido": [1], 
  "bonoTabla": 1, 
  "penalizacionFalta": 10 
}
```

##### Resultado esperado:

```-8```

### Explicacion final

La función calcula el puntaje basándose en la cantidad de elementos en el arreglo de partidos y no en el valor de los goles en sí. La lógica es lineal y robusta, incluyendo una validación inicial para evitar cálculos con arreglos vacíos. Es importante notar que el resultado puede ser negativo si la penalización supera la suma de partidos y bonos.

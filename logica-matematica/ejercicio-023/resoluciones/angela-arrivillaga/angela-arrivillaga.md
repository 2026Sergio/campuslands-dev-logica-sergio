# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo con los KDA registrados, un bono por MVP y una penalización por derrota.
- **Proceso:** Validar si el arreglo de KDA está vacío para retornar 0, y calcular el puntaje final sumando la cantidad total de elementos registrados en el arreglo más el bono, restando finalmente la penalización.
- **Salida:** Un valor numérico que representa el puntaje final del torneo de esports.

## Reglas identificadas

1. Si no hay registros de KDA en el arreglo, el puntaje resultante es 0.
2. El cálculo base es la suma de la cantidad de elementos en el arreglo (`partidasTotales`) y el `bonoMVP`.
3. El `puntajeFinal` resulta de restar la `penalizacionDerrota` al resultado del cálculo base.

## Pruebas

### Caso normal

Entrada:
```json
{ 
  "KDA_registrados": [12, 18, 25, 30], 
  "bonoMVP": 8, 
  "penalizacionDerrota": 3 
}
```

Resultado esperado:

`9`

### Caso borde
Entrada:

```json
{ 
  "KDA_registrados": [], 
  "bonoMVP": 10, 
  "penalizacionDerrota": 2 
}
```

Resultado esperado:

`0`

## Explicacion final
La función determina el puntaje basándose en la cantidad total de elementos que componen el arreglo `KDA_registrados`. La estructura incluye una validación de seguridad inicial para retornar 0 si la lista está vacía, evitando así cálculos erróneos. Siguiendo el mismo patrón de los ejercicios anteriores, la fórmula aritmética depende exclusivamente de la longitud del arreglo, ignorando los valores numéricos individuales que este contenga.
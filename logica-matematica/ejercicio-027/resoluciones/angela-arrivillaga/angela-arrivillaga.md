# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo con las canciones agregadas, un bono por mix y una penalización por salto.
- **Proceso:** Validar si el arreglo de canciones está vacío para retornar 0, y calcular el puntaje final sumando la cantidad total de elementos registrados en el arreglo más el bono, restando finalmente la penalización.
- **Salida:** Un valor numérico que representa el puntaje final de la playlist.

## Reglas identificadas

1. Si no hay canciones registradas en el arreglo, el puntaje resultante es 0.
2. El cálculo base es la suma de la cantidad de elementos en el arreglo (`totalCanciones`) y el `bonoMix`.
3. El `puntajeFinal` resulta de restar la `penalizacionSalto` al resultado del cálculo base.

## Pruebas

### Caso normal

Entrada:
```json
{ 
  "cancionesAgregadas": [12, 18, 25, 30], 
  "bonoMix": 8, 
  "penalizacionSalto": 3 
}
```

Resultado esperado:

`9`

### Caso borde
Entrada:

```json
{ 
  "cancionesAgregadas": [180], 
  "bonoMix": 5, 
  "penalizacionSalto": 0 
}
```

Resultado esperado:

`6`

## Explicacion final
La función determina el puntaje basándose en la cantidad total de elementos que componen el arreglo `cancionesAgregadas`. La estructura incluye una validación de seguridad inicial para retornar 0 si la lista está vacía, evitando así cálculos erróneos. Siguiendo el mismo patrón de los ejercicios anteriores, la fórmula aritmética depende exclusivamente de la longitud del arreglo, ignorando los valores numéricos individuales que este contenga.
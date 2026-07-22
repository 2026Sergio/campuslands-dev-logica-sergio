# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo con los participantes, un bono y una penalización.
- **Proceso:** Validar si el arreglo de participantes está vacío para retornar 0, y calcular el puntaje final sumando la cantidad total de elementos registrados en el arreglo más el bono, restando finalmente la penalización.
- **Salida:** Un valor numérico que representa el puntaje final de los videojuegos.

## Reglas identificadas

1. Si no hay participantes registrados en el arreglo, el puntaje resultante es 0.
2. El cálculo base es la suma de la cantidad de elementos en el arreglo (`totalParticipantes`) y el `bono`.
3. El `puntajeFinal` resulta de restar la `penalizacion` al resultado del cálculo base.

## Pruebas

### Caso normal

Entrada:
```json
{ 
  "participantes": [12, 18, 25, 30], 
  "bono": 8, 
  "penalizacion": 3 
}
```

Resultado esperado:

`9`

### Caso borde
Entrada:

```json
{ 
  "participantes": [10, 20, 30], 
  "bono": 0, 
  "penalizacion": 0 
}
```

Resultado esperado:

`3`

## Explicacion final
La función determina el puntaje basándose en la cantidad total de elementos que componen el arreglo `participantes`. La estructura incluye una validación de seguridad inicial para retornar 0 si la lista está vacía, evitando así cálculos erróneos. Siguiendo el mismo patrón de los ejercicios anteriores, la fórmula aritmética depende exclusivamente de la longitud del arreglo, ignorando los valores numéricos individuales que este contenga.
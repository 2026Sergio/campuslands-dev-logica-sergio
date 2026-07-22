# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo con los votos de la crítica, un bono por efectos y una penalización por guion.
- **Proceso:** Validar si el arreglo de votos está vacío para retornar 0, y calcular el puntaje final sumando la cantidad total de elementos registrados en el arreglo más el bono, restando finalmente la penalización.
- **Salida:** Un valor numérico que representa el puntaje final de la ciencia ficción.

## Reglas identificadas

1. Si no hay votos registrados en el arreglo, el puntaje resultante es 0.
2. El cálculo base es la suma de la cantidad de elementos en el arreglo (`cantidadResenas`) y el `bonoEfectos`.
3. El `puntajeFinal` resulta de restar la `penalizacionGuion` al resultado del cálculo base.

## Pruebas

### Caso normal

Entrada:
```json
{ 
  "votosCritica": [12, 18, 25, 30], 
  "bonoEfectos": 8, 
  "penalizacionGuion": 3 
}
```

Resultado esperado:

`9`

### Caso borde
Entrada:

```json
{ 
  "votosCritica": [8], 
  "bonoEfectos": 1, 
  "penalizacionGuion": 40 
}
```

Resultado esperado:

`-38`

## Explicacion final
La función determina el puntaje basándose en la cantidad total de elementos que componen el arreglo `votosCritica`. La estructura incluye una validación de seguridad inicial para retornar 0 si la lista está vacía, evitando así cálculos erróneos. Siguiendo el mismo patrón de los ejercicios anteriores, la fórmula aritmética depende exclusivamente de la longitud del arreglo, ignorando los valores numéricos individuales que este contenga.
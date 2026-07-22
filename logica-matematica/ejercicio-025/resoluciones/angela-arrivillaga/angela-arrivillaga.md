# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo con los autos reparados, un bono por eficiencia y una penalización por garantía.
- **Proceso:** Validar si el arreglo de autos está vacío para retornar 0, y calcular el puntaje final sumando la cantidad total de elementos registrados en el arreglo más el bono, restando finalmente la penalización.
- **Salida:** Un valor numérico que representa el puntaje final del taller mecánico.

## Reglas identificadas

1. Si no hay autos registrados en el arreglo, el puntaje resultante es 0.
2. El cálculo base es la suma de la cantidad de elementos en el arreglo (`totalServicios`) y el `bonoEficiencia`.
3. El `puntajeFinal` resulta de restar la `penalizacionGarantia` al resultado del cálculo base.

## Pruebas

### Caso normal

Entrada:
```json
{ 
  "autosReparados": [12, 18, 25, 30], 
  "bonoEficiencia": 8, 
  "penalizacionGarantia": 3 
}
```

Resultado esperado:

`9`

### Caso borde
Entrada:

```json
{ 
  "autosReparados": [1, 2, 3, 4, 5, 6], 
  "bonoEficiencia": 2, 
  "penalizacionGarantia": 2 
}
```

Resultado esperado:

`6`

## Explicacion final
La función determina el puntaje basándose en la cantidad total de elementos que componen el arreglo `autosReparados`. La estructura incluye una validación de seguridad inicial para retornar 0 si la lista está vacía, evitando así cálculos erróneos. Siguiendo el mismo patrón de los ejercicios anteriores, la fórmula aritmética depende exclusivamente de la longitud del arreglo, ignorando los valores numéricos individuales que este contenga.
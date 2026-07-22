# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo con los planos cargados, un bono por escala y una penalización por estructura.
- **Proceso:** Validar si el arreglo de planos está vacío para retornar 0, y calcular el puntaje final sumando la cantidad total de elementos registrados en el arreglo más el bono, restando finalmente la penalización.
- **Salida:** Un valor numérico que representa el puntaje final de la arquitectura.

## Reglas identificadas

1. Si no hay planos registrados en el arreglo, el puntaje resultante es 0.
2. El cálculo base es la suma de la cantidad de elementos en el arreglo (`cantidadProyectos`) y el `bonoEscala`.
3. El `puntajeFinal` resulta de restar la `penalizacionEstructura` al resultado del cálculo base.

## Pruebas

### Caso normal

Entrada:
```json
{ 
  "planosCargados": [12, 18, 25, 30], 
  "bonoEscala": 8, 
  "penalizacionEstructura": 3 
}
```

Resultado esperado:

`9`

### Caso borde
Entrada:

```json
{ 
  "planosCargados": [5], 
  "bonoEscala": 0, 
  "penalizacionEstructura": 100 
}
```

Resultado esperado:

`-99`

## Explicacion final
La función determina el puntaje basándose en la cantidad total de elementos que componen el arreglo `planosCargados`. La estructura incluye una validación de seguridad inicial para retornar 0 si la lista está vacía, evitando así cálculos erróneos. Siguiendo el mismo patrón de los ejercicios anteriores, la fórmula aritmética depende exclusivamente de la longitud del arreglo, ignorando los valores numéricos individuales que este contenga.
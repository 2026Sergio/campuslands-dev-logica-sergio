# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo con las motos disponibles, un bono por marca y una penalización por falta de stock.
- **Proceso:** Validar si el arreglo de motos está vacío para retornar 0, y calcular el puntaje final sumando la cantidad total de elementos registrados en el arreglo más el bono, restando finalmente la penalización.
- **Salida:** Un valor numérico que representa el puntaje final del inventario de motos.

## Reglas identificadas

1. Si no hay motos registradas en el arreglo, el puntaje resultante es 0.
2. El cálculo base es la suma de la cantidad de elementos en el arreglo (`totalModelos`) y el `bonoMarca`.
3. El `puntajeFinal` resulta de restar la `penalizacionFaltaStock` al resultado del cálculo base.

## Pruebas

### Caso normal

Entrada:
```json
{ 
  "motosDisponibles": [12, 18, 25, 30], 
  "bonoMarca": 8, 
  "penalizacionFaltaStock": 3 
}
```

Resultado esperado:

`9`

### Caso borde
Entrada:

```json
{ 
  "motosDisponibles": [1200], 
  "bonoMarca": 500, 
  "penalizacionFaltaStock": 50 
}
```

Resultado esperado:

`451`

## Explicacion final
La función determina el puntaje basándose en la cantidad total de elementos que componen el arreglo `motosDisponibles`. La estructura incluye una validación de seguridad inicial para retornar 0 si la lista está vacía, evitando así cálculos erróneos. Siguiendo el mismo patrón de los ejercicios anteriores, la fórmula aritmética depende exclusivamente de la longitud del arreglo, ignorando los valores numéricos individuales que este contenga.
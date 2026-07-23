# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo con los destinos visitados, un bono por temporada y una penalización por equipaje.
- **Proceso:** Validar si el arreglo de destinos está vacío para retornar 0, y calcular el puntaje final sumando la cantidad total de destinos registrados en el arreglo más el bono, restando finalmente la penalización.
- **Salida:** Un valor numérico que representa el puntaje final de los viajes.

## Reglas identificadas

1. Si no hay destinos registrados en el arreglo, el puntaje resultante es 0.
2. El cálculo base es la suma de la cantidad de elementos en el arreglo (`totalDestinos`) y el `bonoTemporada`.
3. El `puntajeFinal` resulta de restar la `penalizacionEquipaje` al resultado del cálculo base.

## Pruebas

### Caso normal

Entrada:
```json
{ 
  "destinosVisitados": [1, 2, 3, 4], 
  "bonoTemporada": 8, 
  "penalizacionEquipaje": 3 
}
```

Resultado esperado:

```9```

### Caso borde
Entrada:

```json
{ 
  "destinosVisitados": [], 
  "bonoTemporada": 10, 
  "penalizacionEquipaje": 2 
}
```

Resultado esperado:

```0```

---
### Explicacion final
La función determina el puntaje basándose en la cantidad total de elementos que componen el arreglo ```destinosVisitados```. La estructura incluye una validación de seguridad inicial para retornar 0 si la lista está vacía, evitando así cálculos erróneos. Al igual que en la serie de ejercicios anteriores, la fórmula aritmética depende exclusivamente de la longitud del arreglo, ignorando los valores numéricos individuales que este contenga.
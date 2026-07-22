# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo con las alturas de lanzamiento, un bono por viento y una penalización por desvío.
- **Proceso:** Validar si el arreglo de alturas está vacío para retornar 0, y calcular el puntaje final sumando la cantidad total de elementos registrados en el arreglo más el bono, restando finalmente la penalización.
- **Salida:** Un valor numérico que representa el puntaje final del paracaidismo.

## Reglas identificadas

1. Si no hay alturas registradas en el arreglo, el puntaje resultante es 0.
2. El cálculo base es la suma de la cantidad de elementos en el arreglo (`totalSaltos`) y el `bonoViento`.
3. El `puntajeFinal` resulta de restar la `penalizacionDesvio` al resultado del cálculo base.

## Pruebas

### Caso normal

Entrada:
```json
{ 
  "alturasLanzamiento": [12, 18, 25, 30], 
  "bonoViento": 8, 
  "penalizacionDesvio": 3 
}
```

Resultado esperado:

`9`

### Caso borde
Entrada:

```json
{ 
  "alturasLanzamiento": [4000], 
  "bonoViento": 500, 
  "penalizacionDesvio": 200 
}
```

Resultado esperado:

`301`

---
### Explicacion final
La función determina el puntaje basándose en la cantidad total de elementos que componen el arreglo `alturasLanzamiento`. La estructura incluye una validación de seguridad inicial para retornar 0 si la lista está vacía, evitando así cálculos erróneos. Siguiendo el mismo patrón de los ejercicios anteriores, la fórmula aritmética depende exclusivamente de la longitud del arreglo, ignorando los valores numéricos individuales que este contenga.
# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo con las pruebas de velocidad, un bono por aerodinámica y una penalización por peso.
- **Proceso:** Validar si el arreglo de pruebas está vacío para retornar 0, y calcular el puntaje final sumando la cantidad total de elementos registrados en el arreglo más el bono, restando finalmente la penalización.
- **Salida:** Un valor numérico que representa el puntaje final de los hiperdeportivos.

## Reglas identificadas

1. Si no hay pruebas registradas en el arreglo, el puntaje resultante es 0.
2. El cálculo base es la suma de la cantidad de elementos en el arreglo (`totalModelos`) y el `bonoAerodinamica`.
3. El `puntajeFinal` resulta de restar la `penalizacionPeso` al resultado del cálculo base.

## Pruebas

### Caso normal

Entrada:
```json
{ 
  "pruebasVelocidad": [12, 18, 25, 30], 
  "bonoAerodinamica": 8, 
  "penalizacionPeso": 3 
}
```

Resultado esperado:

`9`

### Caso borde
Entrada:

```json
{ 
  "pruebasVelocidad": [], 
  "bonoAerodinamica": 15, 
  "penalizacionPeso": 5 
}
```

Resultado esperado:

`0`

## Explicacion final
La función determina el puntaje basándose en la cantidad total de elementos que componen el arreglo `pruebasVelocidad`. La estructura incluye una validación de seguridad inicial para retornar 0 si la lista está vacía, evitando así cálculos erróneos. Siguiendo el mismo patrón de los ejercicios anteriores, la fórmula aritmética depende exclusivamente de la longitud del arreglo, ignorando los valores numéricos individuales que este contenga.
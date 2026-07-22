# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo con los fotogramas clave, un bono por render y una penalización por ruido.
- **Proceso:** Validar si el arreglo de fotogramas está vacío para retornar 0, y calcular el puntaje final sumando la cantidad total de elementos registrados en el arreglo más el bono, restando finalmente la penalización.
- **Salida:** Un valor numérico que representa el puntaje final de la animación.

## Reglas identificadas

1. Si no hay fotogramas registrados en el arreglo, el puntaje resultante es 0.
2. El cálculo base es la suma de la cantidad de elementos en el arreglo (`cantidadEscenas`) y el `bonoRender`.
3. El `puntajeFinal` resulta de restar la `penalizacionRuido` al resultado del cálculo base.

## Pruebas

### Caso normal

Entrada:
```json
{ 
  "fotogramasClave": [12, 18, 25, 30], 
  "bonoRender": 8, 
  "penalizacionRuido": 3 
}
```

Resultado esperado:

`9`

### Caso borde
Entrada:

```json
{ 
  "fotogramasClave": [], 
  "bonoRender": 10, 
  "penalizacionRuido": 5 
}
```

Resultado esperado:

`0`

## Explicacion final
La función determina el puntaje basándose en la cantidad total de elementos que componen el arreglo `fotogramasClave`. La estructura incluye una validación de seguridad inicial para retornar 0 si la lista está vacía, evitando así cálculos erróneos. Siguiendo el mismo patrón de los ejercicios anteriores, la fórmula aritmética depende exclusivamente de la longitud del arreglo, ignorando los valores numéricos individuales que este contenga.
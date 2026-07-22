# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo con los sustos por minuto, un bono por sonido y una penalización por cliché.
- **Proceso:** Validar si el arreglo de sustos está vacío para retornar 0, y calcular el puntaje final sumando la cantidad total de elementos registrados en el arreglo más el bono, restando finalmente la penalización.
- **Salida:** Un valor numérico que representa el puntaje final de las películas de miedo.

## Reglas identificadas

1. Si no hay sustos registrados en el arreglo, el puntaje resultante es 0.
2. El cálculo base es la suma de la cantidad de elementos en el arreglo (`totalEscenas`) y el `bonoSonido`.
3. El `puntajeFinal` resulta de restar la `penalizacionCliche` al resultado del cálculo base.

## Pruebas

### Caso normal

Entrada:
```json
{ 
  "sustosPorMinuto": [12, 18, 25, 30], 
  "bonoSonido": 8, 
  "penalizacionCliche": 3 
}
```

Resultado esperado:

`9`

### Caso borde
Entrada:

```json
{ 
  "sustosPorMinuto": [], 
  "bonoSonido": 20, 
  "penalizacionCliche": 10 
}
```

Resultado esperado:

`0`

## Explicacion final
La función determina el puntaje basándose en la cantidad total de elementos que componen el arreglo `sustosPorMinuto`. La estructura incluye una validación de seguridad inicial para retornar 0 si la lista está vacía, evitando así cálculos erróneos. Siguiendo el mismo patrón de los ejercicios anteriores, la fórmula aritmética depende exclusivamente de la longitud del arreglo, ignorando los valores numéricos individuales que este contenga.
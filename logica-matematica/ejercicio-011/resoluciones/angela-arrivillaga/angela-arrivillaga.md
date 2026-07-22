# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo con los peleadores inscritos, un bono por nivel y una penalización por faltas.
- **Proceso:** Validar si el arreglo de peleadores está vacío para retornar 0, y calcular el puntaje final sumando la cantidad total de peleadores registrados en el arreglo más el bono, restando finalmente la penalización.
- **Salida:** Un valor numérico que representa el puntaje final del kickboxing.

## Reglas identificadas

1. Si no hay peleadores registrados en el arreglo, el puntaje resultante es 0.
2. El cálculo base es la suma de la cantidad de elementos en el arreglo (`peleadoresInscritos`) y el `bonoNivel`.
3. El `puntajeFinal` resulta de restar la `penalizacionFalta` al resultado del cálculo base.

## Pruebas

### Caso normal

Entrada:
```json
{ 
  "peleadoresInscritos": [12, 18, 25, 30], 
  "bonoNivel": 8, 
  "penalizacionFalta": 3 
}
```
Resultado esperado:

`9`

### Caso borde
Entrada:

```json
{ 
  "peleadoresInscritos": [22], 
  "bonoNivel": 2, 
  "penalizacionFalta": 15 
}
```
Resultado esperado:

`-12`

### Explicacion final
La función determina el puntaje basándose en la cantidad total de elementos que componen el arreglo `peleadoresInscritos`. La estructura incluye una validación de seguridad inicial para retornar 0 si la lista está vacía, evitando así cálculos erróneos. Siguiendo el mismo patrón de los ejercicios anteriores, la fórmula aritmética depende exclusivamente de la longitud del arreglo, ignorando los valores numéricos individuales que este contenga.
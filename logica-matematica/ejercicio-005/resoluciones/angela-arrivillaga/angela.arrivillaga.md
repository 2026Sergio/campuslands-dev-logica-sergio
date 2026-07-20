# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo con el registro de autos reparados, un bono por eficiencia y una penalización por garantías.
- **Proceso:** Validar si el arreglo de autos está vacío para retornar 0, y calcular el puntaje final sumando la cantidad total de mecánicos registrados en el arreglo más el bono, restando finalmente la penalización.
- **Salida:** Un valor numérico que representa el puntaje final del taller.

## Reglas identificadas

1. Si no hay registros de autos reparados, el puntaje resultante es 0.
2. El cálculo base es la suma de la cantidad de elementos en el arreglo (`totalMecanicos`) y el `bonoEficiencia`.
3. El `puntajeFinal` resulta de restar la `penalizacionGarantia` al resultado del cálculo base.

## Pruebas

### Caso normal

Entrada:
```json
{ 
  "autosReparados": [2, 3, 1, 5], 
  "bonoEficiencia": 8, 
  "penalizacionGarantia": 3 
}
```

Resultado esperado:

```9```

### Caso borde
Entrada:

```json
{ 
  "autosReparados": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
  "bonoEficiencia": 5, 
  "penalizacionGarantia": 2 
}
```

Resultado esperado:

```13```

## Explicacion final

La función calcula el puntaje basándose en la cantidad de elementos presentes en el arreglo autosReparados. La lógica es lineal y eficiente, asegurando mediante una validación inicial que no se procesen datos vacíos. Es importante notar que el valor numérico de cada elemento en el arreglo es irrelevante para el cálculo, siendo únicamente la longitud del mismo lo que determina la base del puntaje.
# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo con velocidades máximas registradas, un bono por aerodinámica y una penalización por peso.
- **Proceso:** Validar si el arreglo está vacío para retornar 0, y calcular el puntaje final sumando la cantidad de modelos probados más el bono, restando finalmente la penalización.
- **Salida:** Un valor numérico que representa el puntaje final del desempeño de los hiperdeportivos.

## Reglas identificadas

1. Si no hay modelos registrados en el arreglo, el puntaje resultante es 0.
2. El cálculo base es la suma de la cantidad de elementos en el arreglo (`modelosProbados`) y el `bonoAerodinamica`.
3. El `puntajeFinal` resulta de restar la `penalizacionPeso` al resultado del cálculo base.

## Pruebas

### Caso normal

Entrada:
```json
{ 
  "velocidadesMaximas": [350, 400, 420, 380], 
  "bonoAerodinamica": 8, 
  "penalizacionPeso": 3 
}
```

Resultado esperado:

```9```

### Caso borde

Entrada:

```json
{ 
  "velocidadesMaximas": [500], 
  "bonoAerodinamica": 1000, 
  "penalizacionPeso": 500 
}
```

Resultado esperado:

```501```

### Explicacion final

La función determina el puntaje basándose en la cantidad total de modelos evaluados (longitud del arreglo). La lógica es directa, incluyendo una validación inicial para evitar cálculos con arreglos vacíos. Al igual que en ejercicios anteriores, los valores de las velocidades registradas no intervienen en el cálculo final, siendo únicamente la cantidad de registros el parámetro determinante.
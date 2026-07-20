# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo con la cantidad de motos por lote, un bono por marca y una penalización por retraso.
- **Proceso:** Validar si el arreglo está vacío para retornar 0, y calcular el puntaje final sumando la cantidad total de lotes más el bono, restando finalmente la penalización.
- **Salida:** Un valor numérico que representa el puntaje final del inventario.

## Reglas identificadas

1. Si no hay lotes registrados en el arreglo, el puntaje resultante es 0.
2. El cálculo base es la suma de la cantidad de lotes (`cantidadLotes`) y el `bonoMarca`.
3. El `puntajeFinal` resulta de restar la `penalizacionRetraso` al resultado del cálculo base.

## Pruebas

### Caso normal

Entrada:

```json
{ 
  "motosPorLote": [10, 20, 15, 30], 
  "bonoMarca": 8, 
  "penalizacionRetraso": 3 
}
```

Resultado esperado:

```9```

Caso borde

Entrada:

```json
{ 
  "motosPorLote": [50], 
  "bonoMarca": 2, 
  "penalizacionRetraso": 20 
}
```

Resultado esperado:

```-17```

---

### Explicacion final

La función calcula el puntaje basándose en la cantidad de elementos presentes en el arreglo motosPorLote. La lógica implementada es directa y lineal, incluyendo una protección contra arreglos vacíos. Al igual que en casos anteriores, el valor numérico contenido en cada posición del arreglo no afecta el cálculo, siendo la longitud del mismo el factor determinante para el puntaje final.
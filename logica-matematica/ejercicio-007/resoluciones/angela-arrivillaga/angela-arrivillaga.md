# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo con la duración de las canciones, un bono por géneros y una penalización por saltos.
- **Proceso:** Validar si el arreglo de canciones está vacío para retornar 0, y calcular el puntaje final sumando la cantidad total de canciones registradas en la lista más el bono, restando finalmente la penalización.
- **Salida:** Un valor numérico que representa el puntaje final de la playlist.

## Reglas identificadas

1. Si no hay canciones registradas en la lista, el puntaje resultante es 0.
2. El cálculo base se obtiene sumando la cantidad de elementos en el arreglo (`cantidadCanciones`) y el `bonoGeneros`.
3. El `puntajeFinal` resulta de restar la `penalizacionSaltos` al resultado del cálculo base.

## Pruebas

### Caso normal

Entrada:
```json
{ 
  "duracionCanciones": [180, 210, 240, 195], 
  "bonoGeneros": 8, 
  "penalizacionSaltos": 3 
}
```

Resultado esperado:

```9```

### Caso borde

Entrada:

```json
{ 
  "duracionCanciones": [200, 300], 
  "bonoGeneros": 0, 
  "penalizacionSaltos": 0 
}
```

Resultado esperado:

```2```

### Explicacion final

La función evalúa el puntaje basándose en la cantidad total de canciones que componen la playlist (longitud del arreglo). La estructura lógica mantiene una validación de seguridad inicial para evitar cálculos innecesarios con listas vacías. Fiel a la estructura de este patrón de ejercicios, los valores de duración de cada tema no interfieren en la fórmula aritmética, siendo únicamente el conteo de registros el factor determinante.
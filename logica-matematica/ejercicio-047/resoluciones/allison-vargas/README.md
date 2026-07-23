# Plantilla de solucion - Secuencias Numéricas (Playlist Musical)

## Analisis

- Entrada:
  - `canciones`: Arreglo de objetos donde cada elemento representa un tema musical con las propiedades `titulo` y `duracionSegundos`.
- Proceso:
  - Validar la integridad del arreglo y de las duraciones ingresadas.
  - Recorrer el arreglo para calcular la suma de tiempos de reproducción en segundos.
  - Analizar la relación ordenada entre canciones consecutivas para identificar patrones secuenciales (crecientes, decrecientes o mixtos).
  - Convertir el total de segundos a formato de minutos y segundos (`mm:ss`).
  - Categorizar el tipo de secuencia dinámica de la lista de reproducción.
- Salida:
  - Total de pistas, tiempo acumulado en segundos, tiempo formateado, patrón de secuencia identificado y explicación general.

## Reglas identificadas

1. **Evaluación de Secuencia Creciente:**  
   $$\text{Canción}_{i} > \text{Canción}_{i-1} \quad \forall \, i \in [1, N-1]$$
2. **Evaluación de Secuencia Decreciente:**  
   $$\text{Canción}_{i} < \text{Canción}_{i-1} \quad \forall \, i \in [1, N-1]$$
3. **Conversión de Formato de Tiempo:**  
   $$\text{Minutos} = \lfloor \text{Segundos Totales} / 60 \rfloor$$  
   $$\text{Segundos Restantes} = \text{Segundos Totales} \bmod 60$$

## Pruebas

### Caso normal

Entrada:
- Track 1: `120 s`
- Track 2: `180 s`
- Track 3: `240 s`
- Track 4: `300 s`

Resultado esperado:
- Total canciones: `4`
- Duración total: `840 s` (`14:00` min)
- Patrón de secuencia: `In crescendo (Duración Estrictamente Creciente)`

### Caso borde

Entrada:
- Track 1: `210 s`
- Track 2: `150 s`
- Track 3: `240 s`

Resultado esperado:
- Total canciones: `3`
- Duración total: `600 s` (`10:00` min)
- Patrón de secuencia: `Variada (Sin Patrón Secuencial Directo)`

## Explicacion final

La solución determina la estructura temporal de una lista de reproducción mediante la inspección analítica de secuencias numéricas. Comparar términos sucesivos permite identificar el flujo armónico del conjunto y transformar métricas crudas de tiempo en representaciones estandarizadas para el usuario.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.
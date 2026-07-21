# Plantilla de solucion - Promedios y Medianas (Torneo de Esports)

## Analisis

- Entrada:
  - `puntajesPartidas`: Arreglo de números enteros positivos que representan los puntos obtenidos en las partidas del torneo.
- Proceso:
  - Validar que el arreglo contenga al menos un elemento y que todos sean enteros no negativos.
  - Calcular el promedio sumando todos los puntajes y dividiendo entre el total de partidas.
  - Ordenar los puntajes de menor a mayor para ubicar el valor o valores centrales.
  - Calcular la mediana (si la longitud es impar se toma el centro; si es par, se promedian los dos del centro).
  - Determinar la diferencia entre el promedio y la mediana para evaluar la estabilidad del jugador.
- Salida:
  - Cantidad de partidas, arreglo ordenado, promedio, mediana, diferencia absoluta, nivel de consistencia y mensaje explicativo.

## Reglas identificadas

1. **Cálculo del Promedio:**  
   $$\text{Promedio} = \frac{\sum \text{Puntajes}}{N}$$
2. **Cálculo de la Mediana:**  
   - Si $N$ es impar: $\text{Mediana} = \text{Elemento en la posición } \lfloor N / 2 \rfloor$ (con el arreglo ordenado).
   - Si $N$ es par: $\text{Mediana} = \frac{\text{Elemento}_1 + \text{Elemento}_2}{2}$ (los dos valores centrales).
3. **Evaluación de Consistencia:**
   - Diferencia $| \text{Promedio} - \text{Mediana} | \le 5$: "Desempeño Consistente (Rendimiento Estable)".
   - Diferencia $| \text{Promedio} - \text{Mediana} |$ entre 5.01 y 15: "Desempeño Moderado (Rendimiento Variable)".
   - Diferencia $| \text{Promedio} - \text{Mediana} | > 15$: "Desempeño Irregular (Rendimiento Inestable con Partidas Pico)".

## Pruebas

### Caso normal (Longitud impar)

Entrada:
- Puntajes partidas: `[12, 18, 25, 30, 20]`

Resultado esperado:
- Ordenados: `[12, 18, 20, 25, 30]`
- Promedio: `21`
- Mediana: `20`
- Clasificación: `Desempeño Consistente (Rendimiento Estable)`

### Caso borde (Longitud par)

Entrada:
- Puntajes partidas: `[10, 40, 20, 30]`

Resultado esperado:
- Ordenados: `[10, 20, 30, 40]`
- Promedio: `25`
- Mediana: `25`
- Clasificación: `Desempeño Consistente (Rendimiento Estable)`

## Explicacion final

La solución analiza el rendimiento en un torneo combinando dos medidas de tendencia central. El promedio entrega el nivel general de puntuación, mientras que la mediana reduce el impacto de partidas atípicas (puntos extremadamente altos o bajos). Comparar ambos indicadores permite diagnosticar si el jugador mantiene un nivel constante o si sus resultados son volátiles.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.
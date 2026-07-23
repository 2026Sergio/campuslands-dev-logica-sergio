# Plantilla de solucion - Patrones de Puntuación (Películas de Ciencia Ficción)

## Analisis

- Entrada:
  - `peliculas`: Lista de objetos donde cada elemento contiene `titulo`, `puntuacionCritica` (0 a 100) y `puntuacionAudiencia` (0 a 100).
- Proceso:
  - Validar que el arreglo no esté vacío y que las puntuaciones estén en el rango de 0 a 100.
  - Aplicar una fórmula ponderada (60% crítica técnica, 40% audiencia) para calcular una puntuación global unificada.
  - Calcular la diferencia absoluta (brecha) entre ambas fuentes de opinión.
  - Categorizar el patrón de recepción del largometraje según la magnitud y sentido de la discrepancia.
  - Determinar la película con el mejor desempeño global.
- Salida:
  - Total de títulos evaluados, título mejor ponderado, desglose por película y resumen explicativo.

## Reglas identificadas

1. **Cálculo de Puntuación Ponderada:**  
   $$\text{Puntaje Ponderado} = (\text{Crítica} \times 0.6) + (\text{Audiencia} \times 0.4)$$
2. **Evaluación de Patrón de Recepción:**  
   - Si $|\text{Crítica} - \text{Audiencia}| \le 10$: "Consenso General (Aceptación Unánime)".
   - Si $\text{Crítica} > \text{Audiencia}$: "Favorita de la Crítica (Película de Culto Técnico)".
   - Si $\text{Audiencia} > \text{Crítica}$: "Éxito Comercial / Taquillero (Aclamada por la Audiencia)".

## Pruebas

### Caso normal

Entrada:
- Blade Runner 2049: `88` crítica, `81` audiencia
- Interstellar: `73` crítica, `92` audiencia
- 2001: A Space Odyssey: `92` crítica, `89` audiencia

Resultado esperado:
- Película mejor calificada: `2001: A Space Odyssey (90.8 pts)`
- Blade Runner 2049: `85.2 pts` $\rightarrow$ *Consenso General*
- Interstellar: `80.6 pts` $\rightarrow$ *Éxito Comercial / Taquillero*

### Caso borde

Entrada:
- Sci-Fi Experimental: `100` crítica, `10` audiencia

Resultado esperado:
- Puntaje Ponderado: `64 pts`
- Brecha: `90`
- Patrón: `Favorita de la Crítica (Película de Culto Técnico)`

## Explicacion final

La solución categoriza la percepción de producciones cinematográficas evaluando discrepancias estadísticas entre la crítica especializada y la audiencia general. Esta metodología permite aislar obras de culto de éxitos de taquilla masivos mediante patrones numéricos bien definidos.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.
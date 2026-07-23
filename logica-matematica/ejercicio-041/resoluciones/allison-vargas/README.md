# Plantilla de solucion - Operaciones Aritméticas Controladas (Videojuegos Competitivos)

## Analisis

- Entrada:
  - `puntajesBase`: Arreglo de números con las puntuaciones iniciales obtenidas en cada partida.
  - `bonoRacha`: Puntos extra asignados por racha o desempeño destacado.
  - `penalizacionDerrotas`: Puntos restados por infracciones o derrotas.
- Proceso:
  - Validar que los datos recibidos correspondan a números y listas válidas.
  - Recorrer el arreglo sumando el bono y restando la penalización a cada partida.
  - Controlar que la puntuación de ninguna partida sea menor a cero (límite inferior).
  - Obtener el total acumulado y el promedio ponderado de la competencia.
  - Asignar una división o categoría competitiva según el rendimiento global.
- Salida:
  - Lista de puntuaciones ajustadas, total acumulado, promedio, clasificación final y resumen explicativo.

## Reglas identificadas

1. **Ajuste controlado:**
   $$\text{Puntaje Ajustado} = \max(0, (\text{Puntaje Base} + \text{Bono}) - \text{Penalización})$$
2. **Validación de rango:** El puntaje final de una partida nunca puede ser un valor negativo.
3. **Categorización por nivel:**
   - Promedio mayor o igual a 50: "Rango Leyenda (Nivel Profesional)".
   - Promedio entre 25 y 49.99: "Rango Competitivo (Jugador Destacado)".
   - Promedio menor a 25: "Rango Amateur (Requiere Entrenamiento)".

## Pruebas

### Caso normal

Entrada:
- Puntajes base: `[12, 18, 25, 30]`
- Bono: `8`
- Penalización: `3`

Resultado esperado:
- Puntajes ajustados: `[17, 23, 30, 35]`
- Puntaje total: `105`
- Promedio: `26.25`
- Clasificación: `Rango Competitivo (Jugador Destacado)`

### Caso borde

Entrada:
- Puntajes base: `[2]`
- Bono: `0`
- Penalización: `10`

Resultado esperado:
- Puntajes ajustados: `[0]` (Evita valores negativos)
- Puntaje total: `0`
- Promedio: `0`
- Clasificación: `Rango Amateur (Requiere Entrenamiento)`

## Explicacion final

La solución procesa las partidas de una tabla competitiva aplicando operaciones matemáticas supervisadas. La inclusión del control de límite inferior asegura que las penalizaciones no generen inconsistencias en la tabla de clasificación, manteniendo métricas realistas y representativas del desempeño global.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.
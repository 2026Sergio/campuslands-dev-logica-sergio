## Analisis

Para resolver este problema se concibió un modelo probabilístico empírico basado en frecuencias relativas. En un torneo o partido de pingpong, la probabilidad individual de victoria de un jugador se determina en función del rendimiento histórico (puntos ganados) respecto al acumulado total de todos los competidores válidos registrados en el sistema.

- Entrada:
  - `jugadores_datos`: Una lista de diccionarios/objetos donde cada elemento contiene el nombre del jugador y su puntuación histórica o número de puntos ganados.

- Proceso:
  1. Validar la estructura del conjunto de datos de entrada.
  2. Filtrar y sanitizar las entradas eliminando registros incompletos, nombres vacíos o puntuaciones negativas.
  3. Agrupar puntuaciones acumuladas en caso de haber registros duplicados para un mismo jugador.
  4. Calcular la suma total de puntos otorgados entre todos los jugadores aptos.
  5. Calcular la frecuencia relativa de cada jugador dividiendo sus puntos entre el total general y multiplicando por 100.
  6. Redondear el resultado porcentual a dos decimales para mantener consistencia numérica.

- Salida:
  - Un diccionario/objeto con los nombres de los jugadores como claves y sus respectivas probabilidades de victoria expresadas en porcentaje (0.00% a 100.00%).

## Reglas identificadas

1. **Axioma de probabilidad relativa:** La probabilidad individual equivale al cociente entre la puntuación individual y el total de puntos acumulados ($P(A) = \frac{\text{Puntos}_A}{\text{Puntos}_{\text{Totales}}}$).
2. **Sanitización e Integridad:** Puntuaciones negativas o registros con tipos de datos inválidos deben ser descartados del cálculo.
3. **Manejo de Caso Cero:** Si la suma total de puntos de todos los jugadores es cero, la probabilidad asignada a cada jugador registrado debe ser `0.0` para evitar divisiones por cero.

## Pruebas

### Caso normal

Entrada:
```json
[
  {"nombre": "Carlos", "puntuacion": 15},
  {"nombre": "Sofia", "puntuacion": 25},
  {"nombre": "Mateo", "puntuacion": 10}
]   

# Ejercicio 061 - Clasificación por Reglas (Videojuegos Competitivos)

## 1. ¿Cómo pensé el problema?
Desglose el problema analizando que la clasificación por reglas en el ámbito de los videojuegos competitivos requiere categorizar a los participantes de forma justa según su desempeño (puntos de ranking), su historial de juego limpio (penalizaciones) y el cumplimiento administrativo (registro activo).

## 2. Reglas aplicadas
* **Validación inicial:** Verificar que la lista de competidores contenga datos y no esté vacía.
* **Control administrativo:** Descalificar automáticamente a cualquier participante sin registro activo o con datos incompletos.
* **Distribución de categorías:** Asignar a la "Liga Master" a quienes superen los 2500 puntos sin exceso de faltas, y reubicar o descalificar a los demás según sus penalizaciones.

## 3. ¿Cómo ejecutar o revisar la solución?
Ejecuta el archivo utilizando Node.js desde la terminal:
```bash
node resoluciones/irma-arias/irma-arias.js
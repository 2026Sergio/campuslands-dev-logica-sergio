# Reto: Clasificador de Videojuegos Competitivos 🎮
## Módulo: Lógica de Programación - Campuslands

Este repositorio contiene la arquitectura lógica y la solución estructural para el reto de clasificación de jugadores en ligas competitivas. El enfoque principal de este ejercicio no es la memorización de código, sino el análisis de situaciones complejas, la conversión de escenarios en reglas de negocio claras y la construcción de un algoritmo ordenado.

---

## 🎯 Objetivo del Reto

Desarrollar un componente de software (mecanismo de descarte) capaz de recibir datos dinámicos a través de la consola, procesar variables numéricas mediante estructuras de control condicionales y asignar de manera inequívoca una categoría o liga a un jugador basándose en sus estadísticas en tiempo real.

---

# Plantilla de solución

## Análisis

- **Entrada:**
  - `puntaje_jugador`: Valor numérico entero (`int`) ingresado por el usuario que representa el rendimiento acumulado.
  - `tasa_victorias`: Valor numérico de punto flotante (`float`) que representa el porcentaje de éxito en formato decimal (ej. `0.65` para $65\%$).
- **Proceso:**
  - Control de flujo descendente a través de una estructura `if-elif-else`. El programa evalúa de forma jerárquica si el puntaje supera los umbrales críticos establecidos, descartando niveles superiores antes de asignar la categoría base.
- **Salida:**
  - `clasificacion_final`: Cadena de texto (`str`) que almacena el veredicto de la liga correspondiente para el reporte final en consola.

## Reglas identificadas

1. **Umbral de Excelencia (> 100 puntos):** Si el puntaje acumulado por el competidor es estrictamente mayor a 100, el flujo se interrumpe y se le asigna de manera directa el rango de "Liga de Campeones (Oro)".
2. **Umbral Intermedio (> 90 puntos):** Si el primer filtro falla pero el puntaje es estrictamente mayor a 90, el sistema identifica al jugador dentro del espectro competitivo de la "Liga Intermedia (Plata)".
3. **Caso Base / Reclutas (90 puntos o menos):** Cualquier puntaje que no logre superar el límite de 90 puntos entra por descarte al bloque `else`, indexándolo automáticamente en la "Liga de Reclutas (Bronce)".

## Pruebas

### Caso normal

- **Entrada:**
  - `puntaje_jugador`: 120
  - `tasa_victorias`: 0.70
- **Resultado esperado:**
  - `Resultado obtenido: Liga de Campeones (Oro)`

### Caso borde

- **Entrada:**
  - `puntaje_jugador`: 91
  - `tasa_victorias`: 0.50
- **Resultado esperado:**
  - `Resultado obtenido: Liga Intermedia (Plata)` *(Se activa con éxito el límite inferior estricto del bloque elif).*

## Explicación final

Escribe aquí por qué tu solución funciona.
Mi solución funciona porque utiliza el principio de descarte secuencial ordenado de mayor a menor jerarquía. Al evaluar primero el límite más alto (`> 100`), garantizo que los jugadores excepcionales queden clasificados correctamente de inmediato. Al usar la estructura condicional de Python, los hilos de menor puntaje caen limpiamente a través del embudo hacia el `elif` y el `else`, evitando asignaciones dobles o errores de superposición de rangos en los datos recolectados.

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar.
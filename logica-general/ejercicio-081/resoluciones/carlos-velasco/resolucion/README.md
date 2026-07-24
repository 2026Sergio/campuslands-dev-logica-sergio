# Plantilla de solucion

## Analisis

* **Entrada**: Un objeto (`estadisticas`) que contiene las métricas de rendimiento de un jugador, específicamente `kda` (number) y `winrate` (number).
* **Proceso**: Validación de integridad de los datos de entrada, verificación estricta de tipos numéricos, evaluación condicional descendente basada en umbrales jerárquicos de KDA y porcentaje de victorias, asignación del rango correspondiente, y formato de salida.
* **Salida**: Un objeto que detalla el `kda`, el `winrate` formateado con símbolo de porcentaje, el `rango_asignado` y una `explicacion` (o un objeto con un mensaje de `error` si los datos son incompletos o inválidos).

## Reglas identificadas

1. **Validación de Integridad y Tipos**: El sistema debe verificar obligatoriamente que el objeto de estadísticas exista y que tanto `kda` como `winrate` sean de tipo numérico válido.
2. **Evaluación Jerárquica Descendente**: Las reglas de clasificación se evalúan desde la categoría más exigente ("Gran Maestro" con KDA $\ge$ 3.5 y Winrate $\ge$ 65%) hacia abajo para evitar conflictos de asignación.
3. **Clasificación por Defecto (Niveles Bajos)**: Si el jugador no cumple con ninguno de los umbrales superiores, el algoritmo asigna de forma predeterminada el rango de "Plata / Bronce".

## Pruebas

### Caso normal

* **Entrada**: `{ kda: 4.2, winrate: 70 }`
* **Resultado esperado**: `{ kda: 4.2, winrate: "70%", rango_asignado: "Gran Maestro", explicacion: "Se aplicaron reglas condicionales basadas en el KDA y el porcentaje de victorias para determinar el rango competitivo." }`

### Caso borde

* **Entrada**: `{ kda: 1.0, winrate: 45 }`
* **Resultado esperado**: `{ kda: 1, winrate: "45%", rango_asignado: "Plata / Bronce", explicacion: "Se aplicaron reglas condicionales basadas en el KDA y el porcentaje de victorias para determinar el rango competitivo." }`

## Explicacion final

La solución funciona porque implementa una estructura condicional anidada de forma estricta y descendente. Al validar primero la tipificación y existencia de los datos, se blindan los cálculos de errores imprevistos. Posteriormente, las condiciones compuestas evalúan ambas métricas simultáneamente (`kda` y `winrate`), garantizando que perfiles excepcionales capturen el rango superior correcto antes de que las sentencias alternativas clasifiquen a los jugadores con menor rendimiento.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Orden de evaluación**: Asegúrate de ordenar tus condiciones lógicas desde el criterio más estricto al más laxo; de lo contrario, los valores altos podrían ser capturados erróneamente por reglas generales anteriores.
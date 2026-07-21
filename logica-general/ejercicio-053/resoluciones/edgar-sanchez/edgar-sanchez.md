## Analisis
El problema requiere validar condiciones ambientales y operativas antes de permitir una actividad de alto riesgo. Se deben filtrar las entradas para asegurar que el salto ocurra dentro de un rango seguro de velocidad de viento y altitud.

- Entrada: Velocidad del viento (km/h) y Altitud (metros).
- Proceso: Evaluación secuencial de reglas de seguridad comparando las entradas con constantes predefinidas.
- Salida: Estado del salto (Autorizado o motivo de cancelación).

## Reglas identificadas

1. La velocidad del viento no debe superar los 30 km/h.
2. La altitud mínima permitida es de 1000 metros.
3. La altitud máxima permitida es de 4000 metros.
4. Los valores negativos en las entradas se consideran errores.

## Pruebas

### Caso normal

Entrada: 15, 2500

Resultado esperado: Salto autorizado

### Caso borde

Entrada: 35, 2500

Resultado esperado: Salto cancelado: Viento excesivo

## Explicacion final por que tu solucion funciona.
La solución emplea una estructura de guardas (early returns) que evalúa las condiciones de exclusión antes de autorizar el salto. Esto permite que el código sea eficiente al detener el procesamiento en cuanto se detecta un incumplimiento de seguridad, garantizando que solo se llegue a la autorización si todas las reglas se cumplen estrictamente.
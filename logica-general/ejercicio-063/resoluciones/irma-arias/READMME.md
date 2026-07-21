
# Ejercicio 063 - Toma de Decisiones (Torneo de Esports)

## 1. ¿Cómo pensé el problema?
Desglose el problema analizando que la toma de decisiones en un torneo de deportes electrónicos requiere un flujo estructurado de evaluación. Primero se deben validar las condiciones obligatorias de participación (como la alineación completa y el nombre del equipo) y posteriormente aplicar umbrales cuantitativos (puntos de partida y ratio de victorias) para definir si un equipo clasifica directamente, va a repesca o queda eliminado.

## 2. Reglas aplicadas
* **Validación inicial:** Comprobar que la colección recibida sea un arreglo válido y no esté vacía.
* **Control normativo:** Descalificar automáticamente a cualquier equipo que presente anomalías en su registro o carezca de alineación completa.
* **Criterios de avance:** Asignar clasificación directa a quienes superen los 32 puntos con un rendimiento superior al 70%, enviando el resto a zonas de repesca o eliminación.

## 3. ¿Cómo ejecutar o revisar la solución?
Ejecuta el archivo utilizando Node.js desde la terminal:
```bash
node resoluciones/irma-arias/irma-arias.js
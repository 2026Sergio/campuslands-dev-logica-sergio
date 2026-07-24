# Plantilla de solucion

## Analisis

- Entrada: 
  - `items`: Arreglo de elementos que representan los estados de los pedidos o productos de un puesto de comida urbana (ej. ["aprobado", "pendiente", "bloqueado"]).
  - `prioridad`: Nivel de urgencia establecido para la selección.
  - `regla`: Criterio que indica cómo priorizar los elementos críticos.

- Proceso: 
  1. Validar que la lista de elementos no esté vacía.
  2. Recorrer el arreglo usando un ciclo para buscar elementos con estado "bloqueado".
  3. Si no hay bloqueados, evaluar el siguiente nivel de prioridad (ej. "pendiente").
  4. Determinar la acción exacta y el motivo basado en las estrategias de selección del negocio de comida urbana.

- Salida: 
  - `accion`: Tarea prioritaria a realizar (ej. "revisar bloqueado").
  - `motivo`: Explicación de la regla de selección aplicada.

## Reglas identificadas

1. **Prioridad de Bloqueos**: Los elementos "bloqueados" se seleccionan y reportan primero.
2. **Evaluación Secuencial**: Si no existen bloqueos, se procesan los elementos "pendientes".
3. **Validación**: Se verifica que el arreglo contenga datos válidos antes de procesar.

## Pruebas

### Caso normal

Entrada:
```javascript
{
  items: ["aprobado", "pendiente", "bloqueado"],
  prioridad: "alta",
  regla: "revisar bloqueados primero"
}
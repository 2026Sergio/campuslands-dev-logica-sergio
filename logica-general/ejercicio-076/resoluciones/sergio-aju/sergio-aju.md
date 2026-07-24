# Plantilla de solucion

## Analisis

- Entrada: 
  - `matriz_escenas`: Matriz bidimensional que representa los estados de las escenas de animación 3D.

- Proceso: 
  1. Validar que la matriz no esté vacía.
  2. Recorrer la matriz con ciclos anidados para buscar elementos "bloqueados".
  3. Si no hay bloqueos, buscar elementos "pendientes".
  4. Retornar la acción y la coordenada exacta.

- Salida: 
  - `accion`: Tarea prioritaria a realizar.
  - `coordenada`: Ubicación [fila, columna].
  - `motivo`: Explicación de la regla aplicada.

## Reglas identificadas

1. **Prioridad de Bloqueos**: Los elementos "bloqueados" se reportan primero.
2. **Evaluación Secuencial**: Si no hay bloqueos, se buscan los "pendientes".
3. **Validación**: Retorna advertencia si la matriz está vacía.

## Pruebas

### Caso normal

Entrada:
```javascript
{
  matriz_escenas: [
    ["completado", "completado", "pendiente"],
    ["completado", "bloqueado", "en_proceso"],
    ["pendiente", "completado", "completado"]
  ]
}
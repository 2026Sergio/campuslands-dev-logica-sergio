# Plantilla de solucion

## Analisis

- Entrada: 
  - `turnos`: Arreglo de objetos con la información de los soldadores y sus turnos asignados (ej. nombre, tipo de soldadura, horario).
  - `turno_actual`: Cadena o número que indica el turno que se desea procesar o verificar.

- Proceso: 
  1. Validar que la lista de turnos no esté vacía.
  2. Recorrer el arreglo usando un ciclo para buscar el siguiente soldador disponible según el turno actual.
  3. Aplicar reglas de asignación por especialidad de soldadura (ej. TIG, MIG).
  4. Determinar la acción a seguir y estructurar el resultado.

- Salida: 
  - `asignacion`: Soldador o estación asignada.
  - `turno`: Horario procesado.
  - `motivo`: Explicación de la regla de turnos aplicada.

## Reglas identificadas

1. **Prioridad de Turnos**: Se asigna el turno según el orden de llegada o especialidad en el taller de soldadura.
2. **Validación de Disponibilidad**: Si un turno está ocupado, se pasa al siguiente disponible.
3. **Control de Errores**: Retorna mensaje de error si la lista de turnos está vacía.

## Pruebas

### Caso normal

Entrada:
```javascript
{
  turnos: [
    { soldador: "Carlos", especialidad: "TIG", estado: "disponible" },
    { soldador: "Ana", especialidad: "MIG", estado: "ocupado" }
  ],
  turno_actual: 1
}
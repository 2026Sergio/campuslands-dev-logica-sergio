# Ejercicio 082 - Validacion de datos (ranking de futbol sala)

## Analisis

- Entrada: un arreglo de items con un estado (`aprobado`, `pendiente`, `bloqueado`).
- Proceso: se identifica el item con mayor urgencia segun una tabla de prioridades.
- Salida: un objeto con la accion a tomar y el motivo de la decision.

## Nota sobre el README base

El README del ejercicio menciona la tematica "ranking de futbol sala" pero el ejemplo de entrada/salida corresponde a una validacion de estados (`aprobado`, `pendiente`, `bloqueado`). Se tomo el ejemplo literal como especificacion, ya que es la fuente autoritativa cuando hay inconsistencia con el titulo o la tematica descrita.

## Reglas identificadas

1. Si hay al menos un item `bloqueado`, se revisa ese primero.
2. Si no hay bloqueados pero hay `pendiente`, se revisa ese.
3. Si todos estan `aprobado`, no hay accion urgente pendiente.
4. Los items con estados no reconocidos se ignoran.

## Pruebas

### Caso normal

Entrada:

```text
["aprobado", "pendiente", "bloqueado"]
```

Resultado esperado:

```text
{ accion: "revisar bloqueado", motivo: "la regla prioriza riesgos antes de tareas normales." }
```

### Caso borde

Entrada:

```text
[]
```

Resultado esperado:

```text
{ accion: "sin datos", motivo: "no se recibieron items para revisar." }
```

## Explicacion final

La solucion usa un objeto de prioridades numericas en lugar de condicionales anidados, lo que permite encontrar el estado mas urgente con un solo `reduce`. Los motivos se mantienen separados de la logica de decision para que el codigo sea facil de leer y extender si se agregan nuevos estados.
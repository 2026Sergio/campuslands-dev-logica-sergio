# Logica general 051 - organizacion de listas

## Analisis

- Entrada: Una lista de elementos y una prioridad.
- Proceso: Ordenar la lista según la prioridad indicada.
- Salida: La lista organizada.

## Reglas identificadas

1. Si la prioridad es "alta", mover los elementos importantes al inicio.
2. Si la prioridad es "baja", mantener el orden original.
3. Los elementos "bloqueados" siempre van primero.

## Pruebas

### Caso normal

Entrada: items: ["aprobado", "pendiente", "bloqueado"], prioridad: "alta"

Resultado esperado: ["bloqueado", "aprobado", "pendiente"]

### Caso borde

Entrada: items: [], prioridad: "alta"

Resultado esperado: []

## Explicacion final

La función revisa cada elemento y los organiza según la prioridad, colocando los bloqueados al inicio.
# Ejercicio 085 - Ordenamiento de prioridades

## Analisis

- Entrada: un arreglo de items con un estado (`aprobado`, `pendiente` o `bloqueado`).
- Proceso: se identifica el item con el estado de mayor prioridad usando un mapa numerico y una unica pasada con `reduce`.
- Salida: un objeto con `accion` y `motivo` segun el estado mas urgente encontrado.

## Reglas identificadas

1. Los items en estado `bloqueado` se revisan primero por representar un riesgo.
2. Si no hay bloqueados, se revisan los `pendiente` antes que los `aprobado`.
3. Si todos los items estan `aprobado`, no hay riesgos ni pendientes por atender.
4. Un estado fuera del catalogo conocido se reporta como no reconocido en lugar de ignorarse.
5. Una lista vacia se reporta explicitamente, sin item para revisar.

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
{ accion: "sin items para revisar", motivo: "la lista de items esta vacia." }
```

### Casos adicionales verificados

- `["aprobado", "pendiente"]` → revisa `pendiente`.
- `["aprobado"]` → revisa `aprobado`.
- `["aprobado", "urgente"]` → reporta estado no reconocido (`urgente`).
- `["bloqueado", "bloqueado"]` → revisa `bloqueado` sin fallar por empate.

## Explicacion final

La solucion separa la logica en tres piezas: un mapa de prioridades numericas, un mapa de acciones y un mapa de motivos. Esto evita condicionales anidados y hace que agregar un nuevo estado solo requiera actualizar los mapas. Antes de calcular la prioridad, se valida si existe algun estado fuera del catalogo, evitando que un estado desconocido se confunda silenciosamente con una prioridad baja.

## Como ejecutar

```bash
node maria-montepeque.js
```

O importar la funcion `resolverPrioridad` desde otro archivo de pruebas.
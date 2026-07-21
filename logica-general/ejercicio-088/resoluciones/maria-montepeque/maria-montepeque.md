# Ejercicio 088 - Flujos paso a paso

## Analisis

- Entrada: un arreglo `items` con estados de tipo texto (`aprobado`, `pendiente`, `bloqueado`).
- Proceso: se filtran los estados validos y se identifica el de mayor prioridad segun una tabla de urgencia.
- Salida: un objeto con `accion` (que estado revisar) y `motivo` (por que se eligio ese estado).

## Reglas identificadas

1. `bloqueado` tiene la prioridad mas alta (riesgo), seguido de `pendiente` y luego `aprobado`.
2. Si el arreglo esta vacio, se retorna una accion indicando que no hay items.
3. Si ningun item coincide con un estado reconocido, se retorna una accion indicando que no hay items validos.
4. Entre varios items, se elige el de mayor prioridad usando una unica pasada con `reduce`.

## Pruebas

### Caso normal

Entrada:

```text
items: ["aprobado", "pendiente", "bloqueado"]
```

Resultado esperado:

```text
accion: revisar bloqueado
motivo: la regla prioriza riesgos antes de tareas normales.
```

### Caso borde

Entrada:

```text
items: []
```

Resultado esperado:

```text
accion: sin items
motivo: no hay elementos para evaluar.
```

Entrada adicional (estados no reconocidos):

```text
items: ["desconocido", "sin-estado"]
```

Resultado esperado:

```text
accion: sin items validos
motivo: ningun item coincide con un estado reconocido.
```

## Explicacion final

La solucion separa la logica de decision (tabla `PRIORIDADES`) de la logica de presentacion (`ACCIONES` y `MOTIVOS`), evitando condicionales anidados. Se usa `reduce` para encontrar el item de mayor prioridad en una sola pasada, y se validan los casos borde de arreglo vacio y estados no reconocidos antes de aplicar la regla principal.

## Como ejecutar

```bash
node maria-montepeque.js
```
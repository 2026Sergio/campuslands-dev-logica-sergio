# Ejercicio 067 - Deteccion de inconsistencias (logica-general)

## Analisis

- Entrada: un arreglo `items` con los estados de las canciones de una playlist (`aprobado`, `pendiente`, `bloqueado`).
- Proceso: se filtran los estados validos y se identifica cual de ellos representa la mayor urgencia segun una tabla de prioridades.
- Salida: un objeto con `accion` (que hacer) y `motivo` (por que se elige esa accion).

## Reglas identificadas

1. Si el arreglo esta vacio, no hay nada que revisar.
2. Si ningun item coincide con un estado reconocido, se reporta como estado no reconocido.
3. Entre los estados validos presentes, `bloqueado` tiene prioridad sobre `pendiente`, y `pendiente` sobre `aprobado`.
4. Si todos los items estan `aprobado`, no se requiere ninguna accion.

## Pruebas

### Caso normal

Entrada:

```js
["aprobado", "pendiente", "bloqueado"]
```

Resultado esperado:

```js
{ accion: "revisar bloqueado", motivo: "la regla prioriza riesgos antes de tareas normales." }
```

### Caso borde

Entrada:

```js
[]
```

Resultado esperado:

```js
{ accion: "sin elementos para revisar", motivo: "la playlist no contiene items." }
```

Casos adicionales verificados: solo `pendiente`/`aprobado`, estados no reconocidos, todos `aprobado`, y mezcla de estados validos con invalidos.

## Explicacion final

La solucion usa un objeto `PRIORIDADES` para mapear cada estado a un numero de urgencia, evitando condicionales anidados. Con `reduce` se recorre el arreglo una sola vez para encontrar el estado mas urgente presente. Las tablas `ACCIONES` y `MOTIVOS` mantienen separada la logica de decision del texto que se muestra al usuario, y se validan explicitamente los casos de arreglo vacio y estados no reconocidos.

## Como ejecutar

```bash
node maria-montepeque.js
```

O importando la funcion `detectarInconsistencia` en otro archivo de pruebas.
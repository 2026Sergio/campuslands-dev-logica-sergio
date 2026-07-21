# Ejercicio 080 - Estrategias de seleccion

## Analisis

- Entrada: un objeto con `items` (arreglo de estados: `aprobado`, `pendiente`, `bloqueado`), `prioridad` y `regla`.
- Proceso: se identifica el estado mas urgente presente en `items` segun una tabla de prioridades numericas.
- Salida: un objeto con `accion` y `motivo` asociados al estado mas urgente.

## Reglas identificadas

1. `bloqueado` tiene la prioridad mas alta (riesgo), seguido de `pendiente`, y por ultimo `aprobado`.
2. Se recorre el arreglo una sola vez con `reduce` para encontrar el estado de mayor prioridad.
3. Cada estado tiene una accion y un motivo predefinidos, separados en objetos independientes de la logica de decision.
4. Si `items` esta vacio, no es un arreglo, o ningun valor es reconocido, se responde con una accion neutral y su motivo.

## Pruebas

### Caso normal

Entrada:

```js
{ items: ["aprobado", "pendiente", "bloqueado"], prioridad: "alta", regla: "revisar bloqueados primero" }
```

Resultado esperado:

```js
{ accion: "revisar bloqueado", motivo: "la regla prioriza riesgos antes de tareas normales." }
```

### Caso borde

Entrada:

```js
{ items: [] }
```

Resultado esperado:

```js
{ accion: "sin accion", motivo: "no hay elementos para evaluar." }
```

Casos adicionales probados:

- `items: ["aprobado", "pendiente"]` (sin bloqueados) -> prioriza `pendiente`.
- `items: ["aprobado", "aprobado"]` (solo aprobados) -> accion de proceso normal.
- `items: ["cancelado", "archivado"]` (valores no reconocidos) -> accion neutral con motivo explicito.
- `items: undefined` (dato invalido) -> se maneja como arreglo vacio.

## Explicacion final

La solucion usa un mapa `PRIORIDADES` para evitar condicionales anidados: cada estado tiene un numero, y `reduce` compara las prioridades en una sola pasada para quedarse con el estado mas urgente. Las acciones y los motivos viven en objetos separados (`ACCIONES` y `MOTIVOS`), desacoplados de la logica de decision, lo que facilita agregar nuevos estados sin tocar el algoritmo. Se valida el caso de arreglo vacio/invalido y el caso de estados no reconocidos antes de devolver el resultado, evitando errores silenciosos.

## Como ejecutar

```bash
node -e "console.log(require('./maria-montepeque.js').seleccionarEstrategia({ items: ['aprobado', 'pendiente', 'bloqueado'] }))"
```
# Ejercicio 076 - Logica general: matrices simples

## Analisis

- Entrada: un arreglo `items` con estados de tareas (`"aprobado"`, `"pendiente"`, `"bloqueado"`), acompanado de un contexto `prioridad` y `regla` que describen que los bloqueados deben revisarse primero.
- Proceso: se evalua cada item segun un mapa de prioridades numericas, se descartan estados no reconocidos y se identifica el estado mas urgente presente en el arreglo mediante una sola pasada con `reduce`.
- Salida: un objeto con `accion` (que hacer) y `motivo` (por que), determinados por el estado mas urgente encontrado.

## Reglas identificadas

1. El README describe el ejercicio como "matrices simples" con tematica de animacion 3D, pero el unico ejemplo entrada/salida que ofrece corresponde a logica de priorizacion de estados de tareas. Se tomo el ejemplo literal como especificacion valida, siguiendo el criterio de que el ejemplo manda sobre el titulo o la tematica.
2. `bloqueado` tiene la prioridad mas alta (se revisa primero), seguido de `pendiente`, y por ultimo `aprobado`.
3. Si el arreglo esta vacio, no es un arreglo, o ningun item tiene un estado reconocido, se responde con una accion de "sin datos" en lugar de fallar.

## Pruebas

### Caso normal

Entrada:

```js
evaluarItems(["aprobado", "pendiente", "bloqueado"])
```

Resultado esperado:

```js
{
  accion: "revisar bloqueado",
  motivo: "la regla prioriza riesgos antes de tareas normales."
}
```

### Caso borde

Entrada:

```js
evaluarItems([])
evaluarItems(["x", "y"])
```

Resultado esperado:

```js
{ accion: "sin datos", motivo: "no hay items para evaluar." }
{ accion: "sin datos", motivo: "ningun item tiene un estado reconocido." }
```

## Explicacion final

La solucion separa la logica de decision (mapa `PRIORIDADES`) de la logica de presentacion (mapas `ACCIONES` y `MOTIVOS`), evitando condicionales anidados. Con `filter` se descartan estados invalidos antes de aplicar `reduce`, por lo que el arreglo original puede contener valores mixtos sin romper el calculo. Los casos borde (arreglo vacio, valor no array, o solo estados desconocidos) se manejan de forma explicita antes de intentar el `reduce`, evitando errores en tiempo de ejecucion.
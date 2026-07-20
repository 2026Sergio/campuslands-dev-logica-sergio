# Ejercicio 074 - diagnostico de errores

## Analisis

- Entrada: un arreglo de items con su estado (`aprobado`, `pendiente`, `bloqueado`).
- Proceso: se identifica el estado mas urgente presente en el arreglo, ignorando estados desconocidos.
- Salida: un objeto con `accion` y `motivo` segun el estado mas urgente encontrado.

## Reglas identificadas

1. Los estados tienen un orden de urgencia: `bloqueado` es mas urgente que `pendiente`, y `pendiente` es mas urgente que `aprobado`.
2. Si el arreglo esta vacio, no hay accion posible.
3. Si ningun estado es reconocido, tampoco hay accion posible.
4. Cuando hay varios items, se elige la accion segun el estado mas urgente presente, sin importar cuantos items tenga cada estado.

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
{ accion: "sin accion", motivo: "no hay items para diagnosticar." }
```

Tambien se probo con estados desconocidos (`"cancelado"`, `"en-revision"`), items mezclados de solo `pendiente` y `aprobado`, y estados invalidos combinados con validos, para confirmar que se filtran correctamente.

## Explicacion final

La solucion usa un objeto `PRIORIDADES` para mapear cada estado a un numero de urgencia, en vez de encadenar condicionales. Con `reduce` se recorre el arreglo una sola vez para encontrar el estado mas urgente. La accion y el motivo se obtienen de objetos separados (`ACCIONES` y `MOTIVOS`), lo que mantiene la logica de decision independiente del texto que se muestra al usuario.
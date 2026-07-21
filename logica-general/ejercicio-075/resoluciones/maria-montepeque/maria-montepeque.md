# Ejercicio 075 - reglas de negocio

## Analisis

- Entrada: un arreglo de items con un estado cada uno (`aprobado`, `pendiente`, `bloqueado`).
- Proceso: se filtran los estados reconocidos y se identifica el mas urgente segun una tabla de prioridades numericas.
- Salida: un objeto con `accion` y `motivo` correspondientes al estado mas prioritario encontrado.

## Reglas identificadas

1. `bloqueado` tiene la prioridad mas alta: se revisa primero por representar un riesgo.
2. `pendiente` se revisa si no hay ningun `bloqueado` en la lista.
3. `aprobado` se revisa solo si no hay `bloqueado` ni `pendiente`.
4. Los estados que no coinciden con la tabla de prioridades se ignoran, no detienen la ejecucion.

## Pruebas

### Caso normal

Entrada:

```js
revisarItems(['aprobado', 'pendiente', 'bloqueado']);
```

Resultado esperado:

```js
{
  accion: 'revisar bloqueado',
  motivo: 'la regla prioriza riesgos antes de tareas normales.'
}
```

### Caso borde

Entrada:

```js
revisarItems([]);
```

Resultado esperado:

```js
{
  accion: 'sin items',
  motivo: 'no hay elementos para revisar.'
}
```

Entrada adicional:

```js
revisarItems(['en-revision', 'archivado']);
```

Resultado esperado:

```js
{
  accion: 'sin items reconocidos',
  motivo: 'ningun estado recibido coincide con los estados validos.'
}
```

## Explicacion final

La logica separa la tabla de prioridades (`PRIORIDADES`) de los textos de salida (`ACCIONES` y `MOTIVOS`), evitando condicionales anidados. Un unico `reduce` recorre los items reconocidos y determina cual tiene la prioridad numerica mas baja, que representa el estado mas urgente. Se manejan explicitamente los casos de arreglo vacio y de estados no reconocidos para que la funcion nunca falle con datos inesperados.
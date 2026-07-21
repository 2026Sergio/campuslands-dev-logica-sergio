# Ejercicio 097 - tablas de decision

## Analisis

- Entrada: una lista de items con un estado (`aprobado`, `pendiente` o `bloqueado`).
- Proceso: se identifica el item con mayor prioridad de revision segun su estado.
- Salida: un objeto con la accion a tomar y el motivo de esa decision.

## Reglas identificadas

1. Los items `bloqueado` tienen la maxima prioridad, ya que representan un riesgo.
2. Si no hay bloqueados, se prioriza `pendiente` sobre `aprobado`.
3. Si la lista esta vacia, se informa que no hay items para revisar.
4. Si ningun item coincide con un estado reconocido, se informa que no hay items validos.

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
{ accion: "sin items para revisar", motivo: "la lista de items esta vacia." }
```

### Casos adicionales probados

- Solo `aprobado`: se revisa `aprobado` porque no hay riesgos ni pendientes.
- Solo `pendiente`: se revisa `pendiente` porque no hay bloqueados.
- Items con estados invalidos: se informa que no hay items validos.
- Mezcla de items invalidos y validos: se ignoran los invalidos y se evalua solo con los reconocidos.

## Explicacion final

La solucion usa un objeto `PRIORIDADES` que asigna un numero a cada estado, donde el numero mas bajo representa mayor urgencia. Con un unico `reduce` se recorre la lista de items validos y se selecciona el de mayor prioridad, evitando condicionales anidados. Los motivos de cada decision estan separados en un objeto `MOTIVOS`, desacoplando la logica de decision del texto que se muestra al usuario. Se valida por separado el caso de lista vacia y el caso de lista sin items reconocidos, para que ambos den una respuesta clara en vez de fallar o devolver `undefined`.
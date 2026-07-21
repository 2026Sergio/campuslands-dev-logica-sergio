# Ejercicio 071 - Organizacion de listas

## Analisis

- Entrada: una lista de `items` con estados de tareas (`aprobado`, `pendiente`, `bloqueado`) y una `regla` de prioridad.
- Proceso: se identifica el item con el estado mas urgente segun la regla del reto (bloqueado antes que pendiente antes que aprobado).
- Salida: un objeto con la `accion` a tomar y el `motivo` que la justifica.

## Reglas identificadas

1. Un item `bloqueado` tiene la mayor urgencia y se revisa primero.
2. Si no hay bloqueados, se revisa un `pendiente` antes que un `aprobado`.
3. Si no hay bloqueados ni pendientes, se revisa un `aprobado`.
4. Los estados no reconocidos se ignoran al calcular la urgencia.

## Pruebas

### Caso normal

Entrada:

```text
items: ["aprobado", "pendiente", "bloqueado"]
prioridad: alta
regla: revisar bloqueados primero
```

Resultado esperado:

```text
accion: revisar bloqueado
motivo: la regla prioriza riesgos antes de tareas normales.
```

### Caso borde 1 - lista vacia

Entrada:

```text
items: []
```

Resultado esperado:

```text
accion: sin accion
motivo: la lista de items esta vacia o no es valida.
```

### Caso borde 2 - estados desconocidos

Entrada:

```text
items: ["cancelado", "en-revision"]
```

Resultado esperado:

```text
accion: sin accion
motivo: ningun item tiene un estado reconocido.
```

## Explicacion final

La solucion usa un objeto `PRIORIDADES` que asigna un numero de urgencia a cada estado valido, donde el numero mas bajo representa la mayor urgencia. Con un unico `reduce` se recorre la lista de items validos y se obtiene el estado mas urgente presente. Las acciones y los motivos se guardan en objetos separados (`ACCIONES` y `MOTIVOS`) para mantener la logica de decision desacoplada del texto que se muestra al usuario. Se valida el caso de lista vacia o invalida y el caso en que ningun item tenga un estado reconocido.

## Como ejecutar

```bash
node maria-montepeque.js
```

## Casos probados

- Caso normal con los tres estados presentes.
- Caso borde con lista vacia.
- Caso borde con estados no reconocidos.
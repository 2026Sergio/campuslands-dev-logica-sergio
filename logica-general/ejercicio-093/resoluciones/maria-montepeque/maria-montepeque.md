# Ejercicio 093 - Logica general

## Analisis

- Entrada: un arreglo `items` con estados de tareas (`aprobado`, `pendiente`, `bloqueado`).
- Proceso: se identifica el item mas urgente segun una tabla de prioridades numericas.
- Salida: un objeto con `accion` y `motivo` para el item mas urgente.

## Reglas identificadas

1. `bloqueado` tiene la prioridad mas alta, seguido de `pendiente` y luego `aprobado`.
2. Si el arreglo esta vacio, se retorna un resultado indicando que no hay items para procesar.
3. Si ningun item coincide con los estados definidos, se retorna un resultado indicando que no se reconocen los items.
4. Los items no reconocidos dentro de un arreglo mixto se ignoran y solo se evaluan los validos.

## Pruebas

### Caso normal

Entrada:

```js
resolverCaso(["aprobado", "pendiente", "bloqueado"]);
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
resolverCaso([]);
```

Resultado esperado:

```js
{
  accion: "sin items para procesar",
  motivo: "no se recibieron items validos en la entrada."
}
```

## Explicacion final

La solucion usa un objeto de prioridades (`PRIORIDADES`) en lugar de condicionales encadenados, y un unico `reduce` para encontrar el item mas urgente segun ese valor numerico. Las acciones y motivos estan separados en objetos independientes para mantener la logica de decision desacoplada del texto que se muestra. Se manejan explicitamente los casos de arreglo vacio, entrada invalida y items sin reconocer.
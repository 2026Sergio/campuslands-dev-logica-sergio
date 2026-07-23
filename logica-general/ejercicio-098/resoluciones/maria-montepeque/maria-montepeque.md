# Ejercicio 098 - Sistemas de turnos

## Analisis

- Entrada: un arreglo `items` con estados de tareas (`aprobado`, `pendiente`, `bloqueado`).
- Proceso: se filtran los estados validos y se identifica el de mayor prioridad segun el riesgo que representa.
- Salida: un objeto con la `accion` a tomar y el `motivo` de esa decision.

## Reglas identificadas

1. Los estados bloqueados se revisan primero porque representan un riesgo.
2. Si no hay bloqueados, se revisan los pendientes antes que los aprobados.
3. Si no hay bloqueados ni pendientes, se revisa lo aprobado.
4. Los estados no reconocidos se ignoran y no afectan la decision.

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
motivo: no hay elementos para procesar.
```

Entrada adicional:

```text
items: ["inexistente", "otro"]
```

Resultado esperado:

```text
accion: sin items validos
motivo: ningun item coincide con un estado reconocido.
```

## Explicacion final

La solucion usa un objeto `PRIORIDADES` que asigna un numero a cada estado segun su nivel de urgencia (menor numero equivale a mayor urgencia). Con un solo `reduce` se recorre el arreglo de items validos y se conserva el de menor valor de prioridad, evitando condicionales anidados. Las acciones y motivos estan separados en sus propios objetos para desacoplar la logica de decision de los textos que se muestran. Se manejan los casos de arreglo vacio y de items sin coincidencia en `PRIORIDADES` para que la funcion nunca falle por datos inesperados.
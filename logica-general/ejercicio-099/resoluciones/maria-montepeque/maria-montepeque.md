# Ejercicio 099 - Inventarios logicos

## Analisis

- Entrada: un arreglo de items con un estado (`aprobado`, `pendiente`, `bloqueado`).
- Proceso: se identifica el item con el estado mas urgente segun una tabla de prioridades.
- Salida: un objeto con `accion` y `motivo` segun el estado mas urgente encontrado.

## Reglas identificadas

1. `bloqueado` tiene la prioridad mas alta (riesgo), seguido de `pendiente`, y por ultimo `aprobado`.
2. Se recorre el arreglo una sola vez con `reduce` para encontrar el estado mas urgente.
3. Los estados no reconocidos se descartan antes de evaluar la prioridad.
4. Si el arreglo esta vacio o no tiene estados validos, se responde `sin accion` con el motivo correspondiente.

## Pruebas

### Caso normal

Entrada:

```text
["aprobado", "pendiente", "bloqueado"]
```

Resultado esperado:

```text
{ accion: "revisar bloqueado", motivo: "la regla prioriza riesgos antes de tareas normales." }
```

### Caso borde

Entrada:

```text
[]
```

Resultado esperado:

```text
{ accion: "sin accion", motivo: "no hay items para evaluar." }
```

Casos adicionales probados: solo `pendiente`/`aprobado`, solo `aprobado`, estados no reconocidos, y una mezcla de estados validos e invalidos.

## Explicacion final

La solucion separa la logica de decision (tabla `PRIORIDADES`) de los textos de salida (`ACCIONES` y `MOTIVOS`), evitando condicionales anidados. Con un solo `reduce` se determina el estado mas urgente presente en el arreglo, y se filtran los estados invalidos antes de evaluar, cubriendo asi los casos borde sin perder claridad.
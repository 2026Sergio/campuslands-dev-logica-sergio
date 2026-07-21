# Ejercicio 094 - Diagnostico de errores

## Analisis

- Entrada: un arreglo de items con un estado (`aprobado`, `pendiente`, `bloqueado`).
- Proceso: se identifica el estado con mayor prioridad usando una tabla de prioridades y una sola pasada con `reduce`.
- Salida: un objeto con `accion` y `motivo`, segun el estado mas urgente encontrado.

## Reglas identificadas

1. Los estados `bloqueado` tienen la prioridad mas alta y deben revisarse primero.
2. Si no hay bloqueados, se revisan los `pendiente`.
3. Si no hay bloqueados ni pendientes, se revisan los `aprobado`.
4. Los estados no reconocidos se ignoran; si ninguno es valido, no hay accion posible.

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
accion: sin accion
motivo: no hay items para evaluar.
```

Entrada adicional (estados invalidos):

```text
items: ["desconocido", "inexistente"]
```

Resultado esperado:

```text
accion: sin accion
motivo: ningun item tiene un estado reconocido.
```

## Explicacion final

La solucion mapea cada estado a un valor numerico de prioridad y usa `reduce` para encontrar el estado mas urgente en una sola pasada, evitando condicionales anidados. Las acciones y motivos se mantienen en objetos separados de la logica de decision, lo que facilita agregar o modificar estados sin tocar el flujo principal. Se valida que el arreglo no este vacio y que existan estados reconocidos antes de calcular el resultado.
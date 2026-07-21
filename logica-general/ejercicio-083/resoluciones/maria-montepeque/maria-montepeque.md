# Ejercicio 083 - Logica general: torneo de esports

## Analisis

- Entrada: un arreglo `items` con estados (`aprobado`, `pendiente`, `bloqueado`) y una `prioridad` declarada.
- Proceso: se identifica el item con el estado mas urgente segun una tabla de prioridades numericas.
- Salida: un objeto con `accion` y `motivo` segun el estado mas urgente encontrado.

## Reglas identificadas

1. `bloqueado` tiene la prioridad mas alta (riesgo), seguido de `pendiente`, y por ultimo `aprobado`.
2. Se recorre el arreglo una sola vez con `reduce` para encontrar el estado mas urgente.
3. Si el arreglo esta vacio o no contiene estados reconocidos, se retorna una accion de tipo "sin accion" con su motivo correspondiente.

## Pruebas

### Caso normal

Entrada:

```text
items: ["aprobado", "pendiente", "bloqueado"]
prioridad: alta
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
prioridad: alta
```

Resultado esperado:

```text
accion: sin accion
motivo: no hay items para evaluar.
```

Tambien se probo un caso adicional con estados no reconocidos (`["desconocido", "invalido"]`), que retorna `sin accion` con el motivo correspondiente.

## Explicacion final

La solucion separa la logica de decision (tabla de prioridades) de la logica de presentacion (acciones y motivos), evitando condicionales anidados. El uso de `reduce` permite encontrar el estado mas urgente en una sola pasada, y el filtro previo descarta estados no reconocidos antes de evaluar. Los casos borde (arreglo vacio y estados invalidos) se manejan de forma explicita para evitar errores.
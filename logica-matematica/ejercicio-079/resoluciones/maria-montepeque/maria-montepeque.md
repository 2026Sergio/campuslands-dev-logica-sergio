# Ejercicio 079 - Inventarios logicos

## Analisis

- Entrada: un arreglo `items` con estados de inventario (`aprobado`, `pendiente`, `bloqueado`).
- Proceso: se filtran los estados reconocidos y se identifica el mas urgente segun una tabla de prioridades.
- Salida: un objeto con `accion` (que revisar primero) y `motivo` (por que se revisa primero).

## Reglas identificadas

1. `bloqueado` es el estado de mayor urgencia porque representa un riesgo.
2. `pendiente` se revisa antes que `aprobado` cuando no hay bloqueados.
3. `aprobado` solo se revisa si no hay bloqueados ni pendientes.
4. Los estados no reconocidos se ignoran, no detienen el proceso.
5. Un arreglo vacio o sin estados validos no genera una accion de revision.

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
motivo: no hay items para procesar en el inventario.
```

### Caso adicional (estados no reconocidos)

Entrada:

```text
items: ["desconocido", "otro"]
```

Resultado esperado:

```text
accion: sin accion
motivo: ningun item tiene un estado reconocido.
```

### Caso adicional (mezcla de validos e invalidos)

Entrada:

```text
items: ["aprobado", "desconocido", "pendiente"]
```

Resultado esperado:

```text
accion: revisar pendiente
motivo: no hay bloqueados, se revisan pendientes antes que aprobados.
```

## Explicacion final

La solucion usa un objeto `PRIORIDADES` para asignarle un numero a cada estado (menor numero es mas urgente), evitando condicionales anidados. Con un solo `reduce` sobre los items validos se identifica el estado mas urgente, y luego objetos separados (`ACCIONES` y `MOTIVOS`) traducen ese estado a la respuesta final. Los estados no reconocidos se filtran antes del `reduce` para no afectar el resultado, y los casos sin items validos devuelven una respuesta explicita en vez de fallar.

## Como ejecutar

```bash
node maria-montepeque.js
```
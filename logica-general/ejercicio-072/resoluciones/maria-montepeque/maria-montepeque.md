# Ejercicio 072 - comparacion de opciones

## Analisis

- Entrada: un arreglo `items` con estados de tareas (`aprobado`, `pendiente`, `bloqueado`).
- Proceso: se identifica el estado mas urgente segun una tabla de prioridades, donde `bloqueado` tiene la prioridad mas alta.
- Salida: un objeto con `accion` (que estado revisar) y `motivo` (por que se revisa ese estado primero).

## Reglas identificadas

1. Los items bloqueados se revisan primero por representar un riesgo.
2. Si no hay bloqueados, se revisan los pendientes.
3. Si solo hay aprobados, se revisan los aprobados.
4. Un arreglo vacio o sin estados reconocidos no genera accion.

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

### Casos adicionales probados

- `["aprobado", "pendiente"]` sin bloqueados: revisa pendiente.
- `["aprobado", "aprobado"]` solo aprobados: revisa aprobado.
- `["desconocido", "otro"]` estados no reconocidos: sin accion.
- `["desconocido", "pendiente"]` mezcla de valido e invalido: revisa pendiente, ignorando el invalido.

## Explicacion final

La solucion usa una tabla de prioridades (`PRIORIDADES`) en vez de condicionales anidados, y un `reduce` para encontrar el item mas urgente en un solo recorrido. Las acciones y motivos estan separados en sus propios objetos, desacoplando la logica de decision del texto que se muestra. Se filtran los estados no reconocidos antes de evaluar, y se manejan explicitamente el arreglo vacio y el caso sin estados validos.

## Como ejecutar

```bash
node -e "console.log(require('./maria-montepeque.js').compararOpciones(['aprobado','pendiente','bloqueado']))"
```
# Ejercicio 078 - sistemas de turnos

## Analisis

- Entrada: un arreglo `items` con estados de tareas (`aprobado`, `pendiente`, `bloqueado`).
- Proceso: se identifica el estado mas urgente presente en el arreglo segun una tabla de prioridades.
- Salida: un objeto con la `accion` a realizar y el `motivo` que la justifica.

## Reglas identificadas

1. Los items bloqueados se revisan primero (prioridad mas alta).
2. Si no hay bloqueados, se revisan los pendientes.
3. Si no hay bloqueados ni pendientes, se revisan los aprobados.
4. Los estados no reconocidos se ignoran al calcular la prioridad.
5. Si el arreglo esta vacio o no tiene estados validos, no hay accion a ejecutar.

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
motivo: no hay items para procesar.
```

### Casos adicionales probados

- `["pendiente", "pendiente"]` → `revisar pendiente`, porque no hay bloqueados.
- `["x", "y"]` → `sin accion`, porque ningun estado es reconocido.
- `["x", "aprobado", "pendiente"]` → `revisar pendiente`, ignorando el estado invalido.

## Explicacion final

La solucion usa un objeto `PRIORIDADES` que asigna un numero a cada estado, en vez de usar condicionales encadenados. Con `reduce` se recorre el arreglo una sola vez para encontrar el estado con mayor prioridad. Las tablas `ACCIONES` y `MOTIVOS` separan la logica de decision de los textos que se muestran, y los items con estados no reconocidos se filtran antes de comparar prioridades, evitando errores por datos invalidos.

## Como ejecutar

```bash
node maria-montepeque.js
```

O importando la funcion desde otro archivo:

```javascript
const { resolverTurno } = require('./maria-montepeque.js');
resolverTurno(['aprobado', 'pendiente', 'bloqueado']);
```
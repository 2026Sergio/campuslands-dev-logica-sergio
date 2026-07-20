# Ejercicio 090 - Logica general

## Analisis

- Entrada: un arreglo `items` con estados de tareas (`bloqueado`, `pendiente`, `aprobado`).
- Proceso: se identifica el item con mayor prioridad segun el riesgo que representa.
- Salida: un objeto con `accion` y `motivo` para el item mas urgente.

## Nota sobre el README del ejercicio

El README de este ejercicio es una plantilla generica (tema "viajes y turismo") sin reglas ni estructura de datos propias. El unico ejemplo concreto de entrada/salida es el de estados con prioridad, por lo que se tomo ese ejemplo como especificacion literal y autoritativa.

## Reglas identificadas

1. `bloqueado` tiene la prioridad mas alta (riesgo).
2. `pendiente` tiene prioridad media.
3. `aprobado` tiene la prioridad mas baja.
4. Si hay varios items, se selecciona el de mayor urgencia (menor numero de prioridad).
5. Estados no reconocidos se ignoran al calcular la urgencia.

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

Entrada adicional (estados no reconocidos):

```text
items: ["en-revision", "archivado"]
```

Resultado esperado:

```text
accion: sin accion
motivo: ningun item tiene un estado reconocido.
```

## Explicacion final

La solucion usa un objeto `PRIORIDADES` para mapear cada estado a un numero, evitando condicionales anidados. Con `reduce` se recorre el arreglo una sola vez para encontrar el item mas urgente. Las acciones y motivos se mantienen en objetos separados para desacoplar la logica de decision del texto que se muestra. Se filtran los estados no reconocidos antes de calcular la urgencia, y se valida el caso de arreglo vacio o sin items validos.

## Como ejecutar

```bash
node maria-montepeque.js
```
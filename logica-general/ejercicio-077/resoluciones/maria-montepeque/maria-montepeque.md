# Ejercicio 077 - tablas de decision

## Analisis

- Entrada: un arreglo `items` con estados (`aprobado`, `pendiente`, `bloqueado`).
- Proceso: se identifica el estado mas urgente segun una tabla de prioridades y se traduce a una accion y un motivo.
- Salida: un objeto `{ accion, motivo }`.

## Reglas identificadas

1. `bloqueado` tiene la prioridad mas alta porque representa un riesgo.
2. `pendiente` tiene prioridad intermedia porque requiere seguimiento.
3. `aprobado` tiene la prioridad mas baja porque no representa riesgo inmediato.
4. Si el arreglo esta vacio o no tiene estados validos, no hay accion que ejecutar.

## Como pensé el problema

El ejemplo del README muestra que, entre varios estados en el mismo arreglo, siempre gana el mas riesgoso (`bloqueado`), sin importar el orden en que aparezca. Esto es una tabla de decision por prioridad, igual al patron usado en ejercicios anteriores: un mapa `PRIORIDADES` con valores numéricos (menor numero = mayor urgencia) y un `reduce` que recorre el arreglo comparando prioridades.

Separé la logica de decision (`PRIORIDADES`) de los textos de salida (`ACCIONES` y `MOTIVOS`) para que cada tabla sea facil de leer y modificar por separado.

## Como ejecutar

```bash
node maria-montepeque.js
```

## Pruebas

### Caso normal

Entrada:

```js
["aprobado", "pendiente", "bloqueado"]
```

Resultado esperado:

```js
{ accion: "revisar bloqueado", motivo: "la regla prioriza riesgos antes de tareas normales." }
```

### Caso borde (arreglo vacio)

Entrada:

```js
[]
```

Resultado esperado:

```js
{ accion: "sin accion", motivo: "no hay items validos para evaluar." }
```

### Caso borde (valor no reconocido)

Entrada:

```js
["desconocido", "aprobado"]
```

Resultado esperado:

```js
{ accion: "revisar aprobado", motivo: "los aprobados no representan riesgo inmediato." }
```

El valor `"desconocido"` se ignora porque no existe en la tabla de prioridades, y se evalua solo con los estados validos restantes.

## Explicacion final

La solucion funciona porque convierte el problema en una comparacion numerica: cada estado tiene un peso fijo de urgencia, y el `reduce` siempre conserva el estado con menor valor (mayor prioridad) encontrado hasta el momento. Los estados no reconocidos se descartan sin romper el calculo, y un arreglo vacio devuelve una respuesta explicita en vez de fallar.
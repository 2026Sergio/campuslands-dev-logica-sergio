# Ejercicio 073 - Logica general (paracaidismo)

## Analisis

- Entrada: un arreglo `items` con estados de tareas (`aprobado`, `pendiente`, `bloqueado`).
- Proceso: se identifica el estado mas urgente segun una tabla de prioridades y se asocia una accion y un motivo.
- Salida: un objeto `{ accion, motivo }` con la accion a tomar y la razon.

## Reglas identificadas

1. `bloqueado` tiene la prioridad mas alta porque representa un riesgo.
2. `pendiente` tiene prioridad media porque es una tarea en proceso.
3. `aprobado` tiene la prioridad mas baja porque ya no requiere atencion urgente.
4. Si el arreglo esta vacio o no es valido, no hay accion que tomar.
5. Un estado no reconocido no aporta prioridad (se trata como el de menor urgencia).

## Pruebas

### Caso normal

Entrada:

```js
determinarAccion(["aprobado", "pendiente", "bloqueado"]);
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
determinarAccion([]);
```

Resultado esperado:

```js
{
  accion: "sin acciones",
  motivo: "no hay elementos para evaluar."
}
```

## Explicacion final

La solucion evita condicionales anidados usando un objeto `PRIORIDADES` que asigna un numero a cada estado. Con un solo `reduce` se recorre el arreglo y se conserva el estado con mayor prioridad. La accion y el motivo se obtienen de objetos separados (`ACCIONES` y `MOTIVOS`), lo que mantiene la logica de decision desacoplada del texto que se muestra. Se valida que `items` sea un arreglo con elementos antes de procesar, y los estados no reconocidos no rompen la ejecucion porque reciben prioridad 0.

## Como ejecutar

```bash
node maria-montepeque.js
```

O importar la funcion `determinarAccion` desde otro archivo con `require`.
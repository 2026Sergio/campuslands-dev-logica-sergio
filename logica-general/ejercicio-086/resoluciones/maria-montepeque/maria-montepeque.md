# Ejercicio 086 - Busqueda de elementos

## Analisis

- Entrada: una lista de items con estados (`aprobado`, `pendiente`, `bloqueado`).
- Proceso: se identifica el item con mayor prioridad segun el nivel de riesgo.
- Salida: un objeto con la accion a tomar y el motivo de la decision.

## Reglas identificadas

1. `bloqueado` tiene la prioridad mas alta porque representa un riesgo.
2. `pendiente` se revisa si no hay elementos bloqueados.
3. `aprobado` se revisa solo si no hay bloqueados ni pendientes.
4. Los items que no coinciden con un estado valido se ignoran en la busqueda.

## Nota sobre el README del ejercicio

El README menciona la tematica de autos hiperdeportivos, pero el ejemplo de entrada y salida concreto corresponde a busqueda de elementos por prioridad de estado (aprobado, pendiente, bloqueado). Se tomo el ejemplo literal como especificacion, ya que la tematica es solo ambientacion narrativa.

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
accion: sin elementos para revisar
motivo: la lista de items esta vacia o no es valida.
```

### Caso adicional

Entrada:

```text
items: ["aprobado", "pendiente"]
```

Resultado esperado:

```text
accion: revisar pendiente
motivo: no hay elementos bloqueados, se revisa lo pendiente.
```

## Explicacion final

La solucion usa un objeto de prioridades numericas para evitar condicionales anidados. Se filtran primero los items validos y luego se busca el de menor valor de prioridad con un unico `reduce`, lo que separa la logica de decision del texto de accion y motivo.
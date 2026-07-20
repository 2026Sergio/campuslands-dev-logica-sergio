# Ejercicio 066 - Busqueda de elementos (autos hiperdeportivos)

## Analisis

- Entrada: una lista de `items` con estados de auditoria de autos hiperdeportivos (`bloqueado`, `pendiente`, `aprobado`).
- Proceso: se busca dentro de la lista el estado con mayor prioridad de revision segun la regla del negocio.
- Salida: un objeto con `accion` (que revisar) y `motivo` (por que se revisa ese estado primero).

## Reglas identificadas

1. `bloqueado` tiene la prioridad mas alta porque representa un riesgo.
2. `pendiente` tiene prioridad media, se revisa despues de los bloqueados.
3. `aprobado` tiene la prioridad mas baja, solo se revisa si no hay riesgos ni pendientes.
4. Si la lista esta vacia, no hay nada que revisar.
5. Si ningun item coincide con un estado reconocido, tampoco hay nada valido que revisar.

## Como pense el problema

Es un problema de busqueda del elemento mas prioritario dentro de un arreglo. En vez de usar condicionales anidados, mapeo cada estado a un numero de prioridad en `PRIORIDADES` y uso `reduce` para encontrar el estado con el numero mas alto en un solo recorrido. La accion y el motivo se separan en objetos `ACCIONES` y `MOTIVOS` para mantener la logica de decision independiente del texto que se muestra.

## Como ejecutar

```bash
node maria-montepeque.js
```

## Pruebas

### Caso normal (ejemplo del README)

Entrada:

```text
items: ["aprobado", "pendiente", "bloqueado"]
```

Resultado esperado:

```text
accion: revisar bloqueado
motivo: la regla prioriza riesgos antes de tareas normales.
```

### Caso normal adicional

Entrada:

```text
items: ["pendiente", "aprobado"]
```

Resultado esperado:

```text
accion: revisar pendiente
motivo: la regla prioriza pendientes antes de tareas aprobadas.
```

### Caso borde: lista vacia

Entrada:

```text
items: []
```

Resultado esperado:

```text
accion: sin items para revisar
motivo: la lista de items esta vacia.
```

### Caso borde: estados no reconocidos

Entrada:

```text
items: ["descartado", "sin-registro"]
```

Resultado esperado:

```text
accion: sin items validos para revisar
motivo: ningun item coincide con un estado reconocido.
```

## Explicacion final

La solucion funciona porque convierte el problema de busqueda en una comparacion numerica de prioridades: cada estado tiene un peso fijo y `reduce` recorre el arreglo una sola vez para quedarse con el estado de mayor peso, sin necesidad de condicionales anidados. Los casos borde (lista vacia y estados invalidos) se filtran antes de aplicar la busqueda, por lo que la funcion nunca falla por datos incompletos o inesperados.
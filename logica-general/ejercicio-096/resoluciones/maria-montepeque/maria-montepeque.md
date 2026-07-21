# Ejercicio 096 - Logica general

## Analisis

- Entrada: un arreglo de items, cada uno con un estado (`aprobado`, `pendiente` o `bloqueado`).
- Proceso: se identifica el item con el estado de mayor prioridad segun la regla de negocio.
- Salida: un objeto con la accion a tomar y el motivo de esa accion.

## Reglas identificadas

1. Los estados bloqueados tienen la prioridad mas alta porque representan un riesgo.
2. Los estados pendientes tienen prioridad media porque aun no se han resuelto.
3. Los estados aprobados tienen la prioridad mas baja porque ya cumplieron su proceso.
4. Si el arreglo esta vacio o no contiene estados reconocidos, se informa explicitamente en vez de fallar.

## Pruebas

### Caso normal

Entrada:

```text
["aprobado", "pendiente", "bloqueado"]
```

Resultado esperado:

```text
{ accion: "revisar bloqueado", motivo: "la regla prioriza riesgos antes de tareas normales." }
```

### Caso borde

Entrada:

```text
[]
```

Resultado esperado:

```text
{ accion: "sin items", motivo: "no hay elementos para evaluar." }
```

## Explicacion final

La solucion mapea cada estado a un valor numerico de prioridad y usa un solo `reduce` para encontrar el estado mas urgente, evitando condicionales anidados. Las acciones y motivos se guardan en objetos separados de la logica de decision, lo que facilita mantener o ampliar el mapeo sin tocar el algoritmo. Se valida explicitamente el arreglo vacio y los estados no reconocidos para evitar resultados indefinidos.

## Como ejecutar

```bash
node maria-montepeque.js
```
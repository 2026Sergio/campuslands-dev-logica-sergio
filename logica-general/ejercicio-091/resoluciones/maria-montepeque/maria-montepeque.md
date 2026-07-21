# Ejercicio 091 - organizacion de listas (kickboxing)

## Analisis

- Entrada: un arreglo de items con su estado (`aprobado`, `pendiente`, `bloqueado`).
- Proceso: se identifica el item con el estado mas urgente segun una tabla de prioridades numericas.
- Salida: un objeto con la `accion` a tomar y el `motivo` que la justifica.

## Reglas identificadas

1. Los items en estado `bloqueado` se revisan primero, porque representan un riesgo.
2. Si no hay bloqueados, se revisan los `pendiente` antes que los `aprobado`.
3. Si no hay items o ninguno tiene un estado reconocido, se informa explicitamente en vez de fallar.

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
{ accion: "sin items", motivo: "no se recibieron items para evaluar." }
```

### Caso adicional

Entrada:

```text
["aprobado", "pendiente"]
```

Resultado esperado:

```text
{ accion: "revisar pendiente", motivo: "no hay bloqueados, se atiende lo pendiente antes que lo aprobado." }
```

## Explicacion final

La solucion usa un objeto `PRIORIDADES` que asigna un numero a cada estado, siendo menor numero mayor urgencia. Con un unico `reduce` se recorre el arreglo y se conserva el item con la prioridad mas baja encontrada hasta el momento. La logica de decision queda separada de los textos de `accion` y `motivo`, que viven en objetos aparte (`ACCIONES` y `MOTIVOS`). Esto evita condicionales anidados y hace sencillo agregar nuevos estados en el futuro.

## Como ejecutar

```bash
node maria-montepeque.js
```
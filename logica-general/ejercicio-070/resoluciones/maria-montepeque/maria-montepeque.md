# Ejercicio 070 - Logica general: lectura de instrucciones

## Analisis

- Entrada: un arreglo `items` con estados (`aprobado`, `pendiente`, `bloqueado`).
- Proceso: se identifica el estado mas urgente segun una tabla de prioridades, donde `bloqueado` representa el mayor riesgo.
- Salida: un objeto con `accion` (que estado revisar) y `motivo` (por que se revisa ese estado primero).

## Reglas identificadas

1. Los estados bloqueados se revisan antes que cualquier otro, porque representan un riesgo.
2. Si no hay bloqueados, se revisan los pendientes antes que los aprobados.
3. Si no hay bloqueados ni pendientes, se revisan los aprobados por control.
4. Los valores no reconocidos dentro de `items` se ignoran y no afectan el resultado.
5. Si `items` esta vacio o no contiene estados validos, se informa que no hay nada que revisar.

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
accion: sin items validos para revisar
motivo: la lista esta vacia o no contiene estados reconocidos.
```

### Caso adicional: valores no reconocidos

Entrada:

```text
items: ["aprobado", "desconocido", "pendiente"]
```

Resultado esperado:

```text
accion: revisar pendiente
motivo: no hay bloqueados, se atiende lo pendiente antes de lo aprobado.
```

## Explicacion final

La solucion usa un mapa de prioridades numericas (`PRIORIDADES`) en lugar de condicionales encadenados, y un `reduce` filtrando primero los valores validos para encontrar el estado mas urgente en una sola pasada. Las acciones y los motivos estan separados en objetos independientes (`ACCIONES`, `MOTIVOS`) para mantener la logica de decision desacoplada del texto que se muestra. Se manejan explicitamente los casos borde de lista vacia y valores no reconocidos.

## Como ejecutar

```bash
node maria-montepeque.js
```
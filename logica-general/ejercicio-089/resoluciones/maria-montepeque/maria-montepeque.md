# Ejercicio 089 - Simulacion de estados

## Analisis

- Entrada: un arreglo de items con estados (`aprobado`, `pendiente`, `bloqueado`).
- Proceso: se identifica el estado mas urgente segun una prioridad numerica y se determina la accion y el motivo correspondiente.
- Salida: un objeto con `accion` y `motivo`.

## Reglas identificadas

1. `bloqueado` tiene la mayor prioridad (riesgo), seguido de `pendiente`, y por ultimo `aprobado`.
2. La accion y el motivo se generan a partir del estado mas urgente encontrado en el arreglo.
3. Si el arreglo esta vacio o contiene estados no reconocidos, se maneja como caso borde sin lanzar errores.

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
{ accion: "sin datos", motivo: "no se recibieron items para evaluar." }
```

Entrada adicional:

```text
["aprobado", "cancelado"]
```

Resultado esperado:

```text
{ accion: "revisar aprobado", motivo: "los items aprobados no requieren atencion inmediata." }
```

(El estado `cancelado` se ignora por no estar en la tabla de prioridades; el reduce conserva el ultimo estado valido mas urgente.)

## Explicacion final

La solucion separa la logica de decision (mapeo de prioridades) de la logica de presentacion (acciones y motivos), evitando condicionales anidados. Un unico `reduce` recorre el arreglo y determina el estado mas urgente comparando prioridades numericas, lo que hace la solucion facil de extender si se agregan nuevos estados.

## Como ejecutar

```bash
node maria-montepeque.js
```
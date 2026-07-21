# Resolución Ejercicio 034 - Lógica General

## Análisis del Problema

El problema consiste en determinar la acción correcta a seguir antes de un salto en paracaídas, basándose en dos factores: el estado del equipo y el nivel de experiencia del saltador. El objetivo es crear una función que encapsule la lógica de decisión para garantizar la seguridad y seguir los protocolos establecidos.

## Reglas Aplicadas

Para resolver el problema, implementé la siguiente lógica condicional:

1.  **Prioridad Máxima (Seguridad):** Si el `estadoEquipo` es `"bloqueado"`, la decisión es siempre `"no saltar"`. Esta regla tiene la máxima prioridad y anula cualquier otra condición, como la experiencia del saltador.

2.  **Condición Intermedia (Precaución):** Si el `estadoEquipo` es `"pendiente"`, la decisión depende de la `experienciaSaltador`:
    *   Si el saltador es `"experto"`, se le permite `"proceder con precaución"`, asumiendo que tiene el criterio para evaluar el riesgo.
    *   Para cualquier otro nivel de experiencia, la acción es `"revisar equipo"`, ya que no se puede garantizar la seguridad.

3.  **Condición Estándar (Normalidad):** Si el `estadoEquipo` es `"aprobado"`, la acción es `"proceder con el salto"`, ya que las condiciones son seguras.

4.  **Validación de Entradas:** Se incluyó una verificación inicial para asegurar que ambas entradas (`estadoEquipo` y `experienciaSaltador`) no sean nulas o vacías.

## Cómo Ejecutar la Solución

El código está en el archivo `evelyn-barrios.js` y se puede ejecutar directamente con Node.js:

```bash
node evelyn-barrios.js
```

La función principal `decidirAccionSalto(estadoEquipo, experienciaSaltador)` recibe los dos parámetros y devuelve un objeto con la acción y el motivo.

## Casos de Prueba

- **Prueba Normal:** `decidirAccionSalto("aprobado", "novato")` -> Devuelve `{ accion: 'proceder con el salto', ... }`.
- **Prueba de Caso Borde 1:** `decidirAccionSalto("pendiente", "experto")` -> Devuelve `{ accion: 'proceder con precaución', ... }`.
- **Prueba de Caso Borde 2:** `decidirAccionSalto("bloqueado", "experto")` -> Devuelve `{ accion: 'no saltar', ... }`, demostrando la prioridad de la regla de bloqueo.
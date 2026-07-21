# Ejercicio 092 - Comparacion de opciones

## Analisis

- Entrada: un arreglo `items` con estados de tareas (`bloqueado`, `pendiente`, `aprobado`).
- Proceso: se identifica el estado con mayor prioridad segun el riesgo que representa.
- Salida: un objeto con `accion` (que estado revisar) y `motivo` (por que se eligio ese estado).

## Reglas identificadas

1. Los items bloqueados se revisan primero, sin importar cuantos items normales existan.
2. Si no hay bloqueados, se revisan los pendientes.
3. Si no hay bloqueados ni pendientes, se revisan los aprobados.
4. Los estados no reconocidos se ignoran al evaluar la prioridad.

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

## Explicacion final

La solucion usa un objeto `PRIORIDADES` que asigna un valor numerico a cada estado segun su nivel de riesgo. Con un unico `reduce` se recorre el arreglo de items validos y se determina el estado mas urgente, evitando condicionales anidados. Los mensajes de accion y motivo se mantienen separados de la logica de decision en el objeto `MOTIVOS`, lo que facilita mantener o extender las reglas sin tocar el calculo de prioridad. Se valida el caso de arreglo vacio y el caso en que ningun item tenga un estado reconocido.

## Nota sobre el README del ejercicio

El README del ejercicio no define un tema propio con datos especificos; incluye el mismo ejemplo generico de la plantilla base (estados `aprobado`, `pendiente`, `bloqueado`). Se tomo ese ejemplo como especificacion literal de entrada y salida.
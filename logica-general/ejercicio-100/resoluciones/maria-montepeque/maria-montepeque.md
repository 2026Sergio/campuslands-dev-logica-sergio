# Ejercicio 100 - Estrategias de seleccion

## Analisis

- Entrada: un arreglo `items` con estados (`bloqueado`, `pendiente`, `aprobado`).
- Proceso: se identifica el estado con mayor prioridad segun el riesgo que representa.
- Salida: un objeto con `accion` (que hacer) y `motivo` (por que se elige esa accion).

## Reglas identificadas

1. Los estados `bloqueado` tienen la prioridad mas alta porque representan un riesgo.
2. Los estados `pendiente` tienen prioridad media, ya que son tareas en curso.
3. Los estados `aprobado` tienen la prioridad mas baja, pues no requieren atencion urgente.
4. Si el arreglo esta vacio o no contiene estados reconocidos, no se ejecuta ninguna accion.

## Pruebas

### Caso normal

Entrada:

```text
["aprobado", "pendiente", "bloqueado"]
```

Resultado esperado:

```text
accion: revisar bloqueado
motivo: la regla prioriza riesgos antes de tareas normales.
```

### Caso borde

Entrada:

```text
[]
```

Resultado esperado:

```text
accion: sin accion
motivo: no hay items para evaluar.
```

Entrada adicional (estados no reconocidos):

```text
["desconocido", "otro"]
```

Resultado esperado:

```text
accion: sin accion
motivo: ningun item corresponde a un estado reconocido.
```

## Explicacion final

La solucion usa un objeto `PRIORIDADES` para mapear cada estado a un valor numerico, evitando condicionales anidados. Con `reduce` se recorre el arreglo una sola vez para encontrar el estado mas urgente. Los objetos `ACCIONES` y `MOTIVOS` separan la logica de decision del texto que se muestra al usuario, y se filtran previamente los estados no reconocidos para manejar casos borde sin romper la ejecucion.

## Como ejecutar

```bash
node maria-montepeque.js
```
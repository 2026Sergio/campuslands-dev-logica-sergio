# Ejercicio 065 - Ordenamiento de prioridades

## Analisis

- Entrada: un arreglo de strings con estados (`bloqueado`, `pendiente`, `aprobado`).
- Proceso: se asigna un valor numerico de prioridad a cada estado y se recorre el arreglo una sola vez con `reduce` para encontrar el estado de mayor prioridad.
- Salida: un objeto con `accion` (que estado revisar) y `motivo` (por que se eligio ese estado).

## Reglas identificadas

1. `bloqueado` tiene la prioridad mas alta porque representa un riesgo que debe atenderse primero.
2. `pendiente` tiene prioridad media: se atiende si no hay bloqueos.
3. `aprobado` tiene la prioridad mas baja: solo se revisa si no hay bloqueados ni pendientes.
4. Un arreglo vacio no tiene estado que revisar, por lo que se retorna `sin_datos`.
5. Un estado no reconocido recibe prioridad minima (0) y solo se elige si no hay otros estados validos.

## Pruebas

### Caso normal

Entrada:

```js
["aprobado", "pendiente", "bloqueado"]
```

Resultado esperado:

```js
{ accion: "revisar bloqueado", motivo: "la regla prioriza riesgos antes de tareas normales." }
```

### Caso borde

Entrada:

```js
[]
```

Resultado esperado:

```js
{ accion: "sin_datos", motivo: "no hay elementos para evaluar." }
```

### Caso adicional

Entrada:

```js
["pendiente", "aprobado"]
```

Resultado esperado:

```js
{ accion: "revisar pendiente", motivo: "no hay bloqueos, se atiende lo pendiente antes que lo aprobado." }
```

## Explicacion final

La solucion usa una tabla de prioridades (objeto `PRIORIDADES`) en lugar de condicionales encadenados, lo que permite comparar estados en una sola pasada con `reduce`. Esto hace que agregar un nuevo estado en el futuro solo requiera actualizar la tabla, sin tocar la logica de comparacion. El caso de arreglo vacio se valida antes de ejecutar `reduce` para evitar errores, y los estados no reconocidos reciben prioridad 0 para no interferir con estados validos.
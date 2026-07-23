# Ejercicio 084 - Filtros por condiciones (inventario de motos)

## Analisis

- Entrada: un arreglo de items con su estado (`aprobado`, `pendiente`, `bloqueado`).
- Proceso: se identifica el estado con mayor prioridad presente en el arreglo.
- Salida: un objeto con `accion` y `motivo` segun el estado mas prioritario encontrado.

## Nota sobre el README del ejercicio

El README original no define explicitamente los estados posibles ni una tabla de prioridades; solo incluye un ejemplo de entrada y salida. Se tomo ese ejemplo como especificacion autoritativa: los estados validos son `aprobado`, `pendiente` y `bloqueado`, con `bloqueado` como el de mayor prioridad.

## Reglas identificadas

1. `bloqueado` tiene la prioridad mas alta (riesgo).
2. `pendiente` tiene prioridad media si no hay bloqueados.
3. `aprobado` tiene la prioridad mas baja, se revisa solo si no hay otros estados.
4. Si el arreglo esta vacio o no tiene estados validos, no hay accion.

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
{ accion: "sin accion", motivo: "no se encontraron items validos para evaluar." }
```

## Explicacion final

La solucion usa un objeto de prioridades numericas y un unico `reduce` para encontrar el estado mas urgente, evitando condicionales anidados. Las acciones y motivos estan separados en objetos independientes para mantener la logica de decision desacoplada del texto que se muestra al usuario. Se valida tanto el arreglo vacio como valores de estado no reconocidos.
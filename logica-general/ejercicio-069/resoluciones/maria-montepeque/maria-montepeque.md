# Ejercicio 069 - Logica general: simulacion de estados

## Analisis

- Entrada: una lista de items con un estado (`aprobado`, `pendiente`, `bloqueado`).
- Proceso: se identifica el estado con mayor prioridad segun la regla "revisar bloqueados primero".
- Salida: un objeto con la accion a realizar y el motivo de esa decision.

## Reglas identificadas

1. Los estados `bloqueado` tienen la maxima prioridad porque representan un riesgo.
2. Si no hay bloqueados, los `pendiente` tienen prioridad sobre los `aprobado`.
3. Si no hay items o ningun estado es reconocido, no se genera una accion valida.

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

Entrada adicional:

```text
items: ["desconocido", "invalido"]
```

Resultado esperado:

```text
accion: sin accion
motivo: ningun estado reconocido en la lista.
```

## Explicacion final

La solucion evita condicionales encadenados usando un objeto `PRIORIDADES` que asigna un numero a cada estado, donde el numero mas bajo representa la mayor urgencia. Con un unico `reduce` se recorre la lista de items y se conserva el estado mas urgente encontrado. Las acciones y motivos se guardan en objetos separados (`ACCIONES` y `MOTIVOS`), lo que mantiene la logica de decision independiente del texto que se muestra al usuario. Se valida que la lista no este vacia y que existan estados reconocidos antes de calcular el resultado, evitando errores con datos invalidos.

## Como ejecutar

```bash
node maria-montepeque.js
```
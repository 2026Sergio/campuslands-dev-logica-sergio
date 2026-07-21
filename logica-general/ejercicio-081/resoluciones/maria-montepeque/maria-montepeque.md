# Ejercicio 081 - Clasificacion por reglas

## Analisis

- Entrada: una lista de items, cada uno con un estado (`aprobado`, `pendiente` o `bloqueado`).
- Proceso: se identifica el item con mayor prioridad segun su estado, priorizando los riesgos antes que las tareas normales.
- Salida: un objeto con la accion a tomar y el motivo de esa decision.

## Reglas identificadas

1. Un item `bloqueado` tiene la prioridad mas alta, porque representa un riesgo.
2. Si no hay bloqueados, se prioriza un item `pendiente`.
3. Si todos los items estan `aprobado`, se revisa el aprobado.
4. Si la lista esta vacia, no hay nada que revisar.
5. Si algun item trae un estado que no es `aprobado`, `pendiente` ni `bloqueado`, se reporta como estado no reconocido.

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

### Caso borde (lista vacia)

Entrada:

```text
[]
```

Resultado esperado:

```text
{ accion: "sin items para revisar", motivo: "la lista de items esta vacia o no es valida." }
```

### Caso borde (estado no reconocido)

Entrada:

```text
["aprobado", "desconocido"]
```

Resultado esperado:

```text
{ accion: "estado no reconocido", motivo: 'el valor "desconocido" no coincide con ningun estado valido.' }
```

## Explicacion final

La solucion mapea cada estado a un nivel de prioridad numerico mediante el objeto `PRIORIDADES`, evitando condicionales anidados. Primero se valida que todos los estados sean reconocidos con `find`, y luego se usa un unico `reduce` para encontrar el item mas urgente. Las acciones y motivos se mantienen en objetos separados (`ACCIONES`, `MOTIVOS`) para desacoplar la logica de decision del texto que se muestra al usuario.

## Como ejecutar

```bash
node maria-montepeque.js
```

## Casos probados

- Caso normal con los tres estados presentes (coincide con el ejemplo del README del ejercicio).
- Caso borde con lista vacia.
- Caso borde con un estado no valido dentro de la lista.
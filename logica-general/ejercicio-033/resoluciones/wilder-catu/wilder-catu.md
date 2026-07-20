# Resolución de Casos - Paracaidismo

## Descripción

Este programa analiza una lista de participantes inscritos en una actividad de paracaidismo. Para cada persona se aplican una serie de reglas con el fin de determinar si puede realizar el salto.

---

# Objetivo

Evaluar cada participante y generar un reporte indicando si está aprobado o cuál es el motivo por el que no puede participar.

---

# Entradas

El programa utiliza un arreglo llamado:

```javascript
const participantes = [];
```

Cada participante contiene la siguiente información:

- nombre
- edad
- peso
- certificadoMedico

Ejemplo:

```javascript
{
    nombre: "Carlos Pérez",
    edad: 25,
    peso: 78,
    certificadoMedico: true
}
```

---

# Salidas

El programa genera un reporte con:

- Nombre del participante.
- Resultado de la evaluación.

---

# Casos evaluados

## Caso 1: Menor de edad

Si la edad es menor a 18 años:

```javascript
if (participante.edad < 18)
```

Resultado:

```text
No puede participar: menor de edad.
```

---

## Caso 2: Exceso de peso

Si el peso supera los 100 kg:

```javascript
else if (participante.peso > 100)
```

Resultado:

```text
No puede participar: supera el peso permitido.
```

---

## Caso 3: Sin certificado médico

Si no presenta certificado médico:

```javascript
else if (!participante.certificadoMedico)
```

Resultado:

```text
No puede participar: falta certificado médico.
```

---

## Caso 4: Participante aprobado

Si cumple todos los requisitos:

```javascript
else
```

Resultado:

```text
Aprobado para realizar el salto.
```

---

# Funciones

## evaluarParticipantes()

Esta función:

1. Recorre la lista de participantes.
2. Evalúa cada caso según las reglas.
3. Guarda el resultado en un nuevo arreglo.
4. Devuelve el reporte final.

---

## mostrarReporte()

Muestra los resultados en la consola de forma clara y organizada.

---

# Resultado esperado

```text
====================================
REPORTE DE PARACAIDISMO
====================================

Participante: Carlos Pérez
Resultado: Aprobado para realizar el salto.

--------------------------------

Participante: Ana López
Resultado: No puede participar: menor de edad.

--------------------------------

Participante: Luis Gómez
Resultado: No puede participar: supera el peso permitido.

--------------------------------

Participante: María Rodríguez
Resultado: No puede participar: falta certificado médico.

--------------------------------

Participante: José Martínez
Resultado: Aprobado para realizar el salto.

--------------------------------
```

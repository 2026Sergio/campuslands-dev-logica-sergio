# Tablas de Decisiones - Arquitectura 3D

## Descripción

Este programa evalúa una lista de proyectos de arquitectura 3D mediante una **tabla de decisiones**. Dependiendo de diferentes condiciones, el sistema determina si un proyecto es aprobado, queda pendiente o debe ser revisado.

---

# Objetivo

Aplicar reglas de decisión para clasificar proyectos de arquitectura 3D según su estado.

---

# Entradas

El programa utiliza un arreglo llamado:

```javascript
const proyectos = [];
```

Cada proyecto contiene:

- nombre
- renderCompleto
- presupuestoAprobado
- clienteConfirmado

Ejemplo:

```javascript
{
    nombre: "Casa Moderna",
    renderCompleto: true,
    presupuestoAprobado: true,
    clienteConfirmado: true
}
```

---

# Salidas

El programa genera un reporte indicando:

- Nombre del proyecto.
- Resultado de la evaluación.

---

# Tabla de decisiones

| Render completo | Presupuesto aprobado | Cliente confirmado | Resultado |
|-----------------|----------------------|--------------------|-----------|
| Sí | Sí | Sí | Proyecto aprobado |
| Sí | Sí | No | Pendiente de confirmación del cliente |
| Sí | No | Sí o No | Pendiente de aprobación del presupuesto |
| No | Cualquier valor | Cualquier valor | Proyecto rechazado o requiere revisión |

---

# Reglas implementadas

## Regla 1

Si el render está completo, el presupuesto está aprobado y el cliente confirmó:

```javascript
if (
    proyecto.renderCompleto &&
    proyecto.presupuestoAprobado &&
    proyecto.clienteConfirmado
)
```

Resultado:

```text
Proyecto aprobado.
```

---

## Regla 2

Si falta la confirmación del cliente:

```javascript
else if (
    proyecto.renderCompleto &&
    proyecto.presupuestoAprobado &&
    !proyecto.clienteConfirmado
)
```

Resultado:

```text
Pendiente de confirmación del cliente.
```

---

## Regla 3

Si el presupuesto no ha sido aprobado:

```javascript
else if (
    proyecto.renderCompleto &&
    !proyecto.presupuestoAprobado
)
```

Resultado:

```text
Pendiente de aprobación del presupuesto.
```

---

## Regla 4

En cualquier otro caso:

```javascript
else
```

Resultado:

```text
Proyecto rechazado o requiere revisión.
```

---

# Funciones

## evaluarProyectos()

Esta función:

1. Recorre todos los proyectos.
2. Aplica la tabla de decisiones.
3. Guarda el resultado de cada evaluación.
4. Devuelve un reporte con las decisiones.

---

## mostrarReporte()

Presenta el reporte en la consola de forma clara y organizada.


# Resultado esperado

```text
======================================
TABLA DE DECISIONES
ARQUITECTURA 3D
======================================

Proyecto: Casa Moderna
Resultado: Proyecto aprobado.

----------------------------------

Proyecto: Edificio Central
Resultado: Pendiente de aprobación del presupuesto.

----------------------------------

Proyecto: Centro Comercial
Resultado: Proyecto rechazado o requiere revisión.

----------------------------------

Proyecto: Hotel Vista
Resultado: Pendiente de confirmación del cliente.

----------------------------------

Proyecto: Condominios Norte
Resultado: Proyecto rechazado o requiere revisión.

----------------------------------
```

# Sistema de Turnos - Soldadura

## Descripción

Este programa administra los turnos de trabajo de un taller de soldadura. Analiza la disponibilidad y la experiencia de cada soldador para determinar si puede ser asignado a un turno, si necesita supervisión o si no está disponible.

---

# Objetivo

Evaluar a cada soldador y generar un reporte con su estado dentro del sistema de turnos.

---

# Entradas

El programa utiliza un arreglo llamado:

```javascript
const soldadores = [];
```

Cada soldador contiene:

- nombre
- turno
- disponible
- experiencia

Ejemplo:

```javascript
{
    nombre: "Carlos Pérez",
    turno: "Mañana",
    disponible: true,
    experiencia: 6
}
```

---

# Salidas

El programa muestra un reporte con:

- Nombre del soldador.
- Turno asignado.
- Estado de la evaluación.

---

# Reglas

## Regla 1

Si el soldador está disponible y tiene **5 años o más de experiencia**:

```javascript
if (soldador.disponible && soldador.experiencia >= 5)
```

Resultado:

```text
Asignado al turno.
```

---

## Regla 2

Si está disponible pero tiene **menos de 5 años de experiencia**:

```javascript
else if (soldador.disponible && soldador.experiencia < 5)
```

Resultado:

```text
Disponible, requiere supervisión.
```

---

## Regla 3

Si no está disponible:

```javascript
else
```

Resultado:

```text
No disponible para asignación.
```

---

# Funciones

## evaluarTurnos()

Esta función:

1. Recorre la lista de soldadores.
2. Aplica las reglas de asignación.
3. Guarda el resultado de cada evaluación.
4. Devuelve un reporte con la información procesada.

---

## mostrarReporte()

Imprime en la consola el reporte de todos los soldadores de forma organizada.


# Resultado esperado

```text
====================================
SISTEMA DE TURNOS
TALLER DE SOLDADURA
====================================

Soldador: Carlos Pérez
Turno: Mañana
Estado: Asignado al turno.

--------------------------------

Soldador: Ana López
Turno: Tarde
Estado: No disponible para asignación.

--------------------------------

Soldador: Luis Gómez
Turno: Noche
Estado: Disponible, requiere supervisión.

--------------------------------

Soldador: María Rodríguez
Turno: Mañana
Estado: Asignado al turno.

--------------------------------

Soldador: José Martínez
Turno: Tarde
Estado: No disponible para asignación.

--------------------------------
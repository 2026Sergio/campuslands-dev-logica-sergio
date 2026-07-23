# Organización de Listas - Kickboxing

## Descripción

Este programa organiza una lista de competidores de kickboxing según diferentes criterios. Se clasifican los deportistas en activos e inactivos y se identifican aquellos con un alto número de victorias.

---

# Objetivo

Procesar una lista de competidores para:

- Separar competidores activos e inactivos.
- Identificar los competidores destacados.
- Mostrar un reporte organizado.

---

# Entradas

El programa utiliza un arreglo llamado:

```javascript
const competidores = [];
```

Cada competidor contiene:

- nombre
- categoria
- victorias
- derrotas
- activo

Ejemplo:

```javascript
{
    nombre: "Carlos Méndez",
    categoria: "Peso Ligero",
    victorias: 18,
    derrotas: 3,
    activo: true
}
```

---

# Salidas

El programa genera un reporte con:

- Lista de competidores activos.
- Lista de competidores inactivos.
- Lista de competidores destacados.

---

# Reglas

## Regla 1

Si el competidor está activo:

```javascript
if (competidor.activo)
```

Se agrega al arreglo de activos.

---

## Regla 2

Si el competidor no está activo:

```javascript
else
```

Se agrega al arreglo de inactivos.

---

## Regla 3

Si tiene **15 o más victorias**:

```javascript
if (competidor.victorias >= 15)
```

Se considera un competidor destacado.

---

# Funciones

## organizarCompetidores()

Esta función:

1. Recorre el arreglo de competidores.
2. Clasifica cada competidor como activo o inactivo.
3. Identifica los competidores destacados.
4. Devuelve un objeto con los resultados.

---

## mostrarReporte()

Presenta la información organizada en la consola.

---

# Resultado esperado

```text
==================================
ORGANIZACIÓN DE COMPETIDORES
==================================

Competidores activos:
- Carlos Méndez | Peso Ligero
- Ana López | Peso Pluma
- José Pérez | Peso Pesado

Competidores inactivos:
- Luis Ramírez | Peso Medio
- María González | Peso Mosca

Competidores destacados:
- Carlos Méndez
- Ana López
- José Pérez
```
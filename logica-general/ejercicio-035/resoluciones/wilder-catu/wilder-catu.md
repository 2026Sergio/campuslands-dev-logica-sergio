# Reglas de Negocio - Dibujo Digital

## Descripción

Este programa evalúa una lista de proyectos de dibujo digital aplicando reglas de negocio para decidir si cada proyecto puede ser aprobado para su publicación.

---

# Objetivo

Analizar cada proyecto y determinar si cumple con las condiciones necesarias para ser publicado.

---

# Entradas

El programa utiliza un arreglo llamado:

```javascript
const proyectos = [];
```

Cada proyecto contiene la siguiente información:

- autor
- titulo
- resolucion
- formato
- publicado

Ejemplo:

```javascript
{
    autor: "Laura Gómez",
    titulo: "Paisaje Fantástico",
    resolucion: 4000,
    formato: "PNG",
    publicado: false
}
```

---

# Salidas

El programa genera un reporte indicando:

- Título del proyecto.
- Autor.
- Resultado de la evaluación.

---

# Reglas de negocio

## Regla 1

El proyecto no debe estar publicado.

```javascript
if (proyecto.publicado)
```

Resultado:

```text
Rechazado: el proyecto ya fue publicado.
```

---

## Regla 2

La resolución mínima permitida es de **3000 píxeles**.

```javascript
else if (proyecto.resolucion < 3000)
```

Resultado:

```text
Rechazado: resolución insuficiente.
```

---

## Regla 3

Solo se aceptan los formatos **PNG** y **PSD**.

```javascript
else if (
    proyecto.formato !== "PNG" &&
    proyecto.formato !== "PSD"
)
```

Resultado:

```text
Rechazado: formato no permitido.
```

---

## Regla 4

Si el proyecto cumple todas las reglas anteriores:

```javascript
else
```

Resultado:

```text
Proyecto aprobado para publicación.
```

---

# Funciones

## validarProyectos()

Esta función:

1. Recorre la lista de proyectos.
2. Aplica las reglas de negocio.
3. Guarda el resultado de cada evaluación.
4. Devuelve un reporte con los resultados.

---

## mostrarReporte()

Presenta el reporte final en la consola de forma organizada.

# Resultado esperado

```text
====================================
REPORTE DE DIBUJO DIGITAL
====================================

Proyecto: Paisaje Fantástico
Autor: Laura Gómez
Resultado: Proyecto aprobado para publicación.

--------------------------------

Proyecto: Robot Futurista
Autor: Carlos Pérez
Resultado: Rechazado: resolución insuficiente.

--------------------------------

Proyecto: Retrato Anime
Autor: Ana López
Resultado: Proyecto aprobado para publicación.

--------------------------------

Proyecto: Ciudad Cyberpunk
Autor: Luis Martínez
Resultado: Rechazado: el proyecto ya fue publicado.

--------------------------------
```
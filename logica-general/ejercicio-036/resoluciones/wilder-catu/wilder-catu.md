# Matrices Simples - Animación 3D

## Descripción

Este programa analiza una matriz que representa el estado de una granja de renderizado (Render Farm) utilizada en proyectos de animación 3D.

Cada posición de la matriz representa un equipo de procesamiento.

- **L** = Libre.
- **O** = Ocupado.

El programa recorre toda la matriz para contar cuántos equipos están libres y cuántos están ocupados.

---

# Objetivo

Procesar una matriz de estados para generar un reporte sobre la disponibilidad de los equipos de renderizado.

---

# Entradas

El programa utiliza una matriz bidimensional llamada:

```javascript
const renderFarm = [
    ["O", "L", "O"],
    ["L", "L", "O"],
    ["O", "O", "L"]
];
```

Cada elemento representa el estado de un equipo.

---

# Salidas

El programa muestra:

- Cantidad de equipos libres.
- Cantidad de equipos ocupados.

---

# Reglas

## Regla 1

Recorrer cada fila de la matriz.

```javascript
for (let fila = 0; fila < matriz.length; fila++)
```

---

## Regla 2

Recorrer cada columna de la fila actual.

```javascript
for (let columna = 0; columna < matriz[fila].length; columna++)
```

---

## Regla 3

Si el valor es **"L"**, aumentar el contador de equipos libres.

```javascript
if (matriz[fila][columna] === "L")
```

---

## Regla 4

Si el valor es **"O"**, aumentar el contador de equipos ocupados.

```javascript
else
```

---

# Funciones

## analizarRenderFarm()

Esta función:

1. Recorre toda la matriz.
2. Cuenta los equipos libres.
3. Cuenta los equipos ocupados.
4. Devuelve un objeto con los resultados.

---

## mostrarReporte()

Muestra en la consola el reporte con la información obtenida.

# Resultado esperado

```text
===================================
REPORTE DE RENDER FARM
ANIMACIÓN 3D
===================================

Equipos libres: 4
Equipos ocupados: 5
```
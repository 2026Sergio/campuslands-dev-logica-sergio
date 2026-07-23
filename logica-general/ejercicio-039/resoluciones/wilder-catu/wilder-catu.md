# Inventarios Lógicos - Fórmulas Químicas

## Descripción

Este programa administra un inventario de sustancias químicas utilizadas en un laboratorio. Para cada sustancia se verifica su disponibilidad y cantidad para determinar si puede utilizarse en experimentos.

---

# Objetivo

Evaluar el inventario de sustancias químicas aplicando reglas que permitan conocer el estado de cada una.

---

# Entradas

El programa utiliza un arreglo llamado:

```javascript
const sustancias = [];
```

Cada elemento contiene:

- nombre
- formula
- cantidad
- estado

Ejemplo:

```javascript
{
    nombre: "Agua Destilada",
    formula: "H2O",
    cantidad: 25,
    estado: "Disponible"
}
```

---

# Salidas

El programa genera un reporte indicando:

- Nombre de la sustancia.
- Fórmula química.
- Estado del inventario.

---

# Reglas

## Regla 1

Si la sustancia no está disponible:

```javascript
if (sustancia.estado !== "Disponible")
```

Resultado:

```text
No disponible para uso.
```

---

## Regla 2

Si la cantidad es menor o igual a cero:

```javascript
else if (sustancia.cantidad <= 0)
```

Resultado:

```text
Sin existencias.
```

---

## Regla 3

Si la cantidad es menor a 10 unidades:

```javascript
else if (sustancia.cantidad < 10)
```

Resultado:

```text
Stock bajo.
```

---

## Regla 4

Si cumple todas las condiciones:

```javascript
else
```

Resultado:

```text
Disponible para experimentos.
```

---

# Funciones

## evaluarInventario()

Esta función:

1. Recorre el inventario de sustancias.
2. Aplica las reglas de validación.
3. Guarda el resultado de cada sustancia.
4. Devuelve un reporte.

---

## mostrarReporte()

Muestra el reporte en la consola de forma clara y organizada.

---

# Resultado esperado

```text
====================================
INVENTARIO DE FÓRMULAS QUÍMICAS
====================================

Sustancia: Agua Destilada
Fórmula: H2O
Estado: Disponible para experimentos.

--------------------------------

Sustancia: Ácido Clorhídrico
Fórmula: HCl
Estado: Stock bajo.

--------------------------------

Sustancia: Hidróxido de Sodio
Fórmula: NaOH
Estado: Sin existencias.

--------------------------------

Sustancia: Etanol
Fórmula: C2H5OH
Estado: No disponible para uso.

--------------------------------

Sustancia: Sulfato de Cobre
Fórmula: CuSO4
Estado: Disponible para experimentos.

--------------------------------
```

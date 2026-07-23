# Lectura de Instrucciones - Viajes y Turismo

## Descripción

Este programa analiza una lista de destinos turísticos y determina cuáles cumplen con las condiciones establecidas por el cliente.

El objetivo del reto es leer correctamente las instrucciones, identificar las entradas, aplicar las reglas y generar un resultado verificable.

---

# Objetivo

Evaluar diferentes destinos turísticos teniendo en cuenta:

- El presupuesto disponible.
- La cantidad de cupos.
- La temporada preferida.

---

# Entradas

El programa recibe dos tipos de datos.

## 1. Lista de destinos

Cada destino contiene:

- lugar
- precio
- cupos
- temporada

Ejemplo:

```javascript
{
    lugar: "Antigua Guatemala",
    precio: 500,
    cupos: 8,
    temporada: "Alta"
}
```

## 2. Datos del cliente

```javascript
const presupuesto = 800;
const temporadaPreferida = "Alta";
```

---

# Reglas

El programa evalúa cada destino siguiendo este orden:

### Regla 1

Si no hay cupos disponibles:

```javascript
if (destino.cupos === 0)
```

Resultado:

```
No disponible (sin cupos).
```

---

### Regla 2

Si el precio supera el presupuesto:

```javascript
else if (destino.precio > presupuesto)
```

Resultado:

```
Fuera del presupuesto.
```

---

### Regla 3

Si la temporada no coincide con la preferida:

```javascript
else if (destino.temporada !== temporada)
```

Resultado:

```
No coincide con la temporada preferida.
```

---

### Regla 4

Si cumple todas las condiciones:

```javascript
else
```

Resultado:

```
Destino recomendado.
```

---

# Salidas

El programa genera un reporte indicando:

- Nombre del destino.
- Resultado de la evaluación.

---

# Funciones

## evaluarDestinos()

Se encarga de:

1. Recorrer la lista de destinos.
2. Aplicar las reglas.
3. Guardar el resultado de cada destino.
4. Retornar un reporte.

---

## mostrarReporte()

Imprime el reporte en la consola de forma organizada.

---

# Resultado esperado

```text
===================================
REPORTE DE VIAJES Y TURISMO
===================================

Destino: Antigua Guatemala
Resultado: Destino recomendado.

------------------------------

Destino: Lago de Atitlán
Resultado: No disponible (sin cupos).

------------------------------

Destino: Semuc Champey
Resultado: No coincide con la temporada preferida.

------------------------------

Destino: Tikal
Resultado: Fuera del presupuesto.

------------------------------
```

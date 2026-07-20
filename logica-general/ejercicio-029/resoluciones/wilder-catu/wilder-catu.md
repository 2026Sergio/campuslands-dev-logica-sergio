# Simulación de Estados - Películas de Miedo

## Descripción

Este programa simula el estado de una colección de películas de miedo. Para cada película se verifica si puede reproducirse según su estado y la edad del usuario.

---

# Objetivo

Analizar una lista de películas y determinar qué sucede con cada una según las reglas establecidas.

---

# Entradas

El programa utiliza un arreglo llamado:

```javascript
const peliculas = [];
```

Cada película contiene la siguiente información:

- titulo
- estado
- edadMinima

Además, se define la edad del usuario:

```javascript
const edadUsuario = 17;
```

---

# Salidas

El programa muestra un reporte con:

- Nombre de la película.
- Estado actual.
- Resultado de la simulación.

---

# Reglas de la simulación

## Estado: Disponible

Si la película está disponible:

- Se verifica si el usuario cumple la edad mínima.
- Si cumple, puede reproducirse.
- Si no cumple, se informa que no tiene la edad requerida.

---

## Estado: En reproducción

Si otra persona la está viendo:

- Se informa que la película ya está siendo reproducida.

---

## Estado: No disponible

Si la película no está disponible:

- Se informa que no puede reproducirse.

---

# Función principal

## simularEstados()

Esta función:

1. Recorre todas las películas.
2. Evalúa el estado de cada una.
3. Aplica las reglas correspondientes.
4. Guarda los resultados en un nuevo arreglo.
5. Retorna el reporte final.

---

# Función mostrarReporte()

Se encarga de imprimir toda la información en la consola de forma organizada.

---

# Resultado esperado

```text
==================================
SIMULACIÓN DE ESTADOS
PELÍCULAS DE MIEDO
==================================

Película: El Conjuro
Estado: Disponible
Resultado: Puede reproducirse.

------------------------------

Película: La Monja
Estado: En reproducción
Resultado: La película ya está siendo reproducida.

------------------------------

Película: IT
Estado: Disponible
Resultado: Puede reproducirse.

------------------------------

Película: Scream
Estado: No disponible
Resultado: La película no está disponible.

------------------------------

Película: Hereditary
Estado: Disponible
Resultado: No cumple la edad mínima.

------------------------------
```

# Flujos Paso a Paso - Películas de Ciencia Ficción

## Descripción

Este programa analiza una lista de películas de ciencia ficción siguiendo un flujo paso a paso. Durante el recorrido del arreglo se verifican condiciones, se acumulan datos y se generan resultados para el usuario.

---

# Objetivo

Procesar una lista de películas para:

- Identificar cuáles están disponibles.
- Recomendar películas con buena calificación.
- Calcular el tiempo total de una maratón.

---

# Entradas

El programa recibe un arreglo llamado:

```javascript
const peliculas = [];
```

Cada película contiene:

- titulo
- anio
- duracion
- calificacion
- disponible

Ejemplo:

```javascript
{
    titulo: "Interstellar",
    anio: 2014,
    duracion: 169,
    calificacion: 8.7,
    disponible: true
}
```

---

# Salidas

El programa muestra:

- Películas disponibles.
- Películas recomendadas.
- Tiempo total de duración.

---

# Flujo paso a paso

## Paso 1

Recorrer el arreglo utilizando un ciclo **for**.

```javascript
for (let i = 0; i < lista.length; i++)
```

---

## Paso 2

Verificar si la película está disponible.

```javascript
if (pelicula.disponible)
```

Solo las disponibles continúan en el proceso.

---

## Paso 3

Agregar la película al arreglo de disponibles.

```javascript
disponibles.push(pelicula);
```

---

## Paso 4

Sumar la duración utilizando un acumulador.

```javascript
tiempoTotal += pelicula.duracion;
```

---

## Paso 5

Comprobar si la película tiene una calificación mayor o igual a 8.

```javascript
if (pelicula.calificacion >= 8)
```

Si cumple la condición, se agrega al arreglo de recomendadas.

---

## Paso 6

Retornar toda la información.

```javascript
return {
    disponibles,
    recomendadas,
    tiempoTotal
}
```

---

## Paso 7

Mostrar el reporte utilizando la función:

```javascript
mostrarReporte(resultado);
```

---

# Funciones utilizadas

## analizarPeliculas()

Procesa toda la información.

Retorna:

- disponibles
- recomendadas
- tiempoTotal

---

## mostrarReporte()

Imprime el reporte en la consola.


---

# Complejidad

El algoritmo recorre el arreglo una sola vez.

Complejidad temporal:

O(n)

---

# Resultado esperado

```text
====================================
PELÍCULAS DE CIENCIA FICCIÓN
====================================

Películas disponibles:

Interstellar (2014) - 169 minutos
The Matrix (1999) - 136 minutos
Dune (2021) - 155 minutos
Gravity (2013) - 91 minutos

Películas recomendadas:

- Interstellar
- The Matrix
- Dune

Tiempo total para maratón:

551 minutos
```


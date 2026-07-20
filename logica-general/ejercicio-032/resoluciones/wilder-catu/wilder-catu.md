# Comparación de Opciones - Ping Pong

## Descripción

Este programa compara el rendimiento de varios jugadores de ping pong para determinar cuál tiene el mejor desempeño. La comparación se realiza utilizando reglas previamente definidas.

---

# Objetivo

Analizar una lista de jugadores y seleccionar al mejor según sus estadísticas.

---

# Entradas

El programa utiliza un arreglo llamado:

```javascript
const jugadores = [];
```

Cada jugador contiene:

- nombre
- victorias
- derrotas
- puntos

Ejemplo:

```javascript
{
    nombre: "Juan Pérez",
    victorias: 18,
    derrotas: 4,
    puntos: 540
}
```

---

# Salidas

El programa muestra:

- Nombre del mejor jugador.
- Cantidad de victorias.
- Cantidad de derrotas.
- Total de puntos.

---

# Reglas de comparación

## Regla 1

Se toma como referencia el primer jugador de la lista.

```javascript
let mejorJugador = lista[0];
```

---

## Regla 2

Se recorre el resto de los jugadores utilizando un ciclo `for`.

```javascript
for (let i = 1; i < lista.length; i++)
```

---

## Regla 3

Si un jugador tiene más victorias que el actual mejor jugador, pasa a ser el nuevo mejor.

```javascript
if (jugador.victorias > mejorJugador.victorias)
```

---

## Regla 4

Si ambos tienen la misma cantidad de victorias, se compara la cantidad de puntos.

```javascript
else if (
    jugador.victorias === mejorJugador.victorias &&
    jugador.puntos > mejorJugador.puntos
)
```

El jugador con más puntos será el mejor.

---

# Funciones

## compararJugadores()

Esta función:

1. Recorre la lista de jugadores.
2. Compara las estadísticas.
3. Actualiza el mejor jugador cuando corresponde.
4. Devuelve el jugador con mejor rendimiento.

---

## mostrarResultado()

Presenta en la consola la información del mejor jugador.

---

# Resultado esperado

```text
===================================
COMPARACIÓN DE JUGADORES
PING PONG
===================================

Mejor jugador encontrado:

Nombre: María López
Victorias: 22
Derrotas: 3
Puntos: 620
```
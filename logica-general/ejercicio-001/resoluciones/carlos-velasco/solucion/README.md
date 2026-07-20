# Plantilla de solución

## Analisis

* **Entrada**: Un objeto `jugador` que contiene `nombre` (string), `partidasGanadas` (number) y `partidasPerdidas` (number).
* **Proceso**: Cálculo del total de partidas para validación, seguido de una serie de condicionales jerárquicos que comparan las estadísticas contra umbrales específicos para asignar un rango.
* **Salida**: Un string que combina el nombre del jugador con su rango correspondiente.

## Reglas identificadas

1. Si el total de partidas (ganadas + perdidas) es exactamente 0, el jugador no tiene rango.
2. Para obtener rango "elite", el jugador debe tener 10 o más victorias Y menos de 2 derrotas.
3. Si el jugador tiene 5 o más victorias, se clasifica como "promedio" (siempre que no cumpla la regla elite).
4. Si ninguna de las anteriores se cumple, el rango por defecto es "principiante".

## Pruebas

### Caso normal

* **Entrada**: `{ nombre: "PlayerOne", partidasGanadas: 12, partidasPerdidas: 1 }`
* **Resultado esperado**: `"PlayerOne rango elite"`

### Caso borde

* **Entrada**: `{ nombre: "Newbie", partidasGanadas: 0, partidasPerdidas: 0 }`
* **Resultado esperado**: `"Newbie sin rango"`

## Explicacion final

La solución funciona mediante el uso de una **estructura de control jerárquica** (sentencias `if` en cascada). Al realizar las validaciones en un orden específico, garantizamos que el sistema clasifique correctamente incluso cuando un jugador cumple varias condiciones, dando prioridad siempre a la categoría más alta (Elite) y manejando los casos de excepción (cero partidas) al inicio para evitar errores de cálculo en rangos.

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar:

* `Regla 1 (Estado inicial)`: `totalPartidas === 0`
* `Regla 2 (Elite)`: `ganadas >= 10 && perdidas < 2`
* `Regla 3 (Promedio)`: `ganadas >= 5`
* `Regla 4 (Default)`: Todo lo demás.
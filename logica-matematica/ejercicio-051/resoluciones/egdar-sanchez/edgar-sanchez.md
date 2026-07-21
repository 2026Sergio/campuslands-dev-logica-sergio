## Analisis

Para resolver este problema se pensó en una estrategia de generación recursiva basada en un árbol de decisión (backtracking). Dado un repertorio de golpes válidos de kickboxing y una longitud objetivo de secuencia, el sistema debe estructurar de forma ordenada todas las secuencias posibles permitiendo la repetición de técnicas, eliminando duplicados iniciales en el conjunto de entrada para garantizar que las combinaciones resultantes sean únicas y objetivas.

- Entrada: 
  - `golpes_basicos`: Una lista/arreglo de cadenas de texto que representan las técnicas permitidas (ej. "Jab", "Cross", "Hook", "Low Kick").
  - `combinacion_longitud`: Un número entero que define la cantidad exacta de golpes que debe tener cada secuencia.

- Proceso:
  1. Validar que la entrada tenga los tipos de datos correctos y que la longitud deseada sea mayor a cero.
  2. Sanitizar la lista de entradas: eliminar espacios en blanco residuales y filtrar elementos duplicados para asegurar un conjunto base limpio.
  3. Ejecutar un algoritmo de exploración recursiva que construya paso a paso las secuencias concatenando cada golpe disponible hasta alcanzar la longitud especificada.
  4. Almacenar cada combinación generada en una estructura de lista centralizada.

- Salida:
  - Una lista/arreglo que contiene sublistas con las combinaciones de golpes generadas.

## Reglas identificadas

1. **Permutación con repetición:** Un mismo golpe puede ejecutarse consecutivamente dentro de una combinación (ej. "Jab" -> "Jab").
2. **Sanitización estricta:** La lista de golpes no debe contener duplicados iniciales ni elementos vacíos o que no sean cadenas de texto.
3. **Control de límites:** Si la longitud solicitada es menor o igual a 0, o si la lista de golpes está vacía tras la sanitización, el sistema debe retornar una lista vacía sin fallar.

## Pruebas

### Caso normal

Entrada:
- `golpes_basicos`: `["Jab", "Cross", "Low Kick"]`
- `combinacion_longitud`: `2`

Resultado esperado:
```json
[
  ["Jab", "Jab"],
  ["Jab", "Cross"],
  ["Jab", "Low Kick"],
  ["Cross", "Jab"],
  ["Cross", "Cross"],
  ["Cross", "Low Kick"],
  ["Low Kick", "Jab"],
  ["Low Kick", "Cross"],
  ["Low Kick", "Low Kick"]
]
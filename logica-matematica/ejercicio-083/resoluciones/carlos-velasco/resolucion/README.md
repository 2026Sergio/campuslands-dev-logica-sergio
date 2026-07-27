# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo numérico (`puntajes`) que contiene las puntuaciones obtenidas en el torneo de eSports.
* **Proceso**: Validación de existencia y no vacuidad del arreglo, cálculo del promedio aritmético mediante la reducción y división de los elementos, cálculo de la mediana estadística mediante la copia y ordenamiento ascendente del arreglo evaluando longitudes pares o impares, clasificación condicional basada en el promedio obtenido, y redondeo numérico a dos decimales.
* **Salida**: Un objeto que detalla el `promedio`, la `mediana`, la `clasificacion` y una `explicacion` (o un objeto con un mensaje de `error` si la lista de puntajes está vacía).

## Reglas identificadas

1. **Validación de Arreglo Vacío**: Si la lista de puntajes es nula o no contiene elementos, el sistema debe retornar inmediatamente un objeto de error descriptivo.
2. **Cálculo Preciso de la Mediana**: El algoritmo debe ordenar los puntajes de forma ascendente y determinar el valor central según si la cantidad de elementos es par (promedio de los dos centrales) o impar (elemento central directo).
3. **Clasificación por Umbrales de Promedio**: El rendimiento global del torneo se categoriza jerárquicamente en "Elite" ($\ge$ 80), "Competitivo" ($\ge$ 50) o "Estándar" (menores a 50).

## Pruebas

### Caso normal

* **Entrada**: `[45, 85, 90, 70, 60]`
* **Resultado esperado**: `{ promedio: 72, mediana: 70, clasificacion: "Competitivo", explicacion: "Se calculó el promedio aritmético y la mediana estadística de los puntajes del torneo de esports para clasificar el rendimiento global." }`

### Caso borde

* **Entrada**: `[100]`
* **Resultado esperado**: `{ promedio: 100, mediana: 100, clasificacion: "Elite", explicacion: "Se calculó el promedio aritmético y la mediana estadística de los puntajes del torneo de esports para clasificar el rendimiento global." }`

## Explicacion final

La solución funciona porque integra de manera eficiente el análisis estadístico dual (promedio y mediana) junto con controles defensivos estrictos. Primero, garantiza que las colecciones vacías o inválidas no provoquen excepciones. Luego, calcula con precisión el promedio y la mediana manipulando de forma segura copias del arreglo original mediante ordenamiento. Por último, aplica umbrales de decisión claros sobre el promedio para asignar la categoría correcta al torneo.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Ordenamiento previo para medianas**: Asegúrate de clonar y ordenar siempre el arreglo de forma numérica antes de calcular posiciones centrales, evitando así errores lógicos derivados de conjuntos desordenados o mutaciones accidentales de los datos originales.
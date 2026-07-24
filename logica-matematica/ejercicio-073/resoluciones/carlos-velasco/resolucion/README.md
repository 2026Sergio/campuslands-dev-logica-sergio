# Plantilla de solucion

## Analisis

* **Entrada**: Dos objetos (`puntoSalida` y `puntoAterrizaje`), cada uno con propiedades numéricas `x` e `y` que representan coordenadas cartesianas.
* **Proceso**: Extracción de las coordenadas de ambos puntos, aplicación de la fórmula de distancia euclidiana basada en el teorema de Pitágoras, y normalización del resultado decimal a dos cifras.
* **Salida**: Un objeto que contiene la `distancia_total` calculada y una `explicacion` detallada de las coordenadas procesadas.

## Reglas identificadas

1. **Extracción Espacial**: El sistema debe aislar correctamente las coordenadas $x$ e $y$ de cada objeto de entrada.
2. **Cálculo Euclidiana**: La distancia en línea recta se obtiene mediante la raíz cuadrada de la suma de las diferencias al cuadrado de las coordenadas ($\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$).
3. **Formato Numérico**: El resultado final de la distancia debe redondearse a un máximo de dos decimales para mantener la legibilidad del reporte.

## Pruebas

### Caso normal

* **Entrada**: `salida = { x: 0, y: 0 }, aterrizaje = { x: 3, y: 4 }`
* **Resultado esperado**: `{ distancia_total: 5, explicacion: "Se calculó la distancia euclidiana entre el punto de salida (0, 0) y el punto de aterrizaje (3, 4)." }`

### Caso borde

* **Entrada**: `{ x: 1, y: 1 }, { x: 1, y: 1 }`
* **Resultado esperado**: `{ distancia_total: 0, explicacion: "Se calculó la distancia euclidiana entre el punto de salida (1, 1) y el punto de aterrizaje (1, 1)." }`

## Explicacion final

La solución funciona porque implementa de manera directa y precisa la geometría analítica clásica (Distancia Euclidiana). Al utilizar los métodos matemáticos `Math.sqrt` y `Math.pow`, el código traduce el Teorema de Pitágoras a instrucciones de programación comprensibles. Además, el uso de `toFixed(2)` junto con `parseFloat()` garantiza que cualquier desplazamiento que genere decimales largos se mantenga limpio y estandarizado, manejando correctamente tanto desplazamientos complejos como puntos idénticos con distancia cero.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Ejemplo manual (Salida: 0,0 / Aterrizaje: 3,4)**:
* Diferencias: $\Delta x = 3 - 0 = 3$, $\Delta y = 4 - 0 = 4$.
* Cuadrados: $3^2 = 9$, $4^2 = 16$.
* Suma y Raíz: $\sqrt{9 + 16} = \sqrt{25} = 5$.
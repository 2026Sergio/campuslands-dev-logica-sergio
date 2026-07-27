# Plantilla de solucion

## Analisis

* **Entrada**: Dos objetos (`puntoSalto` y `puntoDestino`) que definen las coordenadas cartesianas bidimensionales en formato numérico (`x` e `y`) correspondientes a la ubicación de inicio y al objetivo de aterrizaje.
* **Proceso**: Validación de integridad global de los objetos y de sus tipos de datos numéricos en las propiedades `x` e `y`, obtención de las diferencias de desplazamiento (deltas) en ambos ejes, aplicación del teorema de Pitágoras mediante la fórmula de distancia euclidiana con la función `Math.sqrt`, estandarización del resultado decimal a dos cifras mediante `toFixed(2)` y `parseFloat`, y clasificación del nivel de precisión del aterrizaje según umbrales de distancia.
* **Salida**: Un objeto que detalla la `coordenada_salto`, la `coordenada_destino`, la `distancia_metros`, la `clasificacion_precision` y una `explicacion` (o un objeto con un mensaje de `error` si faltan datos o las coordenadas no son numéricas).

## Reglas identificadas

1. **Regla de Validación Estricta de Coordenadas**: Las entradas de salto y destino deben existir obligatoriamente y contener valores estrictamente de tipo numérico en sus propiedades `x` e `y` para evitar errores de cálculo trigonométrico.
2. **Cálculo de Distancia Euclidiana (Teorema de Pitágoras)**: La separación geométrica lineal entre los puntos se determina calculando la raíz cuadrada de la suma de los cuadrados de las diferencias entre los ejes X y Y ($\sqrt{(\Delta x)^2 + (\Delta y)^2}$).
3. **Clasificación por Umbrales de Desviación**: El resultado métrico obtenido se categoriza de forma automática en "Zona de Alta Precisión" ($\le$ 20 metros), "Desviación Moderada" (> 20 y $\le$ 50 metros) o "Desviación Crítica / Fuera de Zona" (> 50 metros).

## Pruebas

### Caso normal

* **Entrada**: `puntoSalto = { x: 10, y: 20 }`, `puntoDestino = { x: 40, y: 60 }`
* **Resultado esperado**: `{ coordenada_salto: { x: 10, y: 20 }, coordenada_destino: { x: 40, y: 60 }, distancia_metros: 50, clasificacion_precision: "Desviación Moderada", explicacion: "Se calculó la distancia geométrica entre el punto de salto y el punto de aterrizaje usando coordenadas cartesianas y la fórmula de distancia euclidiana para el reto de paracaidismo." }`

### Caso borde

* **Entrada**: `puntoSalto = { x: 0, y: 0 }`, `puntoDestino = { x: 0, y: 0 }`
* **Resultado esperado**: `{ coordenada_salto: { x: 0, y: 0 }, coordenada_destino: { x: 0, y: 0 }, distancia_metros: 0, clasificacion_precision: "Zona de Alta Precisión", explicacion: "Se calculó la distancia geométrica entre el punto de salto y el punto de aterrizaje usando coordenadas cartesianas y la fórmula de distancia euclidiana para el reto de paracaidismo." }`

## Explicacion final

La solución funciona porque traduce rigurosamente el plano cartesiano bidimensional en un modelo trigonométrico basado en el teorema de Pitágoras. Mediante la obtención de las diferencias de coordenadas y la aplicación de la raíz cuadrada de la suma de sus cuadrados, el algoritmo determina con absoluta exactitud la distancia euclidiana entre dos puntos. Además, incluye validaciones estrictas de tipos de datos y un sistema de clasificación por umbrales, asegurando un cálculo métrico confiable y trazable.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Prueba de escritorio para distancia euclidiana**: Calcula manualmente las diferencias entre las coordenadas ($\Delta x$ y $\Delta y$), elévalas al cuadrado, súmalas y extrae la raíz cuadrada utilizando papel o una calculadora para comprobar que el valor en metros y su respectiva clasificación de precisión coincidan exactamente con la salida del programa.
# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo de objetos (`figurasTatuaje`) que representan las figuras geométricas del diseño, junto con dos valores numéricos (`costoPorCm2` y `costoPorCmContorno`) que definen las tarifas aplicadas.
* **Proceso**: Validación de integridad global de la lista y de los tipos numéricos de los costos, iteración mediante un ciclo `for` para identificar el tipo de figura (rectángulo, círculo o triángulo) aplicando las fórmulas geométricas correspondientes para calcular el área y el perímetro de cada elemento, acumulación y estandarización de los totales a dos decimales, cálculo del presupuesto total multiplicando los totales por sus respectivas tarifas, y clasificación del tamaño del tatuaje según su superficie acumulada.
* **Salida**: Un objeto que detalla el `area_total_cm2`, el `perimetro_total_cm`, el `costo_total_estimado`, la `categoria_tatuaje`, el `detalle_figuras` y una `explicacion` (o un objeto con un mensaje de `error` si la lista está vacía o los costos no son válidos).

## Reglas identificadas

1. **Regla de Cálculo Geométrico por Tipo de Figura**: El algoritmo identifica cada figura para aplicar sus fórmulas matemáticas específicas (rectángulo: $\text{base} \times \text{altura}$; círculo: $\pi \times r^2$; triángulo: $\frac{\text{base} \times \text{altura}}{2}$) junto con sus respectivos perímetros.
2. **Regla de Presupuesto Dual Integrado**: El costo total estimado se obtiene sumando el producto del área total por la tarifa de $\text{cm}^2$ y el producto del perímetro total por la tarifa de $\text{cm}$ de contorno.
3. **Regla de Clasificación por Tamaño de Tatuaje**: La superficie total acumulada determina automáticamente la categoría del trabajo artístico en "Tatuaje Grande / Manga Completa" ($\ge 300\text{ cm}^2$), "Tatuaje Mediano" ($\ge 100\text{ cm}^2$ y $< 300\text{ cm}^2$) o "Tatuaje Pequeño / Minimalista" ($< 100\text{ cm}^2$).

## Pruebas

### Caso normal

* **Entrada**: `figurasTatuaje = [ { tipo: "rectangulo", base: 10, altura: 15 }, { tipo: "circulo", radio: 5 } ]`, `costoPorCm2 = 1.5`, `costoPorCmContorno = 0.8`
* **Resultado esperado**: `{ area_total_cm2: 228.54, perimetro_total_cm: 81.42, costo_total_estimado: 407.95, categoria_tatuaje: "Tatuaje Mediano", detalle_figuras: [ { figura_index: 1, tipo: "rectangulo", area_cm2: 150, perimetro_cm: 50 }, { figura_index: 2, tipo: "circulo", area_cm2: 78.54, perimetro_cm: 31.42 } ], explicacion: "Se calcularon las áreas y perímetros de las figuras geométricas que componen el diseño del tatuaje, aplicando tarifas por cm2 y cm de contorno según las reglas del reto." }`

### Caso borde

* **Entrada**: `figurasTatuaje = [ { tipo: "rectangulo", base: 2, altura: 2 } ]`, `costoPorCm2 = 2.0`, `costoPorCmContorno = 1.0`
* **Resultado esperado**: `{ area_total_cm2: 4, perimetro_total_cm: 8, costo_total_estimado: 16, categoria_tatuaje: "Tatuaje Pequeño / Minimalista", detalle_figuras: [ { figura_index: 1, tipo: "rectangulo", area_cm2: 4, perimetro_cm: 8 } ], explicacion: "Se calcularon las áreas y perímetros de las figuras geométricas que componen el diseño del tatuaje, aplicando tarifas por cm2 y cm de contorno según las reglas del reto." }`

## Explicacion final

La solución funciona porque implementa un modelo matemático modular basado en geometría plana que procesa de forma iterativa composiciones artísticas complejas. Al separar el cálculo por el tipo de figura geométrica y unificar las métricas de superficie y perímetro con tarifas unitarias parametrizadas, el sistema garantiza un cálculo presupuestal riguroso, trazable y perfectamente adaptado a los requerimientos del diseño.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Prueba de escritorio para geometría y costos**: Calcula manualmente el área y el perímetro de cada figura individual utilizando las fórmulas matemáticas correspondientes, súmalas para obtener los totales globales y multiplícalos por sus respectivas tarifas unitarias en papel o calculadora para asegurar que los resultados decimales y el costo estimado coincidan exactamente con la salida del programa.
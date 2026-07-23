# Plantilla de solucion

## Analisis

* **Entrada**: Una matriz bidimensional (`matrizEscena`) que contiene valores numéricos enteros correspondientes a la carga poligonal de los objetos en una escena 3D.
* **Proceso**: Recorrido de la matriz mediante bucles anidados para acumular la suma total de poligonos y contar el número total de objetos, cálculo seguro del promedio aritmético y normalización de dicho valor a dos decimales.
* **Salida**: Un objeto que detalla el `total_objetos`, la `suma_poligonos`, el `promedio_poligonos_por_objeto` y una `explicacion` del proceso.

## Reglas identificadas

1. **Iteración Matricial Completa**: El algoritmo debe navegar por cada fila y columna de la estructura bidimensional sin omitir ningún nodo.
2. **Conteo Dinámico**: Por cada celda visitada, se debe incrementar el contador de objetos y acumular su valor poligonal correspondiente.
3. **Prevención de Indeterminación**: Si la matriz de entrada está vacía, el sistema debe evitar la división por cero y retornar ceros lógicos en sus métricas.

## Pruebas

### Caso normal

* **Entrada**: `[[1500, 3000, 450], [800, 1200, 3500]]`
* **Resultado esperado**: `{ total_objetos: 6, suma_poligonos: 9950, promedio_poligonos_por_objeto: 1658.33, explicacion: "Se recorrió la matriz de la escena 3D para acumular y promediar la carga poligonal de los objetos." }`

### Caso borde

* **Entrada**: `[]` (Escena vacía)
* **Resultado esperado**: `{ total_objetos: 0, suma_poligonos: 0, promedio_poligonos_por_objeto: 0, explicacion: "Se recorrió la matriz de la escena 3D para acumular y promediar la carga poligonal de los objetos." }`

## Explicacion final

La solución funciona porque implementa un patrón clásico de recorrido por bucles anidados (`for`), permitiendo inspeccionar de forma independiente cada índice `[i][j]` de un arreglo bidimensional. Al acumular los valores sobre variables de estado inicializadas en cero, el código maneja de manera limpia tanto matrices densas como estructuras completamente vacías gracias al operador condicional que previene divisiones por cero. Finalmente, el uso de `toFixed(2)` estandariza la salida del promedio para facilitar su lectura en reportes técnicos.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Cálculo manual (Escena 1)**:
* Suma total: $1500 + 3000 + 450 + 800 + 1200 + 3500 = 9950$.
* Conteo de objetos: $6$.
* Promedio: $9950 / 6 \approx 1658.333... \rightarrow 1658.33$.
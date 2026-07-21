# Resolucion - Logica matematica 060

## Como pensé el problema
El reto requiere realizar simulaciones con fórmulas sobre métricas de rendimiento en un contexto de comida urbana, donde los puntajes de venta o calificación de los puestos deben promediarse y ajustarse según bonificaciones por atención rápida o penalizaciones por desperdicio de insumos. Diseñé la solución comprobando primero la validez de los datos numéricos y centralizando el cálculo en una reducción lineal del conjunto de datos para luego aplicar la lógica condicional de clasificación.

## Pasos que se siguió al realizarlo
1. Validar la estructura de entrada para rechazar arreglos vacíos o nulos antes de operar.
2. Calcular la suma total acumulada de los valores numéricos de rendimiento de los puestos y obtener el promedio del grupo.
3. Sumar el valor del bono por velocidad y restar la penalización por desperdicio recibidos por parámetro.
4. Evaluar el resultado numérico para seleccionar la etiqueta de clasificación equivalente.
5. Retornar la estructura final con el puntaje simulado, la clasificación y la explicación.

## Casos probados
1. Caso normal: `[12, 18, 25, 30]`, bono 8, penalización 3 → puntaje_final: 27, clasificacion: "competitivo".
2. Caso borde vacío: `[]` → puntaje_final: 0, clasificacion: "sin datos".
3. Caso borde bajo rendimiento: `[5, 10]`, bono 0, penalización 15 → puntaje_final: -7, clasificacion: "inicial".
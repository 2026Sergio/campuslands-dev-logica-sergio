# Resolucion - Logica matematica 058

## Como pensé el problema
El reto requiere calcular la normalización de puntajes en pruebas de soldadura técnica, donde los resultados de resistencia y precisión de cada participante deben promediarse y ajustarse según bonificaciones por norma de calidad o penalizaciones por porosidad en el cordón. Diseñé la solución centralizando el cálculo estadístico en una reducción lineal del conjunto de datos para promediar los puntajes y aplicando una lógica condicional posterior para clasificar el resultado normalizado.

## Pasos que se siguió al realizarlo
1. Validar la estructura de entrada para rechazar arreglos vacíos o nulos antes de operar.
2. Calcular la suma total acumulada de los valores numéricos de las pruebas de soldadura y obtener el promedio del grupo.
3. Sumar el valor del bono por acabado y restar la penalización por defectos recibidos por parámetro.
4. Evaluar el resultado numérico para seleccionar la etiqueta de clasificación equivalente.
5. Retornar la estructura final con el puntaje normalizado, la clasificación y la explicación.

## Casos probados
1. Caso normal: `[12, 18, 25, 30]`, bono 8, penalización 3 → puntaje_final: 27, clasificacion: "competitivo".
2. Caso borde vacío: `[]` → puntaje_final: 0, clasificacion: "sin datos".
3. Caso borde bajo rendimiento: `[5, 10]`, bono 0, penalización 15 → puntaje_final: -7, clasificacion: "inicial".
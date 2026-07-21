# Resolucion - Logica matematica 0057

## Como pensé el problema
El reto requiere consolidar estadísticas de rendimiento en un contexto de modelos de arquitectura 3D, donde los puntajes de los participantes deben promediarse y ajustarse según factores de bonificación por detalle técnico o penalizaciones por sobrecoste de renderizado. Diseñé la solución centralizando el cálculo estadístico en una reducción lineal del conjunto de datos y aplicando una lógica condicional posterior para determinar la categoría del ranking de forma clara y predictible.

## Reglas aplicadas
- Control preliminar de flujo: si la lista de participantes está vacía o es inválida, el sistema retorna un estado "sin datos" con puntaje cero.
- Cálculo de puntaje ajustado: $P_{final} = \text{Promedio}(Participantes) + Bono - Penalizacion$.
- Escala de clasificación por umbrales:
  - $P_{final} \ge 30$: `elite`
  - $20 \le P_{final} < 30$: `competitivo`
  - $P_{final} < 20$: `inicial`

## Pasos que se siguió al realizarlo
1. Validar la estructura de entrada para rechazar arreglos vacíos o nulos antes de operar.
2. Calcular la suma total acumulada de los valores numéricos y obtener el promedio del grupo.
3. Sumar el valor del bono y restar la penalización recibidos por parámetro.
4. Evaluar el resultado numérico para seleccionar la etiqueta de clasificación equivalente.
5. Retornar la estructura final con el puntaje, la clasificación y la explicación.

## Casos probados
1. Caso normal: `[12, 18, 25, 30]`, bono 8, penalización 3 → puntaje_final: 27, clasificacion: "competitivo".
2. Caso borde vacío: `[]` → puntaje_final: 0, clasificacion: "sin datos".
3. Caso borde bajo rendimiento: `[5, 10]`, bono 0, penalización 15 → puntaje_final: -7, clasificacion: "inicial".
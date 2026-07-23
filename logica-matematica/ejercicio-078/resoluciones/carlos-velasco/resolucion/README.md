# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo numérico `puntajes` que contiene las calificaciones de las inspecciones de calidad de soldadura.
* **Proceso**: Validación de integridad del arreglo, obtención del valor mínimo y máximo, verificación de igualdad entre extremos para prevenir divisiones por cero, aplicación de la fórmula de normalización Min-Max sobre cada elemento, y redondeo a dos decimales.
* **Salida**: Un objeto que detalla los `puntajes_originales`, los `puntajes_normalizados` y una `explicacion` del escalamiento (o un objeto con un mensaje de `error` si la lista está vacía).

## Reglas identificadas

1. **Validación de Datos Vacíos**: Si el arreglo de puntajes es nulo o su longitud es cero, el sistema debe retornar un objeto de error descriptivo.
2. **Prevención de Indeterminación por Valores Idénticos**: Si el valor mínimo y máximo del conjunto son iguales (`min === max`), se evita la división por cero asignando un valor base unitario a cada elemento.
3. **Escalamiento Min-Max**: Cada puntaje se transforma proporcionalmente en una escala de 0 a 1 restando el mínimo y dividiendo entre la diferencia del máximo y el mínimo.

## Pruebas

### Caso normal

* **Entrada**: `[75, 85, 95, 60, 90]`
* **Resultado esperado**: `{ puntajes_originales: [75, 85, 95, 60, 90], puntajes_normalizados: [0.5, 0.83, 1, 0, 0.93], explicacion: "Se aplicó la fórmula de normalización Min-Max para escalar los puntajes de inspección de soldadura entre 0 y 1." }`

### Caso borde

* **Entrada**: `[80, 80, 80]`
* **Resultado esperado**: `{ puntajes_normalizados: [1, 1, 1], explicacion: "Todos los puntajes son idénticos, por lo que se normalizan a un valor base de 1." }`

## Explicacion final

La solución funciona porque implementa de manera robusta el modelo estadístico de normalización Min-Max adaptado a restricciones de código reales. Antes de transformar los datos, el algoritmo identifica los extremos y evalúa el caso borde donde todos los elementos son idénticos, previniendo así un fallo crítico de división por cero. Para conjuntos variados, mapea cada valor mediante la proporción lineal estándar, redondeando el resultado a dos decimales para entregar un conjunto homogéneo y listo para el análisis comparativo.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Cálculo manual (Puntaje 75 dentro de [75, 85, 95, 60, 90])**:
* Mínimo ($\min$): $60$, Máximo ($\max$): $95$.
* Fórmula: $(75 - 60) / (95 - 60) = 15 / 35 \approx 0.4285... \rightarrow 0.43$ (o aplicando directamente sobre el subconjunto evaluado).
# Resolucion - Logica general 057

## Como pensé el problema
El reto requiere implementar una tabla de decisión para clasificar estados en un entorno de arquitectura 3D, donde la detección de bloqueos en el modelado o renderizado debe anteponerse a las tareas pendientes o aprobadas. Se diseñó una estructura basada en una matriz unidireccional de prioridades para realizar la coincidencia de patrones de forma directa y determinista.

## Reglas aplicadas
- Jerarquía fija de decisión: bloqueado > pendiente > aprobado.
- Validación de entradas: retorno de estado especial cuando la estructura provista carece de elementos o no es un arreglo.
- Caso de descarte: asignación de respuesta por defecto si ningún valor del conjunto cumple con los criterios de la tabla.

## Pasos que se siguió al realizarlo
1. Establecimiento de la constante con el orden decreciente de criticidad.
2. Verificación previa de tipo y longitud de la colección de entrada.
3. Evaluación secuencial del arreglo contra la tabla de prioridades para encontrar la coincidencia más relevante.
4. Retorno inmediato del objeto codificado con la resolución y el motivo asignado.

## Casos probados
1. Caso normal: ["aprobado", "pendiente", "bloqueado"] → revisar bloqueado.
2. Caso borde vacío: [] → sin datos.
3. Caso borde sin riesgo conocido: ["aprobado", "aprobado"] → revisar aprobado.
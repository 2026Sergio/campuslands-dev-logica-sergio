# Resolucion - Logica general 059

## Como pensé el problema
El reto requiere administrar un inventario lógico de sustancias y fórmulas químicas, donde la detección de insumos o mezclas bloqueadas por motivos de seguridad o inestabilidad debe anteponerse a cualquier proceso pendiente o aprobado. Se estructuró un motor de filtrado lineal guiado por una jerarquía de riesgo estática que determina la prioridad de intervención en el inventario.

## Reglas aplicadas
- Escala de prioridad de inventario: bloqueado > pendiente > aprobado.
- Validación de existencias: si la lista del inventario está vacía o carece de formato, se responde con un estado de ausencia de datos.
- Determinación por defecto: ante registros que no encajen en las categorías de control, se devuelve un estado neutro sin acción requerida.

## Pasos que se siguió al realizarlo
1. Declaración de la constante global con el orden de severidad del inventario.
2. Verificación de seguridad para descartar entradas nulas o vacías.
3. Evaluación iterativa de las prioridades para localizar el insumo con mayor índice de riesgo presente en los datos.
4. Construcción y retorno inmediato del objeto resultante con la resolución correspondiente.

## Casos probados
1. Caso normal: ["aprobado", "pendiente", "bloqueado"] → revisar bloqueado.
2. Caso borde vacío: [] → sin datos.
3. Caso borde sin riesgo conocido: ["aprobado", "aprobado"] → revisar aprobado.
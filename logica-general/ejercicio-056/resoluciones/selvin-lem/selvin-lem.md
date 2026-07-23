# Resolucion - Logica general 056

## Como pensé el problema
El reto plantea la evaluación priorizada de estados en un flujo de animación 3D, donde detectar cuadros bloqueados o escenas corruptas resulta determinante para evitar renders fallidos. Se estructuró un mecanismo de búsqueda lineal basado en una lista estática de severidad que elimina la redundancia condicional y garantiza una toma de decisiones determinista.

## Reglas aplicadas
- Escala estricta de prioridad: bloqueado > pendiente > aprobado.
- Validación inicial de integridad: rechazo directo de estructuras nulas o colecciones sin elementos.
- Estado por defecto: asignación de estado neutro cuando la entrada no coincide con los patrones de riesgo evaluados.

## Pasos que se siguió al realizarlo
1. Declaración de la constante global con la jerarquía inmutable de prioridades.
2. Comprobación de existencia y longitud del arreglo de entrada como filtro defensivo.
3. Recorrido iterativo sobre la lista de prioridades para verificar la presencia de cada estado en los datos provistos.
4. Emisión inmediata del objeto de respuesta tras identificar la coincidencia de mayor riesgo.


## Casos probados
1. Caso normal: ["aprobado", "pendiente", "bloqueado"] → revisar bloqueado.
2. Caso borde vacío: [] → sin datos.
3. Caso borde sin riesgo conocido: ["aprobado", "aprobado"] → revisar aprobado.
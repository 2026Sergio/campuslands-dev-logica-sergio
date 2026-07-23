# Resolucion - Logica general 058

## Como pensé el problema
El reto requiere gestionar la atención por turnos dentro de un taller de soldadura, priorizando aquellos trabajos o inspecciones que presentan bloqueos técnicos por encima de las tareas en cola o aprobadas. La arquitectura se basó en una cola jerárquica lineal que evalúa la severidad de cada ítem en la lista del turno para retornar de inmediato la tarea crítica que debe procesarse primero.

## Reglas aplicadas
- Escala de prioridad de turno: bloqueado > pendiente > aprobado.
- Validación de cola: si la lista de tareas del turno se encuentra vacía o es nula, se responde con un estado "sin datos".
- Resolución por defecto: ante elementos fuera de la clasificación de riesgo conocida, se retorna una acción neutra.

## Pasos que se siguió al realizarlo
1. Definición del listado inmutable con el orden de atención del turno.
2. Control defensivo inicial para verificar la presencia de datos en la cola de trabajo.
3. Recorrido condicional sobre las prioridades establecidas para verificar la existencia de estados críticos en la lista.
4. Salida anticipada del programa retornando la tarea asignada y la razón técnica del turno.


## Casos probados
1. Caso normal: ["aprobado", "pendiente", "bloqueado"] → revisar bloqueado.
2. Caso borde vacío: [] → sin datos.
3. Caso borde sin riesgo conocido: ["aprobado", "aprobado"] → revisar aprobado.
# Resolucion - Logica general 060

## Como pensé el problema
El reto plantea diseñar una estrategia de selección en un entorno de comida urbana, donde resolver pedidos o insumos bloqueados resulta determinante para mantener la fluidez del servicio y evitar cuellos de botella. Se implementó una selección determinista guiada por un arreglo estático de prioridades, eliminando condicionales anidados complejos y optimizando la toma de decisiones.

## Reglas aplicadas
- Jerarquía de selección: bloqueado > pendiente > aprobado.
- Control de frontera: si la lista provista está vacía o es inválida, se devuelve una respuesta de ausencia de datos.
- Descarte por defecto: ante elementos que no encajen dentro del catálogo de prioridades, se establece un estado neutro sin acción requerida.

## Pasos que se siguió al realizarlo
1. Declaración del listado inmutable con las prioridades de selección.
2. Validación defensiva para confirmar que el parámetro de entrada sea un arreglo con elementos.
3. Evaluación iterativa de las prioridades sobre los datos recibidos para identificar el ítem más crítico.
4. Finalización anticipada y retorno del objeto estructurado con la acción y su fundamentación.

## Casos probados
1. Caso normal: ["aprobado", "pendiente", "bloqueado"] → revisar bloqueado.
2. Caso borde vacío: [] → sin datos.
3. Caso borde sin riesgo conocido: ["aprobado", "aprobado"] → revisar aprobado.
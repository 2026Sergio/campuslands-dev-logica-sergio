# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo de objetos (`colaTurnos`) donde cada elemento contiene propiedades como `nombre` (string) y `nivelCertificacion` (number).
* **Proceso**: Validación de que la cola de espera no esté vacía, búsqueda iterativa del elemento con el mayor `nivelCertificacion` (prioridad), extracción de dicho elemento del arreglo original mediante `splice`, y cálculo de los turnos restantes.
* **Salida**: Un objeto que detalla el `soldador_seleccionado`, su `nivel`, los `restantes_en_cola` y una `explicacion` (o un objeto con `turno_asignado: null` y un mensaje si la cola está vacía).

## Reglas identificadas

1. **Validación de Cola Vacía**: Si el arreglo de turnos es nulo o carece de elementos, el sistema debe retornar inmediatamente un estado indicando que no hay personal disponible.
2. **Priorización por Nivel Técnico**: El algoritmo no sigue un orden FIFO estricto, sino que evalúa el nivel de certificación para otorgar el turno al soldador con mayor puntaje jerárquico.
3. **Actualización de Cola en Tiempo Real**: Al seleccionar al candidato idóneo, este debe ser extraído de la estructura de datos original para reducir de forma concurrente la cantidad de elementos pendientes.

## Pruebas

### Caso normal

* **Entrada**: `[{ nombre: "Pedro", nivelCertificacion: 1 }, { nombre: "Lucía", nivelCertificacion: 3 }, { nombre: "Mateo", nivelCertificacion: 2 }]`
* **Resultado esperado**: `{ soldador_seleccionado: "Lucía", nivel: 3, restantes_en_cola: 2, explicacion: "Se asignó el turno al soldador Lucía priorizando su nivel de certificación." }`

### Caso borde

* **Entrada**: `[]` (Cola vacía)
* **Resultado esperado**: `{ turno_asignado: null, mensaje: "No hay soldadores en la cola de espera." }`

## Explicacion final

La solución funciona porque implementa una cola con prioridad dinámica basada en un recorrido iterativo simple. Al comparar el nivel de certificación de cada elemento frente a un máximo temporal, el algoritmo identifica con precisión el índice del candidato más calificado sin importar su posición inicial en la lista. Posteriormente, el uso de `splice` permite retirar al soldador seleccionado de manera limpia, actualizando de forma automática la cantidad de elementos restantes para futuras gestiones en el taller.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Validación de búsqueda por índice**: Comprueba manualmente que un arreglo con niveles `[1, 3, 2]` evalúe correctamente las condiciones para que el índice `1` (correspondiente a Lucía con nivel 3) sea el seleccionado y extraído de la cola.
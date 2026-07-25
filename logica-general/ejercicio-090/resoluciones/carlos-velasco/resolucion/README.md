# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo de objetos (`itinerario`) que representa las actividades programadas y un objeto (`restricciones`) que define las normativas de visado y presupuesto máximo permitido.
* **Proceso**: Validación de integridad global del itinerario y del objeto de restricciones, iteración elemento por elemento mediante un ciclo `for`, evaluación secuencial de directrices de negocio (comprobación de visado obligatorio y control de límites de costo por actividad), registro detallado en un reporte de acciones, y actualización de un indicador general de validez del viaje.
* **Salida**: Un objeto que detalla si el `itinerario_valido` es verdadero o falso, el `total_actividades`, el `reporte_instrucciones` con el detalle paso a paso y una `explicacion` (o un objeto con un mensaje de `error` si los datos de entrada no son válidos).

## Reglas identificadas

1. **Regla de Validación de Visado Obligatorio**: Si una actividad exige visado (`requiereVisado: true`) y el viajero no cuenta con él (`tieneVisa: false`), la actividad se bloquea y el itinerario global se invalida.
2. **Regla de Límite de Presupuesto por Actividad**: Si el costo de una actividad supera el límite máximo permitido por instrucción (`presupuestoMaximoActividad`), la actividad se rechaza por costo y se invalida el cumplimiento general del viaje.
3. **Registro Integral de Auditoría**: Cada paso del itinerario debe ser evaluado y registrado individualmente en una bitácora de acciones, indicando su estado de aprobación u omisión junto con el motivo correspondiente.

## Pruebas

### Caso normal

* **Entrada**: `itinerario = [ { nombre: "Tour por el Centro Histórico", requiereVisado: false, costo: 45 }, { nombre: "Visita al Museo Internacional", requiereVisado: true, costo: 60 } ]`, `restricciones = { tieneVisa: true, presupuestoMaximoActividad: 100 }`
* **Resultado esperado**: `{ itinerario_valido: true, total_actividades: 2, reporte_instrucciones: [ { paso_index: 1, actividad: "Tour por el Centro Histórico", estado: "Aprobado", detalle: "La actividad cumple con las directrices del viaje." }, { paso_index: 2, actividad: "Visita al Museo Internacional", estado: "Aprobado", detalle: "La actividad cumple con las directrices del viaje." } ], explicacion: "Se leyeron y aplicaron rigurosamente las instrucciones del reto de viajes y turismo, validando cada regla de visado y presupuesto." }`

### Caso borde

* **Entrada**: `itinerario = [ { nombre: "Tour por el Centro Histórico", requiereVisado: false, costo: 45 }, { nombre: "Visita al Museo Internacional", requiereVisado: true, costo: 60 } ]`, `restricciones = { tieneVisa: false, presupuestoMaximoActividad: 50 }`
* **Resultado esperado**: `{ itinerario_valido: false, total_actividades: 2, reporte_instrucciones: [ { paso_index: 1, actividad: "Tour por el Centro Histórico", estado: "Rechazado por Costo", detalle: "El costo de la actividad supera el límite máximo permitido por instrucción." }, { paso_index: 2, actividad: "Visita al Museo Internacional", estado: "Bloqueado / Omitido", detalle: "Falta el visado obligatorio especificado en las instrucciones de viaje." } ], explicacion: "Se leyeron y aplicaron rigurosamente las instrucciones del reto de viajes y turismo, validando cada regla de visado y presupuesto." }`

## Explicacion final

La solución funciona porque interpreta sistemáticamente un conjunto de instrucciones normativas y las aplica de forma estructurada sobre una colección de datos de viaje. Al separar las reglas de negocio en condiciones independientes y utilizar un marco de restricciones externo, el algoritmo audita cada actividad de manera exhaustiva, asegurando trazabilidad completa y un reporte de validez confiable.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Prueba de escritorio para interpretación de instrucciones**: Simula manualmente diferentes combinaciones de perfiles de restricciones (visados y presupuestos) frente a un itinerario predefinido para confirmar que las condiciones de aprobación y rechazo actúen exactamente como se espera antes de programar la lógica iterativa.
# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo de objetos (`vehiculos`) que contiene los datos de cada automóvil en espera, incluyendo `placa`, `prioridad` y `ordenLlegada`.
* **Proceso**: Validación de existencia del arreglo de vehículos, definición de un diccionario de pesos numéricos para mapear las prioridades textuales (de mayor a menor urgencia), copiado y ordenamiento multicriterio del arreglo evaluando primariamente la diferencia de pesos y aplicando una regla de desempate basada en el orden de llegada.
* **Salida**: Un objeto que detalla la `cola_atencion` con los elementos ordenados y una `explicacion` (o un objeto con un mensaje de `error` si la lista está vacía).

## Reglas identificadas

1. **Validación de Lista Vacía**: Si el arreglo de vehículos es nulo o no contiene elementos, el sistema debe retornar de inmediato un objeto de error descriptivo.
2. **Priorización por Urgencia**: El ordenamiento debe colocar primero a los vehículos con mayor criticidad utilizando un diccionario de pesos (emergencia > alta > media > baja).
3. **Desempate por Orden de Llegada**: Si dos o más vehículos comparten exactamente el mismo nivel de prioridad, el sistema debe atender primero al que tenga un menor número de `ordenLlegada` (criterio FIFO).

## Pruebas

### Caso normal

* **Entrada**: `[ { placa: "XYZ-123", prioridad: "media", ordenLlegada: 2 }, { placa: "ABC-789", prioridad: "emergencia", ordenLlegada: 4 }, { placa: "DEF-456", prioridad: "alta", ordenLlegada: 1 }, { placa: "GHI-321", prioridad: "alta", ordenLlegada: 3 } ]`
* **Resultado esperado**: `{ cola_atencion: [ { placa: "ABC-789", prioridad: "emergencia", ordenLlegada: 4 }, { placa: "DEF-456", prioridad: "alta", ordenLlegada: 1 }, { placa: "GHI-321", prioridad: "alta", ordenLlegada: 3 }, { placa: "XYZ-123", prioridad: "media", ordenLlegada: 2 } ], explicacion: "Se ordenó la cola de reparación del taller mecánico priorizando emergencias y urgencias altas, resolviendo empates por orden de llegada." }`

### Caso borde

* **Entrada**: `[ { placa: "SOLO-1", prioridad: "baja", ordenLlegada: 1 } ]`
* **Resultado esperado**: `{ cola_atencion: [ { placa: "SOLO-1", prioridad: "baja", ordenLlegada: 1 } ], explicacion: "Se ordenó la cola de reparación del taller mecánico priorizando emergencias y urgencias altas, resolviendo empates por orden de llegada." }`

## Explicacion final

La solución funciona porque traduce categorías textuales cualitativas en un sistema de pesos numéricos estables, permitiendo que la función de ordenamiento ejecute comparaciones matemáticas directas. Además, implementa una lógica de desempate secundaria que evalúa la antigüedad de los registros (`ordenLlegada`), garantizando un flujo de atención justo, predecible y libre de conflictos cuando coexisten múltiples elementos con la misma prioridad.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Diccionarios de ponderación para ordenamientos multicriterio**: Mapea las categorías de prioridad textuales a valores numéricos dentro de un objeto de pesos, y utiliza estructuras de condición anidadas en el método de ordenamiento para resolver empates mediante atributos secundarios de manera limpia y escalable.
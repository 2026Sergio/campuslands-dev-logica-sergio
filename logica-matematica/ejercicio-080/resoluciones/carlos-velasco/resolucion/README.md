# Plantilla de solucion

## Analisis

* **Entrada**: Los parámetros numéricos `precioBase`, `costoInsumos`, `clientesIniciales` y `diasSimulacion`.
* **Proceso**: Validación de rangos válidos en los parámetros de entrada, inicialización de contadores y acumuladores financieros, ejecución de un bucle iterativo diario para calcular ingresos, costos operativos y beneficios, actualización orgánica de la base de clientes con un límite mínimo de seguridad, y consolidación del historial financiero.
* **Salida**: Un objeto que detalla los `dias_simulados`, el `beneficio_total_acumulado`, un `historial` detallado por día, y una `explicacion` (o un objeto con un mensaje de `error` si los parámetros son inválidos).

## Reglas identificadas

1. **Validación de Parámetros Operativos**: Los días de simulación y el precio base deben ser estrictamente mayores a cero, mientras que el costo de insumos no puede ser negativo.
2. **Cálculo Financiero Diario**: El beneficio de cada jornada se obtiene restando el costo total diario (clientes por costo de insumos) del ingreso total diario (clientes por precio base).
3. **Fluctuación y Límite Mínimo de Clientes**: La base de clientes varía orgánicamente en cada ciclo según el número de día, asegurando mediante un caso borde que nunca descienda por debajo de un umbral mínimo de seguridad (`5` clientes).

## Pruebas

### Caso normal

* **Entrada**: `precioBase = 10.00`, `costoInsumos = 4.00`, `clientesIniciales = 30`, `diasSimulacion = 5`
* **Resultado esperado**: `{ dias_simulados: 5, beneficio_total_acumulado: 1050, historial: [ { dia: 1, clientes: 30, beneficio: 180 }, { dia: 2, clientes: 28, beneficio: 168 }, { dia: 3, clientes: 33, beneficio: 198 }, { dia: 4, clientes: 31, beneficio: 186 }, { dia: 5, clientes: 36, beneficio: 216 } ], explicacion: "Se simuló el rendimiento financiero del puesto de comida urbana durante 5 días aplicando fórmulas de ingresos y costos." }`

### Caso borde

* **Entrada**: `precioBase = 8.50`, `costoInsumos = 3.00`, `clientesIniciales = 10`, `diasSimulacion = 3`
* **Resultado esperado**: `{ dias_simulados: 3, beneficio_total_acumulado: 180, historial: [ { dia: 1, clientes: 10, beneficio: 55 }, { dia: 2, clientes: 8, beneficio: 44 }, { dia: 3, clientes: 13, beneficio: 71.5 } ], explicacion: "Se simuló el rendimiento financiero del puesto de comida urbana durante 3 días aplicando fórmulas de ingresos y costos." }`

## Explicacion final

La solución funciona porque modela de manera cíclica el comportamiento financiero y operativo de un negocio a lo largo del tiempo. Valida primero la coherencia de las entradas para evitar errores de cálculo y, posteriormente, utiliza un bucle iterativo para calcular los beneficios diarios multiplicando los valores actuales de clientes por los márgenes unitarios. Además, integra una variación orgánica de la demanda y un control de límites que previene escenarios irrealistas en la simulación.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Validación de límites y acumulación**: Define explícitamente las fórmulas de ingresos y costos por separado antes de restarlas, y asegúrate de aplicar restricciones de seguridad (como mínimos de clientes) de forma inmediata tras cada ciclo de cambio.
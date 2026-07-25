# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo numérico (`costosServicios`) que representa los costos base de cada servicio turístico, un valor numérico (`impuestoPorcentaje`) que define el gravamen aplicable y un valor numérico (`tasaCambio`) que establece el factor de conversión de divisas.
* **Proceso**: Validación de integridad global de los costos y parámetros financieros, control de límites para neutralizar valores de costo negativos, iteración mediante un ciclo `for` para sumar el subtotal, cálculo del monto de impuesto basado en porcentajes, obtención del total en dólares y su conversión a moneda local, aplicación de reglas de precisión decimal mediante `toFixed(2)` y `parseFloat`, y categorización comercial del presupuesto del viaje según umbrales predefinidos.
* **Salida**: Un objeto que detalla el `subtotal_usd`, el `impuesto_usd`, el `presupuesto_total_usd`, el `presupuesto_total_local`, la `categoria_viaje` y una `explicacion` (o un objeto con un mensaje de `error` si los datos de entrada o la tasa de cambio no son válidos).

## Reglas identificadas

1. **Validación de Parámetros Financieros y Tasa de Cambio**: El porcentaje de impuesto y la tasa de cambio deben ser obligatoriamente de tipo numérico, y la tasa de cambio debe ser estrictamente mayor a cero para evitar divisiones o multiplicaciones inválidas.
2. **Cálculo de Impuestos y Conversión de Divisas**: El impuesto se obtiene aplicando el porcentaje sobre el subtotal acumulado; posteriormente, el total en dólares se multiplica por la tasa de cambio para proyectar el valor exacto en moneda local.
3. **Control de Precisión Decimal y Clasificación Comercial**: Todos los montos financieros se estandarizan a dos decimales usando `toFixed(2)` y `parseFloat` para evitar imprecisiones de punto flotante, clasificando finalmente el viaje en estándar, moderado o de lujo según el presupuesto total en USD.

## Pruebas

### Caso normal

* **Entrada**: `costosServicios = [450.50, 120.75, 300.00, 89.99]`, `impuestoPorcentaje = 12`, `tasaCambio = 4050`
* **Resultado esperado**: `{ subtotal_usd: 961.24, impuesto_usd: 115.35, presupuesto_total_usd: 1076.59, presupuesto_total_local: 4360069.45, categoria_viaje: "Turismo Moderado", explicacion: "Se calcularon y redondearon con precisión los costos de los servicios turísticos, sumando los impuestos correspondientes y convirtiéndolos a la moneda local mediante la tasa de cambio." }`

### Caso borde

* **Entrada**: `costosServicios = [49.99]`, `impuestoPorcentaje = 0`, `tasaCambio = 1.0`
* **Resultado esperado**: `{ subtotal_usd: 49.99, impuesto_usd: 0, presupuesto_total_usd: 49.99, presupuesto_total_local: 49.99, categoria_viaje: "Turismo Estándar / Económico", explicacion: "Se calcularon y redondearon con precisión los costos de los servicios turísticos, sumando los impuestos correspondientes y convirtiéndolos a la moneda local mediante la tasa de cambio." }`

## Explicacion final

La solución funciona porque implementa un pipeline financiero estructurado y defensivo. Combina la acumulación segura de costos con filtros de control para valores negativos, aplica operaciones aritméticas estándar de porcentajes y tasas de cambio, y utiliza de manera sistemática métodos de redondeo y estandarización decimal (`toFixed` y `parseFloat`). Esto garantiza que los resultados monetarios mantengan una precisión exacta y una clasificación comercial totalmente coherente.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Prueba de escritorio para cálculos financieros y de precisión**: Realiza manualmente la sumatoria de costos, aplica el porcentaje de gravamen y multiplica por la tasa de cambio proyectada utilizando papel o una calculadora estándar para comprobar que tus resultados numéricos con dos decimales coincidan exactamente con la salida del programa.
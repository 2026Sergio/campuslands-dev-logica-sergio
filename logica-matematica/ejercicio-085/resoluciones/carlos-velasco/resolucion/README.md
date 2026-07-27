# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo de objetos (`repuestos`) con los nombres y stocks actuales de cada pieza, y un valor numérico (`stockMinimoRequerido`) que define el límite umbral permitido.
* **Proceso**: Validación de existencia del inventario y del tipo de dato del límite mínimo, iteración elemento por elemento mediante un ciclo `for`, comparación del stock actual contra el umbral, cálculo cuantitativo del déficit de unidades faltantes en caso de incumplimiento, y consolidación del dictamen de cumplimiento global.
* **Salida**: Un objeto que detalla si se `cumple_limites`, el `total_repuestos_bajo_minimo`, una lista de `alertas` (o mensaje de conformidad) y una `explicacion` (o un objeto con un mensaje de `error` si los datos de entrada o el límite son inválidos).

## Reglas identificadas

1. **Validación de Parámetros y Límites**: El inventario no debe estar vacío y el stock mínimo requerido debe ser obligatoriamente un número válido mayor o igual a cero.
2. **Detección de Ruptura de Stock**: Si el `stockActual` de un repuesto es estrictamente menor al límite requerido, el sistema debe registrar una incidencia y calcular el déficit matemático exacto.
3. **Dictamen Global de Cumplimiento**: El estado general de límites (`cumple_limites`) solo será verdadero si el contador total de repuestos bajo el mínimo es estrictamente igual a cero.

## Pruebas

### Caso normal

* **Entrada**: `repuestos = [Pastillas de Freno: 3, Filtro de Aceite: 12, Bujías: 2, Líquido de Frenos: 10]`, `stockMinimoRequerido = 5`
* **Resultado esperado**: `{ cumple_limites: false, total_repuestos_bajo_minimo: 2, alertas: [ { repuesto: "Pastillas de Freno", stock_actual: 3, deficit_requerido: 2, estado: "Crítico / Bajo mínimo" }, { repuesto: "Bujías", stock_actual: 2, deficit_requerido: 3, estado: "Crítico / Bajo mínimo" } ], explicacion: "Se evaluaron los límites de stock mínimo (5 unidades) para cada repuesto, identificando aquellos que requieren reabastecimiento urgente en el taller." }`

### Caso borde

* **Entrada**: `repuestos = [Pastillas de Freno: 3, Filtro de Aceite: 12, Bujías: 2, Líquido de Frenos: 10]`, `stockMinimoRequerido = 1`
* **Resultado esperado**: `{ cumple_limites: true, total_repuestos_bajo_minimo: 0, alertas: [ "Todos los repuestos cumplen con el stock mínimo permitido." ], explicacion: "Se evaluaron los límites de stock mínimo (1 unidades) para cada repuesto, identificando aquellos que requieren reabastecimiento urgente en el taller." }`

## Explicacion final

La solución funciona porque ejecuta un proceso de auditoría cuantitativa rigurosa. Primero, previene fallos mediante validaciones defensivas estrictas sobre los tipos de datos y la existencia del inventario. Luego, recorre de forma secuencial cada elemento para evaluar su cumplimiento frente al umbral, calculando con precisión matemática el déficit exacto de unidades faltantes. Finalmente, consolida un reporte estructurado que indica claramente el estado general del taller y las alertas prioritarias de reabastecimiento.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Prueba de escritorio para umbrales**: Comprueba manualmente los cálculos de déficit restando el stock actual frente al límite mínimo utilizando tus casos de prueba antes de integrar la lógica en la iteración principal.
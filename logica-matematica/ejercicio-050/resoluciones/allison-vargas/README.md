# Plantilla de solucion - Redondeo y Precisión (Viajes y Turismo)

## Analisis

- Entrada:
  - `gastosServicios`: Lista de objetos donde cada elemento incluye `concepto` y `montoLocal`.
  - `tasaTasaCambioUSD`: Tasa de conversión de la divisa local a dólares americanos ($>0$).
  - `porcentajeImpuestoTuristico`: Porcentaje fiscal aplicable al subtotal del paquete ($\ge 0$).
- Proceso:
  - Validar que los montos, tasas e impuestos contengan tipos de datos numéricos coherentes.
  - Sumar los ítems para obtener el subtotal en moneda local y calcular el recargo de impuesto.
  - Aplicar operaciones de precisión decimal (`toFixed(2)` y `Math.round`) para evitar acumulaciones de error por coma flotante en transacciones financieras.
  - Convertir los valores totales y por concepto a USD.
  - Calcular la discrepancia exacta por ajuste de redondeo (`diferencia_redondeo_aplicada`).
  - Clasificar el plan turístico de acuerdo al monto final en USD.
- Salida:
  - Subtotal, impuesto, total exacto, total redondeado en moneda local, total final en USD, desglose por servicio, categoría de presupuesto y explicación.

## Reglas identificadas

1. **Cálculo de Impuesto y Totales:**  
   $$\text{Impuesto} = \text{Subtotal Local} \times \left( \frac{\text{Porcentaje Impuesto}}{100} \right)$$  
   $$\text{Total Local Exacto} = \text{Subtotal Local} + \text{Impuesto}$$
2. **Conversión de Divisa:**  
   $$\text{Total USD} = \text{round}_2 \left( \frac{\text{Total Local Exacto}}{\text{Tasa Cambio USD}} \right)$$
3. **Clasificación del Presupuesto:**
   - Si $\text{Total USD} \ge \$2,000$: "Paquete Premium / Lujo (Alta Gama)".
   - Si $\text{Total USD}$ entre $\$800$ y $\$1,999.99$: "Paquete Estándar (Turismo Confort)".
   - Si $\text{Total USD} < \$800$: "Paquete Económico / Mochilero".

## Pruebas

### Caso normal

Entrada:
- Servicios: `Vuelo (3500)`, `Hospedaje (2800)`, `Tours (1200)`
- Tasa de cambio: `7.80`
- Impuesto: `12%`

Resultado esperado:
- Subtotal local: `7500`
- Impuesto (12%): `900`
- Total local redondeado: `8400`
- Total USD: `$1076.92`
- Clasificación: `Paquete Estándar (Turismo Confort)`

### Caso borde

Entrada:
- Servicios: `Hostal (150.33)`
- Tasa de cambio: `7.77`
- Impuesto: `5%`

Resultado esperado:
- Total local exacto: `157.8465`
- Total local redondeado: `158`
- Total USD: `$20.31`
- Clasificación: `Paquete Económico / Mochilero`

## Explicacion final

La solución garantiza la precisión en la consolidación de presupuestos turísticos con conversión de divisas. El uso explícito de truncamiento a dos decimales y redondeo entero previene descalces financieros comunes en los cálculos flotantes de JavaScript.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.
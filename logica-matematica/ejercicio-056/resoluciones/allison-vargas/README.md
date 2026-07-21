# Plantilla de solucion - Presupuestos y Descuentos (Animación 3D)

## Analisis

- Entrada:
  - `duracionSegundos`: Tiempo total de la secuencia renderizada en segundos.
  - `costoPorSegundo`: Tarifa base por segundo de animación ($/s$).
  - `esClienteFrecuente`: Booleano que indica si aplica beneficio de fidelidad.
- Proceso:
  - Validar que los parámetros numéricos sean estrictamente mayores a cero.
  - Calcular el subtotal bruto: $\text{Subtotal} = t \times \text{tarifa}$.
  - Evaluar escala de descuentos acumulables:
    - Por volumen de producción (segundos total).
    - Por fidelidad del cliente ($5\%$).
  - Calcular el descuento en valor monetario y sustraerlo del subtotal.
  - Clasificar el tipo de producción 3D según el metraje.
- Salida:
  - Metraje, tarifa base, subtotal, porcentaje de descuento total, valor descontado, total neto a pagar, categoría y explicación detallada.

## Reglas identificadas

1. **Estructura de Descuentos por Volumen:**
   - Si $t \ge 60 \text{ s}$: $15\%$ de descuento.
   - Si $30 \le t < 60 \text{ s}$: $10\%$ de descuento.
   - Si $t < 30 \text{ s}$: $0\%$ de descuento por volumen.
2. **Descuento por Cliente Frecuente:**
   - Si `esClienteFrecuente` es `true`: $+5\%$ de descuento adicional.
3. **Fórmulas:**
   $$\text{Subtotal} = t \cdot \text{costo}_{seg}$$
   $$\text{Descuento} = \text{Subtotal} \cdot (\%_{\text{volumen}} + \%_{\text{cliente}})$$
   $$\text{Total Netos} = \text{Subtotal} - \text{Descuento}$$

## Pruebas

### Caso normal

Entrada:
- Duración: `45 s`
- Costo por segundo: `$100`
- Cliente frecuente: `true`

Resultado esperado:
- Subtotal: $45 \times 100 = \$4500$
- Descuento volumen ($10\%$) + Cliente ($5\%$) = $15\%$
- Monto Descuento: $4500 \times 0.15 = \$675$
- Total Final: $\$3825$
- Clasificación: `Mediano / Secuencia Cinematográfica`

### Caso borde

Entrada:
- Duración: `15 s`
- Costo por segundo: `$80`
- Cliente frecuente: `false`

Resultado esperado:
- Subtotal: $15 \times 80 = \$1200$
- Descuento total: $0\%$
- Total Final: $\$1200$
- Clasificación: `Corto / Clip Publicitario`

## Explicacion final

El algoritmo automatiza la cotización de proyectos de animación 3D aplicando lógica de negocios comercial. Al combinar incentivos por escala de producción y retención de clientes, ofrece una estructura transparente y parametrizada para la facturación en estudios de render y postproducción.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.
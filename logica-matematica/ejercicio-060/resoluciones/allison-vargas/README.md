# Plantilla de solucion - Simulaciones con Fórmulas (Comida Urbana)

## Analisis

- Entrada:
  - `configuracion`: Objeto con `diasSimulacion`, `pedidosPromedioDia`, `precioPromedioPlato`, `costoIngredientesPorcentaje`, `costosFijosDiarios` y `esFinDeSemana` (booleano).
- Proceso:
  - Validar que las variables cuantitativas correspondan a valores numéricos positivos.
  - Iterar durante el número de días definidos aplicando las fórmulas financieras:
    - Multiplicador por alta demanda en fines de semana: $+30\%$.
    - $\text{Ingreso Bruto} = \text{Pedidos} \times \text{Precio}$.
    - $\text{Costos Variables} = \text{Ingreso Bruto} \times \left( \frac{\%\text{Ingredientes}}{100} \right)$.
    - $\text{Costos Totales} = \text{Costos Variables} + \text{Costos Fijos}$.
    - $\text{Ganancia Neta} = \text{Ingreso Bruto} - \text{Costos Totales}$.
  - Determinar el margen acumulado de rentabilidad sobre las ventas:
    $$\text{Margen} = \left( \frac{\text{Ganancia Neta Total}}{\text{Ingresos Totales}} \right) \times 100$$
- Salida:
  - Totales financieros del periodo, porcentaje de rentabilidad, diagnóstico de viabilidad y desglose diario detallado.

## Reglas identificadas

1. **Aumento de Demanda por Fin de Semana:**
   - Si `esFinDeSemana` es `true` en los días $6$ y $7$: $\text{Pedidos} = \text{round}(\text{PedidosBase} \times 1.30)$.
2. **Evaluación de Viabilidad Financiera:**
   - Si $\text{Margen} \ge 30\%$: "Altamente Rentable / Modelo Escalable".
   - Si $15\% \le \text{Margen} < 30\%$: "Sostenible / Operación Estable".
   - Si $0\% < \text{Margen} < 15\%$: "Marginal / Ajustar Costos Directos".
   - Si $\text{Margen} \le 0\%$: "No Viable / Genera Pérdidas Operativas".

## Pruebas

### Caso normal

Entrada:
- $7$ días de simulación, $50$ pedidos/día a $\$12.5$, $35\%$ costo de ingredientes, $\$150$ costos fijos/día.

Resultado esperado:
- Días $1$ a $5$: $50$ pedidos/día $\rightarrow$ Ingreso $\$625$, Costos $\$368.75$, Ganancia $\$256.25$/día.
- Días $6$ y $7$: $65$ pedidos/día $\rightarrow$ Ingreso $\$812.50$, Costos $\$434.38$, Ganancia $\$378.12$/día.
- Totales acumulados calculados correctamente en la simulación.

### Caso borde

Entrada:
- $1$ día, $10$ pedidos a $\$8.0$ (Ingreso: $\$80$), $50\%$ ingrediente ($\$40$), Fijos: $\$100$.

Resultado esperado:
- Costos totales: $\$140$.
- Ganancia neta: $-\$60$.
- Margen: $-75\%$ $\rightarrow$ Clasificación: "No Viable / Genera Pérdidas Operativas".

## Explicacion final

El modelo de simulación proyecta el desempeño económico de un negocio de comida urbana mediante la aplicación estricta de fórmulas de costos fijos y variables. Permite evaluar la sensibilidad de la operación ante cambios en la demanda y variaciones de costos operativos.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.
# Plantilla de solucion - Validaciones Numéricas (Fórmulas Químicas)

## Analisis

- Entrada:
  - `compuestos`: Arreglo de objetos con los campos `formula` (string), `masaMolar` (número), `valencia` (número entero) y `ph` (número).
- Proceso:
  - Verificar la existencia de la lista de muestras.
  - Para cada registro, verificar que los valores numéricos cumplan sus restricciones de dominio:
    - $\text{masaMolar} > 0$
    - $1 \le \text{valencia} \le 7 \quad (\text{valencia} \in \mathbb{Z})$
    - $0 \le \text{ph} \le 14$
  - Acumular masas molares únicamente de los registros válidos para calcular la masa promedio.
  - Generar un reporte detallado clasificando los compuestos válidos por su nivel de acidez/alcalinidad e informando los errores de las muestras rechazadas.
- Salida:
  - Resumen estadístico del lote (total, válidos, inválidos, masa molar promedio) y lista con el desglose del análisis.

## Reglas identificadas

1. **Rango Físico-Químico:**
   - Masa Molar: De ser estrictamente mayor a $0\text{ g/mol}$.
   - Valencia: Entero dentro del intervalo $[1, 7]$.
   - pH: Escala estándar $[0, 14]$.
2. **Escala de pH para Muestras Válidas:**
   - $\text{pH} < 7$: Ácido.
   - $\text{pH} = 7$: Neutro.
   - $\text{pH} > 7$: Básico / Alcalino.

## Pruebas

### Caso normal

Entrada:
- Lote con 5 muestras: `H2O` (Válido), `HCl` (Válido), `NaOH` (Válido), `H2SO4` (Masa negative), `NH3` (pH > 14).

Resultado esperado:
- Evaluados: `5`
- Válidos: `3`
- Inválidos: `2`
- Masa molar promedio (Válidos): $\frac{18.015 + 36.46 + 39.99}{3} = 31.49\text{ g/mol}$

### Caso borde

Entrada:
- Muestras en los límites numéricos permitidos:
  - `Límites A`: Masa $0.001$, Valencia $1$, pH $0$.
  - `Límites B`: Masa $500$, Valencia $7$, pH $14$.

Resultado esperado:
- Ambas muestras son aceptadas como válidas por estar dentro de los umbrales cerrados de la prueba.

## Explicacion final

El programa asegura la integridad de los datos de laboratorio mediante un filtro riguroso de condiciones lógicas y numéricas. Este enfoque previene errores de cálculo derivados de entradas corruptas o imposibles desde el punto de vista fisicoquímico.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.
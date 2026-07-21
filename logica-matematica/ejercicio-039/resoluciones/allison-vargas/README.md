# Plantilla de solucion - Validaciones Numéricas (Fórmulas Químicas)

## Analisis

- Entrada:
  - `cantidadAtomos`: Número total de átomos presentes en la fórmula química.
  - `pesoMolecular`: Masa molecular total expresada en gramos por mol (g/mol).
- Proceso:
  - Verificar que los datos ingresados sean de tipo número.
  - Confirmar que la cantidad de átomos sea un número entero y positivo.
  - Comprobar que el peso molecular sea un valor positivo mayor a cero.
  - Calcular la masa promedio por átomo dividiendo el peso total entre los átomos.
  - Categorizar el tipo de compuesto químico según el peso promedio obtenido.
- Salida:
  - Confirmación de validez, total de átomos, peso molecular, promedio por átomo, clasificación y mensaje explicativo.

## Reglas identificadas

1. **Regla de integridad molecular:** La cantidad de átomos debe ser estrictamente un número entero positivo (no se permiten decimales ni valores negativos).
2. **Validación de masa:** El peso molecular debe ser mayor a 0 g/mol.
3. **Clasificación por masa promedio:**
   - Hasta 12 g/mol por átomo: "Compuesto Ligero (Predominio de Elementos Livianos)".
   - De 12.01 a 50 g/mol por átomo: "Compuesto Estándar (Molécula Orgánica u Óxido)".
   - Más de 50 g/mol por átomo: "Compuesto Pesado (Presencia de Metales o Complejos)".

## Pruebas

### Caso normal

Entrada:
- Cantidad de átomos: `3` (Molécula de H2O)
- Peso molecular: `18.015`

Resultado esperado:
- Es válido: `Sí`
- Peso promedio por átomo: `6`
- Clasificación: `Compuesto Ligero (Predominio de Elementos Livianos)`

### Caso borde

Entrada:
- Cantidad de átomos: `1` (Átomo de Hidrógeno)
- Peso molecular: `1.008`

Resultado esperado:
- Es válido: `Sí`
- Peso promedio por átomo: `1.01`
- Clasificación: `Compuesto Ligero (Predominio de Elementos Livianos)`

## Explicacion final

La solución funciona porque aplica filtros estricto para asegurar que los datos ingresados correspondan a la realidad química. Impide que se procesen formulas con fracciones de átomos o masas inexistentes y calcula de forma segura la densidad de masa por átomo para categorizar el compuesto.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.
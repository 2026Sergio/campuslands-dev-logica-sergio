## Analisis

Para resolver este problema se diseñó un modelo de simulación matemática determinista enfocado en la rentabilidad de puestos de comida urbana (food trucks, puestos de calle, etc.). El comportamiento de las ventas proyectadas se rige por un conjunto de factores multiplicativos (demanda base, clima, afluencia por ubicación) y costos fijos de operación diaria, permitiendo simular el rendimiento financiero a lo largo de una serie de días consecutivos.

- Entrada:
  - `puesto_datos`: Un diccionario/objeto con los parámetros del puesto (`precio_base`, `ventas_base_diarias`, `factor_clima`, `factor_ubicacion`, `costo_operativo_diario`).
  - `dias_simulacion`: Número entero que indica la cantidad de días a simular ($> 0$).

- Proceso:
  1. Validar la estructura y tipos de datos de entrada. Asegurar que los parámetros numéricos y la cantidad de días sean estrictamente mayores a cero ($> 0$).
  2. Para cada día de la simulación ($1$ hasta $N$):
     - Aplicar una variación de factor climático dinámico ($+2\%$ en días impares, $-1\%$ en días pares).
     - Calcular las unidades vendidas en el día mediante la fórmula de simulación:
       $\text{Unidades} = \lfloor \text{ventas\_base} \times \text{factor\_clima} \times \text{factor\_ubicacion} \times \text{variacion\_clima} \rfloor$
     - Calcular el ingreso diario: $\text{Ingreso} = \text{Unidades} \times \text{precio\_base}$.
     - Registrar el costo diario operativo.
     - Calcular la ganancia neta diaria: $\text{Ganancia} = \text{Ingreso} - \text{costo}$.
  3. Acumular unidades, ingresos, costos y ganancias netas totales a lo largo del periodo.
  4. Redondear los montos finales a dos decimales.

- Salida:
  - Un diccionario/objeto con el resumen general de la simulación (unidades totales, ingresos totales, costos totales, ganancia neta total, promedio diario) y el desglose de métricas por día. Si las entradas son inválidas o contienen parámetros negativos o nulos, la función retorna `None`.

## Reglas identificadas

1. **Fórmula de Proyección de Unidades:** Las unidades vendidas por día dependen directamente del producto de las variables del puesto y la fluctuación diaria, truncadas a un entero por tratarse de unidades discretas (productos alimenticios).
2. **Positividad Estricta de Parámetros:** Todos los factores, precios, ventas base y días de simulación deben ser estrictamente positivos ($> 0$).
3. **Modelado Financiero:** La ganancia neta acumulada resulta de la diferencia estricta entre el acumulado de ingresos y el acumulado de costos fijos operativos ($\text{Ganancia Total} = \text{Ingresos Totales} - \text{Costos Totales}$).

## Pruebas

### Caso normal

Entrada:
- `puesto_datos`:
  ```json
  {
    "precio_base": 12.0,
    "ventas_base_diarias": 100,
    "factor_clima": 1.1,
    "factor_ubicacion": 1.2,
    "costo_operativo_diario": 350.0
  }
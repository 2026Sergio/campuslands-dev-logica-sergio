# Solución Ejercicio 037: Redondeo y Precisión en Viajes

## Razonamiento del Problema

El problema consiste en calcular el costo final de un paquete de viaje. Se debe tomar un precio en moneda extranjera, convertirlo a la moneda local usando una tasa de cambio, aplicarle un impuesto y, finalmente, redondear el resultado a dos decimales para que represente un valor monetario válido.

## Reglas Aplicadas

1.  **Entradas**: La función recibe tres valores numéricos:
    *   `costoEnMonedaExtranjera`: El precio base del viaje.
    *   `tasaDeCambio`: El valor para convertir la moneda extranjera a la local.
    *   `impuestoPorcentual`: El porcentaje de impuesto que se debe añadir.

2.  **Regla 1 (Conversión de Moneda)**: El primer paso es multiplicar el `costoEnMonedaExtranjera` por la `tasaDeCambio` para obtener el costo en la moneda local.

3.  **Regla 2 (Cálculo de Impuesto)**: Se calcula el monto del impuesto aplicando el `impuestoPorcentual` al costo ya convertido a moneda local.

4.  **Regla 3 (Costo Total y Redondeo)**: Se suma el impuesto al costo en moneda local. El resultado final debe ser redondeado a dos decimales para asegurar la precisión monetaria. Se utiliza `Math.round(valor * 100) / 100` para un redondeo matemático correcto.

5.  **Salida**: La solución devuelve un objeto con el `costoFinal` y una `explicacion` que detalla los cálculos realizados.

## Cómo Ejecutar la Solución

El código está implementado en JavaScript en el archivo `evelyn-barrios.js`. Para ejecutarlo:

1.  Abre una terminal.
2.  Navega a la carpeta que contiene el archivo: `logica-matematica/ejercicio-037/resoluciones/evelyn-barrios/`.
3.  Ejecuta el script con Node.js:

    ```bash
    node evelyn-barrios.js
    ```

La salida mostrará los resultados de los casos de prueba.

## Casos de Prueba

1.  **Prueba 1 (Costo normal)**: Un cálculo directo sin decimales complejos.
    *   Entrada: `costoEnMonedaExtranjera: 100`, `tasaDeCambio: 4000`, `impuestoPorcentual: 19`
    *   Resultado Esperado: `costoFinal: 476000`.

2.  **Prueba 2 (Costo con redondeo)**: Un caso donde los cálculos intermedios producen múltiples decimales, poniendo a prueba la lógica de redondeo.
    *   Entrada: `costoEnMonedaExtranjera: 55.5`, `tasaDeCambio: 3950.75`, `impuestoPorcentual: 5.5`
    *   Resultado Esperado: `costoFinal: 231981.43`.
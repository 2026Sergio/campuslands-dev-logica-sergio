# Solución Ejercicio 042: Recursividad - Combinaciones de Ingredientes

## Razonamiento del Problema

El desafío es implementar una función que calcule el factorial de un número utilizando recursividad. En el contexto de un food truck, el factorial `n!` representa el número de maneras diferentes en que se pueden ordenar `n` ingredientes, lo cual es fundamental para entender la complejidad de crear nuevos platos.

La recursividad es una técnica donde una función se llama a sí misma para resolver una versión más pequeña del mismo problema, hasta que llega a un "caso base" que puede resolver directamente.

## Reglas Aplicadas

1.  **Entrada**:
    *   `n`: Un número entero no negativo para el cual se calculará el factorial.

2.  **Regla 1 (Caso Base)**: El punto de finalización de la recursividad. El factorial de 0 es, por definición, 1. Si la función recibe `n = 0`, debe devolver `1` y no llamarse a sí misma de nuevo.

3.  **Regla 2 (Paso Recursivo)**: Para cualquier número `n` mayor que 0, el factorial se define como `n` multiplicado por el factorial de `n-1`. La función se llama a sí misma con `n-1`, acercándose en cada paso al caso base.

4.  **Regla 3 (Validación)**: El factorial no está definido para números negativos. La función debe manejar esta entrada y devolver un resultado que indique un error (como `NaN`).

5.  **Salida**: La función devuelve el resultado numérico del cálculo del factorial.

## Cómo Ejecutar la Solución

El código está implementado en JavaScript en el archivo `evelyn-barrios.js`. Para ejecutarlo:

1.  Abre una terminal.
2.  Navega a la carpeta: `logica-matematica/ejercicio-042/resoluciones/evelyn-barrios/`.
3.  Ejecuta el script con Node.js:

    ```bash
    node evelyn-barrios.js
    ```

La salida mostrará los resultados de los diferentes casos de prueba.

## Casos de Prueba

1.  **Prueba 1 (Factorial de 5)**:
    *   Entrada: `5`.
    *   Resultado Esperado: `120`.

2.  **Prueba 2 (Factorial de 0)**:
    *   Entrada: `0`.
    *   Resultado Esperado: `1` (prueba del caso base).

3.  **Prueba 3 (Entrada inválida)**:
    *   Entrada: `-5`.
    *   Resultado Esperado: `NaN` (prueba de la validación).
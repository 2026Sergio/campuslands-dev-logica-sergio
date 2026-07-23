# Solución Ejercicio 051: Unit Testing (Pruebas Unitarias)

## Razonamiento del Problema

El desafío es escribir pruebas automatizadas para nuestra función `validarConEsquema` del ejercicio anterior. El objetivo de las pruebas unitarias es verificar que una pequeña "unidad" de código (generalmente una función) se comporta como se espera en diferentes situaciones. Esto nos da confianza para hacer cambios en el futuro sin romper funcionalidades existentes.

Para ello, simularemos un pequeño framework de pruebas con funciones como `describe`, `it` y `expect`.

## Reglas y Conceptos Aplicados

1.  **Prueba Unitaria (`Unit Test`)**: Es un fragmento de código que invoca a una función y comprueba que su resultado es el esperado.

2.  **Framework de Pruebas (Simulado)**:
    *   **`describe(descripcion, fn)`**: Agrupa un conjunto de pruebas relacionadas bajo un mismo nombre. Ayuda a organizar los tests.
    *   **`it(descripcion, fn)`**: Define un caso de prueba individual (un "test case"). Describe lo que la prueba debería hacer.
    *   **`expect(valorActual).toBe(valorEsperado)`**: Esta es la "aserción". Compara el resultado que nuestra función produjo (`valorActual`) con el que esperábamos (`valorEsperado`). Si no coinciden, lanza un error y la prueba falla.

3.  **Casos de Prueba (`Test Cases`)**: Son los diferentes escenarios que queremos probar. Un buen conjunto de pruebas incluye:
    *   **El "camino feliz"**: El caso donde todo funciona como se espera (un producto válido).
    *   **Casos de error**: Escenarios donde la función debería fallar (falta un campo, un tipo de dato es incorrecto).
    *   **Casos borde**: Situaciones especiales (como un campo opcional que está ausente).

4.  **Aserción (`Assertion`)**: Es la condición que debe ser verdadera para que la prueba pase. En nuestro caso, `expect(resultado.esValido).toBe(true)` es una aserción que verifica si la propiedad `esValido` del resultado es `true`.

## Cómo Ejecutar la Solución

El código está implementado en JavaScript en el archivo `evelyn-barrios.js`. Para ejecutar las pruebas:

1.  Abre una terminal.
2.  Navega a la carpeta: `logica-general/ejercicio-051/resoluciones/evelyn-barrios/`.
3.  Ejecuta el script con Node.js:

    ```bash
    node evelyn-barrios.js
    ```

La salida mostrará un resumen de las pruebas ejecutadas, indicando cuáles pasaron (`✅ [PASS]`) y cuáles fallaron (`❌ [FAIL]`).

## Casos de Prueba Implementados

Se han implementado las siguientes pruebas unitarias para la función `validarConEsquema`:

1.  **Prueba 1: Producto Válido**
    *   Verifica que un objeto que cumple con el esquema sea considerado válido.

2.  **Prueba 2: Campo Requerido Faltante**
    *   Verifica que un objeto al que le falta un campo obligatorio (`precio`) sea considerado inválido.

3.  **Prueba 3: Tipo de Dato Incorrecto**
    *   Verifica que un objeto con un tipo de dato erróneo (`precio` como `string`) sea considerado inválido.

4.  **Prueba 4: Campo Opcional Ausente**
    *   Verifica que un objeto sin el campo opcional (`descripcion`) siga siendo considerado válido.
# Solución Ejercicio 060 - Estrategias de Selección

**Autor:** Evelyn Barios

## 1. Análisis del Problema

El ejercicio 060, con temática de "comida urbana", pide aplicar una "estrategia de selección". He interpretado esto como la creación de un sistema de recomendación que ayude a un usuario a elegir un puesto de comida callejera entre varias opciones, basándose en un conjunto de preferencias personales (la estrategia).

El objetivo es filtrar una lista de puestos de comida disponibles y luego ordenarlos según criterios de calidad y conveniencia para presentar la mejor opción.

## 2. Reglas Aplicadas

-   **Entradas**: La función principal recibe dos argumentos:
    -   `puestos`: Un arreglo de objetos, donde cada objeto representa un puesto de comida con propiedades como `nombre`, `tipoComida`, `precioPromedio`, `distanciaMetros` y `calificacion`.
    -   `estrategia`: Un objeto que define las preferencias del usuario, como `tipoComida` (opcional), `presupuestoMax` y `distanciaMax`.

-   **Proceso (Estrategia de Selección)**:
    1.  **Filtrado**: El sistema primero filtra la lista de `puestos` para quedarse solo con aquellos que cumplen todas las condiciones de la `estrategia`:
        -   Coincide con el `tipoComida` si se especifica uno.
        -   El `precioPromedio` no supera el `presupuestoMax`.
        -   La `distanciaMetros` no supera la `distanciaMax`.
    2.  **Ranking**: Si quedan opciones después del filtrado, se ordenan para encontrar la "mejor". La regla de ranking es:
        -   Primero, se prioriza la `calificacion` más alta.
        -   En caso de empate en la calificación, se prefiere el que tenga la menor `distanciaMetros` (el más cercano).
    3.  **Selección**: Se elige el primer elemento de la lista ya ordenada, que corresponde a la mejor recomendación.

-   **Salidas**: La función devuelve un objeto con:
    -   `recomendacion`: El objeto completo del puesto de comida recomendado, o `null` si ninguno cumplió los criterios.
    -   `motivo`: Un texto que explica por qué se hizo esa recomendación o por qué no se encontró ninguna.

## 3. Cómo Ejecutar la Solución

1.  Abre una terminal.
2.  Navega a la carpeta donde se encuentra el archivo `evelyn-barios.js`.
3.  Ejecuta el script usando Node.js con el siguiente comando:

    ```bash
    node evelyn-barios.js
    ```

La salida en la consola mostrará los resultados de los casos de prueba definidos.

## 4. Casos de Prueba

### Caso de Prueba 1: Normal
-   **Estrategia**: Buscar tacos que cuesten máximo $16.000 y estén a menos de 500 metros.
-   **Resultado Esperado**: El sistema debe recomendar "Tacos El Vecino", ya que, aunque "Tacos El Jefe" también cumple, "El Vecino" tiene una calificación más alta (4.9 vs 4.5).

### Caso de Prueba 2: Borde (Sin Resultados)
-   **Estrategia**: Buscar sushi.
-   **Resultado Esperado**: El sistema debe devolver una recomendación `null` y un motivo que explique que no se encontraron puestos que cumplan los criterios, ya que no hay puestos de sushi en la lista de datos. Esto prueba el manejo de búsquedas sin éxito.

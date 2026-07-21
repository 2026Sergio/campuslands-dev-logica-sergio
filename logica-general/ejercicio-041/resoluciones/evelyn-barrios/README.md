# Solución Ejercicio 041: Algoritmos de Búsqueda - Guía de Food Trucks

## Razonamiento del Problema

El desafío es implementar una función de búsqueda para una guía de food trucks. La función debe permitir a un usuario encontrar food trucks buscando por su nombre o por su especialidad culinaria. La búsqueda debe ser flexible y no distinguir entre mayúsculas y minúsculas.

## Reglas Aplicadas

1.  **Entradas**:
    *   `foodTrucks`: Un arreglo de objetos, donde cada objeto representa un food truck y tiene las propiedades `nombre` y `especialidad`.
    *   `terminoBusqueda`: Un string con el texto que el usuario desea buscar.

2.  **Regla 1 (Búsqueda Flexible)**: La búsqueda debe encontrar coincidencias parciales. Por ejemplo, si se busca "Taco", deben aparecer los food trucks cuya especialidad sea "Tacos" o "Tacos y Burritos".

3.  **Regla 2 (Insensible a Mayúsculas)**: La comparación debe ignorar si las letras son mayúsculas o minúsculas. Para lograrlo, tanto el término de búsqueda como los campos del objeto se convierten a minúsculas antes de comparar.

4.  **Regla 3 (Búsqueda en Múltiples Campos)**: La función debe buscar el `terminoBusqueda` tanto en el `nombre` del food truck como en su `especialidad`.

5.  **Regla 4 (Casos Borde)**: Si el término de búsqueda está vacío o si la lista de food trucks no contiene elementos, la función debe devolver un arreglo vacío.

6.  **Salida**: La función devuelve un arreglo que contiene todos los objetos de food trucks que cumplen con los criterios de búsqueda. Si no hay coincidencias, devuelve un arreglo vacío.

## Cómo Ejecutar la Solución

El código está implementado en JavaScript en el archivo `evelyn-barrios.js`. Para ejecutarlo:

1.  Abre una terminal.
2.  Navega a la carpeta: `logica-matematica/ejercicio-041/resoluciones/evelyn-barrios/`.
3.  Ejecuta el script con Node.js:

    ```bash
    node evelyn-barrios.js
    ```

La salida mostrará los resultados de los diferentes casos de prueba.

## Casos de Prueba

1.  **Prueba 1 (Búsqueda por especialidad)**:
    *   Entrada: `terminoBusqueda: 'Tacos'`.
    *   Resultado Esperado: Encuentra dos food trucks que contienen "Tacos" en su especialidad.

2.  **Prueba 2 (Búsqueda por nombre)**:
    *   Entrada: `terminoBusqueda: 'Burger'`.
    *   Resultado Esperado: Encuentra el food truck "Burger World".

3.  **Prueba 3 (Búsqueda sin resultados)**:
    *   Entrada: `terminoBusqueda: 'Arepas'`.
    *   Resultado Esperado: Un arreglo vacío, ya que ningún food truck coincide.

4.  **Prueba 4 (Búsqueda vacía)**:
    *   Entrada: `terminoBusqueda: ''`.
    *   Resultado Esperado: Un arreglo vacío, como lo define la regla de casos borde.
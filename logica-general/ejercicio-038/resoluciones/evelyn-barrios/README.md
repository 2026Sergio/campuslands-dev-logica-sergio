# Solución Ejercicio 038: Ordenamiento de Datos en Competencia de Atletismo

## Razonamiento del Problema

El desafío consiste en procesar los resultados de una competencia de atletismo. Se recibe una lista de atletas con sus respectivos tiempos y se debe generar una tabla de posiciones final, ordenando a los competidores del más rápido al más lento y asignándoles un puesto.

## Reglas Aplicadas

1.  **Entradas**: La función principal recibe un único argumento:
    *   `atletas`: Un arreglo de objetos. Cada objeto representa a un atleta y contiene su `nombre` (string) y `tiempo` en segundos (número).

2.  **Regla 1 (Inmutabilidad)**: Para evitar efectos secundarios no deseados, la primera acción es crear una copia del arreglo de entrada. De esta manera, el arreglo original que se pasa a la función no es modificado.

3.  **Regla 2 (Ordenamiento)**: La copia del arreglo se ordena utilizando el método `sort()`. El criterio de ordenamiento es el `tiempo` de cada atleta, en orden ascendente (de menor a mayor), ya que un tiempo menor significa una mejor posición.

4.  **Regla 3 (Asignación de Puestos)**: Una vez que la lista está ordenada, se recorre con el método `map()` para generar un nuevo arreglo. A cada atleta se le añade una propiedad `puesto`, que corresponde a su índice en el arreglo ordenado más uno (el primer atleta, en el índice 0, ocupa el puesto 1).

5.  **Salida**: La función devuelve el nuevo arreglo de atletas, completamente ordenado y con los puestos asignados.

## Cómo Ejecutar la Solución

El código está implementado en JavaScript en el archivo `evelyn-barrios.js`. Para ejecutarlo y ver los resultados de las pruebas:

1.  Abre una terminal.
2.  Navega a la carpeta que contiene el archivo: `logica-matematica/ejercicio-038/resoluciones/evelyn-barrios/`.
3.  Ejecuta el script con Node.js:

    ```bash
    node evelyn-barrios.js
    ```

La salida mostrará la tabla de posiciones final y el resultado de otros casos de prueba.

## Casos de Prueba

1.  **Prueba 1 (Resultados de la competencia)**: Se utiliza una lista de competidores con diferentes tiempos, incluyendo un empate, para verificar que el ordenamiento y la asignación de puestos funcionen correctamente.
    *   Entrada: `[{ nombre: 'Carlos', tiempo: 10.5 }, { nombre: 'Ana', tiempo: 10.2 }, ...]`
    *   Resultado Esperado: Un arreglo ordenado donde Ana y María (ambas con 10.2s) ocupan los primeros puestos.

2.  **Prueba 2 (Competencia sin participantes)**: Se prueba con un arreglo vacío para asegurar que la función no falle y devuelva un arreglo vacío, lo cual es el comportamiento esperado.
    *   Entrada: `[]`
    *   Resultado Esperado: `[]`.
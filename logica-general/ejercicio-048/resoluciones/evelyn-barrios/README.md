# Solución Ejercicio 048: Flujos Paso a Paso

## Razonamiento del Problema

El desafío consiste en crear un sistema que decida cuál es el siguiente paso en un flujo de trabajo, basándose en un conjunto de reglas. Se recibe el estado de varios items, una prioridad y una regla principal, y se debe devolver una acción concreta con su justificación.

## Reglas Aplicadas

1.  **Entradas**:
    *   `items`: Un arreglo de strings que indica los estados de las tareas (ej: "aprobado", "pendiente", "bloqueado").
    *   `prioridad`: Un string que define la urgencia (ej: "alta").
    *   `regla`: Un string que establece la regla principal a seguir (ej: "revisar bloqueados primero").

2.  **Regla 1 (Bloqueo)**: Si la `regla` es "revisar bloqueados primero" y existe al menos un item "bloqueado", la acción prioritaria es revisarlo.

3.  **Regla 2 (Prioridad Alta)**: Si no hay bloqueos pero la `prioridad` es "alta" y hay items "pendientes", la siguiente acción es revisar los pendientes.

4.  **Regla 3 (Limpieza)**: Si no se cumplen las reglas anteriores y hay items "aprobados", la acción es archivarlos.

5.  **Regla por Defecto**: Si ninguna de las condiciones anteriores se cumple, la acción es esperar.

6.  **Salida**: La función devuelve un objeto con la `accion` a realizar y el `motivo` que la justifica.

## Cómo Ejecutar la Solución

El código está implementado en JavaScript en el archivo `evelyn-barrios.js`. Para ejecutarlo:

1.  Abre una terminal.
2.  Navega a la carpeta: `logica-general/ejercicio-048/resoluciones/evelyn-barrios/`.
3.  Ejecuta el script con Node.js:

    ```bash
    node evelyn-barrios.js
    ```

La salida mostrará los resultados de los diferentes casos de prueba.

## Casos de Prueba

1.  **Prueba 1 (Regla de bloqueo)**:
    *   Entrada: `items: ["aprobado", "pendiente", "bloqueado"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`.
    *   Resultado Esperado: La acción es "Revisar item bloqueado".

2.  **Prueba 2 (Prioridad alta)**:
    *   Entrada: `items: ["aprobado", "pendiente"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`.
    *   Resultado Esperado: La acción es "Revisar item pendiente".

3.  **Prueba 3 (Solo archivar)**:
    *   Entrada: `items: ["aprobado"]`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`.
    *   Resultado Esperado: La acción es "Archivar items aprobados".
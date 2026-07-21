# Solución Ejercicio 050: Validación de Datos con Esquemas

## Razonamiento del Problema

El desafío es crear un validador de datos genérico basado en un "esquema". Un esquema es una definición de la estructura que deben tener los datos. Antes de agregar un nuevo producto al sistema de nuestro food truck, debemos validar que el objeto del producto cumpla con las reglas definidas en el esquema, como tener los campos obligatorios y que cada campo tenga el tipo de dato correcto.

## Reglas y Conceptos Aplicados

1.  **Esquema (`Schema`)**: Se define un objeto (`productoSchema`) que actúa como plantilla. Cada clave en el esquema corresponde a un campo esperado en el objeto a validar, y su valor define las reglas (ej. `tipo: 'string'`, `requerido: true`).

2.  **Función de Validación Genérica**: Se crea una función `validarConEsquema` que recibe dos argumentos: el objeto de datos a validar y el esquema.

3.  **Validación de Campos Requeridos**: La función itera sobre el esquema. Para cada campo, verifica si la regla `requerido` es `true`. Si lo es, comprueba que el campo exista en el objeto de datos. Si no existe, agrega un error a una lista.

4.  **Validación de Tipos de Dato**: Si un campo existe, la función comprueba si su tipo (`typeof valor`) coincide con el `tipo` especificado en la regla del esquema. Si no coincide, agrega un error a la lista.

5.  **Salida Estructurada**: La función devuelve un objeto que contiene un booleano `esValido` (que es `true` solo si no se encontraron errores) y un arreglo `errores` con todos los mensajes de los problemas encontrados.

## Cómo Ejecutar la Solución

El código está implementado en JavaScript en el archivo `evelyn-barrios.js`. Para ejecutarlo:

1.  Abre una terminal.
2.  Navega a la carpeta: `logica-general/ejercicio-050/resoluciones/evelyn-barrios/`.
3.  Ejecuta el script con Node.js:

    ```bash
    node evelyn-barrios.js
    ```

La salida mostrará los resultados de la validación para tres productos diferentes.

## Casos de Prueba

1.  **Prueba 1 (Producto Válido)**:
    *   Entrada: Un objeto de producto que cumple con todas las reglas del esquema.
    *   Resultado Esperado: `{ esValido: true, errores: [] }`.

2.  **Prueba 2 (Producto Incompleto)**:
    *   Entrada: Un producto al que le falta un campo requerido (el `precio`).
    *   Resultado Esperado: `{ esValido: false, errores: ['El campo "precio" es requerido.'] }`.

3.  **Prueba 3 (Tipo de Dato Incorrecto)**:
    *   Entrada: Un producto donde un campo tiene un tipo de dato incorrecto (el `precio` es un `string` en lugar de un `number`).
    *   Resultado Esperado: `{ esValido: false, errores: ['El campo "precio" debe ser de tipo "number".'] }`.
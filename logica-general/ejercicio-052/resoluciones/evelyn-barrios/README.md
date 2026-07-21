# Solución Ejercicio 052: Debugging y Logging

## Razonamiento del Problema

El desafío es aprender a diagnosticar y entender el comportamiento de un programa utilizando técnicas de **logging** (registro de eventos) y **debugging** (depuración). Se nos presenta una función que procesa una cola de pedidos, pero uno de los pedidos tiene un formato incorrecto. Debemos usar las herramientas de la consola para registrar información clave en cada paso y así identificar qué está pasando.

## Reglas y Conceptos Aplicados

1.  **Logging (Registro)**: Consiste en imprimir mensajes en la consola para rastrear el flujo de ejecución y el estado de las variables en puntos clave.
    *   **`console.log()`**: Para información general sobre el flujo (ej. "Procesando pedido X").
    *   **`console.warn()`**: Para advertencias sobre situaciones que no son errores críticos pero que deberían ser notificadas (ej. "Stock insuficiente").
    *   **`console.error()`**: Para errores que impiden que una parte del programa funcione correctamente (ej. "Formato de pedido inválido").

2.  **Debugging (Depuración)**: Es el proceso de encontrar y corregir errores (bugs).
    *   **`debugger;`**: Es una instrucción de JavaScript que actúa como un punto de interrupción (breakpoint). Si las herramientas de desarrollador del navegador (o el depurador de Node.js) están abiertas, la ejecución del código se pausará en esa línea, permitiéndonos inspeccionar variables, la pila de llamadas y ejecutar el código paso a paso.

3.  **Análisis de Flujo**: La tarea principal es leer la salida de la consola para construir una narrativa de lo que hizo el programa: qué pedido procesó, qué validaciones realizó, por qué omitió un item y por qué falló un pedido completo.

## Cómo Ejecutar la Solución

El código está diseñado para ser ejecutado y analizado en un entorno que muestre la consola.

### En Node.js (Recomendado):

1.  Abre una terminal.
2.  Navega a la carpeta: `logica-general/ejercicio-052/resoluciones/evelyn-barrios/`.
3.  Ejecuta el script:

    ```bash
    node evelyn-barrios.js
    ```

4.  Observa la salida en la consola. Fíjate en los diferentes tipos de mensajes (`[INFO]`, `[WARN]`, `[ERROR]`).

### Para Depuración Avanzada (con `debugger`):

1.  En VS Code, abre el archivo `evelyn-barrios.js`.
2.  Descomenta la línea que contiene `debugger;`.
3.  Ve a la pestaña "Run and Debug" (Ctrl+Shift+D), y haz clic en "Run and Debug" seleccionando el entorno "Node.js".
4.  La ejecución se detendrá en la línea del `debugger`, y podrás inspeccionar el estado del programa.

## Casos de Prueba (Simulación en la Cola)

El script ejecuta una simulación con una cola de pedidos que incluye varios escenarios:

1.  **Pedidos Exitosos**: Los pedidos 1 y 5 se procesan correctamente. Los logs `[INFO]` mostrarán su progreso.

2.  **Pedido con Formato Inválido**: El pedido con `id: '003'` tiene un ID de tipo `string` en lugar de `number`. El log `[ERROR]` mostrará que este pedido fue detectado y omitido gracias a la validación.

3.  **Pedido con Stock Insuficiente**: El pedido 4 intenta comprar 10 hamburguesas cuando solo quedan 5. El log `[WARN]` mostrará que este item fue omitido por falta de stock.

Al final, el estado del inventario reflejará únicamente las ventas que se pudieron completar.
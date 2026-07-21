# Solución Ejercicio 043: Programación Orientada a Objetos - Food Truck

## Razonamiento del Problema

El desafío es modelar un `FoodTruck` utilizando los principios de la Programación Orientada a Objetos (OOP). En lugar de usar funciones aisladas que operan sobre datos, crearemos una `clase` que encapsule tanto los datos (estado) como las operaciones (comportamiento) del food truck.

Esto nos permite crear múltiples instancias de food trucks, cada una con su propio inventario y registro de ventas, de una manera organizada y reutilizable.

## Reglas y Conceptos Aplicados

1.  **Clase (`class`)**: Se define una plantilla `FoodTruck` para crear objetos.

2.  **Constructor (`constructor`)**: Es un método especial para crear e inicializar un objeto creado a partir de una clase. Recibe el `nombre`, `especialidad` y el `inventarioInicial`.

3.  **Propiedades (`this`)**: Cada instancia de `FoodTruck` tiene sus propias propiedades: `nombre`, `especialidad`, `inventario` y `ventasTotales`. `this` se refiere a la instancia actual del objeto.

4.  **Métodos**: Son funciones que pertenecen a la clase y definen su comportamiento.
    *   `vender(producto, cantidad)`: Verifica el stock, lo actualiza si la venta es posible y lleva un conteo de las unidades vendidas. Devuelve un mensaje de estado.
    *   `reponerStock(producto, cantidad)`: Aumenta la cantidad de un producto en el inventario.
    *   `obtenerReporte()`: Devuelve un objeto que resume el estado actual del food truck.

5.  **Encapsulamiento**: Los datos (inventario) y las operaciones (vender, reponer) están agrupados dentro de la clase `FoodTruck`, ocultando la complejidad interna.

## Cómo Ejecutar la Solución

El código está implementado en JavaScript en el archivo `evelyn-barrios.js`. Para ejecutar la simulación:

1.  Abre una terminal.
2.  Navega a la carpeta: `logica-matematica/ejercicio-043/resoluciones/evelyn-barrios/`.
3.  Ejecuta el script con Node.js:

    ```bash
    node evelyn-barrios.js
    ```

La salida mostrará el flujo de la simulación: creación del food truck, ventas (exitosas y fallidas), reposición de stock y un reporte final.

## Caso de Prueba (Simulación)

El caso de prueba principal crea una instancia de `FoodTruck` y realiza una secuencia de operaciones para demostrar cómo funciona el objeto:

1.  **Creación**: Se crea un `FoodTruck` llamado "El Buen Sabor" con un stock inicial.
2.  **Venta Exitosa**: Se venden 10 tacos. El stock de tacos debe disminuir.
3.  **Venta Fallida**: Se intentan vender 200 refrescos, pero solo hay 100. La operación falla y el stock no cambia.
4.  **Reposición**: Se añaden 150 refrescos al stock.
5.  **Segunda Venta**: Se vuelven a vender 200 refrescos, esta vez con éxito.
6.  **Reporte Final**: Se muestra el estado final del inventario y el total de unidades vendidas.
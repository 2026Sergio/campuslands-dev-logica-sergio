# Ejercicio 004: Motor de Filtrado y Clasificación de Inventario (Motos)

## Análisis del Problema

El objetivo es procesar un catálogo de motocicletas aplicando filtros dinámicos de exclusión y categorizando comercialmente los vehículos que superen los criterios de búsqueda.

* **Entrada:** Un objeto con el inventario y los criterios de búsqueda:
    * `motos`: Array de objetos, donde cada objeto contiene:
        * `modelo`: String (Nombre comercial).
        * `cilindraje`: Number (En centímetros cúbicos, cc).
        * `precio`: Number (Valor comercial en USD).
        * `stock`: Number (Unidades disponibles en almacén).
    * `filtros`: Objeto de configuración:
        * `ccMaximo`: Number (Límite superior de cilindraje).
        * `soloDisponibles`: Boolean (Filtro estricto de existencias).
* **Proceso:** 1. Recorrer secuencialmente el inventario de motocicletas.
    2. Aplicar compuertas lógicas de exclusión basadas en los criterios de `ccMaximo` y `soloDisponibles`.
    3. Clasificar los elementos aprobados inyectando la propiedad `categoria` según los rangos de precio.
* **Salida:** Un objeto con la estructura: `{ motosFiltradas: Array, resultado: string, motivo: string }`.

---

## Reglas de Negocio

1. **Restricción de Potencia:** Se excluye del resultado final cualquier motocicleta cuyo `cilindraje` sea estrictamente mayor al `ccMaximo` especificado.
2. **Disponibilidad de Almacén:** Si `soloDisponibles` es `true`, se descartan automáticamente los registros cuyo `stock` sea $\le 0$. Si es `false`, se ignorará esta restricción.
3. **Clasificación por Valor Comercial:** Las motocicletas que superen los filtros reciben una etiqueta en su propiedad `categoria` bajo los siguientes rangos:
    * `precio > 15000`: `"Premium"`
    * `precio < 4000`: `"Económica"`
    * `Cualquier otro precio`: `"Estándar"`

---

## Casos de Prueba

### 1. Procesamiento de Catálogo (Caso Normal)
* **Entrada:**
    ```json
    {
      "motos": [
        { "modelo": "Scooter Urbana 125", "cilindraje": 125, "precio": 2500, "stock": 10 },
        { "modelo": "Aventura Trail 250", "cilindraje": 250, "precio": 5500, "stock": 0 },
        { "modelo": "Sport Hyperbike 1000", "cilindraje": 1000, "precio": 18000, "stock": 2 }
      ],
      "filtros": { "ccMaximo": 400, "soloDisponibles": true }
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "motosFiltradas": [
        { "modelo": "Scooter Urbana 125", "cilindraje": 125, "precio": 2500, "stock": 10, "categoria": "Económica" }
      ],
      "resultado": "exito",
      "motivo": "Procesamiento completado. Se excluyó 1 modelo por falta de stock y 1 por exceder el cilindraje máximo."
    }
    ```

### 2. Catálogo sin Coincidencias (Filtros Estrictos)
* **Entrada:**
    ```json
    {
      "motos": [
        { "modelo": "Cruiser 600", "cilindraje": 600, "precio": 8500, "stock": 4 }
      ],
      "filtros": { "ccMaximo": 400, "soloDisponibles": false }
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "motosFiltradas": [],
      "resultado": "vacio",
      "motivo": "Ninguna motocicleta cumple con los criterios de búsqueda especificados."
    }
    ```

---

## Arquitectura de la Solución

La solución utiliza el método imperativo o declarativo (`Array.prototype.filter` seguido de un `Array.prototype.map`) para garantizar la inmutabilidad de los datos originales. La segmentación por valor comercial se delega a una función pura independiente, lo que facilita el mantenimiento si los rangos de precio o las etiquetas de las categorías cambian en el futuro.

---

## Ejecución del Módulo

1. Verifica tener instalado [Node.js](https://nodejs.org/) en tu máquina local.
2. Abre la consola de comandos en la ubicación de este ejercicio.
3. Lanza el script de ejecución:
    ```bash
    node maria-montepeque.js
    ```
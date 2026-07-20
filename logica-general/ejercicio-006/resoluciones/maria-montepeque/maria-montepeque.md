# Ejercicio 006: Motor de Búsqueda y Optimización de Catálogo (Hiperdeportivos)

## Análisis del Problema

El objetivo es implementar un algoritmo de búsqueda eficiente sobre un catálogo de vehículos de alto rendimiento, aplicando normalización de texto y una estrategia de salida temprana al hallar la primera coincidencia.

* **Entrada:** Un objeto contenedor con la base de datos y el parámetro de búsqueda:
    * `hiperdeportivos`: Array de objetos, donde cada objeto contiene:
        * `id`: String (Identificador único del vehículo).
        * `marca`: String (Fabricante).
        * `modelo`: String (Línea comercial).
        * `vMaxKmH`: Number (Velocidad máxima registrada).
    * `criterio`: Objeto de configuración:
        * `buscarPor`: String (Propiedad por la cual filtrar: `"id"`, `"marca"` o `"modelo"`).
        * `valor`: String | Number (El dato exacto a comparar).
* **Proceso:** 1. Validar la integridad de los datos de entrada y verificar que `buscarPor` sea una clave autorizada.
    2. Recorrer el catálogo mediante un bucle controlado.
    3. Normalizar las cadenas de texto a minúsculas para realizar una comparación insensible a mayúsculas/minúsculas (*case-insensitive*).
    4. Ejecutar un retorno inmediato (`break` / `return`) al encontrar la primera coincidencia para optimizar el uso de CPU.
* **Salida:** Un objeto con la estructura: `{ autoEncontrado: Object | null, resultado: string, motivo: string }`.

---

## Reglas de Negocio

1. **Restricción de Campos Operativos:** El motor de búsqueda solo procesará peticiones estructuradas bajo las claves autorizadas por el negocio (`"id"`, `"marca"`, `"modelo"`). Intentar buscar por cualquier otra propiedad (como `vMaxKmH`) o enviar valores nulos abortará el proceso inmediatamente.
2. **Optimización por Interrupción:** Por eficiencia algorítmica, una vez detectada la primera coincidencia exacta, el bucle debe interrumpirse de inmediato, previniendo lecturas iterativas innecesarias en el arreglo.
3. **Manejo Uniforme de Cadenas:** Las búsquedas basadas en texto se procesan convirtiendo ambos extremos comparativos a minúsculas (`.toLowerCase()`) para mitigar errores humanos de digitación.

---

## Casos de Prueba

### 1. Búsqueda Exitosa con Normalización (Caso Normal)
* **Entrada:**
    ```json
    {
      "hiperdeportivos": [
        { "id": "HPD-01", "marca": "Bugatti", "modelo": "Chiron Super Sport", "vMaxKmH": 490 },
        { "id": "HPD-02", "marca": "Koenigsegg", "modelo": "Jesko Absolut", "vMaxKmH": 531 }
      ],
      "criterio": { "buscarPor": "marca", "valor": "KOENIGSEGG" }
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "autoEncontrado": { "id": "HPD-02", "marca": "Koenigsegg", "modelo": "Jesko Absolut", "vMaxKmH": 531 },
      "resultado": "encontrado",
      "motivo": "Búsqueda exitosa. Se aplicó salida temprana tras coincidencia por marca (case-insensitive)."
    }
    ```

### 2. Rechazo por Clave No Autorizada (Caso Borde)
* **Entrada:**
    ```json
    {
      "hiperdeportivos": [
        { "id": "HPD-01", "marca": "Bugatti", "modelo": "Chiron", "vMaxKmH": 490 }
      ],
      "criterio": { "buscarPor": "vMaxKmH", "valor": 490 }
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "autoEncontrado": null,
      "resultado": "error",
      "motivo": "Propiedad de búsqueda no autorizada. Solo se permite buscar por id, marca o modelo."
    }
    ```

---

## Arquitectura de la Solución

La solución utiliza un enfoque de programación defensiva, validando las precondiciones antes de entrar al ciclo principal. Al mapear las claves permitidas en un arreglo de control (`["id", "marca", "modelo"]`), podemos usar `.includes()` para validar el criterio en tiempo de ejecución $O(1)$. La búsqueda finaliza inmediatamente al encontrar el elemento, reduciendo la complejidad en el mejor de los casos a $O(1)$ y manteniendo un peor escenario de $O(n)$.

---

## Ejecución del Script

1. Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión LTS).
2. Abre la terminal en el directorio asignado a este ejercicio.
3. Corre el archivo de la solución con el siguiente comando:
    ```bash
    node maria-montepeque.js
    ```
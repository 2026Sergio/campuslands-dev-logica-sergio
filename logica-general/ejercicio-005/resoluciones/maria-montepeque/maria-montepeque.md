# Ejercicio 005: Sistema de Gestión y Priorización de Colas de Atención (Taller)

## Análisis del Problema

El objetivo es desarrollar un módulo que ordene dinámicamente la secuencia de atención de los vehículos en un taller técnico, aplicando un criterio de ordenamiento de dos factores: jerarquía del servicio y tiempo de espera.

* **Entrada:** Un objeto con la lista de vehículos en espera:
    * `vehiculos`: Array de objetos, donde cada objeto contiene:
        * `placa`: String (Identificador único del vehículo).
        * `tipoServicio`: String (`"emergencia"`, `"mantenimiento"`, `"revision"`).
        * `antiguedadHoras`: Number (Tiempo transcurrido en la sala de espera, $\ge 0$).
* **Proceso:** 1. Interceptar colas vacías o inputs inválidos como contingencia.
    2. Realizar una clonación inmutable del arreglo original para preservar el histórico del taller.
    3. Aplicar un ordenamiento de doble factor (`.sort()`): primero por el peso jerárquico del servicio y, en caso de empate, de forma descendente por `antiguedadHoras`.
    4. Mapear los elementos ordenados para inyectar un identificador secuencial de turno.
* **Salida:** Un objeto con la estructura: `{ colaAtencion: Array, estado: string, motivo: string }`.

---

## Reglas de Negocio

1. **Jerarquía Operativa de Servicios:** Los servicios se priorizan según su gravedad mediante un sistema de pesos estáticos:
    * `"emergencia"` (Peso 3)
    * `"mantenimiento"` (Peso 2)
    * `"revision"` (Peso 1)
    Las emergencias siempre se posicionan al inicio de la cola de atención.
2. **Criterio de Desempate (FIFO por Antigüedad):** Ante dos o más vehículos con el mismo tipo de servicio, se prioriza aquel que acumule la mayor cantidad de `antiguedadHoras`.
3. **Inmutabilidad de Datos:** El algoritmo bajo ninguna circunstancia debe mutar el arreglo de entrada original enviado por el cliente.

---

## Casos de Prueba

### 1. Ordenamiento por Prioridad y Antigüedad (Caso Normal)
* **Entrada:**
    ```json
    {
      "vehiculos": [
        { "placa": "ABC-123", "tipoServicio": "mantenimiento", "antiguedadHoras": 2 },
        { "placa": "EMG-911", "tipoServicio": "emergencia", "antiguedadHoras": 1 },
        { "placa": "MNO-456", "tipoServicio": "mantenimiento", "antiguedadHoras": 4 }
      ]
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "colaAtencion": [
        { "turno": 1, "placa": "EMG-911", "tipoServicio": "emergencia", "antiguedadHoras": 1 },
        { "turno": 2, "placa": "MNO-456", "tipoServicio": "mantenimiento", "antiguedadHoras": 4 },
        { "turno": 3, "placa": "ABC-123", "tipoServicio": "mantenimiento", "antiguedadHoras": 2 }
      ],
      "estado": "procesado",
      "motivo": "Cola generada exitosamente. Se priorizó 1 emergencia y se desempataron 2 mantenimientos por antigüedad."
    }
    ```

### 2. Contingencia de Cola Vacía (Caso Borde)
* **Entrada:**
    ```json
    {
      "vehiculos": []
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "colaAtencion": [],
      "estado": "vacio",
      "motivo": "No existen vehículos en la sala de espera para procesar turnos."
    }
    ```

---

## Arquitectura de la Solución

El algoritmo implementa una función de comparación personalizada dentro del método de ordenamiento para resolver la prioridad en una sola pasada $O(n \log n)$. Al mapear los pesos en un objeto de búsqueda indexada (diccionario jerárquico), evitamos estructuras condicionales anidadas complejas (`if/else` interminables), manteniendo el código limpio, escalable y fácil de leer para otros desarrolladores.

---

## Ejecución del Script

1. Asegúrate de contar con la versión LTS de [Node.js](https://nodejs.org/) instalada.
2. Abre la consola de comandos en la ruta raíz de este ejercicio.
3. Ejecuta el entorno de pruebas ejecutando:
    ```bash
    node maria-montepeque.js
    ```
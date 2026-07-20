# Ejercicio 010: Motor de Viabilidad y Auditoría de Itinerarios Turísticos

## Análisis del Problema

El objetivo es implementar un motor de reglas de negocio que evalúe la viabilidad de un plan de viaje, validando restricciones legales migratorias, suficiencia presupuestaria y compatibilidad de preferencias climáticas del turista con el destino.

* **Entrada:** Un objeto contenedor `planViaje` estructurado de la siguiente forma:
    * `turista`: Objeto que contiene:
        * `presupuesto`: Number (Fondos disponibles en USD, $\ge 0$).
        * `tieneDocumentosAlDia`: Boolean (Estado legal del pasaporte/visado).
        * `preferenciaClima`: String (`"sol"`, `"nieve"`, `"indiferente"`).
    * `destino`: Objeto que contiene:
        * `nombre`: String (Nombre de la ciudad o país de destino).
        * `costoMinimo`: Number (Presupuesto base requerido para el viaje, $\ge 0$).
        * `requiereVisado`: Boolean (Exigencia legal migratoria del país).
        * `climaActual`: String (`"sol"`, `"nieve"`).
* **Proceso:** 1. Validar la integridad de los objetos y descartar argumentos nulos o vacíos.
    2. Evaluar el filtro migratorio de carácter excluyente (Short-Circuit).
    3. Comparar solvencia financiera mediante operadores relacionales.
    4. Contrastar cadenas de climatología para determinar el grado de satisfacción y el tipo de aprobación.
* **Salida:** Un objeto con la estructura: `{ itinerarioAprobado: boolean, estadoReserva: string, motivo: string }`.

---

## Reglas de Negocio

1. **Gobernanza Migratoria (Restricción Absoluta):** Si el destino `requiereVisado` es `true`, el turista está obligado a tener `tieneDocumentosAlDia` en `true`. Si no cumple esta condición, el itinerario se rechaza inmediatamente sin procesar el presupuesto o el clima.
2. **Suficiencia Financiera:** El `presupuesto` del turista debe ser estrictamente mayor o igual al `costoMinimo` estipulado por el destino. De lo contrario, el viaje es inviable.
3. **Mapeo de Preferencia Climática:** * Si la `preferenciaClima` es `"indiferente"`, se aprueba el viaje sin penalizaciones.
    * Si la preferencia es específica (`"sol"` o `"nieve"`) y coincide exactamente con el `climaActual` del destino, se aprueba el viaje de forma óptima.
    * Si la preferencia no coincide con el clima actual, el itinerario se aprueba pero cambia a un estado de alerta (`"aprobado_con_advertencia"`).

---

## Casos de Prueba

### 1. Viaje Aprobado con Advertencia de Clima (Caso Normal)
* **Entrada:**
    ```json
    {
      "planViaje": {
        "turista": { "presupuesto": 2500, "tieneDocumentosAlDia": true, "preferenciaClima": "sol" },
        "destino": { "nombre": "Suiza Alpina", "costoMinimo": 1800, "requiereVisado": true, "climaActual": "nieve" }
      }
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "itinerarioAprobado": true,
      "estadoReserva": "aprobado_con_advertencia",
      "motivo": "El turista cuenta con el visado requerido y fondos suficientes, pero el clima del destino (nieve) no coincide con su preferencia (sol)."
    }
    ```

### 2. Rechazo por Restricción Migratoria (Fallo Crítico)
* **Entrada:**
    ```json
    {
      "planViaje": {
        "turista": { "presupuesto": 5000, "tieneDocumentosAlDia": false, "preferenciaClima": "indiferente" },
        "destino": { "nombre": "Australia", "costoMinimo": 3000, "requiereVisado": true, "climaActual": "sol" }
      }
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "itinerarioAprobado": false,
      "estadoReserva": "rechazado",
      "motivo": "Fallo de gobernanza migratoria: El destino requiere visado y el turista no tiene sus documentos al día."
    }
    ```

### 3. Aprobación Óptima (Happy Path Completo)
* **Entrada:**
    ```json
    {
      "planViaje": {
        "turista": { "presupuesto": 2000, "tieneDocumentosAlDia": false, "preferenciaClima": "sol" },
        "destino": { "nombre": "Playa del Carmen", "costoMinimo": 1200, "requiereVisado": false, "climaActual": "sol" }
      }
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "itinerarioAprobado": true,
      "estadoReserva": "confirmado",
      "motivo": "Itinerario aprobado con éxito. Cumple con los requisitos financieros, migratorios y de preferencia climática."
    }
    ```

---

## Arquitectura de la Solución

La solución se implementa utilizando el principio de diseño de funciones guardianas (*Guard Clauses*), donde las condiciones de error o rechazo absoluto (falta de documentos o fondos insuficientes) rompen la ejecución de manera temprana. Esto previene el anidamiento excesivo de bloques `if/else`, garantizando que la evaluación climática final sólo se ejecute si el viaje ya es 100% viable a nivel legal y financiero, manteniendo una complejidad de tiempo constante $O(1)$.

---

## Ejecución del Módulo

1. Asegúrate de contar con [Node.js](https://nodejs.org/) instalado en tu entorno (versión LTS).
2. Abre la terminal de comandos en la ruta de este proyecto.
3. Ejecuta el script de auditoría mediante el comando:
    ```bash
    node maria-montepeque.js
    ```
# Ejercicio 019: Sistema de Control de Riesgos Biológicos e Inventario Químico

## Análisis del Problema

El objetivo es desarrollar un componente de software para un sistema de gestión de laboratorios que evalúe el estado operacional y de seguridad de las sustancias químicas y reactivos, aplicando prioridades dinámicas para detener o desviar los flujos de síntesis ante cualquier riesgo de contaminación o bloqueo de seguridad.

* **Entrada:** Un objeto contenedor con la siguiente firma:
    * `items`: Array de Strings (Estados de las sustancias químicas: `"aprobado"`, `"pendiente"`, `"bloqueado"`).
    * `prioridad`: String (Nivel de peligro o velocidad de respuesta del protocolo: `"alta"`, `"media"`, `"baja"`).
    * `regla`: String (Directriz del manual que especifica el orden de atención, ej: `"revisar bloqueados primero"`).
* **Proceso:** 1. Implementar cláusulas de guarda al inicio del método para denegar el paso a estructuras vacías, erróneas o nulas.
    2. Estandarizar todas las cadenas ingresadas a minúsculas (`.toLowerCase()`) para omitir falsos negativos por formato o errores humanos de digitación.
    3. Comprobar condicionalmente la coexistencia del criterio de riesgo: regla de bloqueo activa + al menos un elemento `"bloqueado"` real.
    4. Escalar a la evaluación de estados secundarios como reactivos en estado `"pendiente"` si el entorno es seguro.
* **Salida:** Un objeto con la estructura estricta: `{ accion: string, motivo: string }`.

---

## Reglas de Negocio

1. **Interrupción por Riesgo Químico:** Si la `prioridad` del laboratorio es `"alta"`, la `regla` es exactamente `"revisar bloqueados primero"` y la lista contiene al menos una muestra o sustancia `"bloqueado"`, se interrumpe la síntesis de inmediato y se retorna la acción `"revisar bloqueado"`.
2. **Prevención de Contaminación Cruzada:** Si el sistema está libre de bloqueos severos pero se registran compuestos en estado `"pendiente"`, se desvía la atención operativa devolviendo la acción `"auditar almacenamiento"`.
3. **Protocolo de Emergencia por Vacío (Caso Borde):** Si el lote de inventario enviado no contiene datos analizables (arreglo vacío), se activa un protocolo de contingencia controlado devolviendo la acción `"congelar laboratorio"`.

---

## Casos de Prueba

### 1. Interrupción por Sustancia Bloqueada (Caso Normal)
* **Entrada:**
    ```json
    {
      "items": ["aprobado", "pendiente", "bloqueado"],
      "prioridad": "alta",
      "regla": "revisar bloqueados primero"
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "accion": "revisar bloqueado",
      "motivo": "Se detectaron reactivos químicos bloqueados bajo alerta de alta prioridad. Línea de síntesis pausada."
    }
    ```

### 2. Desvío para Auditoría de Almacenamiento (Caso Alterno)
* **Entrada:**
    ```json
    {
      "items": ["aprobado", "pendiente"],
      "prioridad": "media",
      "regla": "revisar bloqueados primero"
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "accion": "auditar almacenamiento",
      "motivo": "Inventario libre de bloqueos críticos. Se procede a la revisión preventiva de compuestos en espera para evitar contaminación cruzada."
    }
    ```

### 3. Activación de Protocolo de Emergencia (Caso Borde)
* **Entrada:**
    ```json
    {
      "items": [],
      "prioridad": "alta",
      "regla": "revisar bloqueados primero"
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "accion": "congelar laboratorio",
      "motivo": "Ausencia total de datos de reactivos evaluables en el lote recibido. Protocolo de contingencia activado."
    }
    ```

---

## Arquitectura de la Solución

La solución utiliza el patrón de diseño de Cláusulas de Guarda (*Guard Clauses*) para sanear el flujo de control de la aplicación. Al evaluar y abortar el procesamiento al inicio de la función en caso de argumentos inválidos o colecciones vacías, evitamos el anidamiento innecesario de bloques `if/else` (*Arrow Anti-pattern*). La búsqueda de estados específicos dentro del array aprovecha métodos nativos optimizados del motor V8 de JavaScript, manteniendo una complejidad de tiempo en el peor de los casos de $O(n)$ y una estructura de código limpia, modular y altamente mantenible.

---

## Ejecución del Módulo

1. Asegúrate de contar con [Node.js](https://nodejs.org/) instalado en tu estación de trabajo (versión LTS recomendada).
2. Abre la consola de comandos o terminal en el directorio raíz de este ejercicio.
3. Ejecuta el script de la solución utilizando el comando:
    ```bash
    node maria-montepeque.js
    ```
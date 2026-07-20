# Ejercicio 015: Motor de Renderizado y Control de Capas de Diseño

## Análisis del Problema

El objetivo es desarrollar un componente de software para un entorno de ilustración digital que evalúe el estado operacional de las capas de un lienzo, aplicando prioridades dinámicas para detener o desviar el flujo de exportación ante cualquier bloqueo técnico de renderizado.

* **Entrada:** Un objeto contenedor con la siguiente firma:
    * `items`: Array de Strings (Estados de las capas del dibujo: `"aprobado"`, `"pendiente"`, `"bloqueado"`).
    * `prioridad`: String (Urgencia del flujo de diseño del entorno: `"alta"`, `"media"`, `"baja"`).
    * `regla`: String (Directriz de renderizado activa, ej: `"revisar bloqueados primero"`).
* **Proceso:** 1. Validar inicialmente mediante cláusulas de guarda que la lista no esté vacía ni los strings de control falten.
    2. Estandarizar todas las cadenas de texto recibidas a minúsculas (`.toLowerCase()`) para un procesamiento seguro y tolerante a fallos de formato.
    3. Verificar si coexiste un elemento `"bloqueado"` bajo la regla prioritaria de riesgos de alta prioridad.
    4. Manejar los flujos secundarios en caso de existir elementos de ilustración en estado `"pendiente"`.
* **Salida:** Un objeto con la estructura estricta: `{ accion: string, motivo: string }`.

---

## Reglas de Negocio

1. **Interrupción por Capa Bloqueada:** Si la `prioridad` del lienzo es `"alta"`, la `regla` es exactamente `"revisar bloqueados primero"` y se encuentra al menos una capa o archivo `"bloqueado"`, se interrumpe de inmediato la exportación ordinaria y se devuelve la acción `"revisar bloqueado"`.
2. **Flujo Secundario de Ilustración:** Si no existen incidencias de bloqueo pero el proyecto tiene componentes en estado `"pendiente"`, se debe proceder con la acción `"renderizar bocetos"`.
3. **Control de Configuración (Caso Borde):** Si los metadatos de configuración indispensables (`prioridad` o `regla`) se envían vacíos, nulos o indefinidos, el sistema de renderizado debe detenerse de forma segura indicando la acción `"revisar especificaciones"`.

---

## Casos de Prueba

### 1. Interrupción por Bloqueo de Capa (Caso Normal)
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
      "motivo": "Se detectaron capas bloqueadas bajo alerta de alta prioridad. Exportación pausada para revisión técnica."
    }
    ```

### 2. Derivación a Renderizado de Bocetos (Caso Alterno)
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
      "accion": "renderizar bocetos",
      "motivo": "Ecosistema libre de bloqueos críticos. Se procede al procesamiento preventivo de los componentes pendientes."
    }
    ```

### 3. Parada por Configuración Inválida (Caso Borde)
* **Entrada:**
    ```json
    {
      "items": ["aprobado", "pendiente", "bloqueado"],
      "prioridad": "",
      "regla": "revisar bloqueados primero"
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "accion": "revisar specifications",
      "motivo": "Metadatos indispensables ausentes o inválidos. Proceso de renderizado cancelado por seguridad."
    }
    ```

---

## Arquitectura de la Solución

La solución utiliza el patrón de diseño de Cláusulas de Guarda (*Guard Clauses*) para sanear el flujo de control de la aplicación. Al evaluar y abortar el procesamiento al inicio de la función en caso de argumentos inválidos o colecciones corruptas, evitamos el anidamiento innecesario de bloques `if/else` (*Arrow Anti-pattern*). La búsqueda de estados específicos dentro del array aprovecha métodos nativos optimizados del motor V8 de JavaScript, manteniendo una complejidad de tiempo en el peor de los casos de $O(n)$ y una estructura de código limpia, modular y mantenible.

---

## Ejecución del Módulo

1. Asegúrate de contar con [Node.js](https://nodejs.org/) instalado en tu estación de trabajo (versión LTS recomendada).
2. Abre la consola de comandos o terminal en el directorio raíz de este ejercicio.
3. Ejecuta el script de la solución utilizando el comando:
    ```bash
    node maria-montepeque.js
    ```
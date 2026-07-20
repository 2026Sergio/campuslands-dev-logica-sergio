# Ejercicio 001: Sistema de Priorización de Flujos

## Análisis del Problema

El objetivo es evaluar un conjunto de estados y su nivel de urgencia para determinar la acción inmediata a tomar y el motivo de dicha decisión.

* **Entradas:**
    * `items`: Array de strings que representan los estados actuales (`"aprobado"`, `"pendiente"`, `"bloqueado"`).
    * `prioridad`: String que define la urgencia del entorno (`"alta"`, `"media"`, `"baja"`).
* **Salida:**
    * Un objeto con la siguiente estructura: `{ accion: string, motivo: string }`.

---

## Reglas de Negocio

1.  **Riesgo Crítico:** Si la prioridad es `"alta"` y existe al menos un ítem en estado `"bloqueado"`, se detiene el flujo de trabajo para una revisión inmediata.
2.  **Flujo Pendiente:** Si no existen bloqueos pero la prioridad es `"alta"`, el foco de atención pasa a los elementos en estado `"pendiente"`.
3.  **Validación de Entrada (Caso Borde):** Si el arreglo de `items` está vacío o no es válido, el sistema debe retornar un error controlado en lugar de romper la ejecución.

---

## Casos de Prueba

### 1. Caso Crítico (Bloqueo con Prioridad Alta)
* **Entrada:** `items: ["aprobado", "bloqueado", "pendiente"]`, `prioridad: "alta"`
* **Resultado esperado:**
    ```json
    {
      "accion": "detener y revisar",
      "motivo": "Bloqueo crítico detectado en entorno de alta prioridad."
    }
    ```

### 2. Caso Normal (Flujo Pendiente)
* **Entrada:** `items: ["aprobado", "pendiente"]`, `prioridad: "media"`
* **Resultado esperado:**
    ```json
    {
      "accion": "revisar pendiente",
      "motivo": "Flujo normal: se atienden los casos pendientes en espera."
    }
    ```

### 3. Caso Borde (Lista Vacía)
* **Entrada:** `items: []`, `prioridad: "alta"`
* **Resultado esperado:**
    ```json
    {
      "accion": "error",
      "motivo": "No se proporcionó una lista de items válida."
    }
    ```

---

## Arquitectura de la Solución

La lógica se diseñó separando la validación inicial de datos de las reglas de negocio. La evaluación se realiza de manera descendente, priorizando el escenario más crítico (bloqueos en prioridad alta) y descendiendo hacia las soluciones por defecto. Esto evita que las reglas se solapen o se anulen entre sí.

---

## Ejecución del Proyecto

1.  Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión LTS recomendada).
2.  Abre una terminal en la raíz de este directorio.
3.  Ejecuta el script de la solución con el siguiente comando:
    ```bash
    node maria-montepeque.js
    ```
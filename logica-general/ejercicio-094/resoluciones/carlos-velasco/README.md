# Logica general 094 - diagnóstico de errores y auditoría de protocolos en estudios de tatuaje

## Motor de Verificación de Normas Sanitarias, Documentales y Materiales

Este script procesa un objeto con los datos de una sesión de tatuaje, aplicando de forma concurrente múltiples reglas de validación para detectar posibles infracciones de bioseguridad, omisiones documentales o irregularidades en los materiales, generando un diagnóstico técnico detallado.

* **Descripción del proceso:**
* **Validación de Integridad Global**: Comprueba si el objeto de datos de la sesión no existe o se encuentra vacío, retornando un mensaje de error preventivo.
* **Evaluación de Reglas de Diagnóstico (Acumulación de Infracciones)**:
* **Regla 1 (Esterilización de Equipos)**: Verifica si el equipo cuenta con certificación de esterilización (`equipoEsterilizado === false`). De ser así, registra la infracción con el código `ERR_01`.
* **Regla 2 (Consentimiento Documental)**: Comprueba la existencia del formulario firmado por el cliente (`consentimientoFirmado === false`). Si falta, almacena el error bajo el código `ERR_02`.
* **Regla 3 (Vigencia de Materiales)**: Detecta si se están empleando pigmentos con fecha de caducidad vencida (`tintaCaducada === true`), reportándolo con el código `ERR_03`.


* **Determinación de Estado**: Evalúa la cantidad total de errores acumulados. Si el conteo es mayor a cero, cambia el estado de la sesión a "Suspendida por Errores de Protocolo"; de lo contrario, se mantiene como "Aprobada para Procedimiento".
* **Retorno del Reporte**: Devuelve un objeto estructurado que indica si la sesión es válida, el estado actual, el total de errores, el detalle del diagnóstico o mensaje de conformidad, y la explicación del proceso.


* **Tecnologías:**
* JavaScript (manipulación de objetos, arreglos de acumulación, métodos de inserción `push`, estructuras condicionales independientes y operadores ternarios).



---

### Explicación técnica

1. **Evaluación Concurrente No Exclusiva**: A diferencia de los flujos con retorno anticipado, este algoritmo evalúa todas las reglas de forma independiente. Esto permite recopilar un informe integral de **todos** los fallos presentes en una sola ejecución en lugar de detenerse en el primer error.
2. **Estructura de Diagnóstico Estandarizada**: Cada anomalía detectada se encapsula en un objeto con un código único (`ERR_0X`), componente afectado y descripción detallada, facilitando su integración con sistemas de registro o interfaces de usuario.

### Lógica del Código

```javascript
const diagnosticarErroresEstudioTatuajes = (sesionTatuaje) => {
    // 1. Validar si los datos de la sesión existen
    if (!sesionTatuaje) {
        return { error: "Los datos de la sesión de tatuaje están vacíos o no son válidos." };
    }

    let erroresDetectados = [];
    let estadoSesion = "Aprobada para Procedimiento";

    // 2. Regla 1: Validar esterilización del equipo
    if (sesionTatuaje.equipoEsterilizado === false) {
        erroresDetectados.push({
            codigo: "ERR_01",
            componente: "Esterilización",
            descripcion: "El equipo de tatuaje no cuenta con certificación de esterilización."
        });
    }

    // 3. Regla 2: Validar estado de salud o consentimiento del cliente
    if (sesionTatuaje.consentimientoFirmado === false) {
        erroresDetectados.push({
            codigo: "ERR_02",
            componente: "Documentación",
            descripcion: "Falta el formulario de consentimiento informado firmado por el cliente."
        });
    }

    // 4. Regla 3: Validar condiciones de la tinta o materiales
    if (sesionTatuaje.tintaCaducada === true) {
        erroresDetectados.push({
            codigo: "ERR_03",
            componente: "Materiales",
            descripcion: "Se detectó el uso de pigmentos de tinta con fecha de caducidad vencida."
        });
    }

    const tieneErrores = erroresDetectados.length > 0;

    // 5. Determinar el estado general de la sesión
    if (tieneErrores) {
        estadoSesion = "Suspendida por Errores de Protocolo";
    }

    // 6. Retornar el reporte consolidado de diagnóstico
    return {
        sesion_valida: !tieneErrores,
        estado_actual: estadoSesion,
        total_errores: erroresDetectados.length,
        diagnostico_detalles: tieneErrores ? erroresDetectados : ["No se encontraron errores en la sesión de tatuajes."],
        explicacion: "Se aplicó un diagnóstico de errores iterativo para verificar normas de esterilización, documentación legal y calidad de materiales en el estudio de tatuajes."
    };
};

```

### Salida Esperada

```json
{
  "sesion_valida": true,
  "estado_actual": "Aprobada para Procedimiento",
  "total_errores": 0,
  "diagnostico_detalles": [
    "No se encontraron errores en la sesión de tatuajes."
  ],
  "explicacion": "Se aplicó un diagnóstico de errores iterativo para verificar normas de esterilización, documentación legal y calidad de materiales en el estudio de tatuajes."
}
{
  "sesion_valida": false,
  "estado_actual": "Suspendida por Errores de Protocolo",
  "total_errores": 2,
  "diagnostico_detalles": [
    {
      "codigo": "ERR_01",
      "componente": "Esterilización",
      "descripcion": "El equipo de tatuaje no cuenta con certificación de esterilización."
    },
    {
      "codigo": "ERR_03",
      "componente": "Materiales",
      "descripcion": "Se detectó el uso de pigmentos de tinta con fecha de caducidad vencida."
    }
  ],
  "explicacion": "Se aplicó un diagnóstico de errores iterativo para verificar normas de esterilización, documentación legal y calidad de materiales en el estudio de tatuajes."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-094/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco
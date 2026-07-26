# Logica general 095 - evaluación de reglas de negocio en proyectos de dibujo digital

## Motor de Auditoría y Validación Comercial para Arte Digital

Este script procesa un objeto con los datos de un proyecto de arte digital, aplicando un conjunto de reglas de negocio orientadas a verificar la calidad técnica, las restricciones estructurales y la compatibilidad de formatos antes de autorizar su comercialización.

* **Descripción del proceso:**
* **Validación de Integridad Global**: Comprueba si el objeto de datos del proyecto no existe o se encuentra vacío, retornando un mensaje de error preventivo.
* **Desestructuración de Parámetros**: Extrae las propiedades clave del objeto de entrada (`resolucionDpi`, `capasUtilizadas`, `formatoExportacion`, `esClientePremium`).
* **Evaluación de Reglas de Negocio**:
* **Regla 1 (Resolución DPI)**: Verifica si la resolución es menor a 300 DPI. Si no cumple, genera una advertencia y evalúa el estatus del cliente (`esClientePremium`); si no es premium, el proyecto se rechaza por estándar de calidad.
* **Regla 2 (Límite de Capas y Formato)**: Comprueba si se utilizan más de 50 capas combinadas con formatos que no soportan dicha complejidad (diferentes a `PSD_TIFF`). De ser así, rechaza el proyecto por incompatibilidad.
* **Regla 3 (Formato de Exportación Permitido)**: Valida que el formato de salida se encuentre dentro de la lista de opciones soportadas (`PNG`, `JPG`, `PSD_TIFF`, `PDF`). Si es inválido, rechaza el proyecto.


* **Bitácora de Reglas**: Almacena en un arreglo de trazabilidad el estatus y los detalles de cada regla evaluada.
* **Retorno del Reporte**: Devuelve un objeto estructurado que indica si el proyecto fue aprobado, el estado final, la bitácora de negocio y la explicación del proceso.


* **Tecnologías:**
* JavaScript (desestructuración de objetos, sentencias condicionales anidadas, validación de arreglos con `includes`, manipulación de bitácoras).



---

### Explicación técnica

1. **Evaluación Multicriterio Integrada**: El algoritmo audita de manera concurrente múltiples restricciones comerciales y técnicas, registrando cada hallazgo en una bitácora detallada para garantizar absoluta trazabilidad sobre los motivos de aprobación o rechazo.
2. **Excepciones Condicionales por Rol**: Incorpora lógica de negocio flexible (como el manejo de clientes premium frente a restricciones de resolución), permitiendo excepciones controladas sin comprometer la integridad del flujo general.

### Lógica del Código

```javascript
const evaluarReglasNegocioDibujoDigital = (proyectoArte) => {
    // 1. Validar si los datos del proyecto existen
    if (!proyectoArte) {
        return { error: "Los datos do proyecto de arte digital están vacíos o no son válidos." };
    }

    const { resolucionDpi, capasUtilizadas, formatoExportacion, esClientePremium } = proyectoArte;

    let estadoProyecto = "Aprobado para Comercialización";
    let bitacoraReglas = [];

    // 2. Regla 1: Validar resolución mínima para impresión o venta comercial (mínimo 300 DPI)
    if (resolucionDpi < 300) {
        bitacoraReglas.push({ regla: "Resolución DPI", estado: "Advertencia", detalle: "La resolución es menor a 300 DPI; no es apta para impresión de alta calidad." });
        if (!esClientePremium) {
            estadoProyecto = "Rechazado por Estándar de Calidad";
        }
    } else {
        bitacoraReglas.push({ regla: "Resolución DPI", estado: "Aprobado", detalle: "Cumple con el estándar óptimo de 300+ DPI." });
    }

    // 3. Regla 2: Validar límite de capas según el tipo de cliente o formato
    if (capasUtilizadas > 50 && formatoExportacion !== "PSD_TIFF") {
        estadoProyecto = "Rechazado por Compatibilidad de Formato";
        bitacoraReglas.push({ regla: "Límite de Capas", estado: "Incumplida", detalle: "Demasiadas capas (>50) para un formato plano o estándar." });
    } else {
        bitacoraReglas.push({ regla: "Límite de Capas", estado: "Aprobado", detalle: "Estructura de capas dentro de los parámetros permitidos." });
    }

    // 4. Regla 3: Validar formato de exportación permitido
    const formatosValidos = ["PNG", "JPG", "PSD_TIFF", "PDF"];
    if (!formatosValidos.includes(formatoExportacion)) {
        estadoProyecto = "Rechazado por Formato Inválido";
        bitacoraReglas.push({ regla: "Formato de Exportación", estado: "Error", detalle: "El formato indicado no está soportado por la plataforma." });
    } else {
        bitacoraReglas.push({ regla: "Formato de Exportación", estado: "Aprobado", detalle: `Formato ${formatoExportacion} aceptado.` });
    }

    // 5. Retornar el reporte consolidado de evaluación de negocio
    return {
        proyecto_aprobado: estadoProyecto === "Aprobado para Comercialización",
        estado_final: estadoProyecto,
        bitacora_negocio: bitacoraReglas,
        explicacion: "Se aplicaron las reglas de negocio específicas del estudio de dibujo digital, evaluando resoluciones DPI, restricciones de capas y compatibilidad de formatos de exportación."
    };
};

```

### Salida Esperada

```json
{
  "proyecto_aprobado": true,
  "estado_final": "Aprobado para Comercialización",
  "bitacora_negocio": [
    {
      "regla": "Resolución DPI",
      "estado": "Aprobado",
      "detalle": "Cumple con el estándar óptimo de 300+ DPI."
    },
    {
      "regla": "Límite de Capas",
      "estado": "Aprobado",
      "detalle": "Estructura de capas dentro de los parámetros permitidos."
    },
    {
      "regla": "Formato de Exportación",
      "estado": "Aprobado",
      "detalle": "Formato PSD_TIFF aceptado."
    }
  ],
  "explicacion": "Se aplicaron las reglas de negocio específicas del estudio de dibujo digital, evaluando resoluciones DPI, restricciones de capas y compatibilidad de formatos de exportación."
}
{
  "proyecto_aprobado": false,
  "estado_final": "Rechazado por Formato Inválido",
  "bitacora_negocio": [
    {
      "regla": "Resolución DPI",
      "estado": "Advertencia",
      "detalle": "La resolución es menor a 300 DPI; no es apta para impresión de alta calidad."
    },
    {
      "regla": "Límite de Capas",
      "estado": "Aprobado",
      "detalle": "Estructura de capas dentro de los parámetros permitidos."
    },
    {
      "regla": "Formato de Exportación",
      "estado": "Error",
      "detalle": "El formato indicado no está soportado por la plataforma."
    }
  ],
  "explicacion": "Se aplicaron las reglas de negocio específicas del estudio de dibujo digital, evaluando resoluciones DPI, restricciones de capas y compatibilidad de formatos de exportación."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-095/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco
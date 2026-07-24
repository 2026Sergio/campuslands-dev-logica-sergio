# Logica general 075 - sistema de evaluación de reglas de negocio para proyectos de diseño

## Motor de Validación Normativa y Técnica

Este script automatiza la verificación de criterios comerciales y técnicos para la exportación de proyectos de diseño gráfico e ilustración. El sistema audita múltiples reglas de calidad para garantizar que el archivo cumpla con los estándares de producción e impresión.

* **Descripción del proceso:**
* **Inicialización de Variables**: Define un arreglo vacío para recolectar incidencias (`errores`) y establece un estado predeterminado de aprobación (`"Aprobado para exportación"`).
* **Validación de Reglas de Negocio**:
* **Resolución y Uso**: Verifica que los proyectos comerciales mantengan al menos 300 DPI.
* **Compatibilidad de Formatos**: Advierte si se intenta exportar un archivo con más de 50 capas en formato JPG (lo que causaría pérdida de datos).
* **Gestión de Color**: Revisa que los proyectos comerciales utilicen el perfil de color adecuado (`CMYK`).


* **Dictamen Final**: Cambia el estado del proyecto a `"Revisión de reglas de negocio requerida"` si se detecta al menos un error, retornando un reporte con las advertencias o un mensaje de cumplimiento total.


* **Tecnologías:**
* JavaScript (acumulación de errores en arreglos, operadores lógicos avanzados, control condicional).



---

### Explicación técnica

1. **Auditoría Integral**: Al utilizar declaraciones `if` independientes en lugar de un bloque en cascada, el sistema logra identificar y enlistar simultáneamente todas las fallas técnicas presentes en el proyecto durante una única ejecución.
2. **Evaluación de Restricciones**: Las condiciones combinan variables técnicas (DPI, capas, formato) con requerimientos del modelo de negocio (uso comercial), asegurando que el diseño cumpla con los estándares de la industria antes de su entrega o impresión.

### Lógica del Código

```javascript
const evaluarProyectoDibujo = (proyecto) => {
    let errores = [];
    let estado = "Aprobado para exportación";

    // 1. Validar reglas técnicas y comerciales independientes
    if (proyecto.resolucionDPI < 300 && proyecto.usoComercial) {
        errores.push("El DPI es inferior a 300 para un proyecto de uso comercial.");
    }
    if (proyecto.capas > 50 && proyecto.formato === "JPG") {
        errores.push("El formato JPG no soporta la cantidad de capas utilizadas sin pérdida de datos.");
    }
    if (!proyecto.perfilColor || proyecto.perfilColor !== "CMYK" && proyecto.usoComercial) {
        errores.push("Se recomienda perfil CMYK para proyectos comerciales impresos.");
    }

    // 2. Actualizar estado si existen incidencias
    if (errores.length > 0) {
        estado = "Revisión de reglas de negocio requerida";
    }

    // 3. Retornar dictamen del proyecto
    return {
        estado_proyecto: estado,
        advertencias: errores.length > 0 ? errores : ["Cumple con todas las normativas de calidad y negocio."]
    };
};

```

### Salida Esperada

```json
{
  "estado_proyecto": "Aprobado para exportación",
  "advertencias": [
    "Cumple con todas las normativas de calidad y negocio."
  ]
}
{
  "estado_proyecto": "Revisión de reglas de negocio requerida",
  "advertencias": [
    "El DPI es inferior a 300 para un proyecto de uso comercial.",
    "El formato JPG no soporta la cantidad de capas utilizadas sin pérdida de datos.",
    "Se recomienda perfil CMYK para proyectos comerciales impresos."
  ]
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-075/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco
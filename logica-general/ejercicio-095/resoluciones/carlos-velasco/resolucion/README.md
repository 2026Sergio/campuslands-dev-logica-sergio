# Plantilla de solucion

## Analisis

* **Entrada**: Un objeto (`proyectoArte`) que contiene los parámetros técnicos y comerciales del proyecto de arte digital (`resolucionDpi`, `capasUtilizadas`, `formatoExportacion`, `esClientePremium`).
* **Proceso**: Validación de integridad global del objeto de entrada, desestructuración de propiedades, evaluación secuencial de múltiples reglas de negocio (verificación de resolución mínima de 300 DPI con excepciones para clientes premium, control de límite de capas en relación con formatos planos o avanzados, y validación de formatos de exportación permitidos), registro de cada hallazgo en una bitácora de trazabilidad, y determinación del estado final del proyecto.
* **Salida**: Un objeto que detalla si el `proyecto_aprobado` (true/false), el `estado_final`, la `bitacora_negocio` y una `explicacion` (o un objeto con un mensaje de `error` si el objeto de datos está vacío).

## Reglas identificadas

1. **Regla de Validación de Resolución DPI**: Si la resolución es menor a 300 DPI, se genera una advertencia; el proyecto solo se rechaza por este motivo si el cliente no cuenta con estatus premium (`esClientePremium === false`).
2. **Regla de Límite de Capas y Compatibilidad**: Si se utilizan más de 50 capas combinadas con un formato de exportación diferente a `PSD_TIFF`, el proyecto se rechaza por incompatibilidad de formato.
3. **Regla de Validación de Formato de Exportación Permitido**: El formato indicado debe encontrarse obligatoriamente dentro de la lista de opciones soportadas (`PNG`, `JPG`, `PSD_TIFF`, `PDF`); de lo contrario, el proyecto se rechaza por formato inválido.

## Pruebas

### Caso normal

* **Entrada**: `proyectoArte = { resolucionDpi: 300, capasUtilizadas: 25, formatoExportacion: "PSD_TIFF", esClientePremium: true }`
* **Resultado esperado**: `{ proyecto_aprobado: true, estado_final: "Aprobado para Comercialización", bitacora_negocio: [ { regla: "Resolución DPI", estado: "Aprobado", detalle: "Cumple con el estándar óptimo de 300+ DPI." }, { regla: "Límite de Capas", estado: "Aprobado", detalle: "Estructura de capas dentro de los parámetros permitidos." }, { regla: "Formato de Exportación", estado: "Aprobado", detalle: "Formato PSD_TIFF aceptado." } ], explicacion: "Se aplicaron las reglas de negocio específicas del estudio de dibujo digital, evaluando resoluciones DPI, restricciones de capas y compatibilidad de formatos de exportación." }`

### Caso borde

* **Entrada**: `proyectoArte = { resolucionDpi: 150, capasUtilizadas: 60, formatoExportacion: "BMP", esClientePremium: false }`
* **Resultado esperado**: `{ proyecto_aprobado: false, estado_final: "Rechazado por Formato Inválido", bitacora_negocio: [ { regla: "Resolución DPI", estado: "Advertencia", detalle: "La resolución es menor a 300 DPI; no es apta para impresión de alta calidad." }, { regla: "Límite de Capas", estado: "Aprobado", detalle: "Estructura de capas dentro de los parámetros permitidos." }, { regla: "Formato de Exportación", estado: "Error", detalle: "El formato indicado no está soportado por la plataforma." } ], explicacion: "Se aplicaron las reglas de negocio específicas del estudio de dibujo digital, evaluando resoluciones DPI, restricciones de capas y compatibilidad de formatos de exportación." }`

## Explicacion final

La solución funciona porque implementa un motor de auditoría de reglas de negocio que evalúa de forma estructurada y concurrente las restricciones técnicas y comerciales del diseño digital. Al integrar excepciones controladas (como el manejo de privilegios para clientes premium) y validaciones rigurosas de formatos y capacidades de capas, el algoritmo garantiza una toma de decisiones coherente, flexible y totalmente transparente gracias a su bitácora de trazabilidad.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Prueba de escritorio para reglas de negocio**: Simula manualmente diferentes combinaciones de resoluciones DPI, conteos de capas, formatos y tipos de clientes frente a las condiciones del sistema para comprobar que los veredictos de aprobación o rechazo y las entradas en la bitácora coincidan exactamente antes de implementar el código.
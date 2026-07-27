# Plantilla de solucion

## Analisis

* **Entrada**: Un objeto (`datosSalto`) que contiene los parámetros de simulación de paracaidismo (`alturaMetros`, `velocidadVientoKmh`, `equipoRevisado`, `licenciaValida`).
* **Proceso**: Validación de integridad global del objeto de entrada, desestructuración de propiedades, evaluación secuencial por fases mediante bloques condicionales con retornos anticipados (early return), verificación de seguridad fundamental (licencia y equipo), comprobación de condiciones meteorológicas de viento (< 35 km/h), validación de rangos de altitud óptima ($\ge$ 1000 metros), y registro detallado de cada paso en una bitácora de trazabilidad.
* **Salida**: Un objeto que detalla si el salto está `autorizado` (true/false), el `estado_salto`, la `bitacora` de pasos verificados y una `explicacion` (o un objeto con un mensaje de `error` si el objeto de datos está vacío).

## Reglas identificadas

1. **Regla de Seguridad Fundamental (Licencia y Equipo)**: Si la licencia del paracaidista no es válida o el equipo no ha sido revisado (`licenciaValida === false || equipoRevisado === false`), el salto se cancela de inmediato por protocolo de seguridad.
2. **Regla de Condiciones Meteorológicas (Límite de Viento)**: La velocidad del viento no debe superar los 35 km/h (`velocidadVientoKmh > 35`); en caso de exceder este umbral, el salto se suspende de forma preventiva por clima adverso.
3. **Regla de Validación de Altitud Óptima**: La altura del salto debe evaluarse para garantizar condiciones óptimas; si es menor a 1000 metros, se emite una advertencia de precaución por salto de baja altura, mientras que alturas superiores califican como estándar o profesional.

## Pruebas

### Caso normal

* **Entrada**: `datosSalto = { alturaMetros: 3500, velocidadVientoKmh: 15, equipoRevisado: true, licenciaValida: true }`
* **Resultado esperado**: `{ autorizado: true, estado_salto: "Autorizado para Salto Estándar / Profesional", bitacora: [ { paso: 1, veredicto: "Aprobado: equipo y licencia en regla." }, { paso: 2, veredicto: "Viento a 15 km/h dentro del rango seguro." }, { paso: 3, veredicto: "Altura óptima para ejecución del salto." } ], explicacion: "Se resolvió el caso integrando múltiples reglas de control para paracaidismo, evaluando seguridad, clima y altitud." }`

### Caso borde

* **Entrada**: `datosSalto = { alturaMetros: 3000, velocidadVientoKmh: 40, equipoRevisado: true, licenciaValida: true }`
* **Resultado esperado**: `{ autorizado: false, estado_salto: "Suspendido por Clima Adverso (Viento Fuerte)", bitacora: [ { paso: 1, veredicto: "Aprobado: equipo y licencia en regla." }, { paso: 2, veredicto: "Viento a 40 km/h excede el límite seguro de 35 km/h." } ], explicacion: "Las condiciones de velocidad del viento representan un riesgo elevado para el despliegue del paracaídas." }`

## Explicacion final

La solución funciona porque implementa un flujo de validación escalonado basado en el patrón de retorno anticipado (early return). Al priorizar la evaluación de los factores de mayor riesgo (como la seguridad del equipo y el clima) en las etapas iniciales, el algoritmo interrumpe la ejecución ante cualquier incumplimiento normativo crítico. Esto garantiza respuestas rápidas, seguras y completamente trazables mediante un registro de bitácora detallado.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Prueba de escritorio para resolución de casos normativos**: Simula manualmente diferentes combinaciones de estados de seguridad, velocidades de viento y altitudes frente a los umbrales establecidos para comprobar que los veredictos de aprobación, suspensión o cancelación coincidan exactamente antes de implementar el código condicional.
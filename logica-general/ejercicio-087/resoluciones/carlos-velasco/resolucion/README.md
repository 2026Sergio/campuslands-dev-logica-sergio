# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo de objetos (`playlist`) que contiene los metadatos de las canciones (incluyendo `id`, `titulo`, `duracion`, `reproducida` y `contadorReproducciones`).
* **Proceso**: Validación de existencia y tipo de arreglo de la playlist, iteración elemento por elemento mediante un ciclo `for`, evaluación de múltiples reglas de consistencia de manera aislada (duración positiva, validez y no vacuidad del título, y coherencia lógica entre el estado de reproducción y su contador), acumulación de fallos por canción, y estructuración de un reporte global de auditoría.
* **Salida**: Un objeto que detalla si la `playlist_consistente` es verdadera o falsa, el `total_inconsistencias`, los `detalles_inconsistencias` (o mensaje de conformidad) y una `explicacion` (o un objeto con un mensaje de `error` si la playlist no es válida).

## Reglas identificadas

1. **Validación de Duración Válida**: La duración de cada canción debe ser obligatoriamente un valor numérico estrictamente mayor a cero.
2. **Validación de Título Obligatorio**: El título de la canción debe existir, ser una cadena de texto válida y no estar compuesto únicamente por espacios vacíos.
3. **Coherencia Lógica de Reproducción**: Si una canción está marcada explícitamente como reproducida (`reproducida: true`), su contador de reproducciones no puede ser cero, evitando contradicciones en los metadatos.

## Pruebas

### Caso normal

* **Entrada**: `[ { id: "s1", titulo: "Bohemian Rhapsody", duracion: 5.5, reproducida: true, contadorReproducciones: 12 }, { id: "s2", titulo: "Stairway to Heaven", duracion: 8.0, reproducida: false, contadorReproducciones: 0 } ]`
* **Resultado esperado**: `{ playlist_consistente: true, total_inconsistencias: 0, detalles_inconsistencias: [ "No se encontraron inconsistencias en la playlist." ], explicacion: "Se aplicaron reglas lógicas de validación para detectar anomalías en la duración, título y metadatos de reproducción de cada canción." }`

### Caso borde

* **Entrada**: `[ { id: "s3", titulo: "", duracion: -2, reproducida: true, contadorReproducciones: 0 }, { id: "s4", titulo: "Hotel California", duracion: 6.3, reproducida: false, contadorReproducciones: 5 } ]`
* **Resultado esperado**: `{ playlist_consistente: false, total_inconsistencias: 2, detalles_inconsistencias: [ { indice: 0, cancion_id: "s3", inconsistencias_detectadas: [ "duración inválida o menor/igual a cero", "título faltante o vacío", "inconsistencia: marcada como reproducida pero con contador en cero" ] }, { indice: 1, cancion_id: "s4", inconsistencias_detectadas: [ "inconsistencia: marcada como reproducida pero con contador en cero" ] } ], explicacion: "Se aplicaron reglas lógicas de validación para detectar anomalías en la duración, título y metadatos de reproducción de cada canción." }`

## Explicacion final

La solución funciona porque implementa un sistema de auditoría multicriterio independiente y defensivo. Al recorrer la colección de canciones, evalúa cada regla de negocio de forma aislada, permitiendo registrar múltiples anomalías dentro de un mismo elemento. Esto garantiza un diagnóstico detallado, un manejo seguro de metadatos faltantes mediante identificadores por defecto, y un reporte consolidado altamente confiable sobre el estado de la playlist.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Prueba de escritorio para reglas de consistencia**: Simula manualmente casos de prueba donde se crucen estados contradictorios (como indicadores booleanos y contadores numéricos opuestos) para asegurar que el sistema capture todas las combinaciones de anomalías previstas antes de programar la lógica iterativa.
# Logica general 087 - detección de inconsistencias en playlist musical

## Motor de Auditoría y Validación de Metadatos de Canciones

Este script procesa un arreglo de objetos que representan una playlist musical para identificar anomalías o fallos estructurales aplicando reglas lógicas estrictas sobre la duración, el título y los contadores de reproducción de cada elemento.

* **Descripción del proceso:**
* **Validación del Arreglo Global**: Comprueba si la playlist es nula, no corresponde a una estructura de tipo arreglo o está vacía, retornando un objeto de error en caso de cumplirse.
* **Iteración y Auditoría por Canción (`for`)**: Recorre cada elemento del arreglo registrando problemas específicos mediante acumuladores independientes:
* **Regla 1 (Duración)**: Verifica que la duración sea un valor numérico estrictamente mayor a cero.
* **Regla 2 (Título)**: Valida que el título exista, sea una cadena de texto válida y no contenga espacios vacíos.
* **Regla 3 (Lógica de Reproducción)**: Detecta contradicciones lógicas, como canciones marcadas explícitamente como reproducidas (`reproducida: true`) pero con un contador de reproducciones en cero.


* **Consolidación de Anomalías**: Si una canción presenta uno o más fallos, se agrega un reporte con su índice, identificador y lista de problemas detectados.
* **Retorno del Reporte**: Devuelve un objeto estructurado que indica si la playlist es consistente en su totalidad, el total de incidencias y el detalle de las anomalías encontradas.


* **Tecnologías:**
* JavaScript (ciclos iterativos `for`, validación de tipos, manipulación de arreglos y objetos, lógica booleana condicional).



---

### Explicación técnica

1. **Auditoría Multicriterio Independiente**: Al evaluar múltiples reglas de manera aislada por cada elemento, el sistema puede acumular diversos errores dentro de una misma canción, ofreciendo un reporte de diagnóstico mucho más completo y preciso.
2. **Resiliencia ante Metadatos Faltantes**: El código maneja de forma segura identificadores ausentes mediante operadores de cortocircuito (`||`), asignando etiquetas predeterminadas para evitar fallos de referencia.

### Lógica del Código

```javascript
const detectarInconsistenciasPlaylist = (playlist) => {
    // 1. Validar si la playlist está vacía o no es un arreglo válido
    if (!playlist || !Array.isArray(playlist) || playlist.length === 0) {
        return { error: "La playlist está vacía o no es un arreglo válido." };
    }

    let inconsistencias = [];

    // 2. Iterar sobre cada canción evaluando reglas de consistencia
    for (let i = 0; i < playlist.length; i++) {
        const cancion = playlist[i];
        let problemasCancion = [];

        // Regla 1: Duración negativa o igual a cero
        if (typeof cancion.duracion !== 'number' || cancion.duracion <= 0) {
            problemasCancion.push("duración inválida o menor/igual a cero");
        }

        // Regla 2: Título vacío o no válido
        if (!cancion.titulo || typeof cancion.titulo !== 'string' || cancion.titulo.trim() === "") {
            problemasCancion.push("título faltante o vacío");
        }

        // Regla 3: Inconsistencia lógica de reproducción
        if (cancion.reproducida === true && cancion.contadorReproducciones === 0) {
            problemasCancion.push("inconsistencia: marcada como reproducida pero con contador en cero");
        }

        // Registrar anomalías si existen
        if (problemasCancion.length > 0) {
            inconsistencias.push({
                indice: i,
                cancion_id: cancion.id || `Desconocido_${i}`,
                inconsistencias_detectadas: problemasCancion
            });
        }
    }

    const tieneInconsistencias = inconsistencias.length > 0;

    // 3. Retornar el reporte consolidado de auditoría
    return {
        playlist_consistente: !tieneInconsistencias,
        total_inconsistencias: inconsistencias.length,
        detalles_inconsistencias: tieneInconsistencias ? inconsistencias : ["No se encontraron inconsistencias en la playlist."],
        explicacion: "Se aplicaron reglas lógicas de validación para detectar anomalías en la duración, título y metadatos de reproducción de cada canción."
    };
};

```

### Salida Esperada

```json
{
  "playlist_consistente": true,
  "total_inconsistencias": 0,
  "detalles_inconsistencias": [
    "No se encontraron inconsistencias en la playlist."
  ],
  "explicacion": "Se aplicaron reglas lógicas de validación para detectar anomalías en la duración, título y metadatos de reproducción de cada canción."
}
{
  "playlist_consistente": false,
  "total_inconsistencias": 2,
  "detalles_inconsistencias": [
    {
      "indice": 0,
      "cancion_id": "s3",
      "inconsistencias_detectadas": [
        "duración inválida o menor/igual a cero",
        "título faltante o vacío",
        "inconsistencia: marcada como reproducida pero con contador en cero"
      ]
    },
    {
      "indice": 1,
      "cancion_id": "s4",
      "inconsistencias_detectadas": [
        "inconsistencia: marcada como reproducida pero con contador en cero"
      ]
    }
  ],
  "explicacion": "Se aplicaron reglas lógicas de validación para detectar anomalías en la duración, título y metadatos de reproducción de cada canción."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-087/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco
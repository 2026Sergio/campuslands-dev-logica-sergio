const detectarInconsistenciasPlaylist = (playlist) => {
    if (!playlist || !Array.isArray(playlist) || playlist.length === 0) {
        return { error: "La playlist está vacía o no es un arreglo válido." };
    }

    let inconsistencias = [];

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

        // Regla 3: Inconsistencia lógica de reproducción (ej. reproducida pero sin reproducciones registradas)
        if (cancion.reproducida === true && cancion.contadorReproducciones === 0) {
            problemasCancion.push("inconsistencia: marcada como reproducida pero con contador en cero");
        }

        if (problemasCancion.length > 0) {
            inconsistencias.push({
                indice: i,
                cancion_id: cancion.id || `Desconocido_${i}`,
                inconsistencias_detectadas: problemasCancion
            });
        }
    }

    const tieneInconsistencias = inconsistencias.length > 0;

    return {
        playlist_consistente: !tieneInconsistencias,
        total_inconsistencias: inconsistencias.length,
        detalles_inconsistencias: tieneInconsistencias ? inconsistencias : ["No se encontraron inconsistencias en la playlist."],
        explicacion: "Se aplicaron reglas lógicas de validación para detectar anomalías en la duración, título y metadatos de reproducción de cada canción."
    };
};

const playlistNormal = [
    { id: "s1", titulo: "Bohemian Rhapsody", duracion: 5.5, reproducida: true, contadorReproducciones: 12 },
    { id: "s2", titulo: "Stairway to Heaven", duracion: 8.0, reproducida: false, contadorReproducciones: 0 }
];

const playlistConInconsistencias = [
    { id: "s3", titulo: "", duracion: -2, reproducida: true, contadorReproducciones: 0 },
    { id: "s4", titulo: "Hotel California", duracion: 6.3, reproducida: false, contadorReproducciones: 5 }
];

console.log(detectarInconsistenciasPlaylist(playlistNormal));
console.log(detectarInconsistenciasPlaylist(playlistConInconsistencias));
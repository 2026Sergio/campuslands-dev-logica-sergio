function analizarSecuenciaPlaylist(canciones) {
    // Validar que la entrada sea un arreglo no vacío
    if (!Array.isArray(canciones) || canciones.length === 0) {
        return {
            error: true,
            mensaje: "Se debe proporcionar una lista no vacía de canciones."
        };
    }

    let duracionTotalSegundos = 0;
    let esSecuenciaMonotonaCreciente = true;
    let esSecuenciaMonotonaDecreciente = true;

    for (let i = 0; i < canciones.length; i++) {
        const cancion = canciones[i];

        // Validar estructura de cada objeto de la playlist
        if (
            !cancion ||
            typeof cancion.titulo !== "string" ||
            typeof cancion.duracionSegundos !== "number" ||
            !Number.isInteger(cancion.duracionSegundos) ||
            cancion.duracionSegundos <= 0
        ) {
            return {
                error: true,
                mensaje: "Cada canción debe incluir título (texto) y duracionSegundos (entero > 0)."
            };
        }

        duracionTotalSegundos += cancion.duracionSegundos;

        // Evaluar la secuencia numérica comparando con el elemento anterior
        if (i > 0) {
            const duracionAnterior = canciones[i - 1].duracionSegundos;

            if (cancion.duracionSegundos <= duracionAnterior) {
                esSecuenciaMonotonaCreciente = false;
            }
            if (cancion.duracionSegundos >= duracionAnterior) {
                esSecuenciaMonotonaDecreciente = false;
            }
        }
    }

    // Convertir segundos acumulados a formato mm:ss
    const minutos = Math.floor(duracionTotalSegundos / 60);
    const segundosRestantes = duracionTotalSegundos % 60;
    const duracionFormateada = `${minutos}:${segundosRestantes < 10 ? "0" : ""}${segundosRestantes}`;

    // Determinar la estructura de la secuencia en la playlist
    let tipoSecuencia = "";
    if (canciones.length === 1) {
        tipoSecuencia = "Pista Única (Sin Secuencia Comparativa)";
    } else if (esSecuenciaMonotonaCreciente) {
        tipoSecuencia = "In crescendo (Duración Estrictamente Creciente)";
    } else if (esSecuenciaMonotonaDecreciente) {
        tipoSecuencia = "Fade Out (Duración Estrictamente Decreciente)";
    } else {
        tipoSecuencia = "Variada (Sin Patrón Secuencial Directo)";
    }

    return {
        total_canciones: canciones.length,
        duracion_total_segundos: duracionTotalSegundos,
        duracion_formateada: duracionFormateada,
        patron_secuencia: tipoSecuencia,
        explicacion: `Playlist de ${canciones.length} canciones con duración total de ${duracionFormateada}. Patrón: ${tipoSecuencia}.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal (Secuencia Creciente) ===");
const caso1 = analizarSecuenciaPlaylist([
    { titulo: "Intro", duracionSegundos: 120 },
    { titulo: "Estrofa Principal", duracionSegundos: 180 },
    { titulo: "Clímax", duracionSegundos: 240 },
    { titulo: "Outro Extendido", duracionSegundos: 300 }
]);
console.log(caso1);

console.log("\n=== Caso Borde (Playlist con Secuencia Variada) ===");
const caso2 = analizarSecuenciaPlaylist([
    { titulo: "Track 1", duracionSegundos: 210 },
    { titulo: "Track 2", duracionSegundos: 150 },
    { titulo: "Track 3", duracionSegundos: 240 }
]);
console.log(caso2);

console.log("\n=== Caso Entrada Inválida ===");
const caso3 = analizarSecuenciaPlaylist([
    { titulo: "Track Erróneo", duracionSegundos: -30 }
]);
console.log(caso3);
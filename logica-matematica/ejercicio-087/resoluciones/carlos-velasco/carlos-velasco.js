const simularSecuenciaPlaylist = (duracionesCanciones, incrementoTransicion) => {
    if (!duracionesCanciones || !Array.isArray(duracionesCanciones) || duracionesCanciones.length === 0) {
        return { error: "La lista de duraciones de la playlist está vacía o no es válida." };
    }

    if (typeof incrementoTransicion !== 'number') {
        return { error: "El incremento de transición numérico no es válido." };
    }

    let secuenciaCalculada = [];
    let acumuladoTiempo = 0;

    // Generar la secuencia numérica aplicando reglas matemáticas de progresión
    for (let i = 0; i < duracionesCanciones.length; i++) {
        let duracionBase = duracionesCanciones[i];
        
        if (duracionBase < 0) {
            duracionBase = 0; // Control de límites para valores negativos
        }

        const valorSecuencia = duracionBase + (i * incrementoTransicion);
        acumuladoTiempo += valorSecuencia;

        secuenciaCalculada.push({
            cancion_indice: i + 1,
            duracion_original: duracionBase,
            duracion_con_secuencia: valorSecuencia
        });
    }

    // Clasificación de la playlist según la duración total acumulada
    let clasificacion = "Playlist Estándar";
    if (acumuladoTiempo >= 30) {
        clasificacion = "Playlist Extensa / Maratón";
    } else if (acumuladoTiempo >= 15) {
        clasificacion = "Playlist Dinámica";
    }

    return {
        duracion_total_acumulada: parseFloat(acumuladoTiempo.toFixed(2)),
        secuencia: secuenciaCalculada,
        clasificacion_playlist: clasificacion,
        explicacion: "Se generó una secuencia numérica sumando un incremento progresivo por posición de canción a las duraciones base, calculando el tiempo total acumulado."
    };
};

const duracionesNormales = [3.5, 4.0, 2.8, 5.1];
const incrementoNormal = 0.5;

const duracionesBorde = [2.0];
const incrementoBorde = 1.0;

console.log(simularSecuenciaPlaylist(duracionesNormales, incrementoNormal));
console.log(simularSecuenciaPlaylist(duracionesBorde, incrementoBorde));
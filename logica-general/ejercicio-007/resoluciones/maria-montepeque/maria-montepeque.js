//Reto 007: Detección de Inconsistencias - Playlist Musical

function analizarInconsistenciasPlaylist(playlistData) {
    // 1. Caso Borde Estructural
    if (!playlistData || typeof playlistData !== 'object' || !Array.isArray(playlistData.canciones)) {
        return { estadoPlaylist: "corrupta", accion: "rechazar archivo", motivo: "La estructura del archivo de la playlist es inválida o inexistente." };
    }

    const { nombre = "Sin nombre", duracionTotalDeclarada = 0, canciones } = playlistData;
    if (canciones.length === 0) {
        return { estadoPlaylist: "vacia", accion: "notificar usuario", motivo: `La playlist '${nombre}' no contiene ninguna canción para validar.` };
    }

    // 2. Análisis O(N) en un solo paso: Extraemos sumatoria y banderas usando Set para el lookup O(1)
    const idsRegistrados = new Set();
    const analisis = canciones.reduce((acc, c) => {
        const duracion = c.duracionSegundos ?? 0;
        
        if (duracion <= 0) acc.invalidas = true;
        if (c.id && idsRegistrados.has(c.id)) acc.duplicados = true;
        
        if (c.id) idsRegistrados.add(c.id);
        acc.sumaReal += Math.max(0, duracion);
        
        return acc;
    }, { sumaReal: 0, duplicados: false, invalidas: false });

    // 3. Evaluación jerárquica de criticidad basada en el estado del análisis
    if (analisis.invalidas) {
        return { estadoPlaylist: "inconsistente", accion: "revisar pistas", motivo: "Se detectaron canciones con duraciones inválidas, nulas o menores/iguales a cero segundos." };
    }
    if (analisis.duplicados) {
        return { estadoPlaylist: "inconsistente", accion: "depurar duplicados", motivo: "La playlist contiene identificadores de canciones (IDs) repetidos." };
    }
    if (duracionTotalDeclarada !== analisis.sumaReal) {
        return { 
            estadoPlaylist: "inconsistente", accion: "recalcular cabecera", 
            motivo: `Desfase matemático: La duración declarada es de ${duracionTotalDeclarada}s, pero la suma real de las canciones es de ${analisis.sumaReal}s.` 
        };
    }

    return { estadoPlaylist: "consistente", accion: "reproducir playlist", motivo: "Los metadatos y las canciones de la playlist coinciden matemáticamente y no presentan duplicados." };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 007 ---");

const pruebas = [
    {
        tipo: "Caso Normal - Desfase Matemático",
        datos: {
            nombre: "Mix Ejercicio 2026", duracionTotalDeclarada: 600,
            canciones: [
                { id: "SONG-01", titulo: "Lo-Fi Beats", duracionSegundos: 180 },
                { id: "SONG-02", titulo: "Synthwave Horizon", duracionSegundos: 200 }
            ]
        }
    },
    {
        tipo: "Caso de Negocio - Playlist Saludable",
        datos: {
            nombre: "Rock Classics", duracionTotalDeclarada: 420,
            canciones: [
                { id: "SONG-03", titulo: "Bohemian Rhapsody", duracionSegundos: 220 },
                { id: "SONG-04", titulo: "Back In Black", duracionSegundos: 200 }
            ]
        }
    },
    {
        tipo: "Caso Borde - Valores de Tiempo Inválidos",
        datos: {
            nombre: "Cyberpunk Vibe", duracionTotalDeclarada: 300,
            canciones: [{ id: "SONG-05", titulo: "Neon City", duracionSegundos: -45 }]
        }
    }
];

pruebas.forEach(({ tipo, datos }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(analizarInconsistenciasPlaylist(datos), null, 2));
});
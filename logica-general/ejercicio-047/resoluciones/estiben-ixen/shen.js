function detectarInconsistencias(playlist) {
    const inconsistencias = [];
    const cancionesRegistradas = [];

    for (const cancion of playlist) {
        if (!cancion.titulo || !cancion.artista) {
            inconsistencias.push({
                cancion: cancion.titulo || "sin titulo",
                motivo: "informacion incompleta"
            });
        }

        if (cancion.estado !== "activo" && cancion.estado !== "oculto") {
            inconsistencias.push({
                cancion: cancion.titulo,
                motivo: "estado no permitido"
            });
        }

        if (cancionesRegistradas.includes(cancion.titulo)) {
            inconsistencias.push({
                cancion: cancion.titulo,
                motivo: "cancion repetida"
            });
        }

        cancionesRegistradas.push(cancion.titulo);
    }

    return inconsistencias;
}

const playlist = [
    {
        titulo: "Noche Estelar",
        artista: "Grupo Azul",
        estado: "activo"
    },
    {
        titulo: "Ritmo Digital",
        artista: "Sonido Tech",
        estado: "activo"
    },
    {
        titulo: "Noche Estelar",
        artista: "Grupo Azul",
        estado: "activo"
    },
    {
        titulo: "Cancion Oculta",
        artista: "",
        estado: "bloqueado"
    }
];

const resultado = detectarInconsistencias(playlist);

console.log(resultado);
function analizarPatronesCalificacionSciFi(peliculas) {
    // Validar que la entrada sea un arreglo no vacío
    if (!Array.isArray(peliculas) || peliculas.length === 0) {
        return {
            error: true,
            mensaje: "Se debe proporcionar una lista no vacía de películas de ciencia ficción."
        };
    }

    const peliculasEvaluadas = [];
    let calificacionMaxima = -1;
    let peliculaDestacada = "";

    for (let i = 0; i < peliculas.length; i++) {
        const pelicula = peliculas[i];

        // Validar la estructura de cada objeto película
        if (
            !pelicula ||
            typeof pelicula.titulo !== "string" ||
            typeof pelicula.puntuacionCritica !== "number" || pelicula.puntuacionCritica < 0 || pelicula.puntuacionCritica > 100 ||
            typeof pelicula.puntuacionAudiencia !== "number" || pelicula.puntuacionAudiencia < 0 || pelicula.puntuacionAudiencia > 100
        ) {
            return {
                error: true,
                mensaje: "Cada película debe incluir título (texto), puntuacionCritica (0-100) y puntuacionAudiencia (0-100)."
            };
        }

        // Ponderación: 60% Crítica, 40% Audiencia
        const puntajePonderado = Number(((pelicula.puntuacionCritica * 0.6) + (pelicula.puntuacionAudiencia * 0.4)).toFixed(2));
        const brechaBrechaCriticaAudiencia = Math.abs(pelicula.puntuacionCritica - pelicula.puntuacionAudiencia);

        // Identificar el patrón de recepción del film
        let patronRecepcion = "";
        if (brechaBrechaCriticaAudiencia <= 10) {
            patronRecepcion = "Consenso General (Aceptación Unánime)";
        } else if (pelicula.puntuacionCritica > pelicula.puntuacionAudiencia) {
            patronRecepcion = "Favorita de la Crítica (Película de Culto Técnico)";
        } else {
            patronRecepcion = "Éxito Comercial / Taquillero (Aclamada por la Audiencia)";
        }

        // Seguimiento de la película con mayor puntuación ponderada
        if (puntajePonderado > calificacionMaxima) {
            calificacionMaxima = puntajePonderado;
            peliculaDestacada = pelicula.titulo;
        }

        peliculasEvaluadas.push({
            titulo: pelicula.titulo,
            critica: pelicula.puntuacionCritica,
            audiencia: pelicula.puntuacionAudiencia,
            puntaje_ponderado: puntajePonderado,
            brecha: brechaBrechaCriticaAudiencia,
            patron: patronRecepcion
        });
    }

    return {
        total_peliculas: peliculas.length,
        pelicula_mejor_calificada: `${peliculaDestacada} (${calificacionMaxima} pts)`,
        listado_analizado: peliculasEvaluadas,
        explicacion: `Se analizó el patrón de puntuación de ${peliculas.length} películas de ciencia ficción. La mejor valorada es ${peliculaDestacada}.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = analizarPatronesCalificacionSciFi([
    { titulo: "Blade Runner 2049", puntuacionCritica: 88, puntuacionAudiencia: 81 },
    { titulo: "Interstellar", puntuacionCritica: 73, puntuacionAudiencia: 92 },
    { titulo: "2001: A Space Odyssey", puntuacionCritica: 92, puntuacionAudiencia: 89 }
]);
console.log(caso1);

console.log("\n=== Caso Borde (Valores de límite 0 y 100) ===");
const caso2 = analizarPatronesCalificacionSciFi([
    { titulo: "Sci-Fi Experimental", puntuacionCritica: 100, puntuacionAudiencia: 10 }
]);
console.log(caso2);

console.log("\n=== Caso Entrada Inválida (Puntuación fuera de rango) ===");
const caso3 = analizarPatronesCalificacionSciFi([
    { titulo: "Matrix", puntuacionCritica: 105, puntuacionAudiencia: 85 }
]);
console.log(caso3);
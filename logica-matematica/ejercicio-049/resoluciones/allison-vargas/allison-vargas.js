function organizarMaratonPeliculasMiedo(duracionTotalDisponibleMinutos, peliculas) {
    // Validar que la duración sea un número entero mayor a cero
    if (
        typeof duracionTotalDisponibleMinutos !== "number" ||
        !Number.isInteger(duracionTotalDisponibleMinutos) ||
        duracionTotalDisponibleMinutos <= 0
    ) {
        return {
            error: true,
            mensaje: "La duración total disponible debe ser un número entero mayor a cero."
        };
    }

    // Validar que la lista de películas sea un arreglo no vacío
    if (!Array.isArray(peliculas) || peliculas.length === 0) {
        return {
            error: true,
            mensaje: "Se debe proporcionar una lista no vacía de películas de miedo."
        };
    }

    const peliculasProgramadas = [];
    let tiempoAcumulado = 0;

    for (let i = 0; i < peliculas.length; i++) {
        const pelicula = peliculas[i];

        // Validar la estructura de cada película
        if (
            !pelicula ||
            typeof pelicula.titulo !== "string" ||
            typeof pelicula.duracionMinutos !== "number" ||
            !Number.isInteger(pelicula.duracionMinutos) ||
            pelicula.duracionMinutos <= 0
        ) {
            return {
                error: true,
                mensaje: "Cada película debe incluir título (texto) y duracionMinutos (entero > 0)."
            };
        }

        // Evaluar si la película cabe en el tiempo disponible restante
        if ((tiempoAcumulado + pelicula.duracionMinutos) <= duracionTotalDisponibleMinutos) {
            tiempoAcumulado += pelicula.duracionMinutos;

            // Operador Módulo %: Determinar si la duración es un múltiplo exacto de 30 minutos
            const esMultiploDe30 = (pelicula.duracionMinutos % 30) === 0;

            peliculasProgramadas.push({
                titulo: pelicula.titulo,
                duracion_minutos: pelicula.duracionMinutos,
                es_bloque_estandar_30min: esMultiploDe30
            });
        }
    }

    // Aplicar divisiones enteras y módulo para calcular tiempo restante y sobrante
    const tiempoSobranteMinutos = duracionTotalDisponibleMinutos - tiempoAcumulado;
    const bloquesCompletos15Min = Math.floor(tiempoAcumulado / 15);
    const residuoMinutosFueraDeBloque15 = tiempoAcumulado % 15;

    // Clasificar el ajuste del tiempo de la maratón
    let ajusteHorario = "";
    if (tiempoSobranteMinutos === 0) {
        ajusteHorario = "Ajuste Perfecto (Uso Completo del Tiempo Transmitido)";
    } else if (tiempoSobranteMinutos <= 15) {
        ajusteHorario = "Ajuste Óptimo (Espacio Ideal para Tráilers o Pausas)";
    } else {
        ajusteHorario = "Tiempo Incompleto (Sobra un Espacio Considerable)";
    }

    return {
        duracion_disponible: duracionTotalDisponibleMinutos,
        tiempo_total_programado: tiempoAcumulado,
        tiempo_sobrante: tiempoSobranteMinutos,
        bloques_15min_completados: bloquesCompletos15Min,
        residuo_minutos_fuera_bloque: residuoMinutosFueraDeBloque15,
        peliculas_incluidas: peliculasProgramadas,
        clasificacion: ajusteHorario,
        explicacion: `Se programaron ${peliculasProgramadas.length} películas (${tiempoAcumulado} min de ${duracionTotalDisponibleMinutos} min disponibles). Tiempo restante sobrante: ${tiempoSobranteMinutos} min.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = organizarMaratonPeliculasMiedo(300, [
    { titulo: "El Conjuro", duracionMinutos: 112 },
    { titulo: "Scream", duracionMinutos: 111 },
    { titulo: "Halloween", duracionMinutos: 91 }
]);
console.log(caso1);

console.log("\n=== Caso Borde (Ajuste Exacto / Múltiplos de 30) ===");
const caso2 = organizarMaratonPeliculasMiedo(180, [
    { titulo: "Psicosis", duracionMinutos: 90 },
    { titulo: "El Exorcista", duracionMinutos: 90 }
]);
console.log(caso2);

console.log("\n=== Caso Entrada Inválida ===");
const caso3 = organizarMaratonPeliculasMiedo(-60, [
    { titulo: "Alien", duracionMinutos: 117 }
]);
console.log(caso3);
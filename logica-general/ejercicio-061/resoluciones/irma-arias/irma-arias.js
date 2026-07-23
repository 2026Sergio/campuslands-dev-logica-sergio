const jugadoresEsports = [
    { id: 1, gamertag: "ShadowStriker", puntosRanking: 2450, penalizaciones: 0, registroActivo: true },
    { id: 2, gamertag: "PixelQueen", puntosRanking: 1800, penalizaciones: 3, registroActivo: true }, // Clasificado a liga menor por penalizaciones
    { id: 3, gamertag: "CyberNinja", puntosRanking: 3100, penalizaciones: 0, registroActivo: false }, // Descalificado: Sin registro activo
    { id: 4, gamertag: "", puntosRanking: 2100, penalizaciones: 1, registroActivo: true } // Inconsistencia: Gamertag vacío
];

// Función para aplicar la clasificación por reglas en videojuegos competitivos
function clasificarJugadoresEsports(lista) {
    // Paso 1: Validación de datos de entrada (Caso borde)
    if (!Array.isArray(lista) || lista.length === 0) {
        return { estado: "Error", mensaje: "La lista de jugadores de esports está vacía o no es válida." };
    }

    let ligaMaster = [];
    let ligaContenedor = [];
    let jugadoresDescalificados = [];

    // Paso 2: Ciclo para evaluar a cada competidor según las reglas de clasificación
    for (let i = 0; i < lista.length; i++) {
        let jugador = lista[i];
        let motivosDescalificacion = [];

        // Regla 1: Validar gamertag o nombre del jugador
        if (!jugador.gamertag || jugador.gamertag.trim() === "") {
            motivosDescalificacion.push("Gamertag vacío o faltante");
        }

        // Regla 2: El registro activo es obligatorio para competir
        if (jugador.registroActivo !== true) {
            motivosDescalificacion.push("El jugador no cuenta con registro activo en el torneo");
        }

        // Regla 3: Control de penalizaciones (Más de 2 penalizaciones impide el acceso a la Liga Master)
        let excesoPenalizaciones = typeof jugador.penalizaciones === "number" && jugador.penalizaciones > 2;

        // Paso 3: Clasificación final según puntaje y reglas
        if (motivosDescalificacion.length > 0) {
            jugadoresDescalificados.push({
                gamertag: jugador.gamertag || "Desconocido",
                estadoClasificacion: "Descalificado",
                motivos: motivosDescalificacion
            });
        } else if (jugador.puntosRanking >= 2500 && !excesoPenalizaciones) {
            ligaMaster.push({
                gamertag: jugador.gamertag,
                puntos: jugador.puntosRanking,
                categoria: "Liga Master (Élite)"
            });
        } else {
            ligaContenedor.push({
                gamertag: jugador.gamertag,
                puntos: jugador.puntosRanking,
                categoria: "Liga Challenger (Desarrollo)",
                nota: excesoPenalizaciones ? "Asignado a Challenger por exceso de penalizaciones" : "Puntaje por debajo del umbral Master"
            });
        }
    }

    // Paso 4: Retornar resultado estructurado
    return {
        estadoSistema: "Clasificación por Reglas en Esports Completada",
        totalJugadoresEvaluados: lista.length,
        ligaMaster: ligaMaster,
        ligaChallenger: ligaContenedor,
        jugadoresDescalificados: jugadoresDescalificados
    };
}

// --- PRUEBAS ---

// 1. Prueba normal: Evaluar la clasificación de los jugadores de esports
console.log("--- PRUEBA NORMAL (Clasificación por Reglas - Esports) ---");
console.log(JSON.stringify(clasificarJugadoresEsports(jugadoresEsports), null, 2));

// 2. Prueba de caso borde: Enviar una lista vacía
console.log("\n--- PRUEBA CASO BORDE (Lista vacía) ---");
console.log(clasificarJugadoresEsports([]));
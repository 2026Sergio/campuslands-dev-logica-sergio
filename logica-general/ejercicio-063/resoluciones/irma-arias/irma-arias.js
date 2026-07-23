
const equiposEsportsDecision = [
    { id: 1, equipo: "CyberTitans", puntosPartida: 35, ratioVictorias: 0.75, alineacionCompleta: true },
    { id: 2, equipo: "NeonVipers", puntosPartida: 28, ratioVictorias: 0.50, alineacionCompleta: true },  // Requiere revisión por puntaje límite
    { id: 3, equipo: "ShadowDragons", puntosPartida: 40, ratioVictorias: 0.85, alineacionCompleta: false }, // Rechazado: Alineación incompleta
    { id: 4, equipo: "", puntosPartida: 30, ratioVictorias: 0.60, alineacionCompleta: true }               // Inconsistencia: Nombre vacío
];

// Función para tomar decisiones de avance en fases de un torneo de esports
function tomarDecisionesEsports(lista) {
    // Paso 1: Validación de datos de entrada (Caso borde)
    if (!Array.isArray(lista) || lista.length === 0) {
        return { estado: "Error", mensaje: "La lista de equipos del torneo de esports está vacía o no es válida." };
    }

    let equiposClasificados = [];
    let equiposEnEspera = [];
    let equiposEliminados = [];

    // Paso 2: Ciclo para aplicar las reglas de toma de decisiones a cada equipo
    for (let i = 0; i < lista.length; i++) {
        let item = lista[i];
        let motivosRechazo = [];

        // Regla 1: Validar nombre del equipo
        if (!item.equipo || typeof item.equipo !== "string" || item.equipo.trim() === "") {
            motivosRechazo.push("Nombre del equipo vacío o inválido");
        }

        // Regla 2: La alineación completa es un requisito obligatorio para competir
        if (item.alineacionCompleta !== true) {
            motivosRechazo.push("Descalificado por alineación incompleta");
        }

        // Paso 3: Tomar decisiones basadas en puntuación y rendimiento si pasa las reglas básicas
        if (motivosRechazo.length > 0) {
            equiposEliminados.push({
                equipo: item.equipo || "Desconocido",
                decision: "Eliminado del torneo",
                motivos: motivosRechazo
            });
        } else if (item.puntosPartida >= 32 && item.ratioVictorias >= 0.70) {
            equiposClasificados.push({
                equipo: item.equipo.trim(),
                puntos: item.puntosPartida,
                decision: "Clasificación Directa a PlayOffs"
            });
        } else {
            equiposEnEspera.push({
                equipo: item.equipo.trim(),
                puntos: item.puntosPartida,
                decision: "Zona de Repesca / Análisis de Empates",
                motivo: "Puntaje o ratio por debajo del umbral de clasificación directa"
            });
        }
    }

    // Paso 4: Retornar resultado estructurado
    return {
        estadoSistema: "Proceso de Toma de Decisiones en Esports Completado",
        totalEquiposEvaluados: lista.length,
        totalClasificados: equiposClasificados.length,
        equiposClasificados: equiposClasificados,
        equiposEnRepesca: equiposEnEspera,
        equiposEliminados: equiposEliminados
    };
}

// --- PRUEBAS ---

// 1. Prueba normal: Evaluar la toma de decisiones para los equipos de esports
console.log("--- PRUEBA NORMAL (Toma de Decisiones - Torneo de Esports) ---");
console.log(JSON.stringify(tomaDecisionesEsports(equiposEsportsDecision), null, 2));

// 2. Prueba de caso borde: Enviar una lista vacía
console.log("\n--- PRUEBA CASO BORDE (Lista vacía) ---");
console.log(tomaDecisionesEsports([]));
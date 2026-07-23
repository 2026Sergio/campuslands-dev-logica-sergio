function analizarMaratonTerror(duraciones, personas) {
    // 1. Validar entradas
    if (!Array.isArray(duraciones) || duraciones.length === 0 || typeof personas !== 'number' || personas <= 0) {
        return {
            total_minutos: 0,
            por_persona: 0,
            sobrante: 0,
            clasificacion: "inválido",
            explicacion: "La lista de duraciones debe ser un arreglo no vacío y el número de personas mayor a 0."
        };
    }

    // Validar duraciones numéricas válidas
    for (let i = 0; i < duraciones.length; i++) {
        const d = duraciones[i];
        if (typeof d !== 'number' || isNaN(d) || d < 0) {
            return {
                total_minutos: 0,
                por_persona: 0,
                sobrante: 0,
                clasificacion: "inválido",
                explicacion: "Se encontraron duraciones de películas inválidas."
            };
        }
    }

    // 2. Calcular total, reparto y residuo (módulo)
    let totalMinutos = 0;
    for (let i = 0; i < duraciones.length; i++) {
        totalMinutos += duraciones[i];
    }

    const porPersona = Math.floor(totalMinutos / personas);
    const sobrante = totalMinutos % personas;

    // 3. Clasificar según el residuo
    let clasificacion = "";
    if (sobrante === 0) {
        clasificacion = "perfecta";
    } else if (sobrante < personas * 0.2) {
        clasificacion = "ajustada";
    } else {
        clasificacion = "desequilibrada";
    }

    return {
        total_minutos: totalMinutos,
        por_persona: porPersona,
        sobrante: sobrante,
        clasificacion: clasificacion,
        explicacion: `Total de ${totalMinutos} min para ${personas} personas. Tocan ${porPersona} min cada uno y sobran ${sobrante} min.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = analizarMaratonTerror([90, 120, 90], 5);
console.log(caso1);

console.log("\n=== Caso Borde (Personas inválidas o lista vacía) ===");
const caso2 = analizarMaratonTerror([100, 90], 0);
console.log(caso2);
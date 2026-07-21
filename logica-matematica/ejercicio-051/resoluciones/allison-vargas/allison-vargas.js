function generarCombinacionesKickboxing(golpesPuno, golpesPatada) {
    // Validar que las entradas sean arreglos no vacíos
    if (!Array.isArray(golpesPuno) || golpesPuno.length === 0 || !Array.isArray(golpesPatada) || golpesPatada.length === 0) {
        return {
            error: true,
            mensaje: "Se deben proporcionar listas no vacías tanto para puños como para patadas."
        };
    }

    // Validar que cada elemento sea una cadena de texto válida
    for (let i = 0; i < golpesPuno.length; i++) {
        if (typeof golpesPuno[i] !== "string" || golpesPuno[i].trim() === "") {
            return {
                error: true,
                mensaje: "Todos los golpes de puño deben ser cadenas de texto válidas."
            };
        }
    }

    for (let j = 0; j < golpesPatada.length; j++) {
        if (typeof golpesPatada[j] !== "string" || golpesPatada[j].trim() === "") {
            return {
                error: true,
                mensaje: "Todas las patadas deben ser cadenas de texto válidas."
            };
        }
    }

    const combinacionesPosibles = [];

    // Producto cartesiano para calcular todas las combinaciones de 2 golpes (Puño + Patada)
    for (let i = 0; i < golpesPuno.length; i++) {
        for (let j = 0; j < golpesPatada.length; j++) {
            combinacionesPosibles.push({
                primer_golpe: golpesPuno[i],
                segundo_golpe: golpesPatada[j],
                combo: `${golpesPuno[i]} + ${golpesPatada[j]}`
            });
        }
    }

    // Principio multiplicativo
    const totalCombinacionesCalculadas = golpesPuno.length * golpesPatada.length;

    // Clasificación de la variedad del repertorio
    let repertorioEstatus = "";
    if (totalCombinacionesCalculadas >= 12) {
        repertorioEstatus = "Repertorio Avanzado (Gran Variedad Táctica)";
    } else if (totalCombinacionesCalculadas >= 6) {
        repertorioEstatus = "Repertorio Intermedio (Variedad Estándar)";
    } else {
        repertorioEstatus = "Repertorio Básico (Requiere Incorporar Más Técnicas)";
    }

    return {
        total_punos: golpesPuno.length,
        total_patadas: golpesPatada.length,
        total_combinaciones: totalCombinacionesCalculadas,
        listado_combos: combinacionesPosibles,
        clasificacion: repertorioEstatus,
        explicacion: `Se generaron ${totalCombinacionesCalculadas} combinaciones únicas a partir de ${golpesPuno.length} puños y ${golpesPatada.length} patadas.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = generarCombinacionesKickboxing(
    ["Jab", "Cross", "Hook"],
    ["Low Kick", "Middle Kick", "High Kick"]
);
console.log(caso1);

console.log("\n=== Caso Borde (Repertorio Mínimo 1x1) ===");
const caso2 = generarCombinacionesKickboxing(
    ["Jab"],
    ["Low Kick"]
);
console.log(caso2);

console.log("\n=== Caso Entrada Inválida (Arreglo vacío) ===");
const caso3 = generarCombinacionesKickboxing(
    [],
    ["Front Kick"]
);
console.log(caso3);
function calcularCombinacionesKickboxing(golpesPuno, patadas) {
    // 1. Validar caso borde
    if (!golpesPuno || golpesPuno.length === 0 || !patadas || patadas.length === 0) {
        return {
            total_combinaciones: 0,
            combinaciones: [],
            clasificacion: "inválido",
            explicacion: "Alguna de las listas de técnicas está vacía o no es válida."
        };
    }

    // 2. Generar combinaciones mediante ciclos anidados
    const combinaciones = [];
    for (let i = 0; i < golpesPuno.length; i++) {
        for (let j = 0; j < patadas.length; j++) {
            combinaciones.push(`${golpesPuno[i]} + ${patadas[j]}`);
        }
    }

    const total = combinaciones.length;

    // 3. Determinar nivel de variedad
    let clasificacion = "";
    if (total > 10) {
        clasificacion = "amplio";
    } else if (total >= 5) {
        clasificacion = "moderado";
    } else {
        clasificacion = "limitado";
    }

    return {
        total_combinaciones: total,
        combinaciones: combinaciones,
        clasificacion: clasificacion,
        explicacion: `Se generaron ${total} combinaciones únicas a partir de ${golpesPuno.length} golpes de puño y ${patadas.length} patadas.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = calcularCombinacionesKickboxing(
    ["Jab", "Cross", "Hook"], 
    ["Low Kick", "Middle Kick", "High Kick"]
);
console.log(caso1);

console.log("\n=== Caso Borde (Lista Vacía) ===");
const caso2 = calcularCombinacionesKickboxing([], ["Low Kick"]);
console.log(caso2);
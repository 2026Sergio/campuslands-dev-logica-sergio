function evaluarDivisibilidadMaraton(duraciones, grupo) {
    // 1. Validar casos borde
    if (!duraciones || duraciones.length === 0 || !grupo || grupo <= 0) {
        return {
            total: 0,
            residuo: 0,
            clasificacion: "inválido",
            explicacion: "Los datos de entrada no son válidos o la lista está vacía."
        };
    }

    // 2. Sumar total de minutos o puntuación
    const total = duraciones.reduce((acc, curr) => acc + curr, 0);

    // 3. Aplicar operador de módulo
    const residuo = total % grupo;

    // 4. Clasificar según divisibilidad y residuo
    let clasificacion = "";
    if (residuo === 0) {
        clasificacion = "divisible";
    } else if (residuo % 2 === 0) {
        clasificacion = "sobrante_par";
    } else {
        clasificacion = "sobrante_impar";
    }

    return {
        total: total,
        residuo: residuo,
        clasificacion: clasificacion,
        explicacion: `Total de ${total} minutos repartido entre ${grupo} personas genera un residuo de ${residuo}.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = evaluarDivisibilidadMaraton([90, 120, 105, 85], 4);
console.log(caso1);

console.log("\n=== Caso Borde (Lista Vacía) ===");
const caso2 = evaluarDivisibilidadMaraton([], 3);
console.log(caso2);
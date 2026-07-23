function calcularProbabilidadVictoria(puntosGanados, totalPuntos) {
    // 1. Validar caso borde
    if (typeof totalPuntos !== 'number' || totalPuntos <= 0 || 
        typeof puntosGanados !== 'number' || puntosGanados < 0 || 
        puntosGanados > totalPuntos) {
        return {
            probabilidad_porcentaje: 0,
            clasificacion: "inválido",
            explicacion: "Los datos ingresados no son válidos para el cálculo de probabilidad."
        };
    }

    // 2. Calcular probabilidad
    const probabilidad = (puntosGanados / totalPuntos) * 100;
    const probabilidadFormateada = Number(probabilidad.toFixed(2));

    // 3. Determinar nivel de favoritismo
    let clasificacion = "";
    if (probabilidadFormateada >= 60) {
        clasificacion = "alto";
    } else if (probabilidadFormateada >= 40) {
        clasificacion = "moderado";
    } else {
        clasificacion = "bajo";
    }

    return {
        probabilidad_porcentaje: probabilidadFormateada,
        clasificacion: clasificacion,
        explicacion: `Se ganaron ${puntosGanados} de ${totalPuntos} puntos posibles (${probabilidadFormateada}% de probabilidad).`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = calcularProbabilidadVictoria(14, 20);
console.log(caso1);

console.log("\n=== Caso Borde (Datos Inválidos) ===");
const caso2 = calcularProbabilidadVictoria(-2, 10);
console.log(caso2);
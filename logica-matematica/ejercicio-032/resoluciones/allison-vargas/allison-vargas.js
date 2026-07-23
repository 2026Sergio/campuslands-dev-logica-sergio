function calcularProbabilidadPingpong(favorables, totales) {
    // 1. Validar entradas
    if (
        typeof favorables !== 'number' || 
        typeof totales !== 'number' || 
        totales <= 0 || 
        favorables < 0 || 
        favorables > totales
    ) {
        return {
            probabilidad_porcentaje: "0%",
            clasificacion: "inválido",
            explicacion: "Los datos ingresados no son válidos para calcular la probabilidad."
        };
    }

    // 2. Calcular probabilidad
    const probabilidad = (favorables / totales) * 100;
    const porcentajeFormateado = `${probabilidad.toFixed(2)}%`;

    // 3. Clasificar el resultado
    let clasificacion = "";
    if (probabilidad >= 60) {
        clasificacion = "alta";
    } else if (probabilidad >= 30) {
        clasificacion = "media";
    } else {
        clasificacion = "baja";
    }

    return {
        probabilidad_porcentaje: porcentajeFormateado,
        clasificacion: clasificacion,
        explicacion: `De ${totales} eventos posibles, ${favorables} son favorables.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = calcularProbabilidadPingpong(15, 20);
console.log(caso1);

console.log("\n=== Caso Borde (Total igual a cero) ===");
const caso2 = calcularProbabilidadPingpong(5, 0);
console.log(caso2);
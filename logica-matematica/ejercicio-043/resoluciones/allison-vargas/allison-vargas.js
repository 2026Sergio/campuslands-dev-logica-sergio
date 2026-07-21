function analizarEstadisticasEsports(puntajesPartidas) {
    // Validar que la entrada sea un arreglo no vacío
    if (!Array.isArray(puntajesPartidas) || puntajesPartidas.length === 0) {
        return {
            error: true,
            mensaje: "Se debe proporcionar una lista no vacía de puntajes."
        };
    }

    // Validar que todos los valores sean números enteros mayores o iguales a cero
    for (let i = 0; i < puntajesPartidas.length; i++) {
        if (typeof puntajesPartidas[i] !== "number" || !Number.isInteger(puntajesPartidas[i]) || puntajesPartidas[i] < 0) {
            return {
                error: true,
                mensaje: "Todos los puntajes deben ser números enteros mayores o iguales a cero."
            };
        }
    }

    // 1. Cálculo del Promedio
    let sumaPuntajes = 0;
    for (let i = 0; i < puntajesPartidas.length; i++) {
        sumaPuntajes += puntajesPartidas[i];
    }
    const promedio = Number((sumaPuntajes / puntajesPartidas.length).toFixed(2));

    // 2. Cálculo de la Mediana
    // Se realiza una copia del arreglo para no modificar los datos originales y se ordena
    const ordenados = [...puntajesPartidas].sort((a, b) => a - b);
    const n = ordenados.length;
    let mediana = 0;

    if (n % 2 === 1) {
        // Cantidad impar de elementos: elemento central
        mediana = ordenados[Math.floor(n / 2)];
    } else {
        // Cantidad par de elementos: promedio de los dos elementos centrales
        const centro1 = ordenados[(n / 2) - 1];
        const centro2 = ordenados[n / 2];
        mediana = Number(((centro1 + centro2) / 2).toFixed(2));
    }

    // Clasificación de consistencia del jugador o equipo
    let consistencia = "";
    const diferencia = Math.abs(promedio - mediana);

    if (diferencia <= 5) {
        consistencia = "Desempeño Consistente (Rendimiento Estable)";
    } else if (diferencia <= 15) {
        consistencia = "Desempeño Moderado (Rendimiento Variable)";
    } else {
        consistencia = "Desempeño Irregular (Rendimiento Inestable con Partidas Pico)";
    }

    return {
        total_partidas: n,
        puntajes_ordenados: ordenados,
        promedio: promedio,
        mediana: mediana,
        diferencia_promedio_mediana: diferencia,
        clasificacion: consistencia,
        explicacion: `Se evaluaron ${n} partidas. Promedio: ${promedio}, Mediana: ${mediana}. Nivel: ${consistencia}.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal (Número Impar de Partidas) ===");
const caso1 = analizarEstadisticasEsports([12, 18, 25, 30, 20]);
console.log(caso1);

console.log("\n=== Caso Borde (Número Par de Partidas) ===");
const caso2 = analizarEstadisticasEsports([10, 40, 20, 30]);
console.log(caso2);

console.log("\n=== Caso Entrada Inválida ===");
const caso3 = analizarEstadisticasEsports([-5, 20, 30]);
console.log(caso3);
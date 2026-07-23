function calcularPuntajeCompetitivo(puntajesBase, bonoRacha, penalizacionDerrotas) {
    // Validar que la lista de puntajes sea un arreglo no vacío
    if (!Array.isArray(puntajesBase) || puntajesBase.length === 0) {
        return {
            error: true,
            mensaje: "La entrada debe incluir al menos un puntaje base."
        };
    }

    // Validar que los bonos y penalizaciones sean numéricos
    if (typeof bonoRacha !== "number" || typeof penalizacionDerrotas !== "number" || bonoRacha < 0 || penalizacionDerrotas < 0) {
        return {
            error: true,
            mensaje: "El bono y la penalización deben ser números mayores o iguales a cero."
        };
    }

    // Procesar cada puntaje aplicando bonificación y control de tope mínimo (0)
    let sumaPuntajes = 0;
    const puntajesAjustados = [];

    for (let i = 0; i < puntajesBase.length; i++) {
        if (typeof puntajesBase[i] !== "number" || puntajesBase[i] < 0) {
            return {
                error: true,
                mensaje: "Todos los puntajes base deben ser números mayores o iguales a cero."
            };
        }

        // Operación aritmética controlada: (Base + Bono) - Penalización
        let puntajeCalculado = (puntajesBase[i] + bonoRacha) - penalizacionDerrotas;
        
        // Control de límite inferior: No se permiten puntos negativos
        if (puntajeCalculado < 0) {
            puntajeCalculado = 0;
        }

        puntajesAjustados.push(puntajeCalculado);
        sumaPuntajes += puntajeCalculado;
    }

    const promedioPuntaje = Number((sumaPuntajes / puntajesBase.length).toFixed(2));

    // Clasificación del desempeño en el torneo
    let rangoEstructura = "";
    if (promedioPuntaje >= 50) {
        rangoEstructura = "Rango Leyenda (Nivel Profesional)";
    } else if (promedioPuntaje >= 25) {
        rangoEstructura = "Rango Competitivo (Jugador Destacado)";
    } else {
        rangoEstructura = "Rango Amateur (Requiere Entrenamiento)";
    }

    return {
        total_partidas: puntajesBase.length,
        puntajes_ajustados: puntajesAjustados,
        puntaje_total: sumaPuntajes,
        promedio: promedioPuntaje,
        clasificacion: rangoEstructura,
        explicacion: `Se aplicó un bono de +${bonoRacha} y una penalización de -${penalizacionDerrotas} a ${puntajesBase.length} partidas. Promedio final: ${promedioPuntaje}.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = calcularPuntajeCompetitivo([12, 18, 25, 30], 8, 3);
console.log(caso1);

console.log("\n=== Caso Borde (Ajuste controlado a cero) ===");
const caso2 = calcularPuntajeCompetitivo([2], 0, 10);
console.log(caso2);

console.log("\n=== Caso Entrada Inválida ===");
const caso3 = calcularPuntajeCompetitivo([], 5, 2);
console.log(caso3);
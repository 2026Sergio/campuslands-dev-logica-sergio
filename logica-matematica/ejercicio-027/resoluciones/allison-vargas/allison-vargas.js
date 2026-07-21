function analizarSecuenciaPlaylist(duraciones) {
    // 1. Validar entradas
    if (!Array.isArray(duraciones) || duraciones.length < 2) {
        return {
            duracion_total: 0,
            tipo_secuencia: "inválido",
            clasificacion: "inválido",
            explicacion: "La playlist debe contener al menos 2 canciones para analizar una secuencia."
        };
    }

    // Validar valores numéricos positivos
    for (let i = 0; i < duraciones.length; i++) {
        if (typeof duraciones[i] !== 'number' || isNaN(duraciones[i]) || duraciones[i] <= 0) {
            return {
                duracion_total: 0,
                tipo_secuencia: "inválido",
                clasificacion: "inválido",
                explicacion: "Se encontraron duraciones de canciones inválidas."
            };
        }
    }

    // 2. Analizar el patrón de la secuencia y la suma total
    let esCreciente = true;
    let esDecreciente = true;
    let esConstante = true;
    let duracionTotal = duraciones[0];

    for (let i = 1; i < duraciones.length; i++) {
        duracionTotal += duraciones[i];

        if (duraciones[i] > duraciones[i - 1]) {
            esDecreciente = false;
            esConstante = false;
        } else if (duraciones[i] < duraciones[i - 1]) {
            esCreciente = false;
            esConstante = false;
        } else {
            esCreciente = false;
            esDecreciente = false;
        }
    }

    // 3. Determinar el tipo de secuencia y la clasificación
    let tipoSecuencia = "";
    let clasificacion = "";

    if (esConstante) {
        tipoSecuencia = "constante";
        clasificacion = "uniforme";
    } else if (esCreciente) {
        tipoSecuencia = "creciente";
        clasificacion = "in crescendo";
    } else if (esDecreciente) {
        tipoSecuencia = "decreciente";
        clasificacion = "fade out";
    } else {
        tipoSecuencia = "mixta";
        clasificacion = "variada";
    }

    return {
        duracion_total: duracionTotal,
        tipo_secuencia: tipoSecuencia,
        clasificacion: clasificacion,
        explicacion: `La playlist dura ${duracionTotal} segundos y sigue una secuencia ${tipoSecuencia}.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = analizarSecuenciaPlaylist([120, 150, 180, 210]);
console.log(caso1);

console.log("\n=== Caso Borde (Datos inválidos o insumos insuficientes) ===");
const caso2 = analizarSecuenciaPlaylist([180]);
console.log(caso2);
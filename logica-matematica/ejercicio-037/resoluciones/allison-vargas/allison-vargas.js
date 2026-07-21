function calcularRankingArquitectura(puntajes) {
    // Validar que la entrada sea un arreglo no vacío
    if (!Array.isArray(puntajes) || puntajes.length === 0) {
        return {
            error: true,
            mensaje: "La entrada debe ser un arreglo con al menos un puntaje."
        };
    }

    // Validar que todos los elementos sean números válidos mayores o iguales a cero
    for (let i = 0; i < puntajes.length; i++) {
        if (typeof puntajes[i] !== "number" || puntajes[i] < 0) {
            return {
                error: true,
                mensaje: "Todos los puntajes deben ser números mayores o iguales a cero."
            };
        }
    }

    // Calcular estadísticas principales
    let suma = 0;
    let puntajeMaximo = puntajes[0];
    let puntajeMinimo = puntajes[0];

    for (let i = 0; i < puntajes.length; i++) {
        suma += puntajes[i];
        if (puntajes[i] > puntajeMaximo) {
            puntajeMaximo = puntajes[i];
        }
        if (puntajes[i] < puntajeMinimo) {
            puntajeMinimo = puntajes[i];
        }
    }

    const promedio = Number((suma / puntajes.length).toFixed(2));

    // Clasificación del rendimiento general del grupo de diseños
    let nivelRendimiento = "";
    if (promedio >= 85) {
        nivelRendimiento = "Excelente (Calidad Render Profesional)";
    } else if (promedio >= 70) {
        nivelRendimiento = "Bueno (Nivel Arquitectónico Estándar)";
    } else {
        nivelRendimiento = "Bajo (Requiere Ajustes de Iluminación y Textura)";
    }

    return {
        total_proyectos: puntajes.length,
        puntaje_maximo: puntajeMaximo,
        puntaje_minimo: puntajeMinimo,
        promedio: promedio,
        clasificacion: nivelRendimiento,
        explicacion: `Se evaluaron ${puntajes.length} proyectos 3D. Promedio: ${promedio}, Máximo: ${puntajeMaximo}, Mínimo: ${puntajeMinimo}.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = calcularRankingArquitectura([88, 92, 75, 90, 80]);
console.log(caso1);

console.log("\n=== Caso Borde (Un solo proyecto) ===");
const caso2 = calcularRankingArquitectura([95]);
console.log(caso2);

console.log("\n=== Caso Entrada Inválida (Arreglo vacío) ===");
const caso3 = calcularRankingArquitectura([]);
console.log(caso3);
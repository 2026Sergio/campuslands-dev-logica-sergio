function calcularDistanciaParacaidismo(xTarget, yTarget, xDrop, yDrop) {
    // Validar entradas numéricas
    if (
        typeof xTarget !== "number" || typeof yTarget !== "number" ||
        typeof xDrop !== "number" || typeof yDrop !== "number"
    ) {
        return {
            error: true,
            mensaje: "Todas las coordenadas deben ser valores numéricos válidos."
        };
    }

    // Cálculo de la distancia euclidiana: d = sqrt((x2 - x1)^2 + (y2 - y1)^2)
    const deltaX = xDrop - xTarget;
    const deltaY = yDrop - yTarget;
    const distancia = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

    // Formatear distancia a 2 decimales
    const distanciaFormateada = Number(distancia.toFixed(2));

    // Clasificación de la precisión del aterrizaje
    let clasificacion = "";
    if (distanciaFormateada === 0) {
        clasificacion = "Aterrizaje Perfecto";
    } else if (distanciaFormateada <= 10) {
        clasificacion = "Zona Segura (Alta Precisión)";
    } else if (distanciaFormateada <= 25) {
        clasificacion = "Zona Aceptable (Precisión Media)";
    } else {
        clasificacion = "Fuera de Zona (Baja Precisión)";
    }

    return {
        distancia_metros: distanciaFormateada,
        clasificacion: clasificacion,
        explicacion: `El salto desde (${xDrop}, ${yDrop}) aterrizó a ${distanciaFormateada}m del objetivo (${xTarget}, ${yTarget}).`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = calcularDistanciaParacaidismo(0, 0, 6, 8);
console.log(caso1);

console.log("\n=== Caso Borde (Aterrizaje en el blanco exacto) ===");
const caso2 = calcularDistanciaParacaidismo(15, 20, 15, 20);
console.log(caso2);

console.log("\n=== Caso Fuera de Zona ===");
const caso3 = calcularDistanciaParacaidismo(0, 0, 30, 40);
console.log(caso3);
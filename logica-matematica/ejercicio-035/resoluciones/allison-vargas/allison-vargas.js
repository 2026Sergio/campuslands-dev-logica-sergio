function calcularTrazoDigital(velocidadPxSeg, tiempoSeg) {
    // Validar que las entradas sean numéricas y mayores a cero
    if (
        typeof velocidadPxSeg !== "number" || typeof tiempoSeg !== "number" ||
        velocidadPxSeg <= 0 || tiempoSeg <= 0
    ) {
        return {
            error: true,
            mensaje: "La velocidad y el tiempo deben ser números mayores a cero."
        };
    }

    // Cálculo de la distancia del trazo en píxeles: Distancia = Velocidad * Tiempo
    const distanciaPx = velocidadPxSeg * tiempoSeg;
    const distanciaFormateada = Number(distanciaPx.toFixed(2));

    // Clasificación del trazo según la distancia recorrida por el pincel
    let clasificacion = "";
    if (distanciaFormateada <= 100) {
        clasificacion = "Trazo Corto (Punto o Detalle)";
    } else if (distanciaFormateada <= 500) {
        clasificacion = "Trazo Mediano (Línea o Contorno)";
    } else {
        clasificacion = "Trazo Largo (Fondo o Trazo Rápido)";
    }

    return {
        distancia_px: distanciaFormateada,
        clasificacion: clasificacion,
        explicacion: `El pincel avanzó ${distanciaFormateada}px a una velocidad de ${velocidadPxSeg}px/s durante ${tiempoSeg}s.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = calcularTrazoDigital(50, 6);
console.log(caso1);

console.log("\n=== Caso Borde (Trazo muy corto) ===");
const caso2 = calcularTrazoDigital(10, 2);
console.log(caso2);

console.log("\n=== Caso Entrada Inválida ===");
const caso3 = calcularTrazoDigital(-20, 5);
console.log(caso3);
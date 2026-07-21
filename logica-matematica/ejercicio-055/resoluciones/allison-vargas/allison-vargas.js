function calcularRendimientoTrazo(distanciaPx, tiempoSeg, velocidadMuestraPxSeg) {
    // Validar tipo de dato de las entradas
    if (
        typeof distanciaPx !== "number" || typeof tiempoSeg !== "number" ||
        (velocidadMuestraPxSeg !== undefined && typeof velocidadMuestraPxSeg !== "number")
    ) {
        return {
            error: true,
            mensaje: "Las entradas numéricas deben ser valores válidos."
        };
    }

    // Caso 1: Calcular Velocidad (v = d / t)
    if (distanciaPx > 0 && tiempoSeg > 0 && velocidadMuestraPxSeg === undefined) {
        const velocidadCalculada = Number((distanciaPx / tiempoSeg).toFixed(2));
        
        let fluidez = "";
        if (velocidadCalculada >= 800) {
            fluidez = "Trazo Rápido (Bocetado ágil)";
        } else if (velocidadCalculada >= 300) {
            fluidez = "Trazo Moderado (Entintado fluido)";
        } else {
            fluidez = "Trazo Lento (Detalle y precisión)";
        }

        return {
            distancia_px: distanciaPx,
            tiempo_seg: tiempoSeg,
            velocidad_px_seg: velocidadCalculada,
            clasificacion: fluidez,
            explicacion: `Se recorrieron ${distanciaPx} px en ${tiempoSeg} s a una velocidad media de ${velocidadCalculada} px/s.`
        };
    }

    // Caso 2: Calcular Distancia dada la Velocidad (d = v * t)
    if (distanciaPx === 0 && tiempoSeg > 0 && velocidadMuestraPxSeg > 0) {
        const distanciaCalculada = Number((velocidadMuestraPxSeg * tiempoSeg).toFixed(2));

        return {
            distancia_px: distanciaCalculada,
            tiempo_seg: tiempoSeg,
            velocidad_px_seg: velocidadMuestraPxSeg,
            clasificacion: "Cálculo de Recorrido Estimado",
            explicacion: `A una velocidad constante de ${velocidadMuestraPxSeg} px/s durante ${tiempoSeg} s, el trazo recorre ${distanciaCalculada} px.`
        };
    }

    // Validación de entradas inconsistentes o fuera de rango
    return {
        error: true,
        mensaje: "Parámetros insuficientes o valores incoherentes (los tiempos y distancias deben ser positivos)."
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal (Cálculo de Velocidad) ===");
const caso1 = calcularRendimientoTrazo(1200, 3);
console.log(caso1);

console.log("\n=== Caso Borde (Cálculo de Distancia Estimada) ===");
const caso2 = calcularRendimientoTrazo(0, 5, 450);
console.log(caso2);

console.log("\n=== Caso Entrada Inválida (Tiempo <= 0) ===");
const caso3 = calcularRendimientoTrazo(500, 0);
console.log(caso3);
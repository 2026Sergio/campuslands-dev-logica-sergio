function evaluarControlCalidadTaller(tiemposReparacionMinutos, limiteMinimoGarantizado, limiteMaximoAceptable) {
    // Validar que la lista de tiempos sea un arreglo no vacío
    if (!Array.isArray(tiemposReparacionMinutos) || tiemposReparacionMinutos.length === 0) {
        return {
            error: true,
            mensaje: "Se debe proporcionar una lista no vacía con los tiempos de reparación."
        };
    }

    // Validar que los límites sean numéricos y coherentes
    if (
        typeof limiteMinimoGarantizado !== "number" || 
        typeof limiteMaximoAceptable !== "number" || 
        limiteMinimoGarantizado < 0 || 
        limiteMaximoAceptable <= limiteMinimoGarantizado
    ) {
        return {
            error: true,
            mensaje: "Los límites deben ser valores numéricos válidos y el límite máximo debe ser estrictamente mayor al mínimo."
        };
    }

    let tiempoMinimo = tiemposReparacionMinutos[0];
    let tiempoMaximo = tiemposReparacionMinutos[0];
    let fueraDeLimiteInferior = 0;
    let fueraDeLimiteSuperior = 0;
    let trabajosAceptables = 0;

    // Recorrer los tiempos para evaluar mínimos, máximos y cumplimiento de límites
    for (let i = 0; i < tiemposReparacionMinutos.length; i++) {
        const tiempo = tiemposReparacionMinutos[i];

        if (typeof tiempo !== "number" || tiempo <= 0) {
            return {
                error: true,
                mensaje: "Todos los tiempos de reparación deben ser números mayores a cero."
            };
        }

        if (tiempo < tiempoMinimo) tiempoMinimo = tiempo;
        if (tiempo > tiempoMaximo) tiempoMaximo = tiempo;

        if (tiempo < limiteMinimoGarantizado) {
            fueraDeLimiteInferior++; // Trabajos apresurados o con revisión incompleta
        } else if (tiempo > limiteMaximoAceptable) {
            fueraDeLimiteSuperior++; // Trabajos con retraso operativo
        } else {
            trabajosAceptables++;
        }
    }

    const totalTrabajos = tiemposReparacionMinutos.length;
    const porcentajeCumplimiento = Number(((trabajosAceptables / totalTrabajos) * 100).toFixed(2));

    // Clasificación de la eficiencia del taller
    let estadoTaller = "";
    if (porcentajeCumplimiento >= 85) {
        estadoTaller = "Operación Eficiente (Alta Calidad y Tiempos Óptimos)";
    } else if (porcentajeCumplimiento >= 60) {
        estadoTaller = "Operación Regular (Requiere Ajuste de Procesos)";
    } else {
        estadoTaller = "Operación Crítica (Desviación Alta en Tiempos de Entrega)";
    }

    return {
        total_trabajos: totalTrabajos,
        tiempo_minimo_registrado: tiempoMinimo,
        tiempo_maximo_registrado: tiempoMaximo,
        limite_minimo_permitido: limiteMinimoGarantizado,
        limite_maximo_permitido: limiteMaximoAceptable,
        trabajos_dentro_limite: trabajosAceptables,
        revisar_por_apresurado: fueraDeLimiteInferior,
        revisar_por_retraso: fueraDeLimiteSuperior,
        porcentaje_cumplimiento: porcentajeCumplimiento,
        clasificacion: estadoTaller,
        explicacion: `Evaluados ${totalTrabajos} servicios. ${trabajosAceptables} dentro del rango [${limiteMinimoGarantizado}-${limiteMaximoAceptable} min] (${porcentajeCumplimiento}% cumplimiento).`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = evaluarControlCalidadTaller([30, 45, 60, 90, 120, 40], 30, 100);
console.log(caso1);

console.log("\n=== Caso Borde (Fuera de límites) ===");
const caso2 = evaluarControlCalidadTaller([15, 150], 30, 100);
console.log(caso2);

console.log("\n=== Caso Entrada Inválida (Límite incoherente) ===");
const caso3 = evaluarControlCalidadTaller([40, 50], 100, 30);
console.log(caso3);
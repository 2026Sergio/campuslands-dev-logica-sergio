function analizarJornadaTaller(reparaciones, limiteHoras = 8) {
    // 1. Validar entradas
    if (!Array.isArray(reparaciones) || reparaciones.length === 0 || typeof limiteHoras !== 'number' || limiteHoras <= 0) {
        return {
            tiempo_total: 0,
            tiempo_minimo: 0,
            clasificacion: "inválido",
            explicacion: "La lista de reparaciones debe ser un arreglo no vacío y el límite debe ser mayor a 0."
        };
    }

    // Validar que cada servicio tenga datos correctos
    for (let i = 0; i < reparaciones.length; i++) {
        const item = reparaciones[i];
        if (!item || typeof item.horas !== 'number' || isNaN(item.horas) || item.horas <= 0) {
            return {
                tiempo_total: 0,
                tiempo_minimo: 0,
                clasificacion: "inválido",
                explicacion: "Se encontraron registros de tiempo inválidos."
            };
        }
    }

    // 2. Procesar total y buscar el mínimo
    let tiempoTotal = 0;
    let reparacionRapida = reparaciones[0];

    for (let i = 0; i < reparaciones.length; i++) {
        const actual = reparaciones[i];
        tiempoTotal += actual.horas;

        if (actual.horas < reparacionRapida.horas) {
            reparacionRapida = actual;
        }
    }

    // 3. Clasificar según el límite de horas
    let clasificacion = "";
    const porcentajeUso = (tiempoTotal / limiteHoras) * 100;

    if (tiempoTotal > limiteHoras) {
        clasificacion = "sobrecargado";
    } else if (porcentajeUso >= 70) {
        clasificacion = "eficiente";
    } else {
        clasificacion = "baja ocupación";
    }

    return {
        tiempo_total: tiempoTotal,
        servicio_mas_rapido: reparacionRapida.servicio,
        tiempo_minimo: reparacionRapida.horas,
        limite_horas: limiteHoras,
        clasificacion: clasificacion,
        explicacion: `Se realizaron ${reparaciones.length} servicios sumando ${tiempoTotal} horas de un límite de ${limiteHoras} hrs.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = analizarJornadaTaller([
    { servicio: "Cambio de aceite", horas: 1 },
    { servicio: "Alineación y balanceo", horas: 2 },
    { servicio: "Revisión de frenos", horas: 3 }
], 8);
console.log(caso1);

console.log("\n=== Caso Borde (Valores inválidos) ===");
const caso2 = analizarJornadaTaller([
    { servicio: "Reparación motor", horas: -4 }
], 8);
console.log(caso2);
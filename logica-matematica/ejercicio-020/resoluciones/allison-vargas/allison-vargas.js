function simularVentasComidaUrbana(ventasDiarias, precioUnitario, costoUnitario, costoFijoDiario) {
    // 1. Validar entradas
    if (!Array.isArray(ventasDiarias) || ventasDiarias.length === 0 ||
        typeof precioUnitario !== 'number' || precioUnitario <= 0 ||
        typeof costoUnitario !== 'number' || costoUnitario < 0 ||
        typeof costoFijoDiario !== 'number' || costoFijoDiario < 0) {
        return {
            ingresos_totales: 0,
            ganancia_neta: 0,
            clasificacion: "inválido",
            explicacion: "Parámetros o lista de ventas inválidos."
        };
    }

    // Validar que todas las ventas sean números enteros o flotantes no negativos
    const datosValidos = ventasDiarias.every(v => typeof v === 'number' && !isNaN(v) && v >= 0);
    if (!datosValidos) {
        return {
            ingresos_totales: 0,
            ganancia_neta: 0,
            clasificacion: "inválido",
            explicacion: "La lista contiene registros de ventas no válidos."
        };
    }

    // 2. Simular ingresos y ganancias
    let totalUnidades = 0;
    let ingresosTotales = 0;
    let gananciaNetaTotal = 0;

    for (let i = 0; i < ventasDiarias.length; i++) {
        const unidades = ventasDiarias[i];
        const ingresoDia = unidades * precioUnitario;
        const costoDia = (unidades * costoUnitario) + costoFijoDiario;
        const gananciaDia = ingresoDia - costoDia;

        totalUnidades += unidades;
        ingresosTotales += ingresoDia;
        gananciaNetaTotal += gananciaDia;
    }

    ingresosTotales = Number(ingresosTotales.toFixed(2));
    gananciaNetaTotal = Number(gananciaNetaTotal.toFixed(2));

    // 3. Clasificar rendimiento comercial
    let clasificacion = "";
    if (gananciaNetaTotal >= 150) {
        clasificacion = "rentable";
    } else if (gananciaNetaTotal >= 50) {
        clasificacion = "moderado";
    } else {
        clasificacion = "deficit";
    }

    return {
        unidades_vendidas: totalUnidades,
        ingresos_totales: ingresosTotales,
        ganancia_neta: gananciaNetaTotal,
        clasificacion: clasificacion,
        explicacion: `Simulación completada para ${ventasDiarias.length} días. Unidades: ${totalUnidades}, Ganancia: $${gananciaNetaTotal}.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = simularVentasComidaUrbana([20, 25, 30, 35], 10, 4, 20);
console.log(caso1);

console.log("\n=== Caso Borde (Datos con pérdidas / vacío) ===");
const caso2 = simularVentasComidaUrbana([2, 3, 1], 8, 5, 20);
console.log(caso2);
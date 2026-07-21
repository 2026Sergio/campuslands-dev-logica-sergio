function simularVentasFoodTruck(configuracion) {
    // Validar objeto de entrada y tipos de datos
    if (
        !configuracion ||
        typeof configuracion.diasSimulacion !== "number" || configuracion.diasSimulacion <= 0 ||
        typeof configuracion.pedidosPromedioDia !== "number" || configuracion.pedidosPromedioDia <= 0 ||
        typeof configuracion.precioPromedioPlato !== "number" || configuracion.precioPromedioPlato <= 0 ||
        typeof configuracion.costoIngredientesPorcentaje !== "number" || configuracion.costoIngredientesPorcentaje <= 0 ||
        typeof configuracion.costosFijosDiarios !== "number" || configuracion.costosFijosDiarios < 0
    ) {
        return {
            error: true,
            mensaje: "Parámetros de configuración inválidos o fuera de rango."
        };
    }

    const {
        diasSimulacion,
        pedidosPromedioDia,
        precioPromedioPlato,
        costoIngredientesPorcentaje,
        costosFijosDiarios,
        esFinDeSemana
    } = configuracion;

    const desgloseDiario = [];
    let ingresosTotales = 0;
    let costosTotales = 0;
    let gananciasTotales = 0;

    // Ejecución de la simulación día por día
    for (let dia = 1; dia <= diasSimulacion; dia++) {
        // Multiplicador de demanda (30% de incremento si cae en fin de semana)
        const aplicaFinDeSemana = esFinDeSemana && (dia % 6 === 0 || dia % 7 === 0);
        const factorDemanda = aplicaFinDeSemana ? 1.30 : 1.0;

        const pedidosDia = Math.round(pedidosPromedioDia * factorDemanda);
        const ingresoDia = Number((pedidosDia * precioPromedioPlato).toFixed(2));
        const costoVariablesDia = Number((ingresoDia * (costoIngredientesPorcentaje / 100)).toFixed(2));
        const costoTotalDia = Number((costoVariablesDia + costosFijosDiarios).toFixed(2));
        const gananciaNetaDia = Number((ingresoDia - costoTotalDia).toFixed(2));

        ingresosTotales += ingresoDia;
        costosTotales += costoTotalDia;
        gananciasTotales += gananciaNetaDia;

        desgloseDiario.push({
            dia,
            pedidosEstimados: pedidosDia,
            ingresoBruto: ingresoDia,
            costoOperativo: costoTotalDia,
            gananciaNeta: gananciaNetaDia,
            esAltaDemanda: aplicaFinDeSemana
        });
    }

    ingresosTotales = Number(ingresosTotales.toFixed(2));
    costosTotales = Number(costosTotales.toFixed(2));
    gananciasTotales = Number(gananciasTotales.toFixed(2));

    const margenGananciaPorcentaje = Number(((gananciasTotales / ingresosTotales) * 100).toFixed(2));

    // Clasificación de la viabilidad del modelo de negocio
    let viabilidad = "";
    if (margenGananciaPorcentaje >= 30) {
        viabilidad = "Altamente Rentable / Modelo Escalable";
    } else if (margenGananciaPorcentaje >= 15) {
        viabilidad = "Sostenible / Operación Estable";
    } else if (margenGananciaPorcentaje > 0) {
        viabilidad = "Marginal / Ajustar Costos Directos";
    } else {
        viabilidad = "No Viable / Genera Pérdidas Operativas";
    }

    return {
        dias_simulados: diasSimulacion,
        ingresos_totales: ingresosTotales,
        costos_totales: costosTotales,
        ganancia_neta_total: gananciasTotales,
        margen_rentabilidad: `${margenGananciaPorcentaje}%`,
        nivel_viabilidad: viabilidad,
        desglose_por_dia: desgloseDiario,
        explicacion: `Simulación de ${diasSimulacion} días finalizada. Ingresos: $${ingresosTotales}, Costos: $${costosTotales}, Ganancia Neta: $${gananciasTotales} (${margenGananciaPorcentaje}% de margen).`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal (Simulación Semanal Food Truck de Hamburguesas) ===");
const simulacionEstandar = {
    diasSimulacion: 7,
    pedidosPromedioDia: 50,
    precioPromedioPlato: 12.5,
    costoIngredientesPorcentaje: 35,
    costosFijosDiarios: 150,
    esFinDeSemana: true
};
console.log(simularVentasFoodTruck(simulacionEstandar));

console.log("\n=== Caso Borde (Simulación de 1 Día con Costos Elevados) ===");
const simulacionUnDia = {
    diasSimulacion: 1,
    pedidosPromedioDia: 10,
    precioPromedioPlato: 8.0,
    costoIngredientesPorcentaje: 50,
    costosFijosDiarios: 100,
    esFinDeSemana: false
};
console.log(simularVentasFoodTruck(simulacionUnDia));

console.log("\n=== Caso Entrada Inválida (Valores Negativos o Cero) ===");
const configuracionInvalida = {
    diasSimulacion: 0,
    pedidosPromedioDia: -5
};
console.log(simularVentasFoodTruck(configuracionInvalida));
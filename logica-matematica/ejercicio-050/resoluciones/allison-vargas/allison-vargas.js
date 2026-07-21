function presupuestarPaqueteTuristico(gastosServicios, tasaTasaCambioUSD, porcentajeImpuestoTuristico) {
    // Validar que la lista de gastos sea un arreglo no vacío
    if (!Array.isArray(gastosServicios) || gastosServicios.length === 0) {
        return {
            error: true,
            mensaje: "Se debe proporcionar una lista no vacía de servicios turísticos."
        };
    }

    // Validar tasa de cambio e impuestos
    if (
        typeof tasaTasaCambioUSD !== "number" || tasaTasaCambioUSD <= 0 ||
        typeof porcentajeImpuestoTuristico !== "number" || porcentajeImpuestoTuristico < 0
    ) {
        return {
            error: true,
            mensaje: "La tasa de cambio debe ser un número mayor a cero y el porcentaje de impuesto no puede ser negativo."
        };
    }

    const desgloseServicios = [];
    let subtotalMonedaLocal = 0;

    for (let i = 0; i < gastosServicios.length; i++) {
        const servicio = gastosServicios[i];

        // Validar la estructura de cada gasto
        if (
            !servicio ||
            typeof servicio.concepto !== "string" ||
            typeof servicio.montoLocal !== "number" || servicio.montoLocal <= 0
        ) {
            return {
                error: true,
                mensaje: "Cada servicio debe incluir concepto (texto) y montoLocal (número mayor a cero)."
            };
        }

        subtotalMonedaLocal += servicio.montoLocal;

        // Conversión a USD con precisión exacta y redondeo financiero a 2 decimales
        const montoUSDExacto = servicio.montoLocal / tasaTasaCambioUSD;
        const montoUSDRedondeado = Number(montoUSDExacto.toFixed(2));

        desgloseServicios.push({
            concepto: servicio.concepto,
            monto_local: servicio.montoLocal,
            monto_usd: montoUSDRedondeado
        });
    }

    // Cálculo de subtotal, impuestos y total global
    const impuestoMonedaLocal = subtotalMonedaLocal * (porcentajeImpuestoTuristico / 100);
    const totalMonedaLocalSinRedondear = subtotalMonedaLocal + impuestoMonedaLocal;

    // Aplicar precisión y redondeo financiero en moneda local y USD
    const totalMonedaLocalRedondeado = Math.round(totalMonedaLocalSinRedondear);
    const totalUSDNeto = Number((totalMonedaLocalSinRedondear / tasaTasaCambioUSD).toFixed(2));
    const margenDiferenciaRedondeo = Number((totalMonedaLocalRedondeado - totalMonedaLocalSinRedondear).toFixed(4));

    // Clasificación de la magnitud del paquete turístico
    let categoriaPresupuesto = "";
    if (totalUSDNeto >= 2000) {
        categoriaPresupuesto = "Paquete Premium / Lujo (Alta Gama)";
    } else if (totalUSDNeto >= 800) {
        categoriaPresupuesto = "Paquete Estándar (Turismo Confort)";
    } else {
        categoriaPresupuesto = "Paquete Económico / Mochilero";
    }

    return {
        total_servicios_evaluados: gastosServicios.length,
        subtotal_moneda_local: Number(subtotalMonedaLocal.toFixed(2)),
        impuesto_calculado: Number(impuestoMonedaLocal.toFixed(2)),
        total_moneda_local_exacto: Number(totalMonedaLocalSinRedondear.toFixed(2)),
        total_moneda_local_redondeado: totalMonedaLocalRedondeado,
        total_usd_final: totalUSDNeto,
        diferencia_redondeo_aplicada: margenDiferenciaRedondeo,
        desglose: desgloseServicios,
        clasificacion: categoriaPresupuesto,
        explicacion: `Presupuesto procesado para ${gastosServicios.length} servicios. Total USD: $${totalUSDNeto} ($${totalMonedaLocalRedondeado} moneda local). Categoría: ${categoriaPresupuesto}.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = presupuestarPaqueteTuristico([
    { concepto: "Vuelo internacional", montoLocal: 3500 },
    { concepto: "Hospedaje 5 noches", montoLocal: 2800 },
    { concepto: "Tours guiados", montoLocal: 1200 }
], 7.8, 12);
console.log(caso1);

console.log("\n=== Caso Borde (Presupuesto Económico / Decimales Periódicos) ===");
const caso2 = presupuestarPaqueteTuristico([
    { concepto: "Hostal 1 noche", montoLocal: 150.33 }
], 7.77, 5);
console.log(caso2);

console.log("\n=== Caso Entrada Inválida (Tasa de cambio inválida) ===");
const caso3 = presupuestarPaqueteTuristico([
    { concepto: "Transporte local", montoLocal: 500 }
], 0, 10);
console.log(caso3);
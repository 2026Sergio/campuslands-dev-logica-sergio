function calcularPresupuestoAnimacion(duracionSegundos, costoPorSegundo, esClienteFrecuente) {
    // Validar datos de entrada
    if (
        typeof duracionSegundos !== "number" || duracionSegundos <= 0 ||
        typeof costoPorSegundo !== "number" || costoPorSegundo <= 0 ||
        typeof esClienteFrecuente !== "boolean"
    ) {
        return {
            error: true,
            mensaje: "Los valores de duración y costo deben ser números mayores a cero, y cliente frecuente debe ser booleano."
        };
    }

    // Cálculo de subtotal bruto
    const subtotal = duracionSegundos * costoPorSegundo;

    // Determinación de porcentaje de descuento
    let porcentajeDescuentoVolumen = 0;
    if (duracionSegundos >= 60) {
        porcentajeDescuentoVolumen = 0.15; // 15% por proyecto largo (>= 1 min)
    } else if (duracionSegundos >= 30) {
        porcentajeDescuentoVolumen = 0.10; // 10% por proyecto mediano
    }

    let porcentajeDescuentoCliente = esClienteFrecuente ? 0.05 : 0; // 5% adicional por fidelización

    // Porcentaje total de descuento acumulado
    const porcentajeTotalDescuento = porcentajeDescuentoVolumen + porcentajeDescuentoCliente;

    // Cálculo de montos finales
    const montoDescuento = Number((subtotal * porcentajeTotalDescuento).toFixed(2));
    const totalFinal = Number((subtotal - montoDescuento).toFixed(2));

    // Clasificación del proyecto
    let categoriaProyecto = "";
    if (duracionSegundos < 30) {
        categoriaProyecto = "Corto / Clip Publicitario";
    } else if (duracionSegundos <= 60) {
        categoriaProyecto = "Mediano / Secuencia Cinematográfica";
    } else {
        categoriaProyecto = "Largo / Producción Escena Completa";
    }

    return {
        duracion_segundos: duracionSegundos,
        costo_base_segundo: costoPorSegundo,
        subtotal: Number(subtotal.toFixed(2)),
        porcentaje_descuento_aplicado: `${porcentajeTotalDescuento * 100}%`,
        monto_descuento: montoDescuento,
        total_final: totalFinal,
        clasificacion: categoriaProyecto,
        explicacion: `Proyecto 3D de ${duracionSegundos}s (${categoriaProyecto}). Subtotal: $${subtotal}, Descuento (${porcentajeTotalDescuento * 100}%): -$${montoDescuento}, Total: $${totalFinal}.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal (Proyecto Mediano + Cliente Frecuente) ===");
const caso1 = calcularPresupuestoAnimacion(45, 100, true);
console.log(caso1);

console.log("\n=== Caso Borde (Proyecto Corto sin Descuentos) ===");
const caso2 = calcularPresupuestoAnimacion(15, 80, false);
console.log(caso2);

console.log("\n=== Caso Entrada Inválida (Duración no válida) ===");
const caso3 = calcularPresupuestoAnimacion(-10, 100, true);
console.log(caso3);
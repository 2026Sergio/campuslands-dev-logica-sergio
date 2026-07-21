function calcularPresupuestoAnimacion(costoBase, cantidadSegundos, esClienteFrecuente) {
    // Validar entradas numéricas
    if (
        typeof costoBase !== "number" || typeof cantidadSegundos !== "number" ||
        costoBase <= 0 || cantidadSegundos <= 0
    ) {
        return {
            error: true,
            mensaje: "El costo base y la cantidad de segundos deben ser números mayores a cero."
        };
    }

    // Calcular subtotal bruto
    const subtotal = costoBase * cantidadSegundos;

    // Determinar porcentaje de descuento según el volumen de segundos
    let porcentajeDescuento = 0;
    if (cantidadSegundos >= 60) {
        porcentajeDescuento = 15; // 15% por proyecto grande (1 min o más)
    } else if (cantidadSegundos >= 30) {
        porcentajeDescuento = 10; // 10% por proyecto mediano
    } else if (cantidadSegundos >= 10) {
        porcentajeDescuento = 5;  // 5% por proyecto corto
    }

    // Bonificación adicional por cliente frecuente (5% extra)
    if (esClienteFrecuente === true) {
        porcentajeDescuento += 5;
    }

    // Calcular montos finales
    const montoDescuento = (subtotal * porcentajeDescuento) / 100;
    const totalPagar = subtotal - montoDescuento;

    const totalFormateado = Number(totalPagar.toFixed(2));
    const descuentoFormateado = Number(montoDescuento.toFixed(2));

    // Clasificación del proyecto por presupuesto final
    let categoriaPresupuesto = "";
    if (totalFormateado <= 500) {
        categoriaPresupuesto = "Presupuesto Bajo (Render Básico)";
    } else if (totalFormateado <= 2000) {
        categoriaPresupuesto = "Presupuesto Medio (Render Estándar)";
    } else {
        categoriaPresupuesto = "Presupuesto Alto (Producción Completa)";
    }

    return {
        subtotal: Number(subtotal.toFixed(2)),
        descuento_aplicado: `$${descuentoFormateado} (${porcentajeDescuento}%)`,
        total_pagar: totalFormateado,
        clasificacion: categoriaPresupuesto,
        explicacion: `Animación de ${cantidadSegundos}s. Subtotal: $${subtotal}, Descuento: ${porcentajeDescuento}%, Total: $${totalFormateado}.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = calcularPresupuestoAnimacion(50, 35, true);
console.log(caso1);

console.log("\n=== Caso Borde (Sin descuento, corto) ===");
const caso2 = calcularPresupuestoAnimacion(30, 5, false);
console.log(caso2);

console.log("\n=== Caso Entrada Inválida ===");
const caso3 = calcularPresupuestoAnimacion(0, 10, false);
console.log(caso3);
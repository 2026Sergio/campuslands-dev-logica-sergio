function calcularPresupuestoAnimacion(segundos, costoPorSegundo) {
    // 1. Validar caso borde: valores no numéricos o menores/iguales a cero
    if (typeof segundos !== 'number' || segundos <= 0 || typeof costoPorSegundo !== 'number' || costoPorSegundo <= 0) {
        return {
            presupuesto_final: 0,
            clasificacion: "inválido",
            explicacion: "Valores inválidos. Los segundos y el costo deben ser números mayores a cero."
        };
    }

    // 2. Calcular costo base
    const costoBase = segundos * costoPorSegundo;
    let porcentajeDescuento = 0;

    // 3. Aplicar reglas de descuento escalonado
    if (costoBase >= 2000) {
        porcentajeDescuento = 20;
    } else if (costoBase >= 1000) {
        porcentajeDescuento = 10;
    }

    const valorDescuento = (costoBase * porcentajeDescuento) / 100;
    const presupuestoFinal = costoBase - valorDescuento;

    // 4. Determinar clasificación del presupuesto
    let clasificacion = porcentajeDescuento > 0 ? "con_descuento" : "precio_estandar";

    return {
        presupuesto_final: presupuestoFinal,
        clasificacion: clasificacion,
        explicacion: `Costo base: $${costoBase}. Se aplicó un descuento del ${porcentajeDescuento}% ($${valorDescuento}), resultando en $${presupuestoFinal}.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal (Con descuento del 10%) ===");
const caso1 = calcularPresupuestoAnimacion(60, 25);
console.log(caso1);

console.log("\n=== Caso Normal (Sin descuento) ===");
const caso2 = calcularPresupuestoAnimacion(10, 45);
console.log(caso2);

console.log("\n=== Caso Borde (Valores Inválidos) ===");
const caso3 = calcularPresupuestoAnimacion(-15, 30);
console.log(caso3);
function calcularPresupuestoViaje(gastos, personas, impuestoPorcentaje) {
    // 1. Validar caso borde
    if (!gastos || gastos.length === 0 || !personas || personas <= 0) {
        return {
            costo_total: 0,
            costo_por_persona: 0,
            clasificacion: "inválido",
            explicacion: "La lista de gastos está vacía o el número de personas no es válido."
        };
    }

    // 2. Sumar total de gastos
    const sumaGastos = gastos.reduce((acc, curr) => acc + curr, 0);

    // 3. Aplicar impuesto y calcular costo por persona con redondeo a 2 decimales
    const tasaImpuesto = 1 + (impuestoPorcentaje / 100);
    const costoTotalConImpuesto = sumaGastos * tasaImpuesto;
    const costoPorPersonaRaw = costoTotalConImpuesto / personas;
    const costoPorPersona = Number(costoPorPersonaRaw.toFixed(2));

    // 4. Determinar categoría de presupuesto
    let clasificacion = "";
    if (costoPorPersona > 300) {
        clasificacion = "lujo";
    } else if (costoPorPersona >= 100) {
        clasificacion = "estándar";
    } else {
        clasificacion = "económico";
    }

    return {
        costo_total: Number(costoTotalConImpuesto.toFixed(2)),
        costo_por_persona: costoPorPersona,
        clasificacion: clasificacion,
        explicacion: `Suma total con impuesto (${impuestoPorcentaje}%): ${costoTotalConImpuesto.toFixed(2)}. Redondeado a 2 decimales por persona.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = calcularPresupuestoViaje([150.75, 80.50, 45.20], 2, 12);
console.log(caso1);

console.log("\n=== Caso Borde (Lista Vacía) ===");
const caso2 = calcularPresupuestoViaje([], 2, 12);
console.log(caso2);
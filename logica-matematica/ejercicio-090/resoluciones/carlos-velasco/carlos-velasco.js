// ejercicio logica matematica - redondeo y precision - Ejercicio 090

const calcularPresupuestoTurismo = (costosServicios, impuestoPorcentaje, tasaCambio) => {
    if (!costosServicios || !Array.isArray(costosServicios) || costosServicios.length === 0) {
        return { error: "La lista de costos de servicios turísticos está vacía o no es válida." };
    }

    if (typeof impuestoPorcentaje !== 'number' || typeof tasaCambio !== 'number' || tasaCambio <= 0) {
        return { error: "Los parámetros financieros (impuesto o tasa de cambio) no son válidos." };
    }

    let subtotalDolares = 0;

    // 1. Sumar todos los costos base (acumulador)
    for (let i = 0; i < costosServicios.length; i++) {
        let costo = costosServicios[i];
        if (costo < 0) costo = 0; // Control de límites para valores negativos
        subtotalDolares += costo;
    }

    // 2. Aplicar cálculo de impuestos
    const montoImpuesto = subtotalDolares * (impuestoPorcentaje / 100);
    const totalDolares = subtotalDolares + montoImpuesto;

    // 3. Conversión a moneda local usando la tasa de cambio
    const totalMonedaLocal = totalDolares * tasaCambio;

    // 4. Reglas de redondeo y precisión con toFixed(2)
    const presupuestoFinalUSD = parseFloat(totalDolares.toFixed(2));
    const presupuestoFinalLocal = parseFloat(totalMonedaLocal.toFixed(2));

    // 5. Clasificación del presupuesto del viaje
    let categoriaPresupuesto = "Turismo Estándar / Económico";
    if (presupuestoFinalUSD >= 2000) {
        categoriaPresupuesto = "Viaje de Lujo / Premium";
    } else if (presupuestoFinalUSD >= 1000) {
        categoriaPresupuesto = "Turismo Moderado";
    }

    return {
        subtotal_usd: parseFloat(subtotalDolares.toFixed(2)),
        impuesto_usd: parseFloat(montoImpuesto.toFixed(2)),
        presupuesto_total_usd: presupuestoFinalUSD,
        presupuesto_total_local: presupuestoFinalLocal,
        categoria_viaje: categoriaPresupuesto,
        explicacion: "Se calcularon y redondearon con precisión los costos de los servicios turísticos, sumando los impuestos correspondientes y convirtiéndolos a la moneda local mediante la tasa de cambio."
    };
};

const costosNormales = [450.50, 120.75, 300.00, 89.99]; // Ej: Hoteles, vuelos, tours, comidas
const impuestoNormal = 12; // 12%
const tasaCambioNormal = 4050; // Ej: pesos por dólar o moneda local

const costosBorde = [49.99];
const impuestoBorde = 0;
const tasaCambioBorde = 1.0;

console.log(calcularPresupuestoTurismo(costosNormales, impuestoNormal, tasaCambioNormal));
console.log(calcularPresupuestoTurismo(costosBorde, impuestoBorde, tasaCambioBorde));
function calcularPresupuestoFinal(presupuesto, descuento) {
    if (presupuesto <= 0) {
        return "El presupuesto debe ser mayor que cero.";
    }

    if (descuento < 0 || descuento > 100) {
        return "El porcentaje de descuento debe estar entre 0 y 100.";
    }

    let valorDescuento = presupuesto * (descuento / 100);
    let presupuestoFinal = presupuesto - valorDescuento;

    return {
        descuentoAplicado: valorDescuento.toFixed(2),
        presupuestoFinal: presupuestoFinal.toFixed(2)
    };
}

console.log("Caso normal:");
console.log(calcularPresupuestoFinal(2500, 15));

console.log("");

console.log("Caso borde:");
console.log(calcularPresupuestoFinal(0, 10));

console.log("");

console.log("Caso adicional:");
console.log(calcularPresupuestoFinal(4800, 25));
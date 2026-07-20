function simularVenta(precio, cantidad, descuento) {
    if (precio <= 0 || cantidad <= 0) {
        return "El precio y la cantidad deben ser mayores que cero.";
    }

    if (descuento < 0 || descuento > 100) {
        return "El porcentaje de descuento debe estar entre 0 y 100.";
    }

    let total = precio * cantidad;
    let valorDescuento = total * (descuento / 100);
    let totalFinal = total - valorDescuento;

    return {
        totalSinDescuento: total.toFixed(2),
        descuentoAplicado: valorDescuento.toFixed(2),
        totalFinal: totalFinal.toFixed(2)
    };
}

console.log("Caso normal:");
console.log(simularVenta(20, 5, 10));

console.log("");

console.log("Caso borde:");
console.log(simularVenta(0, 5, 10));

console.log("");

console.log("Caso adicional:");
console.log(simularVenta(35, 8, 15));
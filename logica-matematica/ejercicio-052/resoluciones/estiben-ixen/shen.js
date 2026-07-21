function calcularProbabilidad(favorables, posibles) {
    if (posibles <= 0) {
        return "No es posible calcular la probabilidad.";
    }

    let probabilidad = (favorables / posibles) * 100;

    return `Probabilidad: ${probabilidad.toFixed(2)}%`;
}

console.log("Caso normal:");
console.log(calcularProbabilidad(7, 10));

console.log("");

console.log("Caso borde:");
console.log(calcularProbabilidad(5, 0));

console.log("");

console.log("Caso adicional:");
console.log(calcularProbabilidad(12, 20));
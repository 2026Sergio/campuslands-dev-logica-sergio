function calcularDistancia(x1, y1, x2, y2) {
    let distancia = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    return `Distancia: ${distancia.toFixed(2)}`;
}

console.log("Caso normal:");
console.log(calcularDistancia(2, 3, 8, 11));

console.log("");

console.log("Caso borde:");
console.log(calcularDistancia(5, 5, 5, 5));

console.log("");

console.log("Caso adicional:");
console.log(calcularDistancia(-3, 4, 6, 10));
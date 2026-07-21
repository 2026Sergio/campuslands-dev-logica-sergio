function calcularDistancia(velocidad, tiempo) {
    if (velocidad <= 0 || tiempo <= 0) {
        return "La velocidad y el tiempo deben ser mayores que cero.";
    }

    let distancia = velocidad * tiempo;

    return `Distancia: ${distancia} km`;
}

console.log("Caso normal:");
console.log(calcularDistancia(60, 3));

console.log("");

console.log("Caso borde:");
console.log(calcularDistancia(0, 5));

console.log("");

console.log("Caso adicional:");
console.log(calcularDistancia(80, 2.5));
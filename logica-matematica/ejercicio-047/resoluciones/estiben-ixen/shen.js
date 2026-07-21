function generarSecuencia(cantidad) {
    if (cantidad <= 0) {
        return "Cantidad de canciones inválida.";
    }

    let secuencia = [];

    for (let i = 1; i <= cantidad; i++) {
        secuencia.push(i);
    }

    return secuencia;
}

console.log("Caso normal:");
console.log(generarSecuencia(5));

console.log("");

console.log("Caso borde:");
console.log(generarSecuencia(0));

console.log("");

console.log("Caso adicional:");
console.log(generarSecuencia(10));
function normalizarPuntajes(puntajes) {
    if (puntajes.length === 0) {
        return "No hay puntajes para normalizar.";
    }

    let mayor = puntajes[0];

    for (let i = 1; i < puntajes.length; i++) {
        if (puntajes[i] > mayor) {
            mayor = puntajes[i];
        }
    }

    let puntajesNormalizados = [];

    for (let i = 0; i < puntajes.length; i++) {
        puntajesNormalizados.push(((puntajes[i] / mayor) * 100).toFixed(2));
    }

    return puntajesNormalizados;
}

console.log("Caso normal:");
console.log(normalizarPuntajes([70, 85, 100, 90]));

console.log("");

console.log("Caso borde:");
console.log(normalizarPuntajes([]));

console.log("");

console.log("Caso adicional:");
console.log(normalizarPuntajes([45, 60, 75, 90]));

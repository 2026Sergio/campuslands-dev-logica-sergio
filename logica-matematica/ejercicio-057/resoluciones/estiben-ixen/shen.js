function analizarRanking(puntuaciones) {
    if (puntuaciones.length === 0) {
        return "No hay puntuaciones para analizar.";
    }

    let suma = 0;
    let mayor = puntuaciones[0];
    let menor = puntuaciones[0];

    for (let i = 0; i < puntuaciones.length; i++) {
        suma += puntuaciones[i];

        if (puntuaciones[i] > mayor) {
            mayor = puntuaciones[i];
        }

        if (puntuaciones[i] < menor) {
            menor = puntuaciones[i];
        }
    }

    let promedio = suma / puntuaciones.length;

    return {
        mayor: mayor,
        menor: menor,
        promedio: promedio.toFixed(2)
    };
}

console.log("Caso normal:");
console.log(analizarRanking([85, 92, 78, 96, 88]));

console.log("");

console.log("Caso borde:");
console.log(analizarRanking([]));

console.log("");

console.log("Caso adicional:");
console.log(analizarRanking([70, 81, 95, 89, 100, 76]));
function calcularEnfrentamientos(participantes) {
    if (participantes < 2) {
        return "No hay suficientes participantes para generar enfrentamientos.";
    }

    let enfrentamientos = participantes * (participantes - 1) / 2;

    return `Enfrentamientos posibles: ${enfrentamientos}`;
}

console.log("Caso normal:");
console.log(calcularEnfrentamientos(8));

console.log("");

console.log("Caso borde:");
console.log(calcularEnfrentamientos(1));

console.log("");

console.log("Caso adicional:");
console.log(calcularEnfrentamientos(12));

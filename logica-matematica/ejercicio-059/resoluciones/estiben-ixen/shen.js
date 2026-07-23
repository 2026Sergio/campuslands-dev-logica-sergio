function validarValor(valor) {
    if (typeof valor !== "number" || Number.isNaN(valor)) {
        return "El dato ingresado no es un número válido.";
    }

    if (valor <= 0) {
        return "El valor debe ser mayor que cero.";
    }

    return "Valor válido para la fórmula química.";
}

console.log("Caso normal:");
console.log(validarValor(25));

console.log("");

console.log("Caso borde:");
console.log(validarValor(-8));

console.log("");

console.log("Caso adicional:");
console.log(validarValor("NaCl"));
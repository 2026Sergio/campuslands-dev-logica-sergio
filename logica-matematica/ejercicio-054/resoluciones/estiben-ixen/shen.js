function calcularMedidas(base, altura) {
    if (base <= 0 || altura <= 0) {
        return "Las dimensiones deben ser mayores que cero.";
    }

    let area = base * altura;
    let perimetro = 2 * (base + altura);

    return {
        area: area,
        perimetro: perimetro
    };
}

console.log("Caso normal:");
console.log(calcularMedidas(12, 8));

console.log("");

console.log("Caso borde:");
console.log(calcularMedidas(0, 5));

console.log("");

console.log("Caso adicional:");
console.log(calcularMedidas(15, 10));
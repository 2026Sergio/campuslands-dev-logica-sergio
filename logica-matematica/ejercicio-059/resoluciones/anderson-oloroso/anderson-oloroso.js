function validarFormulas(formulas) {
    const resultados = [];

    for (let i = 0; i < formulas.length; i++) {
        const formula = formulas[i];
        let estado;

        if (formula.elementos <= 0) {
            estado = "Inválida";
        } else if (formula.atomos <= 0) {
            estado = "Inválida";
        } else {
            estado = "Válida";
        }

        resultados.push({
            nombre: formula.nombre,
            estado: estado
        });
    }

    return resultados;
}

// Ejemplo
const formulas = [
    { nombre: "H2O", elementos: 2, atomos: 3 },
    { nombre: "CO2", elementos: 2, atomos: 3 },
    { nombre: "X", elementos: 0, atomos: 0 }
];

console.log(validarFormulas(formulas));
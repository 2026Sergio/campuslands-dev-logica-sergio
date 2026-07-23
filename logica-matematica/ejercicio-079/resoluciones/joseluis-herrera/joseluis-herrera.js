const Formulas = [
    { codigo: "H2O", peso: 18.015, validez: true },
    { codigo: "NaCl", peso: 58.44, validez: true },
    { codigo: "C6H12O6", peso: 180.15, validez: true },
    { codigo: "XYZ", peso: 0, validez: false },
    { codigo: "H2SO4", peso: 98.079, validez: true }
];

let validas = [];
let validar_formula = (f) => f.validez && (f.peso > 0);

if (Formulas.length === 0) {
    console.log("No hay fórmulas químicas registradas para validar.");
} else {
    Formulas.forEach((formula) => {
        if (validar_formula(formula)) {
            validas.push(formula);
        }
    });
    console.log(`Se validaron correctamente ${validas.length} fórmulas químicas.`);
}
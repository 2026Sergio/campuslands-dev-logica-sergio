const Reactivos = [
    { nombre: "Acido Clhidrico", stock: 85, unidad: "ml", peligroso: true },
    { nombre: "Hidroxido de Sodio", stock: 250, unidad: "gramos", peligroso: true },
    { nombre: "Agua Destilada", stock: 1200, unidad: "ml", peligroso: false },
    { nombre: "Sulfato de Cobre", stock: 45, unidad: "gramos", peligroso: true },
    { nombre: "Cloruro de Sodio", stock: 500, unidad: "gramos", peligroso: false }
];

let criticos = [];
let calcular_alerta = (r) => (r.stock < 100) && r.peligroso;

if (Reactivos.length === 0) {
    console.log("No hay reactivos registrados en el inventario.");
} else {
    Reactivos.forEach((reactivo) => {
        if (calcular_alerta(reactivo)) {
            criticos.push(reactivo);
        }
    });
    console.log(`Hay ${criticos.length} reactivos químicos en estado crítico y peligroso.`);
}
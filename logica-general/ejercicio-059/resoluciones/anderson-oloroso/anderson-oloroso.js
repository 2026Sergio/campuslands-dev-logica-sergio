function revisarInventarioQuimico(productos) {
    const resultados = [];

    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        let estado;

        if (producto.cantidad === 0) {
            estado = "Agotado";
        } else if (producto.cantidad <= producto.minimo) {
            estado = "Stock bajo";
        } else {
            estado = "Disponible";
        }

        resultados.push({
            formula: producto.formula,
            cantidad: producto.cantidad,
            estado: estado
        });
    }

    return resultados;
}

// Ejemplo
const inventario = [
    { formula: "H2O", cantidad: 50, minimo: 10 },
    { formula: "NaCl", cantidad: 5, minimo: 10 },
    { formula: "CO2", cantidad: 0, minimo: 5 }
];

console.log(revisarInventarioQuimico(inventario));
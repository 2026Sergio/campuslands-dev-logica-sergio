function calcularPedidos(pedidos) {
    const resultados = [];

    for (let i = 0; i < pedidos.length; i++) {
        const pedido = pedidos[i];

        const subtotal = pedido.precio * pedido.cantidad;
        const impuesto = subtotal * 0.12;
        const total = subtotal + impuesto;

        resultados.push({
            producto: pedido.producto,
            subtotal: subtotal.toFixed(2),
            impuesto: impuesto.toFixed(2),
            total: total.toFixed(2)
        });
    }

    return resultados;
}

// Ejemplo
const pedidos = [
    { producto: "Hamburguesa", precio: 8, cantidad: 3 },
    { producto: "Tacos", precio: 5, cantidad: 4 },
    { producto: "Hot Dog", precio: 6, cantidad: 2 }
];

console.log(calcularPedidos(pedidos));
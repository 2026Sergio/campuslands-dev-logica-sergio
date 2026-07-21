function verificarInventarioQuimico(inventario) {
    let reporte = [];
    
    for (let compuesto of inventario) {
        let estado = "Seguro";
        
        if (compuesto.cantidad <= 5) {
            estado = "Alerta: Stock bajo";
        } else if (compuesto.puntoEbullicion < 50 && compuesto.cantidad > 50) {
            estado = "Peligro: Almacenamiento inestable";
        }
        
        reporte.push({
            nombre: compuesto.nombre,
            estado: estado
        });
    }
    
    return reporte;
}

const stock = [
    { nombre: "Acetona", cantidad: 60, puntoEbullicion: 56 },
    { nombre: "Eter", cantidad: 100, puntoEbullicion: 34 },
    { nombre: "Agua", cantidad: 3, puntoEbullicion: 100 }
];

console.log(verificarInventarioQuimico(stock));
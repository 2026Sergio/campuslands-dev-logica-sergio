const analizarInventarioMotos = (motos) => {
    if (!motos || motos.length === 0) {
        return { error: "El inventario de motos está vacío." };
    }

    let precios = motos.map(m => m.precio);
    let precioMaximo = Math.max(...precios);
    let precioMinimo = Math.min(...precios);
    let rangoPrecios = precioMaximo - precioMinimo;

    // Buscar la moto con el precio máximo
    let motoMasCara = motos.find(m => m.precio === precioMaximo);

    // Clasificación del inventario según el rango de precios
    let categoriaInventario = "Gama Estándar";
    if (rangoPrecios >= 5000) {
        categoriaInventario = "Inventario Variado (Amplio Rango)";
    } else if (precioMaximo >= 10000) {
        categoriaInventario = "Gama Alta";
    }

    return {
        precio_maximo: precioMaximo,
        precio_minimo: precioMinimo,
        rango_precios: rangoPrecios,
        modelo_mas_caro: motoMasCara ? motoMasCara.modelo : "Desconocido",
        categoria_inventario: categoriaInventario,
        explicacion: "Se analizaron los rangos y valores máximos del inventario de motos para determinar la dispersión de precios y la categoría comercial."
    };
};

const inventarioNormal = [
    { modelo: "Yamaha MT-03", precio: 5500 },
    { modelo: "Kawasaki Ninja 400", precio: 6800 },
    { modelo: "Honda CB500F", precio: 6200 }
];

const inventarioBorde = [
    { modelo: "Scooter 110cc", precio: 2000 }
];

console.log(analizarInventarioMotos(inventarioNormal));
console.log(analizarInventarioMotos(inventarioBorde));
// ejercicio logica - busqueda de elementos - Ejercicio 086

const buscarHiperdeportivo = (catalogo, modeloBuscado) => {
    if (!catalogo || !Array.isArray(catalogo) || catalogo.length === 0) {
        return { error: "El catálogo de autos hiperdeportivos está vacío o no es válido." };
    }

    if (!modeloBuscado || typeof modeloBuscado !== 'string') {
        return { error: "El modelo buscado no es un texto válido." };
    }

    const busquedaNormalizada = modeloBuscado.toLowerCase().trim();

    // Búsqueda del elemento dentro del arreglo de objetos
    const autoEncontrado = catalogo.find(auto => 
        auto.modelo && auto.modelo.toLowerCase().trim() === busquedaNormalizada
    );

    if (!autoEncontrado) {
        return {
            encontrado: false,
            modelo_buscado: modeloBuscado,
            mensaje: "El vehículo hiperdeportivo no se encuentra registrado en el catálogo actual."
        };
    }

    return {
        encontrado: true,
        detalle_auto: autoEncontrado,
        explicacion: "Se aplicó una búsqueda exacta por nombre de modelo dentro del catálogo de hiperdeportivos siguiendo las reglas de la lógica general."
    };
};

const catalogoHiperdeportivos = [
    { modelo: "Bugatti Chiron", caballosDeFuerza: 1500, velocidadMaxKmh: 420 },
    { modelo: "Koenigsegg Jesko", caballosDeFuerza: 1600, velocidadMaxKmh: 480 },
    { modelo: "Rimac Nevera", caballosDeFuerza: 1914, velocidadMaxKmh: 412 }
];

const busquedaNormal = "Koenigsegg Jesko";
const busquedaBorde = "Ferrari F40";

console.log(buscarHiperdeportivo(catalogoHiperdeportivos, busquedaNormal));
console.log(buscarHiperdeportivo(catalogoHiperdeportivos, busquedaBorde));
// ejercicio logica - filtros por condiciones - Ejercicio 084

const filtrarMotosDisponibles = (inventario, criterio) => {
    if (!inventario || inventario.length === 0) {
        return { error: "El inventario de motos está vacío o no es válido." };
    }

    if (!criterio) {
        return { error: "No se especificó un criterio de filtrado." };
    }

    // Filtrar motocicletas según múltiples condiciones lógicas
    const motosFiltradas = inventario.filter(moto => {
        let cumpleCriterio = true;

        if (criterio.cilindradaMinima) {
            cumpleCriterio = cumpleCriterio && moto.cilindrada >= criterio.cilindradaMinima;
        }

        if (criterio.precioMaximo) {
            cumpleCriterio = cumpleCriterio && moto.precio <= criterio.precioMaximo;
        }

        if (criterio.soloDisponibles === true) {
            cumpleCriterio = cumpleCriterio && moto.stock > 0;
        }

        return cumpleCriterio;
    });

    return {
        total_encontradas: motosFiltradas.length,
        motos_filtradas: motosFiltradas,
        explicacion: "Se aplicaron filtros condicionales de cilindrada, precio máximo y disponibilidad de stock sobre el inventario de motos."
    };
};

const inventarioMotos = [
    { modelo: "Yamaha MT-03", cilindrada: 321, precio: 5500, stock: 4 },
    { modelo: "Honda Navi", cilindrada: 110, precio: 1800, stock: 0 },
    { modelo: "Kawasaki Z400", cilindrada: 399, precio: 6200, stock: 2 },
    { modelo: "Suzuki Gixxer 250", cilindrada: 249, precio: 4100, stock: 5 }
];

const criterioNormal = { cilindradaMinima: 250, precioMaximo: 6000, soloDisponibles: true };
const criterioBorde = { cilindradaMinima: 600, precioMaximo: 10000, soloDisponibles: true };

console.log(filtrarMotosDisponibles(inventarioMotos, criterioNormal));
console.log(filtrarMotosDisponibles(inventarioMotos, criterioBorde));
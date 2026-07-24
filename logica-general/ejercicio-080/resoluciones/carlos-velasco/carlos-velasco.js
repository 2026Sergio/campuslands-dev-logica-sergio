const seleccionarPlatoUrbano = (menuPuestos, presupuestoMaximo) => {
    if (!menuPuestos || menuPuestos.length === 0) {
        return { error: "No hay opciones disponibles en el menú de comida urbana." };
    }

    // Filtrar platos que estén dentro del presupuesto
    const opcionesValidas = menuPuestos.filter(plato => plato.precio <= presupuestoMaximo);

    if (opcionesValidas.length === 0) {
        return {
            seleccion: null,
            motivo: "Ningún plato se ajusta al presupuesto máximo proporcionado."
        };
    }

    // Estrategia: Seleccionar el plato con mayor calificación dentro de los accesibles
    let mejorPlato = opcionesValidas[0];

    for (let i = 1; i < opcionesValidas.length; i++) {
        if (opcionesValidas[i].calificacion > mejorPlato.calificacion) {
            mejorPlato = opcionesValidas[i];
        }
    }

    return {
        plato_recomendado: mejorPlato.nombre,
        precio: mejorPlato.precio,
        calificacion: mejorPlato.calificacion,
        explicacion: `Se aplicó la estrategia de selección eligiendo la mejor calificación dentro del presupuesto de $${presupuestoMaximo}.`
    };
};

const menuUrbano = [
    { nombre: "Hot Dog Artesanal", precio: 8.50, calificacion: 4.2 },
    { nombre: "Hamburguesa Doble", precio: 12.00, calificacion: 4.8 },
    { nombre: "Tacos al Pastor", precio: 7.00, calificacion: 4.6 }
];

const presupuestoNormal = 10.00;
const presupuestoBajo = 4.00;

console.log(seleccionarPlatoUrbano(menuUrbano, presupuestoNormal));
console.log(seleccionarPlatoUrbano(menuUrbano, presupuestoBajo));
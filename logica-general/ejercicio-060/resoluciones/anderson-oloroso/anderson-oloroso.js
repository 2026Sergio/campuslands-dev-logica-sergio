function seleccionarMejorMenu(menus) {
    let mejorMenu = menus[0];

    for (let i = 1; i < menus.length; i++) {
        const menu = menus[i];

        if (menu.puntuacion > mejorMenu.puntuacion) {
            mejorMenu = menu;
        } else if (
            menu.puntuacion === mejorMenu.puntuacion &&
            menu.precio < mejorMenu.precio
        ) {
            mejorMenu = menu;
        }
    }

    return mejorMenu;
}

// Ejemplo
const menus = [
    { nombre: "Hamburguesa clásica", puntuacion: 8, precio: 12 },
    { nombre: "Tacos urbanos", puntuacion: 9, precio: 15 },
    { nombre: "Pizza callejera", puntuacion: 9, precio: 10 }
];

console.log(seleccionarMejorMenu(menus));
function calcularPrecioComision(resolucion, estilo, urgencia) {
    let precioBase = 0;

    if (resolucion === "baja") {
        precioBase = 20;
    } else if (resolucion === "media") {
        precioBase = 40;
    } else if (resolucion === "alta") {
        precioBase = 70;
    } else {
        return "Error: Resolucion no valida";
    }

    if (estilo === "lineart") {
        precioBase += 0;
    } else if (estilo === "color") {
        precioBase += 30;
    } else if (estilo === "renderizado") {
        precioBase += 60;
    } else {
        return "Error: Estilo no valido";
    }

    if (urgencia) {
        precioBase += 50;
    }

    return precioBase;
}

console.log(calcularPrecioComision("media", "color", true));
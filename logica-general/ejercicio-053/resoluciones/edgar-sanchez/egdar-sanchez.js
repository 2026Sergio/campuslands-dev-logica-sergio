function validarSaltoParacaidismo(velocidadViento, altitud) {
    const VELOCIDAD_MAXIMA = 30;
    const ALTITUD_MINIMA = 1000;
    const ALTITUD_MAXIMA = 4000;

    if (velocidadViento < 0 || altitud < 0) {
        return "Datos invalidos";
    }

    if (velocidadViento > VELOCIDAD_MAXIMA) {
        return "Salto cancelado: Viento excesivo";
    }

    if (altitud < ALTITUD_MINIMA) {
        return "Salto cancelado: Altitud insuficiente";
    }

    if (altitud > ALTITUD_MAXIMA) {
        return "Salto cancelado: Altitud demasiado alta sin equipo especial";
    }

    return "Salto autorizado";
}

console.log(validarSaltoParacaidismo(15, 2500));
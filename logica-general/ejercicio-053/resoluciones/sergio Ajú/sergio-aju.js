function validarSalto(condiciones) {
    if (!condiciones.paracaidas_revisado) {
        return { autorizado: false, mensaje: "Salto denegado: equipo sin revisar." };
    }
    if (condiciones.viento_kmh > 30) {
        return { autorizado: false, mensaje: "Salto denegado: viento demasiado fuerte." };
    }
    if (condiciones.visibilidad_km < 5) {
        return { autorizado: false, mensaje: "Salto denegado: visibilidad insuficiente." };
    }
    
    return { autorizado: true, mensaje: "Salto autorizado: condiciones óptimas y equipo verificado." };
}
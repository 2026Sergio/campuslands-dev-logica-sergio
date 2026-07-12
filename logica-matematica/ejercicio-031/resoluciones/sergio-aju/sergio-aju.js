function calcularPuntajeKickboxing(participantes, bono, penalizacion) {
    if (!Array.isArray(participantes) || participantes.length === 0) {
        return { error: "La lista de participantes no es válida." };
    }
    const sumaBase = participantes.reduce((acumulador, actual) => acumulador + actual, 0);
    const puntajeFinal = sumaBase + bono - penalizacion;
    let clasificacion = "";
    if (puntajeFinal > 50) {
        clasificacion = "profesional";
    } else if (puntajeFinal >= 20) {
        clasificacion = "competitivo";
    } else {
        clasificacion = "principiante";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Se sumaron los puntajes (${sumaBase}), se aplicó un bono de ${bono} y una penalización de ${penalizacion}.`
    };
}
console.log("Caso Ejemplo:", calcularPuntajeKickboxing([12, 18, 25, 30], 8, 3));
console.log("Caso Borde:", calcularPuntajeKickboxing([5], 2, 1));
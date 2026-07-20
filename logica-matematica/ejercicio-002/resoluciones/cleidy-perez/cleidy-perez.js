const participantesEntreada = {
    participantes: [12, 18, 25, 30],
    bono: 8,
    penalizacion: 3
};

const sinParticipantes = {
    participantes: [],
    bono: 10,
    penalizacion: 5
};

const participantesdeAlto = {
    participantes: [30, 35, 40],
    bono: 5,
    penalizacion: 1
};


function procesarRankingFutbolSala(datos) {
    const { participantes, bono, penalizacion } = datos;

    // CASO BORDE: Validación de seguridad por si el arreglo viene vacío
    if (!participantes || participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "descalificado",
            explicacion: "No hay datos de participantes registrados para calcular."
        };
    }
    const sumaPuntajes = participantes.reduce((total, actual) => total + actual, 0);
    const promedioBase = sumaPuntajes / participantes.length;
    const puntajeFinal = Math.round(promedioBase + bono - penalizacion);

    let clasificacion = "recreativo";
    if (puntajeFinal >= 25) {
        clasificacion = "competitivo";
    } else if (puntajeFinal >= 15) {
        clasificacion = "intermedio";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: "se sumo el bono y se resto la penalizacion segun las reglas."
    };

}

console.log(procesarRankingFutbolSala(participantesEntreada));
console.log(procesarRankingFutbolSala(sinParticipantes));
console.log(procesarRankingFutbolSala(participantesdeAlto))
const normalizarPuntajesSoldadura = (puntajes) => {
    if (!puntajes || puntajes.length === 0) {
        return { error: "La lista de puntajes de calidad está vacía." };
    }

    const min = Math.min(...puntajes);
    const max = Math.max(...puntajes);

    if (min === max) {
        const normalizadosUnicos = puntajes.map(() => 1);
        return {
            puntajes_normalizados: normalizadosUnicos,
            explicacion: "Todos los puntajes son idénticos, por lo que se normalizan a un valor base de 1."
        };
    }

    const normalizados = puntajes.map(p => parseFloat(((p - min) / (max - min)).toFixed(2)));

    return {
        puntajes_originales: puntajes,
        puntajes_normalizados: normalizados,
        explicacion: "Se aplicó la fórmula de normalización Min-Max para escalar los puntajes de inspección de soldadura entre 0 y 1."
    };
};

const pruebasNormales = [75, 85, 95, 60, 90];
const pruebasBorde = [80, 80, 80];

console.log(normalizarPuntajesSoldadura(pruebasNormales));
console.log(normalizarPuntajesSoldadura(pruebasBorde));
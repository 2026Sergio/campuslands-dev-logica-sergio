const calcularRankingRenders = (puntajes) => {
    if (!puntajes || puntajes.length === 0) {
        return { error: "La lista de puntajes está vacía." };
    }

    const total = puntajes.reduce((acc, val) => acc + val, 0);
    const promedio = total / puntajes.length;
    const maximo = Math.max(...puntajes);
    const minimo = Math.min(...puntajes);

    // Clasificación general según el promedio del ranking
    let clasificacion = "Estándar";
    if (promedio >= 85) {
        clasificacion = "Elite";
    } else if (promedio >= 70) {
        clasificacion = "Competitivo";
    }

    return {
        puntaje_promedio: parseFloat(promedio.toFixed(2)),
        puntaje_maximo: maximo,
        puntaje_minimo: minimo,
        clasificacion_general: clasificacion,
        explicacion: `Se procesaron ${puntajes.length} puntajes de renders arquitectónicos obteniendo un promedio de ${promedio.toFixed(2)}.`
    };
};

const puntajesNormales = [88, 92, 79, 95, 84];
const puntajesBorde = [60];

console.log(calcularRankingRenders(puntajesNormales));
console.log(calcularRankingRenders(puntajesBorde));
const calcularPuntaje = (participantes, bono, penalizacion) => {
    if (participantes.length === 0) return "No hay participantes";

    const suma = participantes.reduce((acc, curr) => acc + curr, 0);
    const promedio = suma / participantes.length;

    const puntajeFinal = promedio + bono - penalizacion;
    const clasificacion = puntajeFinal >= 25 ? "competitivo" : "en entrenamiento";

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: "Se calculó el promedio, se sumó el bono y se restó la penalización."
    };
};

console.log(calcularPuntaje([12, 28, 13, 40], 8, 3));
console.log(calcularPuntaje([10], 5, 2));
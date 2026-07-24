// ejercicio logica - operaciones aritmeticas controladas - Ejercicio 081

const calcularPuntajeCompetitivo = (participantes, bono, penalizacion) => {
    if (!participantes || participantes.length === 0) {
        return { error: "La lista de participantes está vacía." };
    }

    // Calculamos el promedio base de los participantes
    const sumaPuntajes = participantes.reduce((acc, val) => acc + val, 0);
    const promedioBase = sumaPuntajes / participantes.length;

    // Aplicamos operaciones aritméticas controladas: sumar bono y restar penalización
    let puntajeFinal = promedioBase + bono - penalizacion;

    // Restricción de control: el puntaje no puede ser menor a 0
    if (puntajeFinal < 0) {
        puntajeFinal = 0;
    }

    // Clasificación según el resultado aritmético
    let clasificacion = "Estándar";
    if (puntajeFinal >= 25) {
        clasificacion = "Competitivo";
    } else if (puntajeFinal >= 15) {
        clasificacion = "Avanzado";
    }

    return {
        puntaje_final: parseFloat(puntajeFinal.toFixed(2)),
        clasificacion: clasificacion,
        explicacion: "Se sumó el bono y se restó la penalización al promedio base según las reglas de operaciones controladas."
    };
};

const participantesNormales = [12, 18, 25, 30];
const bonoNormal = 8;
const penalizacionNormal = 3;

const participantesBorde = [5, 10];
const bonoBorde = 2;
const penalizacionBorde = 20;

console.log(calcularPuntajeCompetitivo(participantesNormales, bonoNormal, penalizacionNormal));
console.log(calcularPuntajeCompetitivo(participantesBorde, bonoBorde, penalizacionBorde));
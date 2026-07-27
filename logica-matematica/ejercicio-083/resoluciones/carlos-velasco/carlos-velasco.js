const calcularEstadisticasEsports = (puntajes) => {
    if (!puntajes || puntajes.length === 0) {
        return { error: "La lista de puntajes del torneo de esports está vacía." };
    }

    // 1. Calcular el promedio
    const suma = puntajes.reduce((acc, val) => acc + val, 0);
    const promedio = suma / puntajes.length;

    // 2. Calcular la mediana
    const puntajesOrdenados = [...puntajes].sort((a, b) => a - b);
    const mitad = Math.floor(puntajesOrdenados.length / 2);
    let mediana = 0;

    if (puntajesOrdenados.length % 2 === 0) {
        mediana = (puntajesOrdenados[mitad - 1] + puntajesOrdenados[mitad]) / 2;
    } else {
        mediana = puntajesOrdenados[mitad];
    }

    // 3. Regla de clasificación basada en el promedio
    let clasificacion = "Estándar";
    if (promedio >= 80) {
        clasificacion = "Elite";
    } else if (promedio >= 50) {
        clasificacion = "Competitivo";
    }

    return {
        promedio: parseFloat(promedio.toFixed(2)),
        mediana: parseFloat(mediana.toFixed(2)),
        clasificacion: clasificacion,
        explicacion: "Se calculó el promedio aritmético y la mediana estadística de los puntajes del torneo de esports para clasificar el rendimiento global."
    };
};

const puntajesNormales = [45, 85, 90, 70, 60];
const puntajesBorde = [100];

console.log(calcularEstadisticasEsports(puntajesNormales));
console.log(calcularEstadisticasEsports(puntajesBorde));
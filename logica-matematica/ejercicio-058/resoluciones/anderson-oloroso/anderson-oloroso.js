function normalizarPuntajes(soldadores) {
    const resultados = [];

    for (let i = 0; i < soldadores.length; i++) {
        const soldador = soldadores[i];

        const puntajeNormalizado = (soldador.puntaje / 100) * 10;

        resultados.push({
            nombre: soldador.nombre,
            puntajeOriginal: soldador.puntaje,
            puntajeNormalizado: puntajeNormalizado.toFixed(2)
        });
    }

    return resultados;
}

// Ejemplo
const evaluaciones = [
    { nombre: "Carlos", puntaje: 95 },
    { nombre: "Ana", puntaje: 80 },
    { nombre: "Luis", puntaje: 70 }
];

console.log(normalizarPuntajes(evaluaciones));
const calcularDistanciaAterrizaje = (puntoSalida, puntoAterrizaje) => {
    const x1 = puntoSalida.x;
    const y1 = puntoSalida.y;
    const x2 = puntoAterrizaje.x;
    const y2 = puntoAterrizaje.y;

    const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    return {
        distancia_total: parseFloat(distancia.toFixed(2)),
        explicacion: `Se calculó la distancia euclidiana entre el punto de salida (${x1}, ${y1}) y el punto de aterrizaje (${x2}, ${y2}).`
    };
};

const salida = { x: 0, y: 0 };
const aterrizaje = { x: 3, y: 4 };

console.log(calcularDistanciaAterrizaje(salida, aterrizaje));
console.log(calcularDistanciaAterrizaje({ x: 1, y: 1 }, { x: 1, y: 1 }));
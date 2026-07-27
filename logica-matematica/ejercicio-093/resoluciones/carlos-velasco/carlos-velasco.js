const calcularDistanciaAterrizajeParacaidismo = (puntoSalto, puntoDestino) => {
    if (!puntoSalto || !puntoDestino) {
        return { error: "Los puntos de coordenadas (salto y destino) están incompletos o no son válidos." };
    }

    if (typeof puntoSalto.x !== 'number' || typeof puntoSalto.y !== 'number' ||
        typeof puntoDestino.x !== 'number' || typeof puntoDestino.y !== 'number') {
        return { error: "Las coordenadas deben contener valores numéricos en x e y." };
    }

    const deltaX = puntoDestino.x - puntoSalto.x;
    const deltaY = puntoDestino.y - puntoSalto.y;
    
    const distanciaCalculada = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));

    let precisionAterrizaje = "Zona de Alta Precisión";
    if (distanciaCalculada > 50) {
        precisionAterrizaje = "Desviación Crítica / Fuera de Zona";
    } else if (distanciaCalculada > 20) {
        precisionAterrizaje = "Desviación Moderada";
    }

    return {
        coordenada_salto: puntoSalto,
        coordenada_destino: puntoDestino,
        distancia_metros: parseFloat(distanciaCalculada.toFixed(2)),
        clasificacion_precision: precisionAterrizaje,
        explicacion: "Se calculó la distancia geométrica entre el punto de salto y el punto de aterrizaje usando coordenadas cartesianas y la fórmula de distancia euclidiana para el reto de paracaidismo."
    };
};

const saltoNormal = { x: 10, y: 20 };
const destinoNormal = { x: 40, y: 60 };

const saltoBorde = { x: 0, y: 0 };
const destinoBorde = { x: 0, y: 0 };

console.log(calcularDistanciaAterrizajeParacaidismo(saltoNormal, destinoNormal));
console.log(calcularDistanciaAterrizajeParacaidismo(saltoBorde, destinoBorde));
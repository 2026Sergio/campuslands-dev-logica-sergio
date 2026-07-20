function calcularPrecisionAterrizaje(puntoObjetivo, puntoAterrizaje) {
    // 1. Validar caso borde: puntos nulos o con coordenadas no numéricas
    if (!puntoObjetivo || !puntoAterrizaje ||
        typeof puntoObjetivo.x !== 'number' || typeof puntoObjetivo.y !== 'number' ||
        typeof puntoAterrizaje.x !== 'number' || typeof puntoAterrizaje.y !== 'number') {
        return {
            distancia_metros: 0,
            clasificacion: "inválido",
            explicacion: "Las coordenadas ingresadas no son válidas."
        };
    }

    // 2. Calcular la distancia euclidiana entre los dos puntos
    const deltaX = puntoAterrizaje.x - puntoObjetivo.x;
    const deltaY = puntoAterrizaje.y - puntoObjetivo.y;
    const distancia = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const distanciaRedondeada = Number(distancia.toFixed(2));

    // 3. Determinar nivel de precisión
    let clasificacion = "";
    if (distanciaRedondeada <= 10) {
        clasificacion = "excelente";
    } else if (distanciaRedondeada <= 30) {
        clasificacion = "aceptable";
    } else {
        clasificacion = "fuera_de_zona";
    }

    return {
        distancia_metros: distanciaRedondeada,
        clasificacion: clasificacion,
        explicacion: `El paracaidista aterrizó a ${distanciaRedondeada} metros del objetivo.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = calcularPrecisionAterrizaje({ x: 0, y: 0 }, { x: 6, y: 8 });
console.log(caso1);

console.log("\n=== Caso Borde (Coordenadas Inválidas) ===");
const caso2 = calcularPrecisionAterrizaje({ x: 0, y: 0 }, { x: null, y: 5 });
console.log(caso2);
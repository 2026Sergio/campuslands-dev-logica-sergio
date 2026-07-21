function calcularAterrizajeParacaidismo(zonaObjetivo, puntoAterrizaje) {
    // Validar estructura de las coordenadas ingresadas
    if (
        !zonaObjetivo || typeof zonaObjetivo.x !== "number" || typeof zonaObjetivo.y !== "number" ||
        !puntoAterrizaje || typeof puntoAterrizaje.x !== "number" || typeof puntoAterrizaje.y !== "number"
    ) {
        return {
            error: true,
            mensaje: "Las coordenadas del objetivo y del punto de aterrizaje deben ser objetos con valores numéricos {x, y}."
        };
    }

    // Cálculo de componentes delta
    const deltaX = puntoAterrizaje.x - zonaObjetivo.x;
    const deltaY = puntoAterrizaje.y - zonaObjetivo.y;

    // Distancia Euclidiana: d = sqrt((x2 - x1)^2 + (y2 - y1)^2)
    const distanciaExacta = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    const distanciaRedondeada = Number(distanciaExacta.toFixed(2));

    // Clasificación de la precisión del salto
    let clasificacionAterrizaje = "";
    if (distanciaRedondeada === 0) {
        clasificacionAterrizaje = "Aterrizaje Perfecto (Centro Exacto)";
    } else if (distanciaRedondeada <= 15) {
        clasificacionAterrizaje = "Aterrizaje Excelente (Zona Verde)";
    } else if (distanciaRedondeada <= 50) {
        clasificacionAterrizaje = "Aterrizaje Aceptable (Zona Amarilla)";
    } else {
        clasificacionAterrizaje = "Fuera de Zona de Seguridad (Zona Roja)";
    }

    return {
        coordenada_objetivo: zonaObjetivo,
        coordenada_aterrizaje: puntoAterrizaje,
        desviacion_x: deltaX,
        desviacion_y: deltaY,
        distancia_metros: distanciaRedondeada,
        clasificacion: clasificacionAterrizaje,
        explicacion: `El paracaidista aterrizó a ${distanciaRedondeada} metros del objetivo. Clasificación: ${clasificacionAterrizaje}.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = calcularAterrizajeParacaidismo(
    { x: 0, y: 0 },
    { x: 9, y: 12 }
);
console.log(caso1);

console.log("\n=== Caso Borde (Aterrizaje Perfecto en el Blanco) ===");
const caso2 = calcularAterrizajeParacaidismo(
    { x: 50, y: 100 },
    { x: 50, y: 100 }
);
console.log(caso2);

console.log("\n=== Caso Entrada Inválida (Coordenada no numérica) ===");
const caso3 = calcularAterrizajeParacaidismo(
    { x: 0, y: 0 },
    { x: "diez", y: 5 }
);
console.log(caso3);
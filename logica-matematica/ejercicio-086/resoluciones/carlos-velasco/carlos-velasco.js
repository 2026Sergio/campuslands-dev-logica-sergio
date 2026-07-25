const convertirUnidadesHiperdeportivo = (valorVelocidad, unidadOrigen) => {
    if (typeof valorVelocidad !== 'number' || valorVelocidad < 0) {
        return { error: "El valor de velocidad proporcionado no es válido." };
    }

    if (!unidadOrigen || typeof unidadOrigen !== 'string') {
        return { error: "La unidad de origen no está especificada correctamente." };
    }

    let velocidadKmh = 0;
    let velocidadMph = 0;
    const FACTOR_CONVERSION = 1.60934; // 1 milla por hora equivale a 1.60934 kilómetros por hora

    const normalizada = unidadOrigen.toLowerCase().trim();

    if (normalizada === 'kmh' || normalizada === 'km/h') {
        velocidadKmh = valorVelocidad;
        velocidadMph = valorVelocidad / FACTOR_CONVERSION;
    } else if (normalizada === 'mph') {
        velocidadMph = valorVelocidad;
        velocidadKmh = valorVelocidad * FACTOR_CONVERSION;
    } else {
        return { error: "Unidad de origen desconocida. Use 'kmh' o 'mph'." };
    }

    // Clasificación de velocidad para hiperdeportivos
    let categoria = "Velocidad Crucero";
    if (velocidadKmh >= 400) {
        categoria = "Hiperdeportivo Extremo (Récord)";
    } else if (velocidadKmh >= 300) {
        categoria = "Alta Velocidad";
    }

    return {
        velocidad_kmh: parseFloat(velocidadKmh.toFixed(2)),
        velocidad_mph: parseFloat(velocidadMph.toFixed(2)),
        categoria_rendimiento: categoria,
        explicacion: "Se realizó la conversión matemática precisa entre kilómetros por hora y millas por hora según las reglas del rendimiento del hiperdeportivo."
    };
};

const pruebaKmh = 420; // Ej: Bugatti / Koenigsegg
const pruebaMph = 250; // Ej: En mph

console.log(convertirUnidadesHiperdeportivo(pruebaKmh, "kmh"));
console.log(convertirUnidadesHiperdeportivo(pruebaMph, "mph"));
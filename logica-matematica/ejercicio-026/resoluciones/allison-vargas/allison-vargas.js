function convertirVelocidadHiperdeportivo(datos) {
    // 1. Validar entradas
    if (!datos || typeof datos.velocidad !== 'number' || isNaN(datos.velocidad) || datos.velocidad <= 0) {
        return {
            kmh: 0,
            mph: 0,
            ms: 0,
            clasificacion: "inválido",
            explicacion: "La velocidad debe ser un número mayor a 0."
        };
    }

    const { velocidad, unidad = "kmh" } = datos;
    let kmh = 0;

    // Convertir todo a km/h para estandarizar
    const unidadLwr = unidad.toLowerCase();
    if (unidadLwr === "kmh" || unidadLwr === "km/h") {
        kmh = velocidad;
    } else if (unidadLwr === "mph") {
        kmh = velocidad * 1.60934;
    } else if (unidadLwr === "ms" || unidadLwr === "m/s") {
        kmh = velocidad * 3.6;
    } else {
        return {
            kmh: 0,
            mph: 0,
            ms: 0,
            clasificacion: "inválido",
            explicacion: "Unidad de medida no soportada."
        };
    }

    // 2. Calcular equivalencias
    const mph = Number((kmh * 0.621371).toFixed(2));
    const ms = Number((kmh / 3.6).toFixed(2));
    kmh = Number(kmh.toFixed(2));

    // 3. Clasificar auto
    let clasificacion = "";
    if (kmh >= 400) {
        clasificacion = "récord de pista";
    } else if (kmh >= 300) {
        clasificacion = "hiperdeportivo";
    } else {
        clasificacion = "deportivo";
    }

    return {
        kmh: kmh,
        mph: mph,
        ms: ms,
        clasificacion: clasificacion,
        explicacion: `El auto alcanza ${kmh} km/h (${mph} mph / ${ms} m/s).`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = convertirVelocidadHiperdeportivo({
    velocidad: 420,
    unidad: "kmh"
});
console.log(caso1);

console.log("\n=== Caso Borde (Velocidad negativa o inválida) ===");
const caso2 = convertirVelocidadHiperdeportivo({
    velocidad: -100,
    unidad: "kmh"
});
console.log(caso2);
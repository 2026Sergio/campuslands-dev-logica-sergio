function calcularPresupuestoTatuaje(forma, dimensiones, precioPorCm2, precioPorCmPerimetro) {
    // Validar precio y tarifa de insumos
    if (
        typeof precioPorCm2 !== "number" || precioPorCm2 <= 0 ||
        typeof precioPorCmPerimetro !== "number" || precioPorCmPerimetro <= 0
    ) {
        return {
            error: true,
            mensaje: "Las tarifas por cm² y cm de perímetro deben ser números mayores a cero."
        };
    }

    let area = 0;
    let perimetro = 0;

    // Procesar según la geometría del diseño
    if (forma === "rectangulo") {
        const { ancho, alto } = dimensiones || {};
        if (typeof ancho !== "number" || ancho <= 0 || typeof alto !== "number" || alto <= 0) {
            return {
                error: true,
                mensaje: "Para la forma 'rectangulo', se requieren 'ancho' y 'alto' mayores a cero."
            };
        }
        area = ancho * alto;
        perimetro = 2 * (ancho + alto);
    } else if (forma === "circulo") {
        const { radio } = dimensiones || {};
        if (typeof radio !== "number" || radio <= 0) {
            return {
                error: true,
                mensaje: "Para la forma 'circulo', se requiere un 'radio' mayor a cero."
            };
        }
        area = Math.PI * Math.pow(radio, 2);
        perimetro = 2 * Math.PI * radio;
    } else {
        return {
            error: true,
            mensaje: "Forma no soportada. Use 'rectangulo' o 'circulo'."
        };
    }

    // Redondeo de métricas geométricas
    const areaFinal = Number(area.toFixed(2));
    const perimetroFinal = Number(perimetro.toFixed(2));

    // Cálculos de costo (Tinta/Sombreado + Delineado/Agujas)
    const costoArea = areaFinal * precioPorCm2;
    const costoPerimetro = perimetroFinal * precioPorCmPerimetro;
    const costoTotal = Number((costoArea + costoPerimetro).toFixed(2));

    // Clasificación según la escala del diseño
    let categoriaTamano = "";
    if (areaFinal <= 25) {
        categoriaTamano = "Tatuaje Pequeño (Minimalista)";
    } else if (areaFinal <= 100) {
        categoriaTamano = "Tatuaje Mediano (Estándar)";
    } else {
        categoriaTamano = "Tatuaje Grande (Pieza Completa)";
    }

    return {
        forma_diseno: forma,
        area_cm2: areaFinal,
        perimetro_cm: perimetroFinal,
        costo_sombreado_tinta: Number(costoArea.toFixed(2)),
        costo_delineado: Number(costoPerimetro.toFixed(2)),
        costo_total: costoTotal,
        clasificacion: categoriaTamano,
        explicacion: `Diseño ${forma} de ${areaFinal} cm² y ${perimetroFinal} cm de contorno. Costo total: $${costoTotal}.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal (Rectángulo) ===");
const caso1 = calcularPresupuestoTatuaje(
    "rectangulo",
    { ancho: 10, alto: 5 },
    1.5, // $1.5 por cm²
    0.8  // $0.8 por cm de delineado
);
console.log(caso1);

console.log("\n=== Caso Borde (Círculo Pequeño) ===");
const caso2 = calcularPresupuestoTatuaje(
    "circulo",
    { radio: 2 },
    2.0,
    1.0
);
console.log(caso2);

console.log("\n=== Caso Entrada Inválida (Dimensiones negativas) ===");
const caso3 = calcularPresupuestoTatuaje(
    "rectangulo",
    { ancho: -5, alto: 10 },
    1.5,
    0.8
);
console.log(caso3);
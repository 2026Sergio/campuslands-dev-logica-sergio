function calcularTatuaje(forma, dimensiones, precioPorCm2) {
    // Validar precio por cm2
    if (typeof precioPorCm2 !== "number" || precioPorCm2 <= 0) {
        return {
            error: true,
            mensaje: "El precio por cm² debe ser un número positivo."
        };
    }

    let area = 0;
    let perimetro = 0;

    // Calcular según la forma geométrica del diseño del tatuaje
    switch (forma.toLowerCase()) {
        case "rectangular":
            const { ancho, alto } = dimensiones;
            if (!ancho || !alto || ancho <= 0 || alto <= 0) {
                return { error: true, mensaje: "Dimensiones rectangulares inválidas." };
            }
            area = ancho * alto;
            perimetro = 2 * (ancho + alto);
            break;

        case "circular":
            const { radio } = dimensiones;
            if (!radio || radio <= 0) {
                return { error: true, mensaje: "Radio circular inválido." };
            }
            area = Math.PI * Math.pow(radio, 2);
            perimetro = 2 * Math.PI * radio;
            break;

        default:
            return {
                error: true,
                mensaje: "Forma no soportada. Use 'rectangular' o 'circular'."
            };
    }

    const areaFormateada = Number(area.toFixed(2));
    const perimetroFormateado = Number(perimetro.toFixed(2));
    const costoEstimado = Number((areaFormateada * precioPorCm2).toFixed(2));

    // Clasificación según tamaño del tatuaje
    let tamañoClasificacion = "";
    if (areaFormateada <= 25) {
        tamañoClasificacion = "Pequeño (Detalle)";
    } else if (areaFormateada <= 100) {
        tamañoClasificacion = "Mediano (Estándar)";
    } else {
        tamañoClasificacion = "Grande (Pieza Completa)";
    }

    return {
        forma: forma.toLowerCase(),
        area_cm2: areaFormateada,
        perimetro_cm: perimetroFormateado,
        costo_estimado: costoEstimado,
        clasificacion: tamañoClasificacion,
        explicacion: `Tatuaje ${forma} de ${areaFormateada} cm² y ${perimetroFormateado} cm de perímetro. Costo: $${costoEstimado}.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal (Rectangular) ===");
const caso1 = calcularTatuaje("rectangular", { ancho: 10, alto: 5 }, 2.5);
console.log(caso1);

console.log("\n=== Caso Borde (Circular Pequeño) ===");
const caso2 = calcularTatuaje("circular", { radio: 2 }, 3.0);
console.log(caso2);

console.log("\n=== Caso Error (Dimensiones Inválidas) ===");
const caso3 = calcularTatuaje("rectangular", { ancho: -5, alto: 10 }, 2.5);
console.log(caso3);
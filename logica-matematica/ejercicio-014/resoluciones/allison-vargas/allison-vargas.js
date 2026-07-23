function calcularDimensionesTatuaje(tipo, dim1, dim2 = 0) {
    // 1. Validar caso borde: dimensiones inválidas o menores/iguales a cero
    if (typeof dim1 !== 'number' || dim1 <= 0 || (tipo === 'rectangular' && (typeof dim2 !== 'number' || dim2 <= 0))) {
        return {
            area_cm2: 0,
            perimetro_cm: 0,
            clasificacion: "inválido",
            explicacion: "Las dimensiones ingresadas no son válidas."
        };
    }

    let area = 0;
    let perimetro = 0;

    // 2. Aplicar fórmulas según la figura geométrica
    if (tipo === 'rectangular') {
        area = dim1 * dim2;
        perimetro = 2 * (dim1 + dim2);
    } else if (tipo === 'circular') {
        area = Math.PI * Math.pow(dim1, 2);
        perimetro = 2 * Math.PI * dim1;
    } else {
        return {
            area_cm2: 0,
            perimetro_cm: 0,
            clasificacion: "inválido",
            explicacion: "El tipo de figura geométrica no es soportado."
        };
    }

    const areaRedondeada = Number(area.toFixed(2));
    const perimetroRedondeado = Number(perimetro.toFixed(2));

    // 3. Determinar categoría del tatuaje
    let clasificacion = "";
    if (areaRedondeada > 100) {
        clasificacion = "grande";
    } else if (areaRedondeada >= 50) {
        clasificacion = "mediano";
    } else {
        clasificacion = "pequeño";
    }

    return {
        area_cm2: areaRedondeada,
        perimetro_cm: perimetroRedondeado,
        clasificacion: clasificacion,
        explicacion: `Tatuaje ${tipo} con área de ${areaRedondeada} cm2 y perímetro de ${perimetroRedondeado} cm.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal (Rectangular) ===");
const caso1 = calcularDimensionesTatuaje('rectangular', 10, 8);
console.log(caso1);

console.log("\n=== Caso Borde (Dimensiones Inválidas) ===");
const caso2 = calcularDimensionesTatuaje('rectangular', -5, 10);
console.log(caso2);
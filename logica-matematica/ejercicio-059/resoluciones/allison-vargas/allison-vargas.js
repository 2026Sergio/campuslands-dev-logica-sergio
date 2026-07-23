function validarMuestrasQuimicas(compuestos) {
    // Validar estructura de entrada principal
    if (!Array.isArray(compuestos) || compuestos.length === 0) {
        return {
            error: true,
            mensaje: "Se debe ingresar un arreglo no vacío con muestras químicas."
        };
    }

    const reporteMuestras = [];
    let muestrasValidasCount = 0;
    let muestrasInvalidadasCount = 0;
    let masaMolarAcumulada = 0;

    for (let i = 0; i < compuestos.length; i++) {
        const c = compuestos[i];
        const errores = [];

        // 1. Validar presencia y tipo de campos base
        if (!c || typeof c.formula !== "string" || c.formula.trim() === "") {
            errores.push("Fórmula química no especificada o en formato incorrecto.");
        }

        // 2. Validaciones numéricas específicas
        if (typeof c.masaMolar !== "number" || isNaN(c.masaMolar)) {
            errores.push("La masa molar debe ser un valor numérico.");
        } else if (c.masaMolar <= 0) {
            errores.push("La masa molar debe ser estrictamente mayor a 0 g/mol.");
        }

        if (typeof c.valencia !== "number" || !Number.isInteger(c.valencia)) {
            errores.push("La valencia debe ser un número entero.");
        } else if (c.valencia < 1 || c.valencia > 7) {
            errores.push("La valencia debe estar en el rango válido [1, 7].");
        }

        if (typeof c.ph !== "number" || isNaN(c.ph)) {
            errores.push("El nivel de pH debe ser un valor numérico.");
        } else if (c.ph < 0 || c.ph > 14) {
            errores.push("El pH debe estar dentro del rango químico [0, 14].");
        }

        // 3. Evaluar estado de la muestra
        const esValida = errores.length === 0;

        if (esValida) {
            muestrasValidasCount++;
            masaMolarAcumulada += c.masaMolar;

            // Clasificación de acidez/alcalinidad
            let naturaleza = "";
            if (c.ph < 7) {
                naturaleza = "Ácido";
            } else if (c.ph === 7) {
                naturaleza = "Neutro";
            } else {
                naturaleza = "Básico / Alcalino";
            }

            reporteMuestras.push({
                formula: c.formula,
                masaMolar: c.masaMolar,
                valencia: c.valencia,
                ph: c.ph,
                estado: "VÁLIDA",
                clasificacion: naturaleza
            });
        } else {
            muestrasInvalidadasCount++;
            reporteMuestras.push({
                formula: c ? c.formula || "Desconocida" : "Sin datos",
                estado: "INVÁLIDA",
                observaciones: errores
            });
        }
    }

    const promedioMasaValidos = muestrasValidasCount > 0
        ? Number((masaMolarAcumulada / muestrasValidasCount).toFixed(2))
        : 0;

    return {
        total_evaluados: compuestos.length,
        muestras_validas: muestrasValidasCount,
        muestras_invalidas: muestrasInvalidadasCount,
        promedio_masa_molar_validos: promedioMasaValidos,
        reporte_detalle: reporteMuestras,
        explicacion: `Se auditaron ${compuestos.length} muestras. ${muestrasValidasCount} cumplen todos los criterios de validación numérica.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal (Mezcla de Compuestos Válidos e Inválidos) ===");
const loteQuimico = [
    { formula: "H2O", masaMolar: 18.015, valencia: 2, ph: 7.0 },
    { formula: "HCl", masaMolar: 36.46, valencia: 1, ph: 1.1 },
    { formula: "NaOH", masaMolar: 39.99, valencia: 1, ph: 13.5 },
    { formula: "H2SO4", masaMolar: -98.07, valencia: 2, ph: 0.5 }, // Masa negativa (Inválida)
    { formula: "NH3", masaMolar: 17.03, valencia: 3, ph: 18 }      // pH fuera de rango (Inválido)
];
console.log(validarMuestrasQuimicas(loteQuimico));

console.log("\n=== Caso Borde (Valores Numéricos Extremamente Límites) ===");
const casoLímite = [
    { formula: "Límites A", masaMolar: 0.001, valencia: 1, ph: 0 },
    { formula: "Límites B", masaMolar: 500, valencia: 7, ph: 14 }
];
console.log(validarMuestrasQuimicas(casoLímite));

console.log("\n=== Caso Entrada Inválida (Estructura Vacía) ===");
console.log(validarMuestrasQuimicas([]));
function validarFormulaQuimica(cantidadAtomos, pesoMolecular) {
    // Validar que los tipos de datos sean numéricos
    if (typeof cantidadAtomos !== "number" || typeof pesoMolecular !== "number") {
        return {
            error: true,
            mensaje: "Las entradas deben ser valores numéricos válidos."
        };
    }

    // Validar que la cantidad de átomos sea un número entero mayor a cero
    if (!Number.isInteger(cantidadAtomos) || cantidadAtomos <= 0) {
        return {
            error: true,
            mensaje: "La cantidad de átomos debe ser un número entero mayor a cero."
        };
    }

    // Validar que el peso molecular sea un número positivo
    if (pesoMolecular <= 0) {
        return {
            error: true,
            mensaje: "El peso molecular debe ser mayor a cero."
        };
    }

    // Calcular el peso promedio por átomo
    const pesoPromedioPorAtomo = Number((pesoMolecular / cantidadAtomos).toFixed(2));

    // Clasificación de la sustancia según su peso promedio por átomo
    let tipoSustancia = "";
    if (pesoPromedioPorAtomo <= 12) {
        tipoSustancia = "Compuesto Ligero (Predominio de Elementos Livianos)";
    } else if (pesoPromedioPorAtomo <= 50) {
        tipoSustancia = "Compuesto Estándar (Molécula Orgánica u Óxido)";
    } else {
        tipoSustancia = "Compuesto Pesado (Presencia de Metales o Complejos)";
    }

    return {
        es_valido: true,
        atomos_totales: cantidadAtomos,
        peso_molecular_g_mol: pesoMolecular,
        peso_promedio_atomo: pesoPromedioPorAtomo,
        clasificacion: tipoSustancia,
        explicacion: `Fórmula válida con ${cantidadAtomos} átomos y peso de ${pesoMolecular} g/mol (Promedio: ${pesoPromedioPorAtomo} g/mol por átomo).`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal (Agua H2O) ===");
const caso1 = validarFormulaQuimica(3, 18.015);
console.log(caso1);

console.log("\n=== Caso Borde (Átomo único) ===");
const caso2 = validarFormulaQuimica(1, 1.008);
console.log(caso2);

console.log("\n=== Caso Entrada Inválida (Átomos decimales o negativos) ===");
const caso3 = validarFormulaQuimica(2.5, 44);
console.log(caso3);
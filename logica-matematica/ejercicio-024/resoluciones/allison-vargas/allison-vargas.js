function analizarInventarioMotos(inventario) {
    // 1. Validar entradas
    if (!Array.isArray(inventario) || inventario.length === 0) {
        return {
            total_unidades: 0,
            stock_maximo: 0,
            stock_minimo: 0,
            rango_stock: 0,
            clasificacion: "inválido",
            explicacion: "El inventario debe ser una lista no vacía."
        };
    }

    // Verificar que cada item tenga unidades válidas
    for (let i = 0; i < inventario.length; i++) {
        const item = inventario[i];
        if (!item || typeof item.unidades !== 'number' || isNaN(item.unidades) || item.unidades < 0) {
            return {
                total_unidades: 0,
                stock_maximo: 0,
                stock_minimo: 0,
                rango_stock: 0,
                clasificacion: "inválido",
                explicacion: "Se encontraron registros de unidades inválidos."
            };
        }
    }

    // 2. Encontrar máximo, mínimo y total
    let totalUnidades = 0;
    let modeloMax = inventario[0];
    let modeloMin = inventario[0];

    for (let i = 0; i < inventario.length; i++) {
        const actual = inventario[i];
        totalUnidades += actual.unidades;

        if (actual.unidades > modeloMax.unidades) {
            modeloMax = actual;
        }
        if (actual.unidades < modeloMin.unidades) {
            modeloMin = actual;
        }
    }

    const rangoStock = modeloMax.unidades - modeloMin.unidades;
    const promedio = totalUnidades / inventario.length;

    // 3. Clasificar estado del inventario
    let clasificacion = "";
    if (promedio >= 50) {
        clasificacion = "sobreasignado";
    } else if (promedio >= 20) {
        clasificacion = "balanceado";
    } else {
        clasificacion = "stock bajo";
    }

    return {
        total_unidades: totalUnidades,
        modelo_mas_stock: modeloMax.modelo,
        stock_maximo: modeloMax.unidades,
        stock_minimo: modeloMin.unidades,
        rango_stock: rangoStock,
        clasificacion: clasificacion,
        explicacion: `Se revisaron ${inventario.length} modelos. El rango de diferencia de stock es de ${rangoStock} unidades.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = analizarInventarioMotos([
    { modelo: "Scooter 125cc", unidades: 15 },
    { modelo: "Sport 250cc", unidades: 45 },
    { modelo: "Enduro 200cc", unidades: 30 },
    { modelo: "Cruiser 500cc", unidades: 10 }
]);
console.log(caso1);

console.log("\n=== Caso Borde (Valores inválidos) ===");
const caso2 = analizarInventarioMotos([
    { modelo: "Scooter 125cc", unidades: -5 }
]);
console.log(caso2);
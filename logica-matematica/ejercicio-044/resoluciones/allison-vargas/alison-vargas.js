function analizarInventarioMotos(motosStock, capacidadMaximaPermitida) {
    // Validar que la entrada sea un arreglo no vacío y que la capacidad máxima sea un entero positivo
    if (
        !Array.isArray(motosStock) || 
        motosStock.length === 0 || 
        typeof capacidadMaximaPermitida !== "number" || 
        !Number.isInteger(capacidadMaximaPermitida) || 
        capacidadMaximaPermitida <= 0
    ) {
        return {
            error: true,
            mensaje: "Entradas inválidas. Se requiere una lista de motos en stock y una capacidad máxima positiva."
        };
    }

    // Validar que cada cantidad en stock sea un entero mayor o igual a cero
    for (let i = 0; i < motosStock.length; i++) {
        if (typeof motosStock[i] !== "number" || !Number.isInteger(motosStock[i]) || motosStock[i] < 0) {
            return {
                error: true,
                mensaje: "Las cantidades en stock deben ser números enteros mayores o iguales a cero."
            };
        }
    }

    // Identificar el valor máximo, el valor mínimo y la suma total acumulada
    let totalUnidades = 0;
    let maximoStock = motosStock[0];
    let minimoStock = motosStock[0];

    for (let i = 0; i < motosStock.length; i++) {
        totalUnidades += motosStock[i];

        if (motosStock[i] > maximoStock) {
            maximoStock = motosStock[i];
        }

        if (motosStock[i] < minimoStock) {
            minimoStock = motosStock[i];
        }
    }

    // Calcular la amplitud o rango del inventario
    const rangoInventario = maximoStock - minimoStock;
    const porcentajeOcupacion = Number(((totalUnidades / capacidadMaximaPermitida) * 100).toFixed(2));

    // Clasificación del estado del almacén
    let estadoAlmacen = "";
    if (totalUnidades > capacidadMaximaPermitida) {
        estadoAlmacen = "Sobrestock (Excede la Capacidad Máxima del Almacén)";
    } else if (porcentajeOcupacion >= 80) {
        estadoAlmacen = "Capacidad Óptima (Nivel de Almacenamiento Alto)";
    } else if (porcentajeOcupacion >= 40) {
        estadoAlmacen = "Capacidad Estándar (Nivel de Almacenamiento Estabilizado)";
    } else {
        estadoAlmacen = "Bajo Stock (Requiere Reabastecimiento urgente)";
    }

    return {
        modelos_evaluados: motosStock.length,
        total_unidades: totalUnidades,
        capacidad_maxima: capacidadMaximaPermitida,
        porcentaje_ocupacion: porcentajeOcupacion,
        maximo_unidades_modelo: maximoStock,
        minimo_unidades_modelo: minimoStock,
        rango_variacion: rangoInventario,
        clasificacion: estadoAlmacen,
        explicacion: `Se evaluaron ${motosStock.length} modelos. Total: ${totalUnidades}/${capacidadMaximaPermitida} unidades (${porcentajeOcupacion}% ocupación). Rango de variación: ${rangoInventario}.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = analizarInventarioMotos([15, 30, 8, 22, 45], 150);
console.log(caso1);

console.log("\n=== Caso Borde (Sobrestock / Límite Máximo) ===");
const caso2 = analizarInventarioMotos([50, 60], 100);
console.log(caso2);

console.log("\n=== Caso Entrada Inválida (Stock negativo) ===");
const caso3 = analizarInventarioMotos([10, -5, 20], 100);
console.log(caso3);
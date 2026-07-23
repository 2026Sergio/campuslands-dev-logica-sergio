function simularVentasComidaUrbana(pedidosPorHora, costoPromedioPlato) {
    // Validar que el arreglo de pedidos no esté vacío y el costo sea válido
    if (!Array.isArray(pedidosPorHora) || pedidosPorHora.length === 0 || typeof costoPromedioPlato !== "number" || costoPromedioPlato <= 0) {
        return {
            error: true,
            mensaje: "Entradas inválidas. Proporcione una lista de pedidos por hora y un costo por plato mayor a cero."
        };
    }

    // Validar que cada cantidad de pedidos sea un entero no negativo
    for (let i = 0; i < pedidosPorHora.length; i++) {
        if (typeof pedidosPorHora[i] !== "number" || !Number.isInteger(pedidosPorHora[i]) || pedidosPorHora[i] < 0) {
            return {
                error: true,
                mensaje: "Cada cantidad de pedidos por hora debe ser un número entero mayor o igual a cero."
            };
        }
    }

    // Calcular métricas de la simulación
    let totalPlatosVendidos = 0;
    let horaPicoPedidos = pedidosPorHora[0];
    let horaPicoIndice = 0;

    for (let i = 0; i < pedidosPorHora.length; i++) {
        totalPlatosVendidos += pedidosPorHora[i];
        if (pedidosPorHora[i] > horaPicoPedidos) {
            horaPicoPedidos = pedidosPorHora[i];
            horaPicoIndice = i;
        }
    }

    const ingresosTotales = Number((totalPlatosVendidos * costoPromedioPlato).toFixed(2));
    const promedioPedidosPorHora = Number((totalPlatosVendidos / pedidosPorHora.length).toFixed(2));

    // Clasificación del rendimiento del puesto de comida urbana
    let clasificacionDemanda = "";
    if (promedioPedidosPorHora >= 20) {
        clasificacionDemanda = "Alta Demanda (Puesto Exitoso / Flujo Constante)";
    } else if (promedioPedidosPorHora >= 10) {
        clasificacionDemanda = "Demanda Moderada (Ventas Estables)";
    } else {
        clasificacionDemanda = "Baja Demanda (Requiere Estrategia de Ventas)";
    }

    return {
        horas_simuladas: pedidosPorHora.length,
        total_platos: totalPlatosVendidos,
        ingresos_totales: ingresosTotales,
        promedio_por_hora: promedioPedidosPorHora,
        hora_pico: `Hora ${horaPicoIndice + 1} con ${horaPicoPedidos} pedidos`,
        clasificacion: clasificacionDemanda,
        explicacion: `Simulación de ${pedidosPorHora.length} horas. Total vendido: ${totalPlatosVendidos} platos ($${ingresosTotales}).`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = simularVentasComidaUrbana([12, 25, 30, 18, 15], 8.5);
console.log(caso1);

console.log("\n=== Caso Borde (Una sola hora) ===");
const caso2 = simularVentasComidaUrbana([10], 5.0);
console.log(caso2);

console.log("\n=== Caso Entrada Inválida ===");
const caso3 = simularVentasComidaUrbana([], 8.5);
console.log(caso3);
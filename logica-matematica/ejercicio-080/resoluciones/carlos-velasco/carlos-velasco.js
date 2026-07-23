const simularVentasComidaUrbana = (precioBase, costoInsumos, clientesIniciales, diasSimulacion) => {
    if (diasSimulacion <= 0 || precioBase <= 0 || costoInsumos < 0) {
        return { error: "Los valores de entrada para la simulación son inválidos." };
    }

    let historialDiario = [];
    let beneficioAcumulado = 0;
    let clientesActuales = clientesIniciales;

    for (let dia = 1; dia <= diasSimulacion; dia++) {
        // Fórmula de simulación de ganancias diarias con variación estimada
        const ingresoDiario = clientesActuales * precioBase;
        const costoDiario = clientesActuales * costoInsumos;
        const beneficioDiario = ingresoDiario - costoDiario;

        beneficioAcumulado += beneficioDiario;

        historialDiario.push({
            dia: dia,
            clientes: clientesActuales,
            beneficio: parseFloat(beneficioDiario.toFixed(2))
        });

        // Simulamos un crecimiento o decrecimiento orgánico de clientes cada día
        clientesActuales += (dia % 2 === 0 ? 5 : -2);
        if (clientesActuales < 5) clientesActuales = 5; // Caso borde: mínimo de clientes
    }

    return {
        dias_simulados: diasSimulacion,
        beneficio_total_acumulado: parseFloat(beneficioAcumulado.toFixed(2)),
        historial: historialDiario,
        explicacion: `Se simuló el rendimiento financiero del puesto de comida urbana durante ${diasSimulacion} días aplicando fórmulas de ingresos y costos.`
    };
};

console.log(simularVentasComidaUrbana(10.00, 4.00, 30, 5));
console.log(simularVentasComidaUrbana(8.50, 3.00, 10, 3));
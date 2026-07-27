// ejercicio logica - minimos y limites - Ejercicio 085

const verificarMinimosInventarioTaller = (repuestos, stockMinimoRequerido) => {
    if (!repuestos || repuestos.length === 0) {
        return { error: "El inventario de repuestos del taller mecánico está vacío." };
    }

    if (typeof stockMinimoRequerido !== 'number' || stockMinimoRequerido < 0) {
        return { error: "El límite de stock mínimo requerido no es válido." };
    }

    let alertasReabastecimiento = [];
    let repuestosBajoMinimo = 0;

    for (let i = 0; i < repuestos.length; i++) {
        const item = repuestos[i];

        if (item.stockActual < stockMinimoRequerido) {
            repuestosBajoMinimo++;
            const deficit = stockMinimoRequerido - item.stockActual;
            alertasReabastecimiento.push({
                repuesto: item.nombre,
                stock_actual: item.stockActual,
                deficit_requerido: deficit,
                estado: "Crítico / Bajo mínimo"
            });
        }
    }

    const cumpleLimitesGlobales = repuestosBajoMinimo === 0;

    return {
        cumple_limites: cumpleLimitesGlobales,
        total_repuestos_bajo_minimo: repuestosBajoMinimo,
        alertas: alertasReabastecimiento.length > 0 ? alertasReabastecimiento : ["Todos los repuestos cumplen con el stock mínimo permitido."],
        explicacion: `Se evaluaron los límites de stock mínimo (${stockMinimoRequerido} unidades) para cada repuesto, identificando aquellos que requieren reabastecimiento urgente en el taller.`
    };
};

const inventarioRepuestos = [
    { nombre: "Pastillas de Freno", stockActual: 3 },
    { nombre: "Filtro de Aceite", stockActual: 12 },
    { nombre: "Bujías", stockActual: 2 },
    { nombre: "Líquido de Frenos", stockActual: 10 }
];

const limiteNormal = 5;
const limiteBajo = 1;

console.log(verificarMinimosInventarioTaller(inventarioRepuestos, limiteNormal));
console.log(verificarMinimosInventarioTaller(inventarioRepuestos, limiteBajo));
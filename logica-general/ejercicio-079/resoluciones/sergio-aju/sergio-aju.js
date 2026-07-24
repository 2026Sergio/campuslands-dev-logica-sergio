const analizarInventarioQuimico = (datos) => {
    const reactivos = datos?.inventario_reactivos;
    const umbral = datos?.umbral_minimo || 10;

    if (!Array.isArray(reactivos) || reactivos.length === 0) {
        return { error: "Inventario de reactivos vacío o inválido" };
    }

    // Buscar agotados primero
    for (let i = 0; i < reactivos.length; i++) {
        if (reactivos[i].estado === "agotado" || reactivos[i].cantidad === 0) {
            return {
                accion: "reabastecer reactivo crítico",
                reactivo: reactivos[i].compuesto,
                motivo: "la regla prioriza reactivos agotados para evitar detener las síntesis químicas."
            };
        }
    }

    // Buscar bajo stock
    for (let i = 0; i < reactivos.length; i++) {
        if (reactivos[i].cantidad < umbral) {
            return {
                accion: "revisar stock bajo",
                reactivo: reactivos[i].compuesto,
                motivo: "el reactivo está por debajo del umbral mínimo permitido."
            };
        }
    }

    return {
        accion: "inventario en orden",
        reactivo: null,
        motivo: "todos los reactivos químicos se encuentran por encima del umbral mínimo."
    };
};

// Pruebas
console.log(analizarInventarioQuimico({
    inventario_reactivos: [
        { compuesto: "NaCl", cantidad: 50, estado: "disponible" },
        { compuesto: "H2SO4", cantidad: 0, estado: "agotado" }
    ],
    umbral_minimo: 10
}));

console.log(analizarInventarioQuimico({
    inventario_reactivos: [
        { compuesto: "H2O", cantidad: 500, estado: "disponible" }
    ],
    umbral_minimo: 10
}));
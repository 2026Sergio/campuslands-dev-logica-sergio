const seleccionarEstrategiaComidaUrbana = (datos) => {
    const items = datos?.items;
    if (!Array.isArray(items) || items.length === 0) {
        return { error: "Lista de items vacía o inválida" };
    }

    for (let i = 0; i < items.length; i++) {
        if (items[i] === "bloqueado") {
            return {
                accion: "revisar bloqueado",
                motivo: "la regla prioriza riesgos antes de tareas normales."
            };
        }
    }

    for (let i = 0; i < items.length; i++) {
        if (items[i] === "pendiente") {
            return {
                accion: "revisar pendiente",
                motivo: "no hay bloqueos críticos, se avanza con los pedidos pendientes."
            };
        }
    }

    return {
        accion: "todo en orden",
        motivo: "no hay elementos bloqueados ni pendientes que requieran atención prioritaria."
    };
};

// Pruebas
console.log(seleccionarEstrategiaComidaUrbana({
    items: ["aprobado", "pendiente", "bloqueado"],
    prioridad: "alta",
    regla: "revisar bloqueados primero"
}));

console.log(seleccionarEstrategiaComidaUrbana({
    items: ["aprobado", "aprobado", "aprobado"],
    prioridad: "baja",
    regla: "revisar bloqueados primero"
}));
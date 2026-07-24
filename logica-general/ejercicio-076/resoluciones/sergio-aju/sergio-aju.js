const analizarMatrizAnimacion = (datos) => {
    const m = datos?.matriz_escenas;
    if (!Array.isArray(m) || !m.length) return { error: "Matriz inválida" };

    for (let f = 0; f < m.length; f++) {
        for (let c = 0; c < m[f].length; c++) {
            if (m[f][c] === "bloqueado") {
                return { accion: "revisar bloqueado", coordenada: [f, c], motivo: "la regla prioriza riesgos antes de tareas normales." };
            }
        }
    }

    for (let f = 0; f < m.length; f++) {
        for (let c = 0; c < m[f].length; c++) {
            if (m[f][c] === "pendiente") {
                return { accion: "revisar pendiente", coordenada: [f, c], motivo: "no hay bloqueos críticos, se avanza con tareas pendientes." };
            }
        }
    }

    return { accion: "todo en orden", coordenada: null, motivo: "todos los elementos de la matriz están completados." };
};

// Pruebas
console.log(analizarMatrizAnimacion({
    matriz_escenas: [
        ["completado", "completado", "pendiente"],
        ["completado", "bloqueado", "en_proceso"],
        ["pendiente", "completado", "completado"]
    ]
}));

console.log(analizarMatrizAnimacion({
    matriz_escenas: [
        ["completado", "completado"],
        ["completado", "completado"]
    ]
}));
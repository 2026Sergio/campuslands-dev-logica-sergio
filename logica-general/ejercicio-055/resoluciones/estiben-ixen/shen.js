function evaluarDibujo(dibujo) {
    const reglasIncumplidas = [];

    if (!dibujo.titulo) {
        reglasIncumplidas.push("titulo obligatorio");
    }

    if (dibujo.capas < 3) {
        reglasIncumplidas.push("cantidad de capas insuficiente");
    }

    if (!["publico", "privado"].includes(dibujo.estado)) {
        reglasIncumplidas.push("estado no permitido");
    }

    if (dibujo.resolucion < 1080) {
        reglasIncumplidas.push("resolucion baja");
    }

    if (reglasIncumplidas.length > 0) {
        return {
            dibujo: dibujo.titulo || "sin titulo",
            resultado: "requiere ajustes",
            detalles: reglasIncumplidas
        };
    }

    return {
        dibujo: dibujo.titulo,
        resultado: "aprobado",
        detalles: []
    };
}

const dibujoNormal = {
    titulo: "Ciudad Futurista",
    capas: 8,
    estado: "publico",
    resolucion: 1920
};

const dibujoBorde = {
    titulo: "",
    capas: 1,
    estado: "borrador",
    resolucion: 720
};

console.log(evaluarDibujo(dibujoNormal));
console.log(evaluarDibujo(dibujoBorde));
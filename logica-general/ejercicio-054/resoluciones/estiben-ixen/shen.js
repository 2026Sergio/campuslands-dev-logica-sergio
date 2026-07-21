function diagnosticarTatuaje(tatuaje) {
    const errores = [];

    if (!tatuaje.diseno) {
        errores.push("diseno faltante");
    }

    if (tatuaje.tamano <= 0) {
        errores.push("tamano invalido");
    }

    if (!["color", "negro"].includes(tatuaje.estilo)) {
        errores.push("estilo no permitido");
    }

    if (tatuaje.zona === "") {
        errores.push("zona no especificada");
    }

    if (errores.length > 0) {
        return {
            tatuaje: tatuaje.diseno || "sin nombre",
            estado: "requiere correccion",
            errores
        };
    }

    return {
        tatuaje: tatuaje.diseno,
        estado: "aprobado",
        errores: []
    };
}

const casoNormal = {
    diseno: "Dragon oriental",
    tamano: 25,
    estilo: "color",
    zona: "brazo"
};

const casoBorde = {
    diseno: "",
    tamano: 0,
    estilo: "otro",
    zona: ""
};

console.log(diagnosticarTatuaje(casoNormal));
console.log(diagnosticarTatuaje(casoBorde));
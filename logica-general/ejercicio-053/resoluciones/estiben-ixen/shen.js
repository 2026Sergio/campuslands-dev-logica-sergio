function evaluarSalto(paracaidista) {
    if (!paracaidista || !paracaidista.nombre) {
        return {
            estado: "error",
            motivo: "datos incompletos"
        };
    }

    if (paracaidista.experiencia < 1) {
        return {
            nombre: paracaidista.nombre,
            estado: "no autorizado",
            motivo: "experiencia insuficiente"
        };
    }

    if (paracaidista.altura < 1000) {
        return {
            nombre: paracaidista.nombre,
            estado: "requiere revision",
            motivo: "altura de salto baja"
        };
    }

    if (paracaidista.clima !== "favorable") {
        return {
            nombre: paracaidista.nombre,
            estado: "cancelado",
            motivo: "condiciones climaticas no seguras"
        };
    }

    return {
        nombre: paracaidista.nombre,
        estado: "salto aprobado"
    };
}

const casoNormal = {
    nombre: "Daniel",
    experiencia: 5,
    altura: 3000,
    clima: "favorable"
};

const casoBorde = {
    nombre: "Luis",
    experiencia: 0,
    altura: 500,
    clima: "desfavorable"
};

console.log(evaluarSalto(casoNormal));
console.log(evaluarSalto(casoBorde));
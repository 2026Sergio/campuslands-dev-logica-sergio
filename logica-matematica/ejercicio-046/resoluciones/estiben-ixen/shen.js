function convertirVelocidad(valor, unidadOrigen, unidadDestino) {
    if (typeof valor !== "number" || valor < 0) {
        return "Valor invalido";
    }

    if (unidadOrigen === unidadDestino) {
        return valor;
    }

    if (unidadOrigen === "kmh" && unidadDestino === "mph") {
        return Number((valor * 0.621371).toFixed(2));
    }

    if (unidadOrigen === "mph" && unidadDestino === "kmh") {
        return Number((valor / 0.621371).toFixed(2));
    }

    return "Conversion no disponible";
}

function analizarAuto(nombre, velocidad, unidad) {
    const velocidadConvertida = convertirVelocidad(velocidad, unidad, "kmh");

    if (typeof velocidadConvertida !== "number") {
        return {
            auto: nombre,
            resultado: velocidadConvertida
        };
    }

    return {
        auto: nombre,
        velocidad_kmh: velocidadConvertida
    };
}

const auto1 = analizarAuto("hyper-x", 300, "mph");
const auto2 = analizarAuto("speed-rs", 450, "kmh");
const casoBorde = convertirVelocidad(0, "kmh", "mph");

console.log(auto1);
console.log(auto2);
console.log(casoBorde);
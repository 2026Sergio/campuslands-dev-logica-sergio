const decidirEstrategiaEsports = (estadoPartida) => {
    if (!estadoPartida) {
        return { error: "No se proporcionó el estado actual de la partida." };
    }

    const { oroEquipo, oroRival, torresDerribadas, baronesConseguidos, vidaBasePropia } = estadoPartida;

    let decision = "Juego Estándar / Farmeo Seguro";
    let motivo = "La partida se encuentra equilibrada, se recomienda mantener el control de líneas y recursos.";

    // Regla 1: Emergencia defensiva si la base propia está en riesgo crítico
    if (vidaBasePropia <= 20 && oroRival > oroEquipo) {
        decision = "Defensa Total en Base";
        motivo = "La vida de la base es crítica y el rival tiene ventaja económica; priorizar despeje de súbditos.";
    } 
    // Regla 2: Oportunidad de victoria o presión máxima si se tiene ventaja y objetivos
    else if (baronesConseguidos > 0 && oroEquipo >= oroRival) {
        decision = "Iniciar Empuje Global (Push / Finalizar)";
        motivo = "Se cuenta con el beneficio del Barón y ventaja o igualdad de oro para presionar la base enemiga.";
    } 
    // Regla 3: Control de mapa si hay superioridad de torres
    else if (torresDerribadas >= 5 && oroEquipo > oroRival) {
        decision = "Control de Objetivos Neutrales (Dragón / Visión)";
        motivo = "La ventaja en torres permite dominar la visión de la jungla rival y asegurar objetivos.";
    }

    return {
        estrategia_recomendada: decision,
        explicacion: motivo
    };
};

const partidaVentaja = {
    oroEquipo: 45000,
    oroRival: 40000,
    torresDerribadas: 6,
    baronesConseguidos: 1,
    vidaBasePropia: 100
};

const partidaEmergencia = {
    oroEquipo: 30000,
    oroRival: 50000,
    torresDerribadas: 2,
    baronesConseguidos: 0,
    vidaBasePropia: 15
};

console.log(decidirEstrategiaEsports(partidaVentaja));
console.log(decidirEstrategiaEsports(partidaEmergencia));
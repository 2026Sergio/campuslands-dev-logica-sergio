const procesarMisionCienciaFiccion = (mision) => {
    if (!mision) {
        return { error: "Los datos de la misión de ciencia ficción están vacíos o no son válidos." };
    }

    let pasoActual = "Inicio de Protocolo";
    let bitacoraFlujo = [];

    // Paso 1: Verificación de energía de la nave
    bitacoraFlujo.push({ paso: 1, accion: "Verificación de energía", estado: mision.energia >= 50 ? "Aprobado" : "Crítico" });
    if (mision.energia < 50) {
        return {
            mision_exitosa: false,
            paso_fallido: 1,
            bitacora: bitacoraFlujo,
            explicacion: "La misión se detuvo en el paso 1: nivel de energía insuficiente para el salto hiperespacial."
        };
    }

    // Paso 2: Análisis de integridad del escudo
    bitacoraFlujo.push({ paso: 2, accion: "Análisis de escudos", estado: mision.escudosActivos ? "Aprobado" : "Desactivado" });
    if (!mision.escudosActivos) {
        return {
            mision_exitosa: false,
            paso_fallido: 2,
            bitacora: bitacoraFlujo,
            explicacion: "La misión se detuvo en el paso 2: los escudos protectores están desactivados frente a radiación cósmica."
        };
    }

    // Paso 3: Autorización de Inteligencia Artificial (IA)
    bitacoraFlujo.push({ paso: 3, accion: "Validación de IA central", estado: mision.iaAutorizada ? "Aprobado" : "Bloqueado" });
    if (!mision.iaAutorizada) {
        return {
            mision_exitosa: false,
            paso_fallido: 3,
            bitacora: bitacoraFlujo,
            explicacion: "La misión se detuvo en el paso 3: la inteligencia artificial central denegó el acceso al sector dimensional."
        };
    }

    return {
        mision_exitosa: true,
        bitacora: bitacoraFlujo,
        explicacion: "Se completaron exitosamente todos los flujos paso a paso requeridos para autorizar la expedición de ciencia ficción."
    };
};

const misionNormal = {
    energia: 85,
    escudosActivos: true,
    iaAutorizada: true
};

const misionBorde = {
    energia: 40,
    escudosActivos: true,
    iaAutorizada: true
};

console.log(procesarMisionCienciaFiccion(misionNormal));
console.log(procesarMisionCienciaFiccion(misionBorde));
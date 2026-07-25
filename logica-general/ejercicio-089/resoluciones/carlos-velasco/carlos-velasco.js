// ejercicio logica - simulacion de estados - Ejercicio 089

const simularEstadoSupervivenciaTerror = (escenario) => {
    if (!escenario) {
        return { error: "Los datos del escenario de la película de terror están vacíos o no son válidos." };
    }

    const { nivelOscuridad, presenciaMonstruo, bateriaLinterna, esconditeSeguro } = escenario;

    let estadoActual = "Explorando la Mansión";
    let bitacoraAcciones = [];

    // Regla 1: Si hay presencia de monstruo y la linterna tiene poca batería, peligro inminente
    if (presenciaMonstruo === true && bateriaLinterna <= 15) {
        estadoActual = "Ataque Inminente (Sin Batería)";
        bitacoraAcciones.push({ paso: 1, alerta: "Monstruo detectado con batería crítica en la linterna." });
        
        if (esconditeSeguro === true) {
            estadoActual = "Escondido a Salvo (Sobrevive)";
            bitacoraAcciones.push({ paso: 2, accion: "Se encontró un escondite seguro a tiempo." });
        } else {
            estadoActual = "Atrapado (Fin del Juego)";
            bitacoraAcciones.push({ paso: 2, accion: "No hay escondite seguro; el personaje fue capturado." });
        }
    } 
    // Regla 2: Alta oscuridad pero monstruo ausente o linterna con buena carga
    else if (nivelOscuridad >= 80 && bateriaLinterna > 15) {
        estadoActual = "Avanzando con Precaución (Linterna Activa)";
        bitacoraAcciones.push({ paso: 1, accion: "Se utiliza la linterna para iluminar pasillos oscuros." });
    } 
    // Regla 3: Zona segura o iluminada
    else {
        estadoActual = "Zona Segura / Calma Temporal";
        bitacoraAcciones.push({ paso: 1, accion: "El entorno se mantiene estable temporalmente." });
    }

    return {
        estado_final_supervivencia: estadoActual,
        bitacora: bitacoraAcciones,
        explicacion: "Se simuló el cambio de estados del personaje en la película de terror basándose en la oscuridad, presencia de amenazas, recursos de batería y disponibilidad de escondites."
    };
};

const escenarioNormal = {
    nivelOscuridad: 90,
    presenciaMonstruo: false,
    bateriaLinterna: 60,
    esconditeSeguro: true
};

const escenarioBorde = {
    nivelOscuridad: 95,
    presenciaMonstruo: true,
    bateriaLinterna: 10,
    esconditeSeguro: false
};

console.log(simularEstadoSupervivenciaTerror(escenarioNormal));
console.log(simularEstadoSupervivenciaTerror(escenarioBorde));
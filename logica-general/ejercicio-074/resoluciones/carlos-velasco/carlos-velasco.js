// ejercicio logica - diagnostico de errores - Ejercicio 074

const diagnosticarTatuaje = (parametrosSesion) => {
    let errores = [];

    if (!parametrosSesion.esterilizado) {
        errores.push("Falla crítica: El equipo no ha pasado por el proceso de esterilización.");
    }
    if (parametrosSesion.voltajeMaquina < 4 || parametrosSesion.voltajeMaquina > 9) {
        errores.push("Advertencia: El voltaje de la máquina está fuera del rango seguro (4V - 9V).");
    }
    if (!parametrosSesion.consentimientoFirmado) {
        errores.push("Falla legal: Falta la firma de consentimiento del cliente.");
    }

    return {
        aptoParaIniciar: errores.length === 0,
        diagnostico: errores.length > 0 ? errores : ["Sesión lista para iniciar sin anomalías."]
    };
};

const sesionNormal = { esterilizado: true, voltajequina: 6, voltajeMaquina: 6, consentimientoFirmado: true };
const sesionConErrores = { esterilizado: false, voltajeMaquina: 11, consentimientoFirmado: false };

console.log(diagnosticarTatuaje(sesionNormal));
console.log(diagnosticarTatuaje(sesionConErrores));
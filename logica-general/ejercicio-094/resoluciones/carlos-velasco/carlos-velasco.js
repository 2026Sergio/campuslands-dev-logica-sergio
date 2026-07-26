const diagnosticarErroresEstudioTatuajes = (sesionTatuaje) => {
    if (!sesionTatuaje) {
        return { error: "Los datos de la sesión de tatuaje están vacíos o no son válidos." };
    }

    let erroresDetectados = [];
    let estadoSesion = "Aprobada para Procedimiento";

    if (sesionTatuaje.equipoEsterilizado === false) {
        erroresDetectados.push({
            codigo: "ERR_01",
            componente: "Esterilización",
            descripcion: "El equipo de tatuaje no cuenta con certificación de esterilización."
        });
    }

    if (sesionTatuaje.consentimientoFirmado === false) {
        erroresDetectados.push({
            codigo: "ERR_02",
            componente: "Documentación",
            descripcion: "Falta el formulario de consentimiento informado firmado por el cliente."
        });
    }

    if (sesionTatuaje.tintaCaducada === true) {
        erroresDetectados.push({
            codigo: "ERR_03",
            componente: "Materiales",
            descripcion: "Se detectó el uso de pigmentos de tinta con fecha de caducidad vencida."
        });
    }

    const tieneErrores = erroresDetectados.length > 0;

    if (tieneErrores) {
        estadoSesion = "Suspendida por Errores de Protocolo";
    }

    return {
        sesion_valida: !tieneErrores,
        estado_actual: estadoSesion,
        total_errores: erroresDetectados.length,
        diagnostico_detalles: tieneErrores ? erroresDetectados : ["No se encontraron errores en la sesión de tatuajes."],
        explicacion: "Se aplicó un diagnóstico de errores iterativo para verificar normas de esterilización, documentación legal y calidad de materiales en el estudio de tatuajes."
    };
};

const sesionNormal = {
    equipoEsterilizado: true,
    consentimientoFirmado: true,
    tintaCaducada: false
};

const sesionConErrores = {
    equipoEsterilizado: false,
    consentimientoFirmado: true,
    tintaCaducada: true
};

console.log(diagnosticarErroresEstudioTatuajes(sesionNormal));
console.log(diagnosticarErroresEstudioTatuajes(sesionConErrores));
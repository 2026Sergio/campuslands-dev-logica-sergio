// ejercicio logica general - reglas de negocio - Ejercicio 095

const evaluarReglasNegocioDibujoDigital = (proyectoArte) => {
    if (!proyectoArte) {
        return { error: "Los datos del proyecto de arte digital están vacíos o no son válidos." };
    }

    const { resolucionDpi, capasUtilizadas, formatoExportacion, esClientePremium } = proyectoArte;

    let estadoProyecto = "Aprobado para Comercialización";
    let bitacoraReglas = [];

    // Regla 1: Validar resolución mínima para impresión o venta comercial (mínimo 300 DPI)
    if (resolucionDpi < 300) {
        bitacoraReglas.push({ regla: "Resolución DPI", estado: "Advertencia", detalle: "La resolución es menor a 300 DPI; no es apta para impresión de alta calidad." });
        if (!esClientePremium) {
            estadoProyecto = "Rechazado por Estándar de Calidad";
        }
    } else {
        bitacoraReglas.push({ regla: "Resolución DPI", estado: "Aprobado", detalle: "Cumple con el estándar óptimo de 300+ DPI." });
    }

    // Regla 2: Validar límite de capas según el tipo de cliente o formato
    if (capasUtilizadas > 50 && formatoExportacion !== "PSD_TIFF") {
        estadoProyecto = "Rechazado por Compatibilidad de Formato";
        bitacoraReglas.push({ regla: "Límite de Capas", estado: "Incumplida", detalle: "Demasiadas capas (>50) para un formato plano o estándar." });
    } else {
        bitacoraReglas.push({ regla: "Límite de Capas", estado: "Aprobado", detalle: "Estructura de capas dentro de los parámetros permitidos." });
    }

    // Regla 3: Validar formato de exportación permitido
    const formatosValidos = ["PNG", "JPG", "PSD_TIFF", "PDF"];
    if (!formatosValidos.includes(formatoExportacion)) {
        estadoProyecto = "Rechazado por Formato Inválido";
        bitacoraReglas.push({ regla: "Formato de Exportación", estado: "Error", detalle: "El formato indicado no está soportado por la plataforma." });
    } else {
        bitacoraReglas.push({ regla: "Formato de Exportación", estado: "Aprobado", detalle: `Formato ${formatoExportacion} aceptado.` });
    }

    return {
        proyecto_aprobado: estadoProyecto === "Aprobado para Comercialización",
        estado_final: estadoProyecto,
        bitacora_negocio: bitacoraReglas,
        explicacion: "Se aplicaron las reglas de negocio específicas del estudio de dibujo digital, evaluando resoluciones DPI, restricciones de capas y compatibilidad de formatos de exportación."
    };
};

const proyectoNormal = {
    resolucionDpi: 300,
    capasUtilizadas: 25,
    formatoExportacion: "PSD_TIFF",
    esClientePremium: true
};

const proyectoBorde = {
    resolucionDpi: 150,
    capasUtilizadas: 60,
    formatoExportacion: "BMP",
    esClientePremium: false
};

console.log(evaluarReglasNegocioDibujoDigital(proyectoNormal));
console.log(evaluarReglasNegocioDibujoDigital(proyectoBorde));
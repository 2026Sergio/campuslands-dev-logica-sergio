// ejercicio logica general - resolucion de casos - Ejercicio 093

const resolverCasoParacaidismo = (datosSalto) => {
    if (!datosSalto) {
        return { error: "Los datos de la simulación de paracaidismo están vacíos o no son válidos." };
    }

    const { alturaMetros, velocidadVientoKmh, equipoRevisado, licenciaValida } = datosSalto;

    let estadoSalto = "Aprobado para Despegue";
    let bitacoraResolucion = [];

    // Regla 1: Validar documentación y equipo (seguridad fundamental)
    if (licenciaValida === false || equipoRevisado === false) {
        estadoSalto = "Cancelado por Protocolo de Seguridad";
        bitacoraResolucion.push({ paso: 1, veredicto: "Rechazado: licencia inválida o equipo sin revisar." });
        return {
            autorizado: false,
            estado_salto: estadoSalto,
            bitacora: bitacoraResolucion,
            explicacion: "El salto fue denegado preventivamente debido a incumplimientos en las normativas obligatorias de seguridad."
        };
    } else {
        bitacoraResolucion.push({ paso: 1, veredicto: "Aprobado: equipo y licencia en regla." });
    }

    // Regla 2: Validar condiciones meteorológicas (viento)
    if (velocidadVientoKmh > 35) {
        estadoSalto = "Suspendido por Clima Adverso (Viento Fuerte)";
        bitacoraResolucion.push({ paso: 2, veredicto: `Viento a ${velocidadVientoKmh} km/h excede el límite seguro de 35 km/h.` });
        return {
            autorizado: false,
            estado_salto: estadoSalto,
            bitacora: bitacoraResolucion,
            explicacion: "Las condiciones de velocidad del viento representan un riesgo elevado para el despliegue del paracaídas."
        };
    } else {
        bitacoraResolucion.push({ paso: 2, veredicto: `Viento a ${velocidadVientoKmh} km/h dentro del rango seguro.` });
    }

    // Regla 3: Validar altura de salto óptima
    if (alturaMetros < 1000) {
        estadoSalto = "Precaución: Salto de Baja Altura";
        bitacoraResolucion.push({ paso: 3, veredicto: "Altura menor a 1000 metros; requiere apertura inmediata." });
    } else {
        estadoSalto = "Autorizado para Salto Estándar / Profesional";
        bitacoraResolucion.push({ paso: 3, veredicto: "Altura óptima para ejecución del salto." });
    }

    return {
        autorizado: true,
        estado_salto: estadoSalto,
        bitacora: bitacoraResolucion,
        explicacion: "Se resolvió el caso integrando múltiples reglas de control para paracaidismo, evaluando seguridad, clima y altitud."
    };
};

const saltoNormal = {
    alturaMetros: 3500,
    velocidadVientoKmh: 15,
    equipoRevisado: true,
    licenciaValida: true
};

const saltoBorde = {
    alturaMetros: 3000,
    velocidadVientoKmh: 40,
    equipoRevisado: true,
    licenciaValida: true
};

console.log(resolverCasoParacaidismo(saltoNormal));
console.log(resolverCasoParacaidismo(saltoBorde));
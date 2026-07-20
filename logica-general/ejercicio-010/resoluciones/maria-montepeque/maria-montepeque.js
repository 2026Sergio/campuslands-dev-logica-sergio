//Reto 010: Lectura de Instrucciones - Viajes y Turismo

function validarInstruccionesViaje(planViaje) {
    // 1. Caso Borde Estructural Estricto
    if (!planViaje || typeof planViaje !== 'object' || !planViaje.turista || !planViaje.destino) {
        return {
            itinerarioAprobado: false,
            estadoReserva: "rechazada",
            motivo: "La estructura de datos de la solicitud de viaje está incompleta o corrupta."
        };
    }

    const {
        turista: { presupuesto = 0, tieneDocumentosAlDia = false, preferenciaClima = 'indiferente' },
        destino: { nombre = 'Destino Desconocido', costoMinimo = 0, requiereVisado = false, climaActual = 'desconocido' }
    } = planViaje;

    // Variables semánticas autodocumentadas
    const conflictoMigratorio = requiereVisado && !tieneDocumentosAlDia;
    const quiebreFinanciero = presupuesto < costoMinimo;
    const incomodidadClimatica = preferenciaClima !== 'indiferente' && preferenciaClima !== climaActual;

    // 2. Regla 1: Validación Documental Obligatoria
    if (conflictoMigratorio) {
        return {
            itinerarioAprobado: false,
            estadoReserva: "bloqueada por migracion",
            motivo: `El destino '${nombre}' exige visado obligatorio y el turista no cuenta con sus documentos vigentes.`
        };
    }

    // 3. Regla 2: Viabilidad Financiera 
    if (quiebreFinanciero) {
        return {
            itinerarioAprobado: false,
            estadoReserva: "fondos insuficientes",
            motivo: `El presupuesto de $${presupuesto} es inferior al costo mínimo requerido para viajar a ${nombre} ($${costoMinimo}).`
        };
    }

    // 4. Regla 3: Validación de Instrucciones de Confort
    if (incomodidadClimatica) {
        return {
            itinerarioAprobado: true,
            estadoReserva: "aprobada con advertencia",
            motivo: `Viaje viable, pero el clima actual en ${nombre} es '${climaActual}', el cual no coincide con la preferencia de '${preferenciaClima}' del cliente.`
        };
    }

    // 5. Cumplimiento Perfecto
    return {
        itinerarioAprobado: true,
        estadoReserva: "confirmada",
        motivo: `¡Itinerario verificado con éxito! Todos los filtros documentales, financieros y de instrucciones de confort coinciden para el viaje a ${nombre}.`
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 010 ---");

const solicitudes = [
    {
        tipo: "Caso Normal - Aprobado con Advertencia de Clima",
        datos: {
            turista: { presupuesto: 2500, tieneDocumentosAlDia: true, preferenciaClima: "sol" },
            destino: { nombre: "Suiza Alpina", costoMinimo: 1800, requiereVisado: true, climaActual: "nieve" }
        }
    },
    {
        tipo: "Caso de Negocio - Fondos Insuficientes",
        datos: {
            turista: { presupuesto: 500, tieneDocumentosAlDia: true, preferenciaClima: "indiferente" },
            destino: { nombre: "Cancún Premium", costoMinimo: 1200, requiereVisado: false, climaActual: "sol" }
        }
    },
    {
        tipo: "Caso Borde - Payload Nulo",
        datos: null
    }
];

solicitudes.forEach(({ tipo, datos }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(validarInstruccionesViaje(datos), null, 2));
});
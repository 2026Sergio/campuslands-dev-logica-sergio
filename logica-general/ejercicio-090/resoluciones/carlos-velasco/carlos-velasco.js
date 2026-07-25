// ejercicio logica general - lectura de instrucciones - Ejercicio 090

const procesarInstruccionesViaje = (itinerario, restricciones) => {
    if (!itinerario || !Array.isArray(itinerario) || itinerario.length === 0) {
        return { error: "El itinerario de viaje está vacío o no es válido." };
    }

    if (!restricciones) {
        return { error: "No se proporcionaron las reglas o restricciones de lectura de instrucciones." };
    }

    let accionesEjecutadas = [];
    let itinerarioCumplido = true;

    // Leer y procesar paso a paso según las instrucciones detalladas
    for (let i = 0; i < itinerario.length; i++) {
        const paso = itinerario[i];
        let estadoPaso = "Aprobado";
        let motivo = "La actividad cumple con las directrices del viaje.";

        // Regla 1: Validar si la actividad requiere visado o permiso especial
        if (paso.requiereVisado === true && restricciones.tieneVisa === false) {
            estadoPaso = "Bloqueado / Omitido";
            motivo = "Falta el visado obligatorio especificado en las instrucciones de viaje.";
            itinerarioCumplido = false;
        } 
        // Regla 2: Validar límite de presupuesto por actividad
        else if (paso.costo > restricciones.presupuestoMaximoActividad) {
            estadoPaso = "Rechazado por Costo";
            motivo = "El costo de la actividad supera el límite máximo permitido por instrucción.";
            itinerarioCumplido = false;
        }

        accionesEjecutadas.push({
            paso_index: i + 1,
            actividad: paso.nombre,
            estado: estadoPaso,
            detalle: motivo
        });
    }

    return {
        itinerario_valido: itinerarioCumplido,
        total_actividades: itinerario.length,
        reporte_instrucciones: accionesEjecutadas,
        explicacion: "Se leyeron y aplicaron rigurosamente las instrucciones del reto de viajes y turismo, validando cada regla de visado y presupuesto."
    };
};

const itinerarioNormal = [
    { nombre: "Tour por el Centro Histórico", requiereVisado: false, costo: 45 },
    { nombre: "Visita al Museo Internacional", requiereVisado: true, costo: 60 }
];

const restriccionesNormal = {
    tieneVisa: true,
    presupuestoMaximoActividad: 100
};

const restriccionesBorde = {
    tieneVisa: false,
    presupuestoMaximoActividad: 50
};

console.log(procesarInstruccionesViaje(itinerarioNormal, restriccionesNormal));
console.log(procesarInstruccionesViaje(itinerarioNormal, restriccionesBorde));
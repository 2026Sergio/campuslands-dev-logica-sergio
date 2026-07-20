//Reto 008: Flujos Paso a Paso - Películas de Ciencia Ficción

function procesarFlujoPelicula(flujoReproduccion) {
    // 1. Paso 0: Verificación estricta de Payload
    if (!flujoReproduccion || typeof flujoReproduccion !== 'object' || !flujoReproduccion.usuario || !flujoReproduccion.pelicula) {
        return {
            accion: "abortar inicializacion",
            pasoDetencion: "Paso 0: Verificación de Payload",
            motivo: "Los metadatos del flujo de streaming se encuentran corruptos o incompletos."
        };
    }

    const { 
        usuario: { edad = 0, tipoPlan = 'Gratuito', pais = 'Desconocido' }, 
        pelicula: { titulo = 'Obra Anónima', edadMinima = 0, paisesBloqueados = [], disponibleStreaming = false } 
    } = flujoReproduccion;

    // 2. Paso 1: Control de Disponibilidad en Servidor
    if (!disponibleStreaming) {
        return {
            accion: "mostrar pantalla error",
            pasoDetencion: "Paso 1: Disponibilidad de Servidor",
            motivo: `La película de Ciencia Ficción '${titulo}' está fuera de línea temporalmente por mantenimiento de servidores.`
        };
    }

    // 3. Paso 2: Restricción Geográfica
    if (paisesBloqueados?.includes(pais)) {
        return {
            accion: "bloquear reproduccion",
            pasoDetencion: "Paso 2: Restricción Geográfica",
            motivo: `La distribución de esta obra no está autorizada para la región geográfica: ${pais}.`
        };
    }

    // 4. Paso 3: Control Parental de Edad
    if (edad < edadMinima) {
        return {
            accion: "solicitar pin parental",
            pasoDetencion: "Paso 3: Validación Control Parental",
            motivo: `El usuario posee ${edad} años y la clasificación mínima para esta película es de +${edadMinima} años.`
        };
    }

    // 5. Paso 4: Validación de Nivel de Suscripción
    if (tipoPlan === 'Gratuito') {
        return {
            accion: "ofrecer upgrade plan",
            pasoDetencion: "Paso 4: Verificación de Suscripción",
            motivo: "El plan actual Gratuito no cubre el acceso al catálogo exclusivo de películas de ciencia ficción."
        };
    }

    // 6. Paso Final: Flujo Aprobado
    return {
        accion: "iniciar buffer streaming",
        pasoDetencion: "Paso 5: Flujo Aprobado",
        motivo: `Flujo secuencial completado con éxito. Disfrutando de la película: ${titulo}.`
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 008 ---");

const obraSciFi = { titulo: "Interstellar 2", edadMinima: 13, paisesBloqueados: ["JP", "KP"], disponibleStreaming: true };

const pruebas = [
    { tipo: "Caso Normal - Streaming Concedido", datos: { usuario: { edad: 20, tipoPlan: "Premium", pais: "CO" }, pelicula: obraSciFi } },
    { tipo: "Caso de Negocio - Detención por Filtro Parental", datos: { usuario: { edad: 11, tipoPlan: "Estandar", pais: "MX" }, pelicula: obraSciFi } },
    { tipo: "Caso Borde - Parámetros Incompletos", datos: { usuario: { edad: 30, tipoPlan: "Premium", pais: "US" } } }
];

pruebas.forEach(({ tipo, datos }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(procesarFlujoPelicula(datos), null, 2));
});
/**
 * @param {Array} autos - Lista de objetos de autos hiperdeportivos.
 * @param {String} modeloBuscado - El nombre del modelo que se desea encontrar.
 * @returns {Object} - El objeto del auto encontrado o un reporte de error/ausencia.
 */
function buscarHiperdeportivo(autos, modeloBuscado) {
    // 1. Validación preventiva (Evita errores si la colección está vacía o el término de búsqueda es inválido)
    if (!autos || !Array.isArray(autos) || autos.length === 0 || !modeloBuscado || typeof modeloBuscado !== 'string') {
        return {
            accion: "cancelar búsqueda",
            motivo: "Los datos de la colección están vacíos o el modelo buscado no es un texto válido."
        };
    }

    // 2. Aplicación de la regla de negocio mediante búsqueda lineal (.find)
    // Convertimos a minúsculas para que la búsqueda sea insensible a mayúsculas/minúsculas
    const autoEncontrado = autos.find(auto => auto.modelo.toLowerCase() === modeloBuscado.toLowerCase());

    // 3. Validación en caso de no encontrar el elemento
    if (!autoEncontrado) {
        return {
            accion: "notificar ausencia",
            motivo: `El auto con el modelo '${modeloBuscado}' no se encuentra registrado en la colección.`
        };
    }

    return autoEncontrado;
}

// === CASOS DE PRUEBA ===

// 1. Caso Normal: Búsqueda exitosa de un auto existente
const coleccionAutos = [
    { modelo: "Chiron", marca: "Bugatti", velocidadMax: 420 },
    { modelo: "Jesko", marca: "Koenigsegg", velocidadMax: 480 },
    { modelo: "Nevera", marca: "Rimac", velocidadMax: 412 }
];

console.log("--- Caso Normal ---");
console.log(buscarHiperdeportivo(coleccionAutos, "Jesko"));


// 2. Caso Borde: Intentar buscar un modelo que no existe en el catálogo
console.log("\n--- Caso Borde ---");
console.log(buscarHiperdeportivo(coleccionAutos, "Veneno"));

const rankingFutbolSala = [
    { id: 1, equipo: "Real Bucaramanga FS", puntos: 28, golesFavor: 45, activo: true },
    { id: 2, equipo: "Leones de Santander", puntos: 22, golesFavor: 30, activo: true },
    { id: 3, equipo: "Atlético Futsal", puntos: -5, golesFavor: 20, activo: true }, // Inconsistencia: Puntos negativos (Dato inválido)
    { id: 4, equipo: "", puntos: 15, golesFavor: 18, activo: true },               // Inconsistencia: Nombre de equipo vacío
    { id: 5, equipo: "Deportivo Central", puntos: 19, golesFavor: 25, activo: false } // Inconsistencia: Equipo inactivo
];

// Función para validar datos de entrada y depurar el ranking de fútbol sala
function validarDatosRankingFutsal(lista) {
    // Paso 1: Validación general de entrada (Caso borde de la estructura principal)
    if (!Array.isArray(lista) || lista.length === 0) {
        return { estado: "Error", mensaje: "La lista del ranking de fútbol sala está vacía o no es válida." };
    }

    let equiposValidos = [];
    let registrosConErrores = [];

    // Paso 2: Ciclo para recorrer y validar cada objeto de la lista
    for (let i = 0; i < lista.length; i++) {
        let item = lista[i];
        let erroresValidacion = [];

        // Regla 1: Validar que el nombre del equipo exista y no esté vacío
        if (!item.equipo || typeof item.equipo !== "string" || item.equipo.trim() === "") {
            erroresValidacion.push("El nombre del equipo está vacío, no es texto o no está definido.");
        }

        // Regla 2: Validar que los puntos sean un número válido y mayor o igual a 0
        if (typeof item.puntos !== "number" || isNaN(item.puntos) || item.puntos < 0) {
            erroresValidacion.push("Los puntos del equipo son inválidos (deben ser numéricos y no negativos).");
        }

        // Regla 3: Validar que los goles a favor sean un número válido y mayor o igual a 0
        if (typeof item.golesFavor !== "number" || isNaN(item.golesFavor) || item.golesFavor < 0) {
            erroresValidacion.push("Los goles a favor son inválidos (deben ser numéricos y no negativos).");
        }

        // Regla 4: Validar que el equipo se encuentre activo en la competición
        if (item.activo !== true) {
            erroresValidacion.push("El equipo se encuentra inactivo en el torneo.");
        }

        // Paso 3: Clasificar el registro según el resultado de las validaciones
        if (erroresValidacion.length === 0) {
            equiposValidos.push({
                equipo: item.equipo.trim(),
                puntos: item.puntos,
                golesFavor: item.golesFavor,
                estadoValidacion: "Aprobado para el ranking oficial"
            });
        } else {
            registrosConErrores.push({
                equipoRegistrado: item.equipo || "Desconocido",
                estadoValidacion: "Rechazado por validación de datos",
                motivos: erroresValidacion
            });
        }
    }

    // Paso 4: Retornar resultado estructurado con el resumen de la auditoría
    return {
        estadoSistema: "Proceso de Validación de Datos Completado",
        totalRegistrosEvaluados: lista.length,
        totalEquiposValidos: equiposValidos.length,
        equiposValidosOficiales: equiposValidos,
        registrosRechazados: registrosConErrores
    };
}

// --- PRUEBAS ---

// 1. Prueba normal: Validar el ranking de fútbol sala con datos mixtos (válidos e inválidos)
console.log("--- PRUEBA NORMAL (Validación de Datos - Fútbol Sala) ---");
console.log(JSON.stringify(validarDatosRankingFutsal(rankingFutbolSala), null, 2));

// 2. Prueba de caso borde: Enviar una lista vacía para comprobar la protección del sistema
console.log("\n--- PRUEBA CASO BORDE (Lista vacía) ---");
console.log(validarDatosRankingFutsal([]));
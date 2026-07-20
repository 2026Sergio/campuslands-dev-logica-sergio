//Reto 003: Toma de Decisiones - Torneo de Esports

function evaluarEstadoTorneo(estadisticasEquipo) {
    // 1. Guardrail Estructural: Captura objetos nulos, no-objetos o arrays erróneos
    if (!estadisticasEquipo || typeof estadisticasEquipo !== 'object' || Array.isArray(estadisticasEquipo)) {
        return { decision: "suspender evaluacion", argumento: "No se proporcionaron estadísticas legibles o válidas." };
    }

    const { nombre = 'Anónimo', victorias = 0, penalizaciones = 0, fairPlay = true } = estadisticasEquipo;

    // 2. Regla 1: Descalificación inmediata por conducta
    if (!fairPlay || penalizaciones >= 3) {
        return {
            decision: "descalificado",
            argumento: `El equipo ${nombre} violó el reglamento ético (FairPlay: ${fairPlay}) o excedió el límite de faltas (Penalizaciones: ${penalizaciones}).`
        };
    }

    // 3. Evaluación de rendimiento deportivo en cascada limpia
    if (victorias >= 4) {
        return { decision: "clasificado directo", argumento: "Rendimiento deportivo sobresaliente y cumplimiento del código de conducta." };
    }

    if (victorias >= 1) {
        return { decision: "repechaje", argumento: "El puntaje obtenido sitúa al equipo en zona de play-ins." };
    }

    return { decision: "eliminado", argumento: "El equipo no sumó las victorias mínimas requeridas para avanzar." };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 003 ---");

const pruebas = [
    { tipo: "Caso Normal - Éxito Deportivo", datos: { nombre: "Campuslands Predators", victorias: 5, penalizaciones: 1, fairPlay: true } },
    { tipo: "Caso Regla de Negocio - Falta Ética", datos: { nombre: "Toxic Gamers", victorias: 6, penalizaciones: 0, fairPlay: false } },
    { tipo: "Caso Borde - Registro Vacío", datos: {} }
];

pruebas.forEach(({ tipo, datos }) => {
    console.log(`\n[${tipo}]\nEntrada: ${JSON.stringify(datos)}`);
    console.log("Salida:", evaluarEstadoTorneo(datos));
});
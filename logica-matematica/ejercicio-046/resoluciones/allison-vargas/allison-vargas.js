function analizarTelemetriaHiperdeportivos(listaAutos) {
    // Validar que la entrada sea un arreglo no vacío
    if (!Array.isArray(listaAutos) || listaAutos.length === 0) {
        return {
            error: true,
            mensaje: "Se debe proporcionar una lista no vacía con la telemetría de los hiperdeportivos."
        };
    }

    // Factores de conversión estándar
    const KMH_A_MPH = 0.621371;
    const HP_A_KW = 0.7457;

    const hiperdeportivosProcesados = [];
    let velocidadMaximaKmh = 0;
    let autoMasRapido = "";

    for (let i = 0; i < listaAutos.length; i++) {
        const auto = listaAutos[i];

        // Validar la estructura del objeto
        if (
            !auto ||
            typeof auto.modelo !== "string" ||
            typeof auto.velocidadKmh !== "number" || auto.velocidadKmh <= 0 ||
            typeof auto.potenciaHp !== "number" || auto.potenciaHp <= 0
        ) {
            return {
                error: true,
                mensaje: "Cada vehículo debe incluir modelo (texto), velocidadKmh (>0) y potenciaHp (>0)."
            };
        }

        // Realizar conversiones de unidades
        const velocidadMph = Number((auto.velocidadKmh * KMH_A_MPH).toFixed(2));
        const potenciaKw = Number((auto.potenciaHp * HP_A_KW).toFixed(2));

        // Determinar categoría por nivel de velocidad
        let categoriaVelocidad = "";
        if (auto.velocidadKmh >= 400) {
            categoriaVelocidad = "Récord Mundial (Hiperdeportivo de Élite)";
        } else if (auto.velocidadKmh >= 350) {
            categoriaVelocidad = "Súper Rendimiento (Pista Avanzada)";
        } else {
            categoriaVelocidad = "Rendimiento Estándar";
        }

        // Evaluar cuál es el vehículo más rápido de la prueba
        if (auto.velocidadKmh > velocidadMaximaKmh) {
            velocidadMaximaKmh = auto.velocidadKmh;
            autoMasRapido = auto.modelo;
        }

        hiperdeportivosProcesados.push({
            modelo: auto.modelo,
            velocidad_kmh: auto.velocidadKmh,
            velocidad_mph: velocidadMph,
            potencia_hp: auto.potenciaHp,
            potencia_kw: potenciaKw,
            categoria: categoriaVelocidad
        });
    }

    return {
        total_vehiculos_evaluados: listaAutos.length,
        auto_mas_rapido: `${autoMasRapido} (${velocidadMaximaKmh} km/h)`,
        telemetria_convertida: hiperdeportivosProcesados,
        explicacion: `Se convirtió exitosamente la telemetría de ${listaAutos.length} hiperdeportivos de (km/h, HP) a (mph, kW).`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = analizarTelemetriaHiperdeportivos([
    { modelo: "Bugatti Chiron", velocidadKmh: 420, potenciaHp: 1500 },
    { modelo: "Ferrari SF90", velocidadKmh: 340, potenciaHp: 986 },
    { modelo: "Koenigsegg Jesko", velocidadKmh: 480, potenciaHp: 1600 }
]);
console.log(caso1);

console.log("\n=== Caso Borde (Un solo auto de entrada) ===");
const caso2 = analizarTelemetriaHiperdeportivos([
    { modelo: "Rimac Nevera", velocidadKmh: 412, potenciaHp: 1914 }
]);
console.log(caso2);

console.log("\n=== Caso Entrada Inválida (Potencia incorrecta) ===");
const caso3 = analizarTelemetriaHiperdeportivos([
    { modelo: "Pagani Huayra", velocidadKmh: 383, potenciaHp: -50 }
]);
console.log(caso3);
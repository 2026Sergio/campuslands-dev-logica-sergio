//Reto 002: Validación de Datos - Ranking de Fútbol Sala

function validarDatosRanking(datosEquipo) {
    // 1. Guardrail Estructural: Valida que sea un objeto real y no nulo
    if (!datosEquipo || typeof datosEquipo !== 'object' || Array.isArray(datosEquipo)) {
        return { valido: false, accion: "rechazar registro", motivo: "Estructura de datos inválida o inexistente." };
    }

    const { nombre, puntos = 0, partidosJugados = 0 } = datosEquipo;

    // 2. Regla 1: Validación de identidad
    if (typeof nombre !== 'string' || !nombre.trim()) {
        return { valido: false, accion: "corregir campo nombre", motivo: "El nombre del equipo es obligatorio y debe ser texto." };
    }

    // 3. Regla 2: Rangos numéricos consistentes
    if (puntos < 0 || partidosJugados < 0) {
        return { valido: false, accion: "corregir valores negativos", motivo: "Los puntos y partidos no pueden ser menores a cero." };
    }

    // 4. Regla 3: Lógica matemática de negocio (Máximo 3 puntos por partido)
    const maxPuntos = partidosJugados * 3;
    if (puntos > maxPuntos) {
        return { 
            valido: false, 
            accion: "revisar consistencia", 
            motivo: `Inconsistencia: Con ${partidosJugados} partidos el máximo posible es ${maxPuntos} puntos (recibido: ${puntos}).` 
        };
    }

    return { valido: true, accion: "clasificar en ranking", motivo: "Datos validados correctamente." };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 002 ---");

const pruebas = [
    { tipo: "Caso Normal", datos: { nombre: "Inter Movistar FS", puntos: 12, partidosJugados: 5 } },
    { tipo: "Caso Regla de Negocio - Inconsistente", datos: { nombre: "Barça Futsal", puntos: 20, partidosJugados: 4 } },
    { tipo: "Caso Borde - Valores Negativos", datos: { nombre: "Futsal Team", puntos: -5, partidosJugados: 2 } },
    { tipo: "Caso Borde - Estructura Corrupta", datos: null }
];

pruebas.forEach(({ tipo, datos }) => {
    console.log(`\n[${tipo}]\nEntrada: ${JSON.stringify(datos)}`);
    console.log("Salida:", validarDatosRanking(datos));
});
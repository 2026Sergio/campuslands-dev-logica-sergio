// ejercicio logica matematica - modulos y divisibilidad - Ejercicio 089

const analizarRitualesTerror = (tiemposRituales, divisorClave) => {
    if (!tiemposRituales || !Array.isArray(tiemposRituales) || tiemposRituales.length === 0) {
        return { error: "La lista de tiempos de los rituales está vacía o no es válida." };
    }

    if (typeof divisorClave !== 'number' || divisorClave <= 0) {
        return { error: "El divisor clave para los módulos no es válido." };
    }

    let ritualesExitosos = 0;
    let ritualesBloqueados = 0;
    let reporteRituales = [];

    for (let i = 0; i < tiemposRituales.length; i++) {
        let tiempo = tiemposRituales[i];

        if (tiempo < 0) {
            tiempo = 0; // Control de límites para valores negativos
        }

        // Aplicar regla de divisibilidad usando el operador módulo (%)
        const esDivisible = tiempo % divisorClave === 0;

        if (esDivisible) {
            ritualesExitosos++;
            reporteRituales.push({
                ritual_id: i + 1,
                tiempo_minutos: tiempo,
                estado: "Ritual Purificado (Divisible)"
            });
        } else {
            ritualesBloqueados++;
            reporteRituales.push({
                ritual_id: i + 1,
                tiempo_minutos: tiempo,
                estado: "Ritual Corrupto / Inestable (No Divisible)"
            });
        }
    }

    // Clasificación general de la sesión de terror basada en módulos
    let clasificacionSesion = "Inestable";
    if (ritualesExitosos > ritualesBloqueados) {
        clasificacionSesion = "Protegido / Seguro";
    } else if (ritualesExitosos === ritualesBloqueados) {
        clasificacionSesion = "Equilibrio Precario";
    }

    return {
        total_rituales: tiemposRituales.length,
        rituales_exitosos: ritualesExitosos,
        rituales_bloqueados: ritualesBloqueados,
        clasificacion_sesion: clasificacionSesion,
        reporte: reporteRituales,
        explicacion: "Se aplicaron operaciones de módulo y divisibilidad sobre los tiempos de los rituales para determinar cuáles cumplían con el factor clave de purificación en la temática de películas de terror."
    };
};

const tiemposNormales = [15, 20, 30, 42, 10]; // Divisor clave: 5
const divisorNormal = 5;

const tiemposBorde = [7, 13, 19]; // Divisor clave: 3
const divisorBorde = 3;

console.log(analizarRitualesTerror(tiemposNormales, divisorNormal));
console.log(analizarRitualesTerror(tiemposBorde, divisorBorde));
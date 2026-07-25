const calcularPuntuacionPeliculasSciFi = (calificaciones, factorMultiplicador, penalizacionCritica) => {
    if (!calificaciones || !Array.isArray(calificaciones) || calificaciones.length === 0) {
        return { error: "La lista de calificaciones de las películas de ciencia ficción está vacía o no es válida." };
    }

    if (typeof factorMultiplicador !== 'number' || typeof penalizacionCritica !== 'number') {
        return { error: "Los parámetros de puntuación (multiplicador o penalización) no son válidos." };
    }

    let puntajeAcumulado = 0;
    let detallePuntuacion = [];

    for (let i = 0; i < calificaciones.length; i++) {
        let nota = calificaciones[i];

        if (nota < 0) {
            nota = 0; 
        }

        let puntajeCalculado = (nota * factorMultiplicador);

        if (nota < 5) {
            puntajeCalculado -= penalizacionCritica;
            if (puntajeCalculado < 0) puntajeCalculado = 0;
        }

        puntajeAcumulado += puntajeCalculado;

        detallePuntuacion.push({
            pelicula_index: i + 1,
            calificacion_original: nota,
            puntaje_ajustado: parseFloat(puntajeCalculado.toFixed(2))
        });
    }

    let clasificacion = "Estándar";
    if (puntajeAcumulado >= 50) {
        clasificacion = "Obra Maestra del Género";
    } else if (puntajeAcumulado >= 25) {
        clasificacion = "Notable / Recomendada";
    }

    return {
        puntaje_final: parseFloat(puntajeAcumulado.toFixed(2)),
        clasificacion: clasificacion,
        detalle: detallePuntuacion,
        explicacion: "Se calculó el patrón de puntuación aplicando un factor multiplicador y restando penalizaciones para calificaciones bajas según las reglas del reto."
    };
};

const calificacionesNormales = [8, 9, 4, 7]; 
const multiplicadorNormal = 1.5;
const penalizacionNormal = 2;

const calificacionesBorde = [2, 3];
const multiplicadorBorde = 1.0;
const penalizacionBorde = 5;

console.log(calcularPuntuacionPeliculasSciFi(calificacionesNormales, multiplicadorNormal, penalizacionNormal));
console.log(calcularPuntuacionPeliculasSciFi(calificacionesBorde, multiplicadorBorde, penalizacionBorde));
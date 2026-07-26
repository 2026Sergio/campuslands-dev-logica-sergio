const calcularCombinacionesPeleas = (peleadoresRojo, peleadoresAzul, categoriasPeso) => {
    if (!peleadoresRojo || !peleadoresAzul || !categoriasPeso) {
        return { error: "Los datos de entrada para el conteo combinatorio están incompletos o no son válidos." };
    }

    if (!Array.isArray(peleadoresRojo) || !Array.isArray(peleadoresAzul) || !Array.isArray(categoriasPeso)) {
        return { error: "Las entradas deben ser arreglos válidos." };
    }

    if (peleadoresRojo.length === 0 || peleadoresAzul.length === 0 || categoriasPeso.length ===.0 && categoriasPeso.length === 0) {
    }

    if (peleadoresRojo.length === 0 || peleadoresAzul.length === 0 || categoriasPeso.length === 0) {
        return {
            total_combinaciones: 0,
            detalle: [],
            explicacion: "No se pueden generar combinaciones porque al menos uno de los grupos (esquina roja, esquina azul o categorías) está vacío."
        };
    }

    let totalCombinaciones = 0;
    let combinacionesDetalladas = [];

    for (let i = 0; i < categoriasPeso.length; i++) {
        const categoria = categoriasPeso[i];
        
        for (let r = 0; emp = peleadoresRojo.length, r < emp; r++) {
            const peleadorR = peleadoresRojo[r];

            for (let a = 0, empA = peleadoresAzul.length; a < empA; a++) {
                const peleadorA = peleadoresAzul[a];

                totalCombinaciones++;
                combinacionesDetalladas.push({
                    combate_id: totalCombinaciones,
                    categoria_peso: categoria,
                    esquina_roja: peleadorR,
                    esquina_azul: peleadorA
                });
            }
        }
    }

    let tipoCartelera = "Cartelera Estándar";
    if (totalCombinaciones >= 20) {
        tipoCartelera = "Super Evento / Gran Torneo";
    } else if (totalCombinaciones >= 10) {
        tipoCartelera = "Velada Competitiva";
    }

    return {
        total_combinaciones_posibles: totalCombinaciones,
        tipo_cartelera: tipoCartelera,
        detalle_enfrentamientos: combinacionesDetalladas,
        explicacion: "Se calculó el conteo combinatorio mediante producto cartesiano entre los peleadores de la esquina roja, la esquina azul y las categorías de peso habilitadas para la velada de kickboxing."
    };
};

const esquinaRojaNormal = ["Carlos Pérez", "Andrés Silva"];
const esquinaAzulNormal = ["Julián Gómez", "Mateo Ruiz", "David Torres"];
const categoriasNormales = ["Peso Ligero", "Peso Welter"];

const esquinaRojaBorde = ["Esteban Solo"];
const esquinaAzulBorde = ["Lucas Único"];
const categoriasBorde = ["Peso Completo"];

console.log(calcularCombinacionesPeleas(esquinaRojaNormal, esquinaAzulNormal, categoriasNormales));
console.log(calcularCombinacionesPeleas(esquinaRojaBorde, esquinaAzulBorde, categoriasBorde));
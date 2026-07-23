/*
=========================================
Reto: Resolución de Casos
Temática: Paracaidismo
Campuslands
=========================================

Objetivo:
Evaluar si un participante puede realizar un salto
de paracaidismo según las condiciones establecidas.
*/

// Lista de participantes
const participantes = [
    {
        nombre: "Carlos Pérez",
        edad: 25,
        peso: 78,
        certificadoMedico: true
    },
    {
        nombre: "Ana López",
        edad: 16,
        peso: 60,
        certificadoMedico: true
    },
    {
        nombre: "Luis Gómez",
        edad: 30,
        peso: 105,
        certificadoMedico: true
    },
    {
        nombre: "María Rodríguez",
        edad: 28,
        peso: 70,
        certificadoMedico: false
    },
    {
        nombre: "José Martínez",
        edad: 35,
        peso: 82,
        certificadoMedico: true
    }
];

/*
=========================================
Función para evaluar participantes
=========================================
*/

function evaluarParticipantes(lista) {

    let reporte = [];

    for (let i = 0; i < lista.length; i++) {

        let participante = lista[i];
        let resultado = "";

        // Caso 1: Menor de edad
        if (participante.edad < 18) {

            resultado = "No puede participar: menor de edad.";

        }
        // Caso 2: Exceso de peso
        else if (participante.peso > 100) {

            resultado = "No puede participar: supera el peso permitido.";

        }
        // Caso 3: Sin certificado médico
        else if (!participante.certificadoMedico) {

            resultado = "No puede participar: falta certificado médico.";

        }
        // Caso 4: Cumple todos los requisitos
        else {

            resultado = "Aprobado para realizar el salto.";

        }

        reporte.push({
            nombre: participante.nombre,
            resultado: resultado
        });

    }

    return reporte;

}

/*
=========================================
Mostrar reporte
=========================================
*/

function mostrarReporte(datos) {

    console.log("====================================");
    console.log("REPORTE DE PARACAIDISMO");
    console.log("====================================\n");

    datos.forEach((participante) => {

        console.log("Participante: " + participante.nombre);
        console.log("Resultado: " + participante.resultado);
        console.log("--------------------------------");

    });

}

const resultado = evaluarParticipantes(participantes);

mostrarReporte(resultado);
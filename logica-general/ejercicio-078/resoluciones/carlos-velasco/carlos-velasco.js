const asignarTurnoSoldadura = (colaTurnos) => {
    if (!colaTurnos || colaTurnos.length === 0) {
        return {
            turno_asignado: null,
            mensaje: "No hay soldadores en la cola de espera."
        };
    }

    let indexSeleccionado = 0;
    let maxNivel = colaTurnos[0].nivelCertificacion;

    for (let i = 1; i < colaTurnos.length; i++) {
        if (colaTurnos[i].nivelCertificacion > maxNivel) {
            maxNivel = colaTurnos[i].nivelCertificacion;
            indexSeleccionado = i;
        }
    }

    const soldadorAsignado = colaTurnos.splice(indexSeleccionado, 1)[0];

    return {
        soldador_seleccionado: soldadorAsignado.nombre,
        nivel: soldadorAsignado.nivelCertificacion,
        restantes_en_cola: colaTurnos.length,
        explicacion: `Se asignó el turno al soldador ${soldadorAsignado.nombre} priorizando su nivel de certificación.`
    };
};

const colaNormal = [
    { nombre: "Pedro", nivelCertificacion: 1 },
    { nombre: "Lucía", nivelCertificacion: 3 },
    { nombre: "Mateo", nivelCertificacion: 2 }
];

console.log(asignarTurnoSoldadura(colaNormal));
console.log(asignarTurnoSoldadura([]));
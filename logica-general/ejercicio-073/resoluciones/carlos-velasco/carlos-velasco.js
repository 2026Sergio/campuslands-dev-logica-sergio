const evaluarSaltoParacaidas = (condiciones) => {
    let estado = "Apto para salto";
    let razon = "Todas las condiciones meteorológicas son favorables.";

    if (condiciones.viento > 25) {
        estado = "Cancelado";
        razon = "Velocidad del viento excede el límite seguro.";
    } else if (condiciones.visibilidad < 5) {
        estado = "Espera";
        razon = "Visibilidad reducida por debajo del mínimo requerido.";
    } else if (!condiciones.equipoRevisado) {
        estado = "Revisión requerida";
        razon = "El equipo principal no ha sido verificado.";
    }

    return {
        resultado: estado,
        motivo: razon
    };
};

const saltoNormal = { viento: 15, visibilidad: 10, equipoRevisado: true };
const saltoPeligroso = { viento: 30, visibilidad: 10, equipoRevisado: true };

console.log(evaluarSaltoParacaidas(saltoNormal));
console.log(evaluarSaltoParacaidas(saltoPeligroso));
function calcularPresupuestoAnimacion(proyectos) {
    const resultados = [];

    for (let i = 0; i < proyectos.length; i++) {
        const proyecto = proyectos[i];

        let descuento = 0;

        if (proyecto.presupuesto >= 10000) {
            descuento = proyecto.presupuesto * 0.15;
        } else if (proyecto.presupuesto >= 5000) {
            descuento = proyecto.presupuesto * 0.10;
        }

        const presupuestoFinal = proyecto.presupuesto - descuento;

        resultados.push({
            nombre: proyecto.nombre,
            presupuestoOriginal: proyecto.presupuesto,
            descuento: descuento,
            presupuestoFinal: presupuestoFinal
        });
    }

    return resultados;
}

// Ejemplo
const proyectos = [
    { nombre: "Cortometraje 3D", presupuesto: 12000 },
    { nombre: "Personaje animado", presupuesto: 7000 },
    { nombre: "Modelo básico", presupuesto: 3000 }
];

console.log(calcularPresupuestoAnimacion(proyectos));
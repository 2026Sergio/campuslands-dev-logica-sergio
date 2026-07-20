function evaluarProyectosArquitectura(proyectos) {
    const resultados = [];

    for (let i = 0; i < proyectos.length; i++) {
        const proyecto = proyectos[i];
        let decision;

        if (proyecto.presupuesto > 50000 && proyecto.area > 200) {
            decision = "Aprobado";
        } else if (proyecto.presupuesto > 30000 && proyecto.area > 100) {
            decision = "Requiere revisión";
        } else {
            decision = "Rechazado";
        }

        resultados.push({
            nombre: proyecto.nombre,
            decision: decision
        });
    }

    return resultados;
}

// Ejemplo
const proyectos = [
    { nombre: "Torre moderna", presupuesto: 80000, area: 300 },
    { nombre: "Casa inteligente", presupuesto: 40000, area: 150 },
    { nombre: "Diseño pequeño", presupuesto: 20000, area: 80 }
];

console.log(evaluarProyectosArquitectura(proyectos));
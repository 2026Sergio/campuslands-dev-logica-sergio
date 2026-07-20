function evaluarProyecto(proyecto) {
    const decisiones = [];

    if (proyecto.area < 50) {
        decisiones.push("espacio reducido");
    }

    if (proyecto.material !== "resistente") {
        decisiones.push("material no recomendado");
    }

    if (proyecto.iluminacion < 70) {
        decisiones.push("iluminacion insuficiente");
    }

    if (decisiones.length >= 2) {
        return {
            proyecto: proyecto.nombre,
            resultado: "rechazado",
            motivos: decisiones
        };
    }

    if (decisiones.length === 1) {
        return {
            proyecto: proyecto.nombre,
            resultado: "requiere mejoras",
            motivos: decisiones
        };
    }

    return {
        proyecto: proyecto.nombre,
        resultado: "aprobado",
        motivos: []
    };
}

const proyectoNormal = {
    nombre: "Torre Moderna",
    area: 200,
    material: "resistente",
    iluminacion: 90
};

const proyectoBorde = {
    nombre: "Casa Pequeña",
    area: 30,
    material: "madera",
    iluminacion: 40
};

console.log(evaluarProyecto(proyectoNormal));
console.log(evaluarProyecto(proyectoBorde));
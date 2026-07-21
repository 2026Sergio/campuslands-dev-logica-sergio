function calcularTiempoRender(proyectos) {
    const resultados = [];

    for (let i = 0; i < proyectos.length; i++) {
        const proyecto = proyectos[i];

        const tiempo = proyecto.tamanoArchivo / proyecto.velocidadRender;

        resultados.push({
            nombre: proyecto.nombre,
            tiempoRender: tiempo.toFixed(2) + " horas"
        });
    }

    return resultados;
}

// Ejemplo
const proyectos = [
    { nombre: "Paisaje 3D", tamanoArchivo: 120, velocidadRender: 30 },
    { nombre: "Personaje", tamanoArchivo: 90, velocidadRender: 45 },
    { nombre: "Escenario", tamanoArchivo: 200, velocidadRender: 40 }
];

console.log(calcularTiempoRender(proyectos));
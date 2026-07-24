// ejercicio logica - reglas de negocio - Ejercicio 075

const evaluarProyectoDibujo = (proyecto) => {
    let errores = [];
    let estado = "Aprobado para exportación";

    if (proyecto.resolucionDPI < 300 && proyecto.usoComercial) {
        errores.push("El DPI es inferior a 300 para un proyecto de uso comercial.");
    }
    if (proyecto.capas > 50 && proyecto.formato === "JPG") {
        errores.push("El formato JPG no soporta la cantidad de capas utilizadas sin pérdida de datos.");
    }
    if (!proyecto.perfilColor || proyecto.perfilColor !== "CMYK" && proyecto.usoComercial) {
        errores.push("Se recomienda perfil CMYK para proyectos comerciales impresos.");
    }

    if (errores.length > 0) {
        estado = "Revisión de reglas de negocio requerida";
    }

    return {
        estado_proyecto: estado,
        advertencias: errores.length > 0 ? errores : ["Cumple con todas las normativas de calidad y negocio."]
    };
};

const proyectoNormal = { resolucionDPI: 300, usoComercial: true, capas: 15, formato: "PSD", perfilColor: "CMYK" };
const proyectoConFallas = { resolucionDPI: 72, usoComercial: true, capas: 60, formato: "JPG", perfilColor: "RGB" };

console.log(evaluarProyectoDibujo(proyectoNormal));
console.log(evaluarProyectoDibujo(proyectoConFallas));
const evaluarMaterialArquitectonico = (datosModelo) => {
    let tipoMaterial = "Estandar";
    let recomendacion = "Apto para renders conceptuales básicos.";

    const { zonaSismica, presupuestoAlto, esExterior } = datosModelo;

    // Tabla de decisión aplicando reglas de arquitectura 3D
    if (zonaSismica && esExterior) {
        tipoMaterial = "Hormigón Armado Reforzado";
        recomendacion = "Alta resistencia requerida para exteriores en zona sísmica.";
    } else if (!zonaSismica && esExterior && presupuestoAlto) {
        tipoMaterial = "Vidrio Templado Estructural";
        recomendacion = "Ideal para fachadas estéticas de alta gama en exteriores.";
    } else if (zonaSismica && !esExterior) {
        tipoMaterial = "Acero Estructural Flexible";
        recomendacion = "Soporte interno adecuado para interiores en zonas de movimiento.";
    } else {
        tipoMaterial = "Paneles de Yeso / Madera Liviana";
        recomendacion = "Suficiente para interiores estándar sin riesgos sísmicos altos.";
    }

    return {
        material_seleccionado: tipoMaterial,
        diagnostico: recomendacion
    };
};

const modeloExteriorRiesgo = { zonaSismica: true, presupuestoAlto: true, esExterior: true };
const modeloInteriorSimple = { zonaSismica: false, presupuestoAlto: false, esExterior: false };

console.log(evaluarMaterialArquitectonico(modeloExteriorRiesgo));
console.log(evaluarMaterialArquitectonico(modeloInteriorSimple));
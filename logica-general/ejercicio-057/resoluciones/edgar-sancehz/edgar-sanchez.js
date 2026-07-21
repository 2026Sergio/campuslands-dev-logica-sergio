function seleccionarMaterialEstructural(alturaMetros, zonaSismica) {
    if (alturaMetros < 0 || zonaSismica < 1 || zonaSismica > 3) {
        return "Error: Datos fuera de rango";
    }

    if (alturaMetros <= 20) {
        return "Material recomendado: Madera reforzada";
    } else if (alturaMetros <= 50) {
        if (zonaSismica === 1) return "Material recomendado: Acero estructural";
        return "Material recomendado: Hormigon armado";
    } else {
        if (zonaSismica === 3) return "Material recomendado: Acero de alta ductilidad";
        return "Material recomendado: Acero estructural";
    }
}

console.log(seleccionarMaterialEstructural(40, 2));
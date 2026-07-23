function verificarFormula(formula, inventario) {
    const faltantes = [];

    for (const elemento of formula) {
        if (!inventario[elemento.nombre] || inventario[elemento.nombre] < elemento.cantidad) {
            faltantes.push(elemento.nombre);
        }
    }

    if (faltantes.length > 0) {
        return {
            estado: "formula no disponible",
            faltantes
        };
    }

    for (const elemento of formula) {
        inventario[elemento.nombre] -= elemento.cantidad;
    }

    return {
        estado: "formula creada",
        inventarioActualizado: inventario
    };
}

const inventarioNormal = {
    Hidrogeno: 10,
    Oxigeno: 5,
    Carbono: 3
};

const formulaNormal = [
    {
        nombre: "Hidrogeno",
        cantidad: 2
    },
    {
        nombre: "Oxigeno",
        cantidad: 1
    }
];

const inventarioBorde = {
    Hidrogeno: 1,
    Oxigeno: 0
};

const formulaBorde = [
    {
        nombre: "Hidrogeno",
        cantidad: 2
    },
    {
        nombre: "Oxigeno",
        cantidad: 1
    }
];

console.log(verificarFormula(formulaNormal, inventarioNormal));
console.log(verificarFormula(formulaBorde, inventarioBorde));
const calcularDimensionesTatuaje = (figurasTatuaje, costoPorCm2, costoPorCmContorno) => {
    if (!figurasTatuaje || !Array.isArray(figurasTatuaje) || figurasTatuaje.length === 0) {
        return { error: "La lista de figuras del diseño del tatuaje está vacía o no es válida." };
    }

    if (typeof costoPorCm2 !== 'number' || typeof costoPorCmContorno !== 'number') {
        return { error: "Los costos de área y perímetro no son válidos." };
    }

    let areaTotal = 0;
    let perimetroTotal = 0;
    let detalleFiguras = [];

    for (let i = 0; i < figurasTatuaje.length; i++) {
        const figura = figurasTatuaje[i];
        let tipo = figura.tipo ? figura.tipo.toLowerCase() : "rectangulo";
        let areaFigura = 0;
        let perimetroFigura = 0;

        if (tipo === "rectangulo") {
            let base = figura.base > 0 ? figura.base : 0;
            let altura = figura.altura > 0 ? figura.altura : 0;
            areaFigura = base * altura;
            perimetroFigura = 2 * (base + altura);
        } else if (tipo === "circulo") {
            let radio = figura.radio > 0 ? figura.radio : 0;
            areaFigura = Math.PI * (radio * radio);
            perimetroFigura = 2 * Math.PI * radio;
        } else if (tipo === "triangulo") {
            let base = figura.base > 0 ? figura.base : 0;
            let altura = figura.altura > 0 ? figura.altura : 0;
            let ladoA = figura.ladoA > 0 ? figura.ladoA : base;
            let ladoB = figura.ladoB > 0 ? figura.ladoB : base;
            areaFigura = (base * altura) / 2;
            perimetroFigura = base + ladoA + ladoB;
        }

        areaTotal += areaFigura;
        perimetroTotal += perimetroFigura;

        detalleFiguras.push({
            figura_index: i + 1,
            tipo: tipo,
            area_cm2: parseFloat(areaFigura.toFixed(2)),
            perimetro_cm: parseFloat(perimetroFigura.toFixed(2))
        });
    }

    const costoArea = areaTotal * costoPorCm2;
    const costoPerimetro = perimetroTotal * costoPorCmContorno;
    const costoTotalEstimado = costoArea + costoPerimetro;

    let categoriaTatuaje = "Tatuaje Pequeño / Minimalista";
    if (areaTotal >= 300) {
        categoriaTatuaje = "Tatuaje Grande / Manga Completa";
    } else if (areaTotal >= 100) {
        categoriaTatuaje = "Tatuaje Mediano";
    }

    return {
        area_total_cm2: parseFloat(areaTotal.toFixed(2)),
        perimetro_total_cm: parseFloat(perimetroTotal.toFixed(2)),
        costo_total_estimado: parseFloat(costoTotalEstimado.toFixed(2)),
        categoria_tatuaje: categoriaTatuaje,
        detalle_figuras: detalleFiguras,
        explicacion: "Se calcularon las áreas y perímetros de las figuras geométricas que componen el diseño del tatuaje, aplicando tarifas por cm2 y cm de contorno según las reglas del reto."
    };
};

const figurasNormales = [
    { tipo: "rectangulo", base: 10, altura: 15 }, 
    { tipo: "circulo", radio: 5 }                  
];
const costoCm2Normal = 1.5;
const costoContornoNormal = 0.8;

const figurasBorde = [
    { tipo: "rectangulo", base: 2, altura: 2 }
];
const costoCm2Borde = 2.0;
const costoContornoBorde = 1.0;

console.log(calcularDimensionesTatuaje(figurasNormales, costoCm2Normal, costoContornoNormal));
console.log(calcularDimensionesTatuaje(figurasBorde, costoCm2Borde, costoContornoBorde));
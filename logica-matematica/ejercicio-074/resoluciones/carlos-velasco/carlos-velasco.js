// ejercicio logica - areas y perimetros - Ejercicio 074

const calcularGeometriaTatuaje = (forma, dimensiones) => {
    let area = 0;
    let perimetro = 0;

    if (forma === "rectangulo") {
        const { ancho, alto } = dimensiones;
        area = ancho * alto;
        perimetro = 2 * (ancho + alto);
    } else if (forma === "circulo") {
        const { radio } = dimensiones;
        area = Math.PI * Math.pow(radio, 2);
        perimetro = 2 * Math.PI * radio;
    } else {
        return { error: "Forma geométrica no soportada para el diseño de tatuaje." };
    }

    return {
        forma: forma,
        area: parseFloat(area.toFixed(2)),
        perimetro: parseFloat(perimetro.toFixed(2)),
        explicacion: `Se calculó el área y perímetro para un diseño de tipo ${forma} aplicando fórmulas geométricas estándar.`
    };
};

console.log(calcularGeometriaTatuaje("rectangulo", { ancho: 5, alto: 10 }));
console.log(calcularGeometriaTatuaje("circulo", { radio: 4 }));
function calcularAreaPerimetro(base, altura, ajuste, penalizacion) {
  if (base === undefined || altura === undefined || base <= 0 || altura <= 0) {
    return { area_final: 0, perimetro_final: 0, clasificacion: "invalido", explicacion: "dimensiones inválidas." };
  }
  
  const areaBase = base * altura;
  const perimetroBase = 2 * (base + altura);
  
  const area_final = Number((areaBase + ajuste - penalizacion).toFixed(2));
  const perimetro_final = Number((perimetroBase + ajuste - penalizacion).toFixed(2));
  
  return {
    area_final: Math.max(0, area_final),
    perimetro_final: Math.max(0, perimetro_final),
    clasificacion: area_final > 20 ? "diseño grande" : "diseño estandar",
    explicacion: "se calculó el área y perímetro del tatuaje, aplicando el ajuste y la penalización."
  };
}

// Pruebas simples
console.log(calcularAreaPerimetro(5, 4, 2, 1));
console.log(calcularAreaPerimetro(0, 4, 0, 0));
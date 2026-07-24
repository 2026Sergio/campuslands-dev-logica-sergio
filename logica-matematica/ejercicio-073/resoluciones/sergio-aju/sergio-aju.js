function calcularDistancia(coordenadaX, coordenadaY, ajuste, penalizacion) {
  if (coordenadaX === undefined || coordenadaY === undefined) {
    return { distancia_final: 0, clasificacion: "invalido", explicacion: "coordenadas faltantes." };
  }
  
  const distanciaBase = Math.sqrt(coordenadaX ** 2 + coordenadaY ** 2);
  const distancia_final = Number((distanciaBase + ajuste - penalizacion).toFixed(2));
  
  return {
    distancia_final: Math.max(0, distancia_final),
    clasificacion: distancia_final <= 10 ? "zona de impacto" : "fuera de rango",
    explicacion: "se calculo la distancia euclidiana, se aplico el ajuste y la penalizacion."
  };
}

// Pruebas simples
console.log(calcularDistancia(3, 4, 2, 1));
console.log(calcularDistancia(0, 0, 0, 5));
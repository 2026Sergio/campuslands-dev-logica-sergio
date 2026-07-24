function calcularVelocidadTiempoDistancia(velocidad, tiempo, ajuste, penalizacion) {
  if (velocidad === undefined || tiempo === undefined || velocidad <= 0 || tiempo <= 0) {
    return { distancia_final: 0, clasificacion: "invalido", explicacion: "valores de velocidad o tiempo inválidos." };
  }
  
  const distanciaBase = velocidad * tiempo;
  const distancia_final = Number((distanciaBase + ajuste - penalizacion).toFixed(2));
  
  return {
    distancia_final: Math.max(0, distancia_final),
    clasificacion: distancia_final > 50 ? "render rapido" : "render estandar",
    explicacion: "se calculó la distancia basada en velocidad y tiempo, aplicando el ajuste y la penalización."
  };
}

// Pruebas simples
console.log(calcularVelocidadTiempoDistancia(10, 5, 2, 1));
console.log(calcularVelocidadTiempoDistancia(0, 5, 0, 0));
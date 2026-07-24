function calcularPuntaje(participantes, bono, penalizacion) {
  if (!participantes || participantes.length === 0) {
    return { puntaje_final: 0, clasificacion: "sin participantes", explicacion: "lista vacía." };
  }
  
  const suma = participantes.reduce((acc, val) => acc + val, 0);
  const puntaje_final = suma + bono - penalizacion;
  
  return {
    puntaje_final,
    clasificacion: puntaje_final > 50 ? "competitivo" : "en desarrollo",
    explicacion: "se sumo el bono y se resto la penalizacion segun las reglas."
  };
}

// Pruebas simples
console.log(calcularPuntaje([12, 18, 25, 30], 8, 3));
console.log(calcularPuntaje([], 5, 2));
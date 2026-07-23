function construirEscenas(participantes, presupuesto_total) {
  return participantes.map((costo, i) => {
    const participacion = presupuesto_total === 0
      ? 0
      : Math.round((costo / presupuesto_total) * 1000) / 1000;
    return {
      id: i + 1,
      costo,
      participacion,
      esRelevante: participacion >= 0.25
    };
  });
}

function calcularDescuento(total) {
  if (total >= 80) return 0.15;
  if (total >= 50) return 0.1;
  return 0.05;
}

function calcularMediana(arr) {
  const ordenado = [...arr].sort((a, b) => a - b);
  const n = ordenado.length;
  const mid = Math.floor(n / 2);
  return n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];
}

function validarParticipantes(arr) {
  return Array.isArray(arr) && arr.length > 0 && arr.every((v) => typeof v === "number" && Number.isFinite(v) && v >= 0);
}

function calcularPresupuestoObjetos(participantes, bono, penalizacion) {
  if (!validarParticipantes(participantes)) {
    return { error: "participantes vacio, no numerico o con valores negativos" };
  }
  const bonoValido = typeof bono === "number" && bono >= 0 ? bono : 0;
  const penalizacionValida = typeof penalizacion === "number" && penalizacion >= 0 ? penalizacion : 0;

  let presupuesto_total = 0;
  for (let i = 0; i < participantes.length; i++) presupuesto_total += participantes[i];

  const escenas = construirEscenas(participantes, presupuesto_total);
  const descuento_porcentaje = calcularDescuento(presupuesto_total) * 100;
  const cantidad_relevantes = escenas.filter((e) => e.esRelevante).length;

  const mediana = calcularMediana(participantes);
  const puntajeCrudo = Math.round(mediana) + bonoValido - penalizacionValida;
  const puntaje_final = Math.max(puntajeCrudo, 0);

  const cumpleDescuento = descuento_porcentaje >= 15;
  const cumpleRelevantes = cantidad_relevantes <= 2;

  let clasificacion;
  if (cumpleDescuento && cumpleRelevantes) clasificacion = "competitivo";
  else if (cumpleDescuento || cumpleRelevantes) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    escenas,
    presupuesto_total,
    descuento_porcentaje,
    puntaje_final,
    clasificacion,
    explicacion: "se organizaron las escenas en objetos con su participacion en el presupuesto antes de calcular, y se combino el descuento por volumen con la cantidad de escenas relevantes."
  };
}

// prueba 
console.log(calcularPresupuestoObjetos([12, 18, 25, 30], 8, 3));

console.log(calcularPresupuestoObjetos([5, 5, 90], 0, 0));

console.log(calcularPresupuestoObjetos([12, -5, 20], 5, 2));

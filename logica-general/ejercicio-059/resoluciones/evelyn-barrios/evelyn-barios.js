function parsearFormula(formula) {
  const atomos = {};
  const regex = /([A-Z][a-z]?)(\d*)/g;
  let match;

  while ((match = regex.exec(formula)) !== null) {
    const elemento = match[1];
    const cantidad = match[2] ? parseInt(match[2], 10) : 1;
    atomos[elemento] = (atomos[elemento] || 0) + cantidad;
  }
  return atomos;
}

function gestionarInventarioQuimico(inventario, solicitudes) {
  const inventarioActual = { ...inventario };
  const producidos = [];
  const noProducidos = [];

  for (const solicitud of solicitudes) {
    const requerimientos = parsearFormula(solicitud.formula);
    let posibleProducir = true;
    
    for (const elemento in requerimientos) {
      const totalNecesario = requerimientos[elemento] * solicitud.cantidad;
      if (!inventarioActual[elemento] || inventarioActual[elemento] < totalNecesario) {
        posibleProducir = false;
        break;
      }
    }

    if (posibleProducir) {
      for (const elemento in requerimientos) {
        inventarioActual[elemento] -= requerimientos[elemento] * solicitud.cantidad;
      }
      producidos.push(`${solicitud.cantidad} de ${solicitud.nombre} (${solicitud.formula})`);
    } else {
      noProducidos.push(`${solicitud.cantidad} de ${solicitud.nombre} (${solicitud.formula}) por falta de elementos.`);
    }
  }

  return {
    produccionExitosa: producidos,
    produccionFallida: noProducidos,
    inventarioRestante: inventarioActual
  };
}

const inventarioInicial = { H: 100, O: 50, C: 30 };
const solicitudesNormales = [
  { nombre: 'Agua', formula: 'H2O', cantidad: 20 },
  { nombre: 'Dióxido de Carbono', formula: 'CO2', cantidad: 10 }
];
console.log("--- Caso Normal: Producción exitosa ---");
console.log(gestionarInventarioQuimico(inventarioInicial, solicitudesNormales));

const solicitudesConFalla = [
  { nombre: 'Metano', formula: 'CH4', cantidad: 10 },
  { nombre: 'Agua', formula: 'H2O', cantidad: 30 }
];
console.log("\n--- Caso Borde: Stock insuficiente ---");
console.log(gestionarInventarioQuimico(inventarioInicial, solicitudesConFalla));
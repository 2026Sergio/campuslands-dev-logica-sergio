function procesarCasoTatuajes(items, prioridad, regla) {
  if (!items || items.length === 0) return { accion: "ninguna", motivo: "lista vacía" };
  
  const norm = items.map(i => i.toLowerCase());

  if (regla.includes("bloqueados") && norm.includes("bloqueado")) {
    return { accion: "revisar bloqueado", motivo: "la regla prioriza riesgos." };
  }
  if (norm.includes("pendiente")) {
    return { accion: "revisar pendiente", motivo: "hay elementos pendientes." };
  }
  return { accion: "revisar aprobado", motivo: "solo hay elementos aprobados." };
}

// Pruebas simples
console.log(procesarCasoTatuajes(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
console.log(procesarCasoTatuajes(["aprobado", "aprobado"], "alta", "revisar bloqueados primero"));
/**
 * Decide la siguiente acción a tomar en un flujo de trabajo de revisión de películas,
 * basándose en el estado de los items, la prioridad y una regla específica.
 *
 * @param {string[]} items Un arreglo con los estados actuales (ej: ["aprobado", "pendiente", "bloqueado"]).
 * @param {string} prioridad La prioridad de la tarea (ej: "alta", "media", "baja").
 * @param {string} regla La regla a seguir (ej: "revisar bloqueados primero").
 * @returns {object} Un objeto con la `accion` a tomar y el `motivo`.
 */
function decidirSiguientePaso(items, prioridad, regla) {
  // Regla 1: Revisar bloqueados primero
  if (regla === 'revisar bloqueados primero' && items.includes('bloqueado')) {
    return {
      accion: 'Revisar item bloqueado',
      motivo: 'La regla prioriza riesgos antes de tareas normales.',
    };
  }

  // Regla 2: Si la prioridad es alta, revisar pendientes
  if (prioridad === 'alta' && items.includes('pendiente')) {
    return {
      accion: 'Revisar item pendiente',
      motivo: 'La prioridad es alta y hay tareas pendientes de revisión.',
    };
  }

  // Regla por defecto: Archivar los aprobados si no hay nada urgente
  if (items.includes('aprobado')) {
    return {
      accion: 'Archivar items aprobados',
      motivo: 'No hay tareas urgentes o bloqueadas, se procede con la limpieza.',
    };
  }

  // Si no hay ninguna otra acción
  return {
    accion: 'Esperar nuevas tareas',
    motivo: 'No hay items bloqueados, pendientes o aprobados para procesar.',
  };
}

// --- Casos de prueba ---

// Prueba 1: Coincide con el ejemplo del README
const resultado1 = decidirSiguientePaso(['aprobado', 'pendiente', 'bloqueado'], 'alta', 'revisar bloqueados primero');
console.log('Prueba 1 (Regla de bloqueo):');
console.log(resultado1);

// Prueba 2: Prioridad alta sin bloqueos
const resultado2 = decidirSiguientePaso(['aprobado', 'pendiente'], 'alta', 'revisar bloqueados primero');
console.log('\nPrueba 2 (Prioridad alta):');
console.log(resultado2);

// Prueba 3: Sin tareas urgentes
const resultado3 = decidirSiguientePaso(['aprobado'], 'baja', 'revisar bloqueados primero');
console.log('\nPrueba 3 (Solo archivar):');
console.log(resultado3);
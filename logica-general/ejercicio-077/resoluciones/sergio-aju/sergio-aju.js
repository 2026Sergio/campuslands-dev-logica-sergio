const evaluarTablaDecision = (datos) => {
    if (!datos || !datos.tipo_estructura) return { error: "Datos incompletos" };

    const tipo = datos.tipo_estructura.toLowerCase();
    const presupuesto = datos.presupuesto || 0;

    // Tabla de decisión
    if (tipo === "industrial") {
        return {
            estado: "revision_manual",
            recursos: "especialista_seguridad",
            motivo: "las estructuras industriales requieren validación manual obligatoria."
        };
    } else if (tipo === "residencial" && presupuesto > 10000) {
        return {
            estado: "aprobado",
            recursos: "equipo_senior",
            motivo: "presupuesto alto para estructura residencial cumple con los criterios de aprobación."
        };
    } else {
        return {
            estado: "revision_estandar",
            recursos: "equipo_junior",
            motivo: "proyecto estándar bajo umbral de presupuesto alto."
        };
    }
};

// Pruebas
console.log(evaluarTablaDecision({
    tipo_estructura: "residencial",
    presupuesto: 15000,
    complejidad: "media"
}));

console.log(evaluarTablaDecision({
    tipo_estructura: "industrial",
    presupuesto: 5000,
    complejidad: "alta"
}));
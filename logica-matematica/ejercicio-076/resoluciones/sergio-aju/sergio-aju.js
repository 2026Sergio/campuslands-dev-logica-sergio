const procesarPresupuesto = (d) => {
    if (!d?.servicios?.length) return { error: "Sin servicios" };

    const bruto = d.servicios.reduce((acc, s) => acc + s.costo_base, 0);
    const tasas = { vip: 0.15, recurrente: 0.10, nuevo: 0 };
    
    const descCliente = bruto * (tasas[d.cliente?.tipo?.toLowerCase()] || 0);
    const descVolumen = bruto > 1500 ? bruto * 0.05 : 0;
    const descCupon = d.cupon_descuento?.toUpperCase() === "ANIMAFEST10" ? bruto * 0.10 : 0;

    const totalDesc = Math.min(descCliente + descVolumen + descCupon, bruto * 0.35);

    return {
        costo_bruto: bruto,
        descuento_total: totalDesc,
        costo_final: bruto - totalDesc,
        clasificacion: bruto > 1500 ? "presupuesto_validado" : "presupuesto_minimo",
        explicacion: totalDesc > 0 ? "Descuentos aplicados correctamente." : "Sin descuentos aplicables."
    };
};

// Pruebas
console.log(procesarPresupuesto({
    cliente: { tipo: "recurrente" },
    servicios: [{ costo_base: 600 }, { costo_base: 400 }, { costo_base: 700 }],
    cupon_descuento: "ANIMAFEST10"
}));

console.log(procesarPresupuesto({
    cliente: { tipo: "nuevo" },
    servicios: [{ costo_base: 50 }],
    cupon_descuento: ""
}));
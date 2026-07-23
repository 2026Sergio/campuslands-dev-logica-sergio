const calcularPresupuestoAnimacion = (costoBase, horasRender, esSocio) => {
    let descuento = 0;

    // Regla de descuento por volumen de horas de render
    if (horasRender > 50) {
        descuento = 0.20; // 20% de descuento
    } else if (horasRender >= 20) {
        descuento = 0.10; // 10% de descuento
    }

    // Descuento adicional por ser socio
    if (esSocio) {
        descuento += 0.05; // 5% extra
    }

    const subtotal = costoBase * horasRender;
    const montoDescuento = subtotal * descuento;
    const totalFinal = subtotal - montoDescuento;

    return {
        subtotal: parseFloat(subtotal.toFixed(2)),
        porcentaje_descuento: `${descuento * 100}%`,
        total_a_pagar: parseFloat(totalFinal.toFixed(2)),
        explicacion: `Se aplicó un descuento total del ${descuento * 100}% basado en ${horasRender} horas de render y estatus de socio.`
    };
};

console.log(calcularPresupuestoAnimacion(15, 60, true));
console.log(calcularPresupuestoAnimacion(20, 10, false));
def calcular_presupuesto_base(cantidad_frames, costo_por_frame):
    presupuesto_base = cantidad_frames * costo_por_frame
    return presupuesto_base

def aplicar_descuento_volumen(presupuesto_base, cantidad_frames):
    if cantidad_frames > 500:
        descuento = presupuesto_base * 0.10
        presupuesto_final = presupuesto_base - descuento
        return presupuesto_final
    return presupuesto_base

frames_totales = 650
costo_frame = 15

presupuesto_inicial = calcular_presupuesto_base(frames_totales, costo_frame)
presupuesto_total = aplicar_descuento_volumen(presupuesto_inicial, frames_totales)

print("--- COTIZADOR DE PRESUPUESTOS EN ANIMACIÓN 3D ---")
print(f"Fotogramas totales a renderizar: {frames_totales}")
print(f"Presupuesto base calculado: ${presupuesto_inicial:.2f}")
print(f"El presupuesto final con descuento aplicado es de: ${presupuesto_total:.2f}")
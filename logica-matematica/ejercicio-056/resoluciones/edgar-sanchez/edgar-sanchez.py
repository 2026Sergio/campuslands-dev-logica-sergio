def calcular_presupuesto_animacion(fotogramas, costo_por_fotograma, tipo_licencia, es_estudiante):
    if not isinstance(fotogramas, int) or fotogramas <= 0:
        return None
    if not isinstance(costo_por_fotograma, (int, float)) or costo_por_fotograma <= 0:
        return None
    if not isinstance(tipo_licencia, str):
        return None
    if not isinstance(es_estudiante, bool):
        return None

    licencia = tipo_licencia.strip().lower()
    licencias_validas = {"indie": 0.0, "estudio": 0.10, "enterprise": 0.20}
    
    if licencia not in licencias_validas:
        return None

    subtotal_render = fotogramas * costo_por_fotograma

    descuento_volumen = 0.0
    if fotogramas >= 1000:
        descuento_volumen = 0.15
    elif fotogramas >= 500:
        descuento_volumen = 0.10
    elif fotogramas >= 200:
        descuento_volumen = 0.05

    monto_descuento_volumen = subtotal_render * descuento_volumen
    subtotal_con_volumen = subtotal_render - monto_descuento_volumen

    recargo_licencia = licencias_validas[licencia]
    monto_recargo_licencia = subtotal_con_volumen * recargo_licencia
    subtotal_con_licencia = subtotal_con_volumen + monto_recargo_licencia

    descuento_estudiante = 0.20 if es_estudiante else 0.0
    monto_descuento_estudiante = subtotal_con_licencia * descuento_estudiante
    total_final = subtotal_con_licencia - monto_descuento_estudiante

    total_ahorrado = monto_descuento_volumen + monto_descuento_estudiante

    return {
        "fotogramas": fotogramas,
        "subtotal_base": round(subtotal_render, 2),
        "descuento_volumen_aplicado": f"{int(descuento_volumen * 100)}%",
        "recargo_licencia_aplicado": f"{int(recargo_licencia * 100)}%",
        "descuento_estudiante_aplicado": f"{int(descuento_estudiante * 100)}%",
        "total_ahorrado": round(total_ahorrado, 2),
        "total_final": round(total_final, 2)
    }


if __name__ == "__main__":
    proyecto_1 = calcular_presupuesto_animacion(600, 2.5, "indie", True)
    proyecto_2 = calcular_presupuesto_animacion(1200, 3.0, "estudio", False)
    proyecto_3 = calcular_presupuesto_animacion(150, 5.0, "enterprise", True)

    print("Presupuestos de Animación 3D:")
    print(proyecto_1)
    print(proyecto_2)
    print(proyecto_3)
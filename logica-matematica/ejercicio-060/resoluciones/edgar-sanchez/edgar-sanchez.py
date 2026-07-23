def simular_ventas_comida_urbana(puesto_datos, dias_simulacion):
    if not isinstance(puesto_datos, dict) or not isinstance(dias_simulacion, int):
        return None

    if dias_simulacion <= 0:
        return None

    precio_base = puesto_datos.get("precio_base")
    ventas_base_diarias = puesto_datos.get("ventas_base_diarias")
    factor_clima = puesto_datos.get("factor_clima")
    factor_ubicacion = puesto_datos.get("factor_ubicacion")
    costo_operativo_diario = puesto_datos.get("costo_operativo_diario")

    valores_validar = [precio_base, ventas_base_diarias, factor_clima, factor_ubicacion, costo_operativo_diario]
    for val in valores_validar:
        if not isinstance(val, (int, float)) or isinstance(val, bool):
            return None
        if val <= 0:
            return None

    ingresos_totales = 0.0
    costos_totales = 0.0
    unidades_totales = 0
    desglose_diario = []

    for dia in range(1, dias_simulacion + 1):
        variacion_clima = 1.0 + (0.02 if dia % 2 != 0 else -0.01)
        
        unidades_dia = int(ventas_base_diarias * factor_clima * factor_ubicacion * variacion_clima)
        if unidades_dia < 0:
            unidades_dia = 0

        ingreso_dia = unidades_dia * precio_base
        costo_dia = float(costo_operativo_diario)
        ganancia_dia = ingreso_dia - costo_dia

        ingresos_totales += ingreso_dia
        costos_totales += costo_dia
        unidades_totales += unidades_dia

        desglose_diario.append({
            "dia": dia,
            "unidades_vendidas": unidades_dia,
            "ingreso": round(ingreso_dia, 2),
            "costo": round(costo_dia, 2),
            "ganancia_neta": round(ganancia_dia, 2)
        })

    ganancia_neta_total = ingresos_totales - costos_totales
    promedio_unidades_dia = unidades_totales / dias_simulacion

    return {
        "dias_simulados": dias_simulacion,
        "unidades_totales_vendidas": unidades_totales,
        "promedio_unidades_diarias": round(promedio_unidades_dia, 2),
        "ingresos_totales": round(ingresos_totales, 2),
        "costos_totales": round(costos_totales, 2),
        "ganancia_neta_total": round(ganancia_neta_total, 2),
        "desglose_diario": desglose_diario
    }


if __name__ == "__main__":
    puesto_tacos = {
        "precio_base": 12.0,
        "ventas_base_diarias": 100,
        "factor_clima": 1.1,
        "factor_ubicacion": 1.2,
        "costo_operativo_diario": 350.0
    }

    simulacion = simular_ventas_comida_urbana(puesto_tacos, 3)
    print("Resultados de la Simulación de Comida Urbana:")
    print(simulacion)
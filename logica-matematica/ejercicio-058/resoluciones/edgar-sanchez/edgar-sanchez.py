def normalizar_puntajes_soldadura(evaluaciones):
    if not isinstance(evaluaciones, list) or len(evaluaciones) == 0:
        return []

    evaluaciones_validas = []
    for item in evaluaciones:
        if not isinstance(item, dict):
            continue

        soldador = item.get("soldador")
        puntaje = item.get("puntaje")

        if not isinstance(soldador, str) or not soldador.strip():
            continue
        if not isinstance(puntaje, (int, float)) or isinstance(puntaje, bool):
            continue
        if puntaje < 0:
            continue

        evaluaciones_validas.append({
            "soldador": soldador.strip(),
            "puntaje_original": float(puntaje)
        })

    if len(evaluaciones_validas) == 0:
        return []

    puntajes = [e["puntaje_original"] for e in evaluaciones_validas]
    min_p = min(puntajes)
    max_p = max(puntajes)
    rango = max_p - min_p

    resultados = []
    for elem in evaluaciones_validas:
        p_orig = elem["puntaje_original"]
        if rango == 0:
            p_norm = 100.0
        else:
            p_norm = ((p_orig - min_p) / rango) * 100.0

        resultados.append({
            "soldador": elem["soldador"],
            "puntaje_original": round(p_orig, 2),
            "puntaje_normalizado": round(p_norm, 2)
        })

    return resultados


if __name__ == "__main__":
    datos_soldadura = [
        {"soldador": " Carlos M. ", "puntaje": 85},
        {"soldador": "Ana R.", "puntaje": 40},
        {"soldador": "Luis G.", "puntaje": 100},
        {"soldador": "Pedro S.", "puntaje": -15},
        {"soldador": "", "puntaje": 90}
    ]

    normalizados = normalizar_puntajes_soldadura(datos_soldadura)
    print("Puntajes Normalizados de Soldadura (Escala 0 - 100):")
    for registro in normalizados:
        print(f"Soldador: {registro['soldador']} | Original: {registro['puntaje_original']} | Normalizado: {registro['puntaje_normalizado']}")
def generar_ranking_arquitectura_3d(proyectos):
    if not isinstance(proyectos, list) or len(proyectos) == 0:
        return []

    proyectos_procesados = []

    for item in proyectos:
        if not isinstance(item, dict):
            continue

        nombre = item.get("nombre")
        votos = item.get("votos")
        puntaje = item.get("puntaje")

        if not isinstance(nombre, str) or not nombre.strip():
            continue
        if not isinstance(votos, int) or votos < 0:
            continue
        if not isinstance(puntaje, (int, float)) or puntaje < 0 or puntaje > 100:
            continue

        nombre_limpio = nombre.strip()
        promedio_ponderado = (votos * 0.4) + (puntaje * 0.6)

        proyectos_procesados.append({
            "nombre": nombre_limpio,
            "votos": votos,
            "puntaje": float(puntaje),
            "promedio_ponderado": round(promedio_ponderado, 2)
        })

    if len(proyectos_procesados) == 0:
        return []

    n = len(proyectos_procesados)
    for i in range(n):
        for j in range(0, n - i - 1):
            elem1 = proyectos_procesados[j]
            elem2 = proyectos_procesados[j + 1]

            cambiar = False
            if elem1["promedio_ponderado"] < elem2["promedio_ponderado"]:
                cambiar = True
            elif elem1["promedio_ponderado"] == elem2["promedio_ponderado"]:
                if elem1["puntaje"] < elem2["puntaje"]:
                    cambiar = True
                elif elem1["puntaje"] == elem2["puntaje"]:
                    if elem1["votos"] < elem2["votos"]:
                        cambiar = True
                    elif elem1["votos"] == elem2["votos"]:
                        if elem1["nombre"].lower() > elem2["nombre"].lower():
                            cambiar = True

            if cambiar:
                proyectos_procesados[j], proyectos_procesados[j + 1] = proyectos_procesados[j + 1], proyectos_procesados[j]

    ranking_final = []
    puesto_actual = 1

    for idx in range(len(proyectos_procesados)):
        curr = proyectos_procesados[idx]

        if idx > 0:
            prev = proyectos_procesados[idx - 1]
            es_empate_absoluto = (
                curr["promedio_ponderado"] == prev["promedio_ponderado"] and
                curr["puntaje"] == prev["puntaje"] and
                curr["votos"] == prev["votos"]
            )
            if not es_empate_absoluto:
                puesto_actual = idx + 1

        ranking_final.append({
            "posicion": puesto_actual,
            "nombre": curr["nombre"],
            "promedio_ponderado": curr["promedio_ponderado"],
            "puntaje": curr["puntaje"],
            "votos": curr["votos"]
        })

    return ranking_final


if __name__ == "__main__":
    datos_proyectos = [
        {"nombre": " Edificio Eco3D ", "votos": 150, "puntaje": 85.5},
        {"nombre": "Torre Cristal", "votos": 200, "puntaje": 80.0},
        {"nombre": "Puente Futuro", "votos": 150, "puntaje": 85.5},
        {"nombre": "Casa Sostenible", "votos": -5, "puntaje": 90.0},
        {"nombre": "", "votos": 100, "puntaje": 70.0}
    ]

    ranking = generar_ranking_arquitectura_3d(datos_proyectos)
    print("Ranking de Proyectos de Arquitectura 3D:")
    for p in ranking:
        print(f"#{p['posicion']} - {p['nombre']} | Promedio: {p['promedio_ponderado']} | Puntaje: {p['puntaje']} | Votos: {p['votos']}")
def ordenar_ranking_proyectos(puntajes):
    puntajes_ordenados = sorted(puntajes, reverse=True)
    return puntajes_ordenados

def mostrar_ranking(puntajes_ordenados):
    print("--- RANKING DE DISEÑOS EN ARQUITECTURA 3D ---")
    for posicion, puntaje in enumerate(puntajes_ordenados, start=1):
        print(f"Puesto {posicion}: {puntaje} puntos")

puntajes_proyectos = [85, 92, 78, 95, 88, 90]

ranking_final = ordenar_ranking_proyectos(puntajes_proyectos)
mostrar_ranking(ranking_final)
def ordenar_puntajes(lista_puntajes):
    lista_puntajes.sort()
    return lista_puntajes

def mostrar_resultado(puntajes_ordenados):
    print("--- PUNTAJES DE LA RUTINA ---")
    for i, puntaje in enumerate(puntajes_ordenados, start=1):
        print(f"Juez {i}: {puntaje} puntos")

puntajes_jueces = [8, 5, 10, 7, 9]

puntajes_organizados = ordenar_puntajes(puntajes_jueces)
mostrar_resultado(puntajes_organizados)
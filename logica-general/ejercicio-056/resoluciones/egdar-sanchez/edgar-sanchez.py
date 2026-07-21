def analizar_iluminacion(matriz, umbral):
    puntos_criticos = []
    
    for fila_idx in range(len(matriz)):
        for col_idx in range(len(matriz[fila_idx])):
            intensidad = matriz[fila_idx][col_idx]
            if intensidad > umbral:
                puntos_criticos.append((fila_idx, col_idx, intensidad))
    
    if not puntos_criticos:
        return "Render optimizado: Ningun punto excede el umbral."
    
    return puntos_criticos

render = [
    [10, 20, 15],
    [80, 5, 90],
    [12, 10, 5]
]
umbral_maximo = 50
print(analizar_iluminacion(render, umbral_maximo))
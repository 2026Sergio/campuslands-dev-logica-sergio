def obtener_min_max(puntajes):
    minimo = min(puntajes)
    maximo = max(puntajes)
    return minimo, maximo

def normalizar_puntajes(puntajes, minimo, maximo):
    if maximo == minimo:
        return [0.0 for _ in puntajes]
    
    puntajes_normalizados = [(p - minimo) / (maximo - minimo) for p in puntajes]
    return puntajes_normalizados

puntajes_inspeccion = [75, 85, 95, 60, 90]

min_val, max_val = obtener_min_max(puntajes_inspeccion)
resultados_normalizados = normalizar_puntajes(puntajes_inspeccion, min_val, max_val)

print("--- NORMALIZACIÓN DE PUNTAJES EN SOLDADURA ---")
print(f"Puntajes originales: {puntajes_inspeccion}")
print("Puntajes normalizados (escala 0 a 1):")
for original, normalizado in zip(puntajes_inspeccion, resultados_normalizados):
    print(f"Puntaje {original} -> Normalizado: {normalizado:.2f}")
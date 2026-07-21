def calcular_diferencia_coordenadas(x1, y1, x2, y2):
    diferencia_x = x2 - x1
    diferencia_y = y2 - y1
    return diferencia_x, diferencia_y

def calcular_distancia_total(dif_x, dif_y):
    distancia = (dif_x ** 2 + dif_y ** 2) ** 0.5
    return distancia

salto_x = 2
salto_y = 3
zona_x = 6
zona_y = 6

dif_x, dif_y = calcular_diferencia_coordenadas(salto_x, salto_y, zona_x, zona_y)
distancia_final = calcular_distancia_total(dif_x, dif_y)

print("--- CONTROL DE CAÍDA EN PARACAIDISMO ---")
print(f"Punto de salto: ({salto_x}, {salto_y})")
print(f"Zona de aterrizaje: ({zona_x}, {zona_y})")
print(f"La distancia estimada hasta el objetivo es de: {distancia_final:.2f} metros")
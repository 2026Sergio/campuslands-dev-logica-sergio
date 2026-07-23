def calcular_distancias_paracaidismo(punto_objetivo, salto_paracaidista):
    if not isinstance(punto_objetivo, (list, tuple)) or not isinstance(salto_paracaidista, (list, tuple)):
        return None
    
    if len(punto_objetivo) != 2 or len(salto_paracaidista) != 2:
        return None

    x1, y1 = punto_objetivo
    x2, y2 = salto_paracaidista

    if not isinstance(x1, (int, float)) or not isinstance(y1, (int, float)):
        return None
    if not isinstance(x2, (int, float)) or not isinstance(y2, (int, float)):
        return None

    dx = x2 - x1
    dy = y2 - y1

    distancia_euclidiana = (dx**2 + dy**2)**0.5
    distancia_manhattan = abs(dx) + abs(dy)

    if dx == 0 and dy == 0:
        direccion = "En la zona de impacto"
    elif dx == 0:
        direccion = "Norte" if dy > 0 else "Sur"
    elif dy == 0:
        direccion = "Este" if dx > 0 else "Oeste"
    elif dx > 0 and dy > 0:
        direccion = "Noreste"
    elif dx < 0 and dy > 0:
        direccion = "Noroeste"
    elif dx > 0 and dy < 0:
        direccion = "Sureste"
    else:
        direccion = "Suroeste"

    return {
        "distancia_euclidiana": round(distancia_euclidiana, 2),
        "distancia_manhattan": round(distancia_manhattan, 2),
        "desviacion_x": round(dx, 2),
        "desviacion_y": round(dy, 2),
        "direccion": direccion
    }


if __name__ == "__main__":
    objetivo = (10.0, 20.0)
    aterrizaje = (13.0, 24.0)

    resultado = calcular_distancias_paracaidismo(objetivo, aterrizaje)
    if resultado:
        print(f"Distancia directa (Euclidiana): {resultado['distancia_euclidiana']} m")
        print(f"Distancia por cuadrícula (Manhattan): {resultado['distancia_manhattan']} m")
        print(f"Desviación X: {resultado['desviacion_x']} m, Desviación Y: {resultado['desviacion_y']} m")
        print(f"Dirección respecto al objetivo: {resultado['direccion']}")
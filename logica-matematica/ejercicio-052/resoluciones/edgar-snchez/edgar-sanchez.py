def calcular_probabilidades_pingpong(jugadores_datos):
    if not isinstance(jugadores_datos, list) or len(jugadores_datos) == 0:
        return {}

    puntuaciones_validas = {}
    suma_total_puntos = 0

    for registro in jugadores_datos:
        if not isinstance(registro, dict):
            continue

        nombre = registro.get("nombre")
        puntos = registro.get("puntuacion")

        if not isinstance(nombre, str) or not nombre.strip():
            continue

        if not isinstance(puntos, (int, float)) or puntos < 0:
            continue

        nombre_limpio = nombre.strip()
        puntuaciones_validas[nombre_limpio] = puntuaciones_validas.get(nombre_limpio, 0) + puntos
        suma_total_puntos += puntos

    if suma_total_puntos == 0:
        return {nombre: 0.0 for nombre in puntuaciones_validas}

    resultados = {}
    for nombre, puntos in puntuaciones_validas.items():
        probabilidad = (puntos / suma_total_puntos) * 100
        resultados[nombre] = round(probabilidad, 2)

    return resultados


if __name__ == "__main__":
    datos = [
        {"nombre": "Carlos", "puntuacion": 15},
        {"nombre": "Sofia", "puntuacion": 25},
        {"nombre": "Mateo", "puntuacion": 10}
    ]
    probabilidades = calcular_probabilidades_pingpong(datos)
    for jugador, prob in probabilidades.items():
        print(f"{jugador}: {prob}% de probabilidad de victoria")
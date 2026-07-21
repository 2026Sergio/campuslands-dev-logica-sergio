def evaluar_raqueta(control, velocidad):
    puntaje_total = control + velocidad
    return puntaje_total

def comparar_opciones(puntaje_a, puntaje_b):
    if puntaje_a > puntaje_b:
        return "La Raqueta A es la mejor opción para jugar."
    elif puntaje_b > puntaje_a:
        return "La Raqueta B es la mejor opción para jugar."
    else:
        return "Ambas raquetas tienen el mismo rendimiento, elige la que te sientas más cómodo."

control_raqueta_a = 8
velocidad_raqueta_a = 7

control_raqueta_b = 6
velocidad_raqueta_b = 9

puntaje_a = evaluar_raqueta(control_raqueta_a, velocidad_raqueta_a)
puntaje_b = evaluar_raqueta(control_raqueta_b, velocidad_raqueta_b)

resultado_comparacion = comparar_opciones(puntaje_a, puntaje_b)

print("--- COMPARACIÓN DE RAQUETAS DE PINGPONG ---")
print(f"Puntaje Raqueta A: {puntaje_a}")
print(f"Puntaje Raqueta B: {puntaje_b}")
print(f"Resultado: {resultado_comparacion}")
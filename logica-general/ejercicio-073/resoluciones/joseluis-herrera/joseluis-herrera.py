def evaluar_viento(velocidad_viento):
    limite_seguro = 25  # en km/h
    if velocidad_viento <= limite_seguro:
        return "Condiciones óptimas para el salto"
    else:
        return "Viento peligroso, salto suspendido"

def tomar_decision(estado_viento, visibility_ok):
    if estado_viento == "Condiciones óptimas para el salto" and visibility_ok:
        return "APROBADO: Proceder con el equipamiento y abordaje."
    else:
        return "DENEGADO: Esperar en tierra hasta nuevo aviso."

velocidad_actual_viento = 18
visibilidad_despejada = True

estado_clima = evaluar_viento(velocidad_actual_viento)
decision_final = tomar_decision(estado_clima, visibilidad_despejada)

print("--- CONTROL DE CASOS Y DECISIONES EN PARACAIDISMO ---")
print(f"Velocidad del viento: {velocidad_actual_viento} km/h")
print(f"Visibilidad despejada: {visibilidad_despejada}")
print(f"Veredicto final: {decision_final}")
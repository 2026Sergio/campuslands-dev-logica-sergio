def evaluar_resistencia(peso_soportado_kg):
    if peso_soportado_kg >= 500:
        return "Alta"
    elif peso_soportado_kg >= 200:
        return "Media"
    else:
        return "Baja"

def determinar_uso_material(resistencia, aislamiento_termico):
    if resistencia == "Alta" and aislamiento_termico:
        return "Apto para estructura principal y muros perimetrales."
    elif resistencia == "Media" and aislamiento_termico:
        return "Apto para divisiones internas con aislamiento."
    elif resistencia == "Baja" and not aislamiento_termico:
        return "Apto únicamente para elementos decorativos no estructurales."
    else:
        return "Requiere revisión técnica adicional por combinación atípica."

peso_material = 550  
tiene_aislamiento = True

nivel_resistencia = evaluar_resistencia(peso_material)
veredito_final = determinar_uso_material(nivel_resistencia, tiene_aislamiento)

print("--- TABLA DE DECISIÓN EN ARQUITECTURA 3D ---")
print(f"Resistencia evaluada: {nivel_resistencia} ({peso_material} kg)")
print(f"Aislamiento térmico presente: {tiene_aislamiento}")
print(f"Resultado del análisis: {veredito_final}")
def calcular_combinaciones_kickboxing(golpes_basicos, combinacion_longitud):
    if not isinstance(golpes_basicos, list) or not isinstance(combinacion_longitud, int):
        return []
    
    if combinacion_longitud <= 0 or len(golpes_basicos) == 0:
        return []
    
    golpes_unicos = []
    for golpe in golpes_basicos:
        if isinstance(golpe, str) and golpe.strip() != "":
            golpe_limpio = golpe.strip()
            if golpe_limpio not in golpes_unicos:
                golpes_unicos.append(golpe_limpio)
                
    if len(golpes_unicos) == 0:
        return []

    resultado = []
    
    def generar(combo_actual):
        if len(combo_actual) == combinacion_longitud:
            resultado.append(list(combo_actual))
            return
        for golpe in golpes_unicos:
            combo_actual.append(golpe)
            generar(combo_actual)
            combo_actual.pop()

    generar([])
    return resultado

if __name__ == "__main__":
    tecnicas = ["Jab", "Cross", "Low Kick"]
    longitud = 2
    combinaciones = calcular_combinaciones_kickboxing(tecnicas, longitud)
    print(f"Total combinaciones: {len(combinaciones)}")
    print("Combinaciones generadas:")
    for combo in combinaciones:
        print(" -> ".join(combo))
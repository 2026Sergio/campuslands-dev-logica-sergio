def obtener_combinaciones_manos(jabs, ganchos):
    lista_combos = []
    
    for j in range(1, jabs + 1):
        for g in range(1, ganchos + 1):
            combos = f"Jab {j} con Gancho {g}"
            lista_combos.append(combos)
            
    return lista_combos

print("--- CALCULADORA DE COMBOS DE KICKBOXING ---")

cant_jabs = 2
cant_ganchos = 2
cant_patadas = 3

combinaciones_manos = obtener_combinaciones_manos(cant_jabs, cant_ganchos)

print(f"\nTotal de combinaciones de manos posibles: {len(combinaciones_manos)}")
for c in combinaciones_manos:
    print("-", c)

total_general = len(combinaciones_manos) + cant_patadas
print(f"\nSi le sumamos los tipos de patadas ({cant_patadas}), el total de opciones para la rutina es: {total_general}")
# 1. IDENTIFICAR ENTRADAS (Inputs)

# Modifica estos valores simulados para probar diferentes casos
print("=== REGISTRO DE ESTADISTICAS DE LOS PARTIDOS ===")
partidos_jugados = int(input("Ingresa el total de los partidos jugados: "))
partidos_ganados = int(input("Ingresa el numero de partidos ganados: "))
partidos_perdidos = int(input("Ingresa el numero de partidos perdidos: "))
partidos_empatados = int(input("Ingresa el número de partidos empatados: "))

# ==========================================
# 2. PROCESAMIENTO (La regla de validación)
# ==========================================

# Primero calculamos cuántos partidos suman los resultados reales
total_resultados = partidos_ganados + partidos_empatados + partidos_perdidos

# Ahora validamos con un IF si esa suma coincide con los partidos jugados
if total_resultados == partidos_jugados:
    
    # SI COINCIDEN: Los datos son reales y consistentes
    clasificacion_final = "VALIDACIÓN EXITOSA: Datos consistentes para el ranking."

else:
    
    # NO COINCIDEN: Alguien ingresó mal un número
    clasificacion_final = "ERROR DE VALIDACIÓN: La suma de Partdos Ganados, Partidos Empatados y Partidos Perdidos no cuadra con los partidos jugados."

# ==========================================
# 4. ENTREGAR RESULTADO VERIFICABLE (Output)
# ==========================================
print("\n-----------------------------------------")
print(clasificacion_final)
print("-----------------------------------------")
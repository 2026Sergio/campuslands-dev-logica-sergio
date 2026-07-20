
# 1. IDENTIFICAR ENTRADAS (Inputs)

# Modifica estos valores simulados para probar diferentes casos
print("=== REGISTRO DE ESTADISTICAS DEL JUGADOR ===")
puntaje_jugador = int(input("Ingresa el puntaje total del jugador: "))
tasa_victorias = float(input("Ingresa la tasa de victoria (ej. 0.65 para 65%): "))

# 2. DEFINIR SALIDAS (Outputs)

clasificacion_final = ""



# 3. APLICAR REGLAS DE NEGOCIO (Condicionales)
if puntaje_jugador > 100:  
    clasificacion_final = "Liga de Campeones (Oro)"

elif puntaje_jugador > 90:  
    clasificacion_final = "Liga Intermedia (Plata)"

else:
    # Caso por defecto si no cumple los requisitos mínimos
    clasificacion_final = "Liga de Reclutas (Bronce)"



# 4. ENTREGAR RESULTADO VERIFICABLE (Output)

print("\n-----------------------------------------")
print("=== RESULTADO DEL ANÁLISIS EN TIEMPO REAL ===")
print(f"Puntaje evaluado: {puntaje_jugador}")
print(f"Tasa de victorias: {tasa_victorias * 100}%")
print(f"Resultado obtenido: {clasificacion_final}")
print("-----------------------------------------")
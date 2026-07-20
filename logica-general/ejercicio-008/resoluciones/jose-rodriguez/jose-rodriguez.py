# ==========================================
# 1. IDENTIFICAR ENTRADAS (Inputs)
# ==========================================
print("=== SISTEMA DE CURACIÓN: MARATÓN DE CIENCIA FICCIÓN ===")

# Capturamos las especificaciones de la película a evaluar
titulo = input("Nombre de la película: ").strip()
año_estreno = int(input("Año de estreno (ej: 1999): "))
calificacion = float(input("Calificación de la crítica (0.0 a 10.0): "))
duracion_minutos = int(input("Duración de la película (en minutos): "))

# ==========================================
# 2. PROCESAMIENTO (Evaluación de Reglas por Pasos)
# ==========================================
# Definimos los criterios técnicos mediante variables booleanas independientes
es_clasico_moderno = (año_estreno >= 1990)
tiene_buena_critica = (calificacion >= 8.0)
es_metraje_adecuado = (duracion_minutos <= 150)

# Estructura condicional jerárquica para determinar la viabilidad en el catálogo
if es_clasico_moderno and tiene_buena_critica and es_metraje_adecuado:
    estado_curacion = "RECOMENDADA: MARATÓN PREMIUM"
    dictamen = f"La película '{titulo}' cumple perfectamente con el perfil de accesibilidad y calidad esperada."
    
elif es_clasico_moderno and tiene_buena_critica:
    estado_curacion = "ADVERTENCIA: SOLO DISPONIBLE EN EDICIÓN EXTENDIDA"
    dictamen = f"'{titulo}' tiene excelente calidad, pero excede los 150 minutos recomendados para el maratón continuo."
    
else:
    estado_curacion = "RECHAZADA: FUERA DEL FOCO DEL EVENTO"
    dictamen = "No cumple con los umbrales de año, calidad crítica o formato de tiempo requeridos para esta edición."

# ==========================================
# 3. ENTREGAR RESULTADO VERIFICABLE (Output)
# ==========================================
print("\n-----------------------------------------")
print("=== REPORTE DE VIABILIDAD FILMICAS ===")
print(f"Película Evaluada: {titulo}")
print(f"Estado de Selección: {estado_curacion}")
print(f"Dictamen Técnico:    {dictamen}")
print("-----------------------------------------")
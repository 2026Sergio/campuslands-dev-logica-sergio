# ==========================================
# 1. IDENTIFICAR ENTRADAS (Inputs)
# ==========================================
print("=== ASISTENTE DE PLANIFICACIÓN DE VIAJES Y TURISMO ===")

# Capturamos los datos para evaluar la viabilidad del itinerario
destino = input("Destino turístico deseado: ").strip()
presupuesto = float(input("Presupuesto disponible en dólares (USD): "))
temporada = input("Temporada del viaje (Alta / Baja): ").strip().capitalize()
dias_estancia = int(input("Cantidad de días de estancia: "))

# ==========================================
# 2. PROCESAMIENTO (Lectura de Instrucciones y Reglas Directas)
# ==========================================
# Definimos las banderas lógicas según las instrucciones de costos base
tiene_presupuesto_minimo = (presupuesto >= 500.0)
es_temporada_accesible = (temporada == "Baja")
estancia_valida = (dias_estancia >= 3)

# Estructura condicional para evaluar y asignar el tipo de paquete vacacional
if tiene_presupuesto_minimo and es_temporada_accesible and estancia_valida:
    estado_itinerario = "🟢 APROBADO: PAQUETE EXPLORADOR COMPLETO"
    detalles_ruta = f"Felicidades, tu viaje a '{destino}' es viable. Incluye hospedaje básico, tours locales y seguro de viaje."
    
elif tiene_presupuesto_minimo and estancia_valida:
    estado_itinerario = "🟡 ADVERTENCIA: PAQUETE ESENCIAL (AJUSTE POR TEMPORADA ALTA)"
    detalles_ruta = f"El viaje a '{destino}' es posible, pero debido a la Temporada Alta, el presupuesto solo cubre hospedaje sin tours."
    
else:
    estado_itinerario = "🔴 RECHAZADO: SOLICITUD NO VIABLE"
    detalles_ruta = "El presupuesto no alcanza el mínimo sugerido o la estancia es inferior a los 3 días obligatorios."

# ==========================================
# 3. ENTREGAR RESULTADO VERIFICABLE (Output)
# ==========================================
print("\n-----------------------------------------")
print("=== VOUCHER DE VERIFICACIÓN DE ITINERARIO ===")
print(f"Destino Seleccionado: {destino}")
print(f"Estado del Viaje:    {estado_itinerario}")
print(f"Detalles de la Ruta: {detalles_ruta}")
print("-----------------------------------------")
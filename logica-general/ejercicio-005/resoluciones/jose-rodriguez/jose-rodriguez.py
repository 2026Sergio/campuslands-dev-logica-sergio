# ==========================================
# 1. IDENTIFICAR ENTRADAS (Inputs)
# ==========================================
print("=== SISTEMA DE GESTIÓN Y PRIORIZACIÓN DE TALLER ===")

# Capturamos la información crítica del vehículo y su estado
cliente = input("Nombre del cliente: ")
tipo_vehiculo = input("Tipo de vehículo (Auto / Moto / Camión): ").capitalize()
motivo_ingreso = input("Motivo de ingreso (Accidente / Mantenimiento / Falla eléctrica): ").capitalize()
es_emergencia = input("¿El vehículo compromete la seguridad del conductor? (Si/No): ").capitalize()

# Variable de control de tiempo estimado de entrega inicial
dias_estimados = 0

# ==========================================
# 2. PROCESAMIENTO (Estructura de Asignación de Prioridad)
# ==========================================
# Aplicamos una lógica de jerarquía estricta (Triage) de arriba hacia abajo.
# La prioridad más alta absorbe el flujo inmediatamente.

if es_emergencia == "Si" or motivo_ingreso == "Accidente":
    nivel_prioridad = "CRÍTICA (Nivel 1)"
    accion_taller = "Asignar bahía de reparación inmediata. Mecánico jefe asignado."
    dias_estimados = 1

elif motivo_ingreso == "Falla eléctrica":
    nivel_prioridad = "ALTA (Nivel 2)"
    accion_taller = "Enviar a escaneo de diagnóstico en las próximas 2 horas."
    dias_estimados = 3

elif tipo_vehiculo == "Camión":
    # Los vehículos comerciales o de carga pesada tienen prioridad logística sobre los particulares
    nivel_prioridad = "MEDIA-ALTA (Nivel 3)"
    accion_taller = "Programar en la fosa de carga pesada para el día de hoy."
    dias_estimados = 4

else:
    # Caso por defecto: Mantenimientos de rutina o fallas menores en autos/motos
    nivel_prioridad = "ESTÁNDAR (Nivel 4)"
    accion_taller = "Fila de espera estándar. Atención por orden de llegada."
    dias_estimados = 5


# ==========================================
# 3. ENTREGAR RESULTADO VERIFICABLE (Output)
# ==========================================
print("\n-----------------------------------------")
print("=== ORDEN DE TRABAJO Y ASIGNACIÓN DE BAHÍA ===")
print(f"Cliente: {cliente}")
print(f"Vehículo: {tipo_vehiculo} | Motivo: {motivo_ingreso}")
print(f"Prioridad Asignada: {nivel_prioridad}")
print(f"Acción Operativa: {accion_taller}")
print(f"Tiempo Estimado de Retiro: {dias_estimados} día(s) hábil(es)")
print("-----------------------------------------")
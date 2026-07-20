# 1. Identificar los inputs
print("=== CONFIGURACIÓN DEL TORNEO DE ESPORTS ===")
participantes = int(input("¿Cuántas personas hay inscritas en el torneo?: "))
plataforma = input("Ingresa la plataforma (PC/Consola): ")

# 2. Toma de decisión por cantidad de participantes (Rangos limpios)
if participantes < 8:
    accion_recomendada = "Cancelar torneo por falta de quorum"
elif participantes <= 16:
    # Si llegó aquí, significa que es 8 o más, pero menor o igual a 16
    accion_recomendada = "Eliminación directa"
else:
    # Si llegó aquí, es porque es mayor a 16 de forma automática
    accion_recomendada = "Fase de Grupos + Playoffs"

# 3. Toma de decisión por hardware (Estructura condicional corregida)
if plataforma == "PC":
    accion_final = "Trae tus propios periféricos"
else:
    # Por descarte, si no es PC, asumimos que es Consola
    accion_final = "Proveer mandos estándar"

# 4. Entregar el resultado en consola
print("\n-----------------------------------------")
print("=== RESULTADO DEL ANÁLISIS EN TIEMPO REAL ===")
print(f"Participantes: {participantes}")
print(f"Acción Recomendada: {accion_recomendada}")
print(f"Acción Final: {accion_final}")
print("-----------------------------------------")
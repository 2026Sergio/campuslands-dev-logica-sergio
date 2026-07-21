def calcular_probabilidad_saque(exitos_saque, total_saques):
    if total_saques == 0:
        return 0
    porcentaje = (exitos_saque / total_saques) * 100
    return porcentaje

def mostrar_resultado(probabilidad):
    print("--- ESTADÍSTICAS DE PINGPONG ---")
    print(f"La probabilidad de éxito basada en tus saques es del: {probabilidad:.2f}%")

saques_exitosos = 14
total_intentos = 20

probabilidad_calculada = calcular_probabilidad_saque(saques_exitosos, total_intentos)
mostrar_resultado(probabilidad_calculada)
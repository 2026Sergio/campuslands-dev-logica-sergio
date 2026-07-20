# ==========================================
# 1. IDENTIFICAR ENTRADAS (Inputs)
# ==========================================
print("=== SIMULADOR DE ESTADOS: EXPERIENCIA DE TERROR EN VIVO ===")

# Capturamos las especificaciones de la película y el estado inicial del usuario
titulo_pelicula = input("Nombre de la película de miedo: ").strip()
intensidad_sustos = int(input("Nivel de intensidad de sustos (1 al 10): "))
frecuencia_cardiaca = int(input("Frecuencia cardíaca actual del usuario (BPM): "))

# ==========================================
# 2. PROCESAMIENTO (Algoritmo de Simulación de Estados)
# ==========================================
# Evaluamos los parámetros para activar las banderas del entorno
es_terror_extremo = (intensidad_sustos >= 8)
alerta_taquicardia = (frecuencia_cardiaca > 100)

# Motor de transición de estados del simulador
if es_terror_extremo and alerta_taquicardia:
    estado_simulacion = "🚨 ESTADO: PÁNICO TOTAL (SISTEMA EN INMERSIÓN MÁXIMA)"
    accion_entorno = "Atenuar luces al 0%, activar vibración háptica en el asiento y preparar parada de seguridad."
    recomendacion = "Monitorear ritmo cardíaco. El espectador está experimentando terror real."

elif es_terror_extremo or alerta_taquicardia:
    estado_simulacion = "⚠️ ESTADO: SUSPENSO ELEVADO (ENTORNO ADAPTATIVO)"
    accion_entorno = "Cambiar luces ambientales a color rojo e incrementar el volumen de los efectos de sonido."
    recomendacion = "La atmósfera es óptima para fanáticos del género. Ritmo e intensidad balanceados."

else:
    estado_simulacion = "🟢 ESTADO: COMODIDAD CONTROLADA (MODO PASIVO)"
    accion_entorno = "Mantener luces de cortesía tenues y ecualización de audio estándar."
    recomendacion = "El usuario tolera perfectamente la experiencia o la película es de suspenso leve."

# ==========================================
# 3. ENTREGAR RESULTADO VERIFICABLE (Output)
# ==========================================
print("\n-----------------------------------------")
print("=== REPORTE FINAL DE LA SIMULACIÓN DE ESTADO ===")
print(f"Película en Reproducción: {titulo_pelicula}")
print(f"Resultado de Auditoría:  {estado_simulacion}")
print(f"Acción del Entorno:      {accion_entorno}")
print(f"Línea de Recomendación:  {recomendacion}")
print("-----------------------------------------")
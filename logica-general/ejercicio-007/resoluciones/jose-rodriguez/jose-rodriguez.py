# ==========================================
# 1. IDENTIFICAR ENTRADAS (Inputs)
# ==========================================
print("=== SISTEMA DE AUDITORÍA Y CONTROL DE PLAYLISTS ===")

# Capturamos los metadatos generales de la playlist
nombre_playlist = input("Nombre de la playlist: ").strip()
cantidad_reportada = int(input("¿Cuántas canciones dice la playlist que tiene?: "))
duracion_reportada = int(input("¿Cuál es la duración total reportada (en segundos)?: "))

print("\n--- Desglose de canciones ingresadas para auditoría ---")
# Para mantener el reto directo con pocos datos, auditamos un bloque de 3 canciones principales
cancion_1_segundos = int(input("Duración de la Canción 1 (en segundos): "))
cancion_2_segundos = int(input("Duración de la Canción 2 (en segundos): "))
cancion_3_segundos = int(input("Duración de la Canción 3 (en segundos): "))

# ==========================================
# 2. PROCESAMIENTO (Algoritmo de Detección de Inconsistencias)
# ==========================================
# Calculamos las métricas reales basadas en el desglose para contrastarlas con el reporte global
cantidad_real = 3
duracion_real_calculada = cancion_1_segundos + cancion_2_segundos + cancion_3_segundos

# Aplicamos las reglas de consistencia de datos (Reglas de Oro)
inconsistencia_contador = (cantidad_reportada != cantidad_real)
inconsistencia_tiempo = (duracion_reportada != duracion_real_calculada)

# Motor de diagnóstico por descarte de anomalías
if inconsistencia_contador and inconsistencia_tiempo:
    estado_auditoria = "🚨 CRÍTICO: PLAYLIST CORRUPTA"
    dictamen = "Incoherencia total. Ni la cantidad de pistas ni el tiempo total acumulado coinciden con el desglose."
    
elif inconsistencia_contador:
    estado_auditoria = "⚠️ ADVERTENCIA: ERROR DE METADATOS (CONTADOR)"
    dictamen = f"El desglose físico contiene {cantidad_real} canciones, pero el encabezado reporta {cantidad_reportada}."
    
elif inconsistencia_tiempo:
    estado_auditoria = "⚠️ ADVERTENCIA: ERROR DE DESFASE (TIEMPO)"
    dictamen = f"La suma real da {duracion_real_calculada}s, pero el encabezado afirma tener {duracion_reportada}s."
    
else:
    # Si pasa todos los filtros de inconsistencia sin encender banderas
    estado_auditoria = "✅ INTEGRIDAD CONFIRMADA: PLAYLIST SINCRONIZADA"
    dictamen = "Los metadatos del encabezado y la sumatoria del desglose físico cuadran al 100%."

# ==========================================
# 3. ENTREGAR RESULTADO VERIFICABLE (Output)
# ==========================================
print("\n-----------------------------------------")
print("=== REPORTE FINAL DEL AUDITOR DE DATOS ===")
print(f"Playlist Evaluada: {nombre_playlist}")
print(f"Estado de Integridad: {estado_auditoria}")
print(f"Dictamen del Sistema: {dictamen}")
print(f"Tiempo Real Calculado: {duracion_real_calculada} segundos")
print("-----------------------------------------")
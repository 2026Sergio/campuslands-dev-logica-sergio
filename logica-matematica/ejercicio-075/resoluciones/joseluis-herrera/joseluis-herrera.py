def calcular_distancia_trazos(cantidad_trazos, longitud_promedio):
    distancia_total = cantidad_trazos * longitud_promedio
    return distancia_total

def calcular_tiempo_render(distancia, velocidad_procesamiento):
    if velocidad_procesamiento == 0:
        return 0
    tiempo = distancia / velocidad_procesamiento
    return tiempo


trazos_totales = 150
longitud_por_trazo = 4  
velocidad_tabla = 30  

distancia_recorrida = calcular_distancia_trazos(trazos_totales, longitud_por_trazo)
tiempo_total = calcular_tiempo_render(distancia_recorrida, velocidad_tabla)

print("--- RENDIMIENTO DE TRAZOS EN DIBUJO DIGITAL ---")
print(f"Cantidad de trazos: {trazos_totales} (Longitud promedio: {longitud_por_trazo} cm)")
print(f"Distancia acumulada de trazos: {distancia_recorrida} cm")
print(f"El tiempo estimado de renderizado es de: {tiempo_total:.2f} segundos")
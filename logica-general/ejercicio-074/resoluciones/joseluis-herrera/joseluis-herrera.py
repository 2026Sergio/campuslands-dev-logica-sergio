def validar_tamano_detalles(tamanio_cm, cantidad_detalles):
    if tamanio_cm < 5 and cantidad_detalles > 5:
        return "Alerta: Diseño muy pequeño para tantos detalles, riesgo de pérdida de definición."
    return "Tamaño y nivel de detalle correctos."

def validar_paleta_colores(es_a_color, tiene_negro_solido):
    if es_a_color and not tiene_negro_solido:
        return "Alerta: Falta base de negro sólido para contraste en el diseño a color."
    return "Paleta de colores validada correctamente."

tamanio_diseno = 4  
detalles_diseño = 7
es_color = True
base_negra = False

diagnostico_tamano = validar_tamano_detalles(tamanio_diseno, detalles_diseño)
diagnostico_color = validar_paleta_colores(es_color, base_negra)

print("--- DIAGNÓSTICO DE ERRORES EN ESTUDIO DE TATUAJES ---")
print(f"Evaluación de tamaño y detalles: {diagnostico_tamano}")
print(f"Evaluación de paleta de colores: {diagnostico_color}")
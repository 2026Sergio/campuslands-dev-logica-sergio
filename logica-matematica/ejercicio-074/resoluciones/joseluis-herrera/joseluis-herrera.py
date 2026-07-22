def calcular_perimetro(ancho, alto):
    perimetro = 2 * (ancho + alto)
    return perimetro

def calcular_area(ancho, alto):
    area = ancho * alto
    return area

ancho_diseno = 6
alto_diseno = 10

resultado_perimetro = calcular_perimetro(ancho_diseno, alto_diseno)
resultado_area = calcular_area(ancho_diseno, alto_diseno)

print("--- CÁLCULO DE ÁREA Y PERÍMETRO EN TATUAJES ---")
print(f"Medidas del diseño: {ancho_diseno} cm de ancho x {alto_diseno} cm de alto")
print(f"Perímetro total (para el borde/plantilla): {resultado_perimetro} cm")
print(f"Área total (espacio en la piel): {resultado_area} cm cuadrados")
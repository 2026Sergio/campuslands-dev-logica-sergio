def calcular_precio_base(ancho, alto, es_a_color):
    area = ancho * alto
    costo_por_cm = 5 if es_a_color else 3
    precio_base = area * costo_por_cm
    return precio_base

def aplicar_descuento_cliente(precio_base, es_cliente_frecuente):
    if es_cliente_frecuente:
        descuento = precio_base * 0.15
        precio_final = precio_base - descuento
        return precio_final
    return precio_base

ancho_lienzo = 10
alto_lienzo = 10
lleva_color = True
cliente_frecuente = True

precio_inicial = calcular_precio_base(ancho_lienzo, alto_lienzo, lleva_color)
precio_total = aplicar_descuento_cliente(precio_inicial, cliente_frecuente)

print("--- COTIZADOR DE ENCARGOS EN DIBUJO DIGITAL ---")
print(f"Dimensiones del lienzo: {ancho_lienzo}x{alto_lienzo} cm (A color: {lleva_color})")
print(f"Cliente frecuente: {cliente_frecuente}")
print(f"El valor final a pagar es de: ${precio_total:.2f}")
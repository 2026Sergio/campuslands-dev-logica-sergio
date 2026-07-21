def seleccionar_plato(menu, es_saludable_preferencia):
    platos_aptos = []
    
    for plato in menu:
        if plato["ingredientes_disponibles"] and plato["tiempo_preparacion"] <= 20:
            if es_saludable_preferencia:
                if plato["es_saludable"]:
                    platos_aptos.append(plato)
            else:
                platos_aptos.append(plato)
    
    if not platos_aptos:
        return "No hay opciones disponibles bajo estos criterios."
    
    # Seleccionar el de menor tiempo de preparación entre los aptos
    return min(platos_aptos, key=lambda x: x["tiempo_preparacion"])

menu_food_truck = [
    {"nombre": "Tacos", "es_saludable": False, "tiempo_preparacion": 10, "ingredientes_disponibles": True},
    {"nombre": "Ensalada", "es_saludable": True, "tiempo_preparacion": 15, "ingredientes_disponibles": True},
    {"nombre": "Burger", "es_saludable": False, "tiempo_preparacion": 25, "ingredientes_disponibles": True}
]

print(seleccionar_plato(menu_food_truck, True))
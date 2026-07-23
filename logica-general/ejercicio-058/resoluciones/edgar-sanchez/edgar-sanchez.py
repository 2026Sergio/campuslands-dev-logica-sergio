def asignar_turno_soldadura(soldadores, proyecto_urgencia):
    # Regla: Ordenar por prioridad de certificación (A > B > C)
    orden_prioridad = {"A": 1, "B": 2, "C": 3}
    
    soldadores_disponibles = sorted(soldadores, key=lambda x: orden_prioridad.get(x["certificacion"], 4))
    
    if proyecto_urgencia == "alta":
        # Prioridad a los de nivel A para urgencias altas
        seleccion = [s for s in soldadores_disponibles if s["certificacion"] == "A"]
        return seleccion[0] if seleccion else soldadores_disponibles[0]
    
    # Para urgencia normal, asignar al primero disponible por orden de certificación
    return soldadores_disponibles[0]

lista_soldadores = [
    {"nombre": "Carlos", "certificacion": "B"},
    {"nombre": "Ana", "certificacion": "A"},
    {"nombre": "Luis", "certificacion": "C"}
]

print(asignar_turno_soldadura(lista_soldadores, "alta"))
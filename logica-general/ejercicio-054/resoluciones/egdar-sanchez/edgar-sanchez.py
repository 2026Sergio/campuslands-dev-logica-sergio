def diagnosticar_tatuaje(edad, tamano_cm, complejidad_nivel):
    if edad < 18:
        return "Diagnostico: Rechazado (Menor de edad)"
    
    if tamano_cm <= 0:
        return "Diagnostico: Rechazado (Tamaño invalido)"
    
    if tamano_cm > 50:
        return "Diagnostico: Pendiente (Requiere consulta extendida por tamaño)"
    
    if complejidad_nivel > 5:
        return "Diagnostico: Pendiente (Requiere artista senior por alta complejidad)"
    
    return "Diagnostico: Aprobado para cita"

print(diagnosticar_tatuaje(22, 15, 3))
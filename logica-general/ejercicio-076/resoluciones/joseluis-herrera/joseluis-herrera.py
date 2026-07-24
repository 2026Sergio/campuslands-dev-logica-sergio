def crear_grilla_escenario():
    grilla = [
        [0, 1, 0],
        [0, 0, 1],
        [1, 0, 0]
    ]
    return grilla

def mostrar_grilla(matriz):
    print("--- MAPA DE POSICIONES EN EL ENTORNO 3D ---")
    for fila in matriz:
        print(fila)

grilla_objetos = crear_grilla_escenario()
mostrar_grilla(grilla_objetos)
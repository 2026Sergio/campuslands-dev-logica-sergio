# ==========================================
# 1. IDENTIFICAR ENTRADAS (Inputs)
# ==========================================
print("=== MOTOR DE BÚSQUEDA Y VERIFICACIÓN DE HYPERCARS ===")

# Capturamos las especificaciones técnicas del vehículo a buscar/evaluar
modelo = input("Nombre del modelo (ej: Chiron, Jesko, Nevera): ").strip().capitalize()
velocidad_maxima = int(input("Ingrese la velocidad máxima registrada (en km/h): "))
caballos_fuerza = int(input("Ingrese la potencia (en Caballos de Fuerza - HP): "))
produccion_limitada = input("¿Es de producción limitada? (Si/No): ").strip().capitalize()

# ==========================================
# 2. PROCESAMIENTO (Algoritmo de Búsqueda y Coincidencia)
# ==========================================
# Para que un auto sea indexado como "Hiperdeportivo" legítimo en nuestra base
# de datos, debe cumplir con un perfil de ingeniería extremo.

# Definimos las reglas del perfil de búsqueda
es_velocidad_top = (velocidad_maxima >= 400)
es_potencia_top = (caballos_fuerza >= 1000)
es_exclusivo = (produccion_limitada == "Si")

# Ejecutamos la búsqueda de coincidencia
if es_velocidad_top and es_potencia_top and es_exclusivo:
    estado_busqueda = "COINCIDENCIA ENCONTRADA: Elemento indexado como HIPERDEPORTIVO"
    categoria_asignada = "Megacar / Hypercar Oficial"
    dictamen_tecnico = f"El modelo {modelo} califica en la cúspide de la ingeniería automotriz."
    
elif es_velocidad_top or es_potencia_top:
    # Coincidencia parcial: cumple con rendimiento pero tal vez no es exclusivo o viceversa
    estado_busqueda = "COINCIDENCIA PARCIAL: Elemento indexado como SUPERDEPORTIVO"
    categoria_asignada = "Supercar de Alto Rendimiento"
    dictamen_tecnico = f"El modelo {modelo} tiene rendimiento extremo, pero carece de todos los factores de exclusividad."

else:
    # No coincide con el perfil de búsqueda extrema
    estado_busqueda = "SIN COINCIDENCIA: Elemento fuera del rango del ecosistema"
    categoria_asignada = "Deportivo Estándar / Premium"
    dictamen_tecnico = "Las especificaciones no alcanzan los umbrales mínimos de búsqueda."

# ==========================================
# 3. ENTREGAR RESULTADO VERIFICABLE (Output)
# ==========================================
print("\n-----------------------------------------")
print("=== REPORTE DEL MOTOR DE BÚSQUEDA (CLI) ===")
print(f"Elemento Evaluado: {modelo}")
print(f"Estado del Motor:  {estado_busqueda}")
print(f"Categoría Final:   {categoria_asignada}")
print(f"Análisis Técnico:  {dictamen_tecnico}")
print("-----------------------------------------")
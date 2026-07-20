
# 1. IDENTIFICAR ENTRADAS (Inputs)

print("=== SISTEMA DE FILTRADO DE INVENTARIO (MOTOS) ===")

# Capturamos los datos de la moto actual que queremos evaluar
marca = input("Ingresa la marca de la moto (ej: Honda, Yamaha, Suzuki): ").capitalize()
cilindrada = int(input("Ingresa la cilindrada en CC (ej: 125, 250, 600): "))
precio = float(input("Ingresa el precio de la moto en Quetzales: "))
tipo = input("Ingresa el tipo (Trabajo / Deportiva / Scooter): ").capitalize()


# 2. DEFINICIÓN DE REGLAS (Criterios del Filtro)

# Usamos variables booleanas (True/False) para que el código sea ultra legible:
condicion_marca = (marca == "Honda" or marca == "Yamaha")
condicion_cilindrada = (cilindrada >= 125 and cilindrada <= 250)
condicion_precio = (precio <= 25000)



# 3. PROCESAMIENTO (Aplicación del Filtro con Operadores Lógicos)


if condicion_marca and condicion_cilindrada and condicion_precio:
    # SI PASA TODAS LAS CONDICIONES:
    resultado_filtro = " MOTO APROBADA: Cumple con todos los requisitos del cliente."
    diagnostico = f"La moto {marca} de {cilindrada}CC se ajusta al presupuesto y cilindraje esperado."
else:
    # SI FALLA AL MENOS UNA CONDICIÓN:
    resultado_filtro = "MOTO RECHAZADA: No cumple con los criterios de búsqueda."
    diagnostico = "Motivo posible: Marca no solicitada, cilindrada fuera de rango o excede el presupuesto."


# 4. ENTREGAR RESULTADO VERIFICABLE (Output)

print("\n-----------------------------------------")
print("=== RESULTADO DEL FILTRADO DE INVENTARIO ===")
print(f"Moto Evaluada: {marca} {cilindrada}CC (Tipo: {tipo})")
print(f"Precio: Q{precio:,.2f}")
print(f"Estado del Filtro: {resultado_filtro}")
print(f"Diagnóstico: {diagnostico}")
print("-----------------------------------------")
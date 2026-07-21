# Plantilla de solucion - Conversión de Unidades (Autos Hiperdeportivos)

## Analisis

- Entrada:
  - `listaAutos`: Arreglo de objetos donde cada vehículo contiene `modelo`, `velocidadKmh` (km/h) y `potenciaHp` (caballos de fuerza).
- Proceso:
  - Validar que la lista sea un arreglo no vacío y que cada vehículo tenga campos con tipos y rangos numéricos válidos.
  - Aplicar las equivalencias físicas para convertir la velocidad a millas por hora (mph) y la potencia a kilovatios (kW).
  - Determinar el automóvil con mayor velocidad máxima dentro del lote de pruebas.
  - Clasificar cada hiperdeportivo según rangos internacionales de velocidad.
- Salida:
  - Total de vehículos evaluados, modelo más rápido, lista con las conversiones completas y resumen explicativo.

## Reglas identificadas

1. **Conversión de Velocidad:**  
   $$\text{Velocidad (mph)} = \text{Velocidad (km/h)} \times 0.621371$$
2. **Conversión de Potencia:**  
   $$\text{Potencia (kW)} = \text{Potencia (HP)} \times 0.7457$$
3. **Categorización de Desempeño:**
   - Velocidad $\ge 400\text{ km/h}$: "Récord Mundial (Hiperdeportivo de Élite)".
   - Velocidad entre $350\text{ km/h}$ y $399.99\text{ km/h}$: "Súper Rendimiento (Pista Avanzada)".
   - Velocidad $< 350\text{ km/h}$: "Rendimiento Estándar".

## Pruebas

### Caso normal

Entrada:
- Bugatti Chiron: `420 km/h`, `1500 HP`
- Ferrari SF90: `340 km/h`, `986 HP`
- Koenigsegg Jesko: `480 km/h`, `1600 HP`

Resultado esperado:
- Vehículo más rápido: `Koenigsegg Jesko (480 km/h)`
- Bugatti Chiron: `260.98 mph`, `1118.55 kW` $\rightarrow$ *Récord Mundial*
- Ferrari SF90: `211.27 mph`, `735.26 kW` $\rightarrow$ *Rendimiento Estándar*

### Caso borde

Entrada:
- Rimac Nevera: `412 km/h`, `1914 HP`

Resultado esperado:
- Vehículo más rápido: `Rimac Nevera (412 km/h)`
- Rimac Nevera: `256.01 mph`, `1427.27 kW` $\rightarrow$ *Récord Mundial*

## Explicacion final

La solución estandariza la información técnica de autos hiperdeportivos para su comparación internacional. Convertir unidades métricas a imperiales e imperiales a métricas eléctricas (kW) permite homogenizar los reportes de rendimiento y catalogar con precisión los vehículos probados.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.
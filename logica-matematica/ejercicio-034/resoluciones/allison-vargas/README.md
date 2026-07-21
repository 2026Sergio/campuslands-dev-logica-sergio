# Solución Ejercicio 034 - Áreas y Perímetros (Tatuajes)

**Estudiante:** Allison Vargas  
**Área:** Lógica Matemática  

---

## 📌 Análisis del Problema

El objetivo es calcular la superficie total (área) y el contorno (perímetro) de un diseño de tatuaje para estimar el costo base del trabajo y clasificarlo según su tamaño.

### Entradas
- `forma`: Tipo de figura geométrica (`"rectangular"` o `"circular"`).
- `dimensiones`: Objeto con las medidas (`ancho` y `alto` para rectángulo; `radio` para círculo).
- `precioPorCm2`: Valor monetario cobrado por cada cm² de tinta.

### Salidas
- `area_cm2`: Superficie total del tatuaje en cm².
- `perimetro_cm`: Contorno exterior del tatuaje en cm.
- `costo_estimado`: Precio total calculado según el área.
- `clasificacion`: Categoría del diseño según el tamaño.
- `explicacion`: Resumen descriptivo de los resultados.

---

## 🧠 Reglas Aplicadas

1. **Geometría Rectangular:**
   $$Área = \text{ancho} \times \text{alto}$$
   $$\text{Perímetro} = 2 \times (\text{ancho} + \text{alto})$$

2. **Geometría Circular:**
   $$Área = \pi \times r^2$$
   $$\text{Perímetro} = 2 \times \pi \times r$$

3. **Clasificación por Tamaño ($Área$):**
   - $Área \le 25\text{ cm}^2$: Pequeño (Detalle)
   - $25\text{ cm}^2 < Área \le 100\text{ cm}^2$: Mediano (Estándar)
   - $Área > 100\text{ cm}^2$: Grande (Pieza Completa)

---

## 🧪 Casos Probados

1. **Caso Normal (Rectangular):** Ancho `10cm`, Alto `5cm`, Tarifa `$2.5/cm²`. Área: `50 cm²`, Perímetro: `30 cm`, Costo: `$125` ("Mediano").
2. **Caso Borde (Circular Pequeño):** Radio `2cm`, Tarifa `$3.0/cm²`. Área: `12.57 cm²`, Perímetro: `12.57 cm`, Costo: `$37.71` ("Pequeño").
3. **Caso Validación:** Intento con dimensiones negativas (`ancho: -5`). El programa retorna una alerta de error estructurada.

---

## 💬 Explicación Final

La solución aplica conceptos de geometría básica para abstraer el espacio de piel que ocupará un diseño de tatuaje. Mediante una estructura condicional (`switch`), identifica la figura requerida, valida que los datos no sean nulos o negativos, y ejecuta las fórmulas estándar de área y perímetro. 

Posteriormente, normaliza los decimales con `.toFixed(2)` y multiplica la superficie obtenida por la tarifa fijada por centímetro cuadrado. Finalmente, categoriza el presupuesto para brindarle al cliente una estimación transparente del costo, área de cobertura y trabajo de contorno.

---

## 🚀 Cómo Ejecutar

Desde la raíz del proyecto, ejecuta en la terminal:

```bash
node logica-matematica/ejercicio-034/resoluciones/allison-vargas/allison-vargas.js
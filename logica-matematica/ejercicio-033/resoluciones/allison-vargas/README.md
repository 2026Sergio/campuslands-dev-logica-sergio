# Solución Ejercicio 033 - Coordenadas y Distancia (Paracaidismo)

**Estudiante:** Allison Vargas  
**Área:** Lógica Matemática  

---

## 📌 Análisis del Problema

El objetivo es determinar la precisión del punto de caída de un paracaidista con respecto a una coordenada objetivo (centro del blanco).

### Entradas
- `xTarget`, `yTarget`: Coordenadas del punto central de aterrizaje esperadas.
- `xDrop`, `yDrop`: Coordenadas donde realmente aterrizó el paracaidista.

### Salidas
- `distancia_metros`: Distancia en metros entre el punto de caída y el objetivo.
- `clasificacion`: Categoría según el margen de error del salto.
- `explicacion`: Descripción detallada del resultado.

---

## 🧠 Reglas Aplicadas

1. **Cálculo de Distancia:** Se aplica la fórmula de distancia euclidiana entre dos puntos en un plano 2D:
   $$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$
2. **Clasificación según la distancia ($d$):**
   - $d = 0$: Aterrizaje Perfecto
   - $0 < d \le 10$: Zona Segura (Alta Precisión)
   - $10 < d \le 25$: Zona Aceptable (Precisión Media)
   - $d > 25$: Fuera de Zona (Baja Precisión)

---

## 🧪 Casos Probados

1. **Caso Normal:** Target `(0, 0)` y Drop `(6, 8)`. Distancia calculada: `10m` ("Zona Segura").
2. **Caso Borde (Exacto):** Target `(15, 20)` y Drop `(15, 20)`. Distancia calculada: `0m` ("Aterrizaje Perfecto").
3. **Caso Fuera de Rangos:** Target `(0, 0)` y Drop `(30, 40)`. Distancia calculada: `50m` ("Fuera de Zona").

---

## 💬 Explicación Final

La solución aborda el reto mediante el uso de la fórmula de distancia euclidiana, la cual nos permite abstraer el plano cartesiano 2D del salto en paracaídas y calcular la separación exacta en metros entre el objetivo fijado y el punto real de aterrizaje.

Para garantizar la estabilidad del programa, la función valida primero que los cuatro datos ingresados sean valores numéricos. Posteriormente, efectúa el cálculo vectorial, redondea el resultado a dos decimales mediante `.toFixed(2)` y evalúa la distancia a través de un bloque condicional ordenado por umbrales de precisión (desde aterrizaje exacto hasta fuera de zona). De esta manera, el código devuelve un objeto limpio con el valor cuantitativo, la categoría cualitativa y la explicación del salto.

---

## 🚀 Cómo Ejecutar

Desde la raíz del proyecto, ejecuta en la terminal:

```bash
node logica-matematica/ejercicio-033/resoluciones/allison-vargas/allison-vargas.js
## Analisis

Para resolver este problema se concibió un sistema geométrico orientado al diseño de tatuajes sobre la piel. Dado que el costo de la tinta, el tiempo de sesión y el delineado dependen directamente de la superficie cubierta y del contorno del diseño, se requiere calcular con precisión el área y el perímetro de diferentes figuras geométricas representativas (rectángulos, círculos y triángulos) garantizando la validez topológica de las dimensiones proporcionadas.

- Entrada:
  - `tipo_figura`: Cadena de texto que indica la forma geométrica del tatuaje ("rectangulo", "circulo" o "triangulo").
  - `dimensiones`: Diccionario/objeto con las medidas correspondientes según la figura (ej. `base` y `altura` para rectángulo; `radio` para círculo; `lado_a`, `lado_b` y `lado_c` para triángulo).

- Proceso:
  1. Validar el tipo de dato de las entradas y normalizar la cadena del tipo de figura a minúsculas y sin espacios residuales.
  2. Verificar que las medidas sean numéricas y estrictamente mayores a cero.
  3. Para el caso del rectángulo:
     - $Área = \text{base} \times \text{altura}$
     - $Perímetro = 2 \times (\text{base} + \text{altura})$
  4. Para el caso del círculo:
     - $Área = \pi \times \text{radio}^2$
     - $Perímetro = 2 \times \pi \times \text{radio}$
  5. Para el caso del triángulo:
     - Validar la desigualdad triangular ($a + b > c$, $a + c > b$, $b + c > a$).
     - $Perímetro = a + b + c$
     - $Área = \sqrt{s(s - a)(s - b)(s - c)}$ mediante la fórmula de Herón, donde $s = \frac{\text{Perímetro}}{2}$.
  6. Redondear los resultados a dos decimales.

- Salida:
  - Un diccionario/objeto con el nombre de la figura, su área y su perímetro. Si los datos o dimensiones son inválidos, se retorna `None`.

## Reglas identificadas

1. **Axioma de positividad:** Todas las dimensiones numéricas (lados, radios, bases, alturas) deben ser estrictamente mayores que cero ($> 0$).
2. **Desigualdad Triangular:** Tres segmentos forman un triángulo válido únicamente si la suma de las longitudes de cualesquiera dos de sus lados es mayor que la longitud del lado restante.
3. **Manejo Estricto de Figuras Permitidas:** Si se proporciona un nombre de figura no soportado o tipos de datos erróneos, la función debe responder con `None` de manera segura evitando excepciones no controladas.

## Pruebas

### Caso normal

Entrada:
- `tipo_figura`: `"triangulo"`
- `dimensiones`: `{"lado_a": 3, "lado_b": 4, "lado_c": 5}`

Resultado esperado:
```json
{
  "figura": "triangulo",
  "area": 6.0,
  "perimetro": 12.0
}
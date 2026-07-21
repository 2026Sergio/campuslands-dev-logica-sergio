## Analisis

Para resolver este problema se diseñó un modelo financiero en cascada enfocado en la producción y renderizado de proyectos en animación 3D. El costo total depende de la cantidad de fotogramas (frames) a procesar, la tarifa unitaria por fotograma, los recargos según el tipo de licencia de software/farm requerida y los beneficios aplicables como escalabilidad por volumen o descuentos educativos.

- Entrada:
  - `fotogramas`: Número entero de frames a renderizar.
  - `costo_por_fotograma`: Valor numérico (moneda) que representa la tarifa base por frame.
  - `tipo_licencia`: Cadena de texto con el nivel de servicio ("indie", "estudio" o "enterprise").
  - `es_estudiante`: Valor booleano (`True`/`False`) para identificar si se aplica descuento educativo.

- Proceso:
  1. Validar el tipo de datos y que las cantidades numéricas sean mayores a cero.
  2. Normalizar la cadena del tipo de licencia a minúsculas y sin espacios residuales.
  3. Calcular el subtotal base: $\text{Subtotal} = \text{fotogramas} \times \text{costo\_por\_fotograma}$.
  4. Determinar el porcentaje de descuento por volumen según escalas prefijadas (200+, 500+, 1000+ frames) y deducirlo.
  5. Calcular y sumar el recargo según la licencia sobre el monto resultante ("indie": 0%, "estudio": 10%, "enterprise": 20%).
  6. Si `es_estudiante` es verdadero, deducir un 20% adicional sobre el acumulado hasta el momento.
  7. Redondear los valores monetarios finales a dos decimales.

- Salida:
  - Un diccionario/objeto estructurado con el desglose del costo base, porcentajes aplicados, total ahorrado y el total acumulado final. Si alguna entrada es inválida, se retorna `None`.

## Reglas identificadas

1. **Descuento por Volumen Escalonado:**
   - 200 a 499 fotogramas: 5% de descuento.
   - 500 a 999 fotogramas: 10% de descuento.
   - 1000 o más fotogramas: 15% de descuento.
2. **Recargo por Licencia de Render:**
   - "indie": 0% adicional.
   - "estudio": 10% adicional sobre el subtotal acumulado.
   - "enterprise": 20% adicional sobre el subtotal acumulado.
3. **Descuento Educativo:** Aplicación directa del 20% de descuento sobre el costo ajustado por licencia si el cliente acredita estatus estudiantil.
4. **Validación de Parámetros:** `fotogramas` y `costo_por_fotograma` deben ser numéricos estrictamente positivos ($> 0$). Licencias desconocidas provocan la invalidez de la consulta.

## Pruebas

### Caso normal

Entrada:
- `fotogramas`: `600`
- `costo_por_fotograma`: `2.5`
- `tipo_licencia`: `"indie"`
- `es_estudiante`: `true`

Resultado esperado:
```json
{
  "fotogramas": 600,
  "subtotal_base": 1500.0,
  "descuento_volumen_aplicado": "10%",
  "recargo_licencia_aplicado": "0%",
  "descuento_estudiante_aplicado": "20%",
  "total_ahorrado": 420.0,
  "total_final": 1080.0
}
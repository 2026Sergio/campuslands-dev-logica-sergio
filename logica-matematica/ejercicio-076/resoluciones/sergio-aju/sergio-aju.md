# Plantilla de solucion

## Analisis

- Entrada: 
  - `servicios`: Arreglo de objetos que representan los servicios de animación 3D contratados (nombre y costo base).
  - `cliente`: Objeto con la información del cliente (nombre y tipo: "nuevo", "recurrente", "VIP").
  - `cupon_descuento`: Cadena de texto que representa un cupón promocional (ej. "ANIMAFEST10").

- Proceso: 
  1. Validar que las entradas tengan el formato correcto y existan servicios.
  2. Calcular el costo bruto sumando los costos de todos los servicios mediante un ciclo y acumuladores.
  3. Aplicar reglas condicionales de descuento según el tipo de cliente.
  4. Aplicar bonificación por volumen si el costo bruto supera el umbral establecido.
  5. Aplicar descuento por cupón si es válido.
  6. Validar que el descuento total no exceda el límite máximo permitido (tope de rentabilidad).
  7. Calcular el costo final y estructurar la salida con un objeto claro.

- Salida: 
  - `costo_bruto`: Suma total antes de descuentos.
  - `descuento_total`: Monto total descontado.
  - `costo_final`: Total a pagar por el cliente.
  - `clasificacion`: Estado o categoría del presupuesto generado.
  - `explicacion`: Detalle textual de los cálculos y reglas aplicadas.

## Reglas identificadas

1. **Descuento por Tipo de Cliente**: 
   - VIP: 15% de descuento sobre el costo bruto.
   - Recurrente: 10% de descuento sobre el costo bruto.
   - Nuevo: 0% de descuento base.
2. **Bonificación por Volumen**: 
   - Si el costo bruto es superior a $1,500 USD, se aplica un 5% adicional acumulativo.
3. **Descuento por Cupón**: 
   - El cupón "ANIMAFEST10" otorga un 10% de descuento adicional.

## Pruebas

### Caso normal

Entrada:
```javascript
{
  cliente: { nombre: "Estudio Creativo Fénix", tipo: "recurrente" },
  servicios: [
    { nombre: "Modelado 3D de Personaje", costo_base: 600 },
    { nombre: "Rigging y Setups", costo_base: 400 },
    { nombre: "Animación de Secuencia (30s)", costo_base: 700 }
  ],
  cupon_descuento: "ANIMAFEST10"
}

# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo de objetos (`inventario`) que contiene las propiedades de cada motocicleta (modelo, precio, disponibilidad) y un valor numérico (`presupuestoMax`).
- **Proceso:** Validar la existencia de los datos de entrada. Posteriormente, recorrer el inventario para discriminar y extraer los vehículos que tengan stock y cuyos costos no excedan el presupuesto del cliente.
- **Salida:** Un arreglo con las motocicletas que cumplen los criterios filtrados o, en su defecto, un reporte lógico indicando la ausencia de coincidencias.

## Reglas identificadas

1. **Control de Parámetros:** Si el inventario no cuenta con registros o el presupuesto es menor o igual a cero, el algoritmo frena el procesamiento para prevenir errores.
2. **Filtro de Estado Comercial:** Únicamente se toman en consideración las motocicletas cuya propiedad `disponible` sea estrictamente igual a `true`.
3. **Filtro de Accesibilidad:** El precio de la motocicleta debe ser menor o igual (`<=`) al presupuesto máximo proveído.

## Pruebas

### Caso normal

Entrada:
```javascript
const inventario = [
  { modelo: "Scooter 125cc", precio: 1800, disponible: true },
  { modelo: "Sport 300cc", precio: 4500, disponible: true },
  { modelo: "Enduro 250cc", precio: 2800, disponible: false },
  { modelo: "Urban 150cc", precio: 2200, disponible: true }
];
const presupuesto = 3000;
Resultado esperado:

JSON
[
  { "modelo": "Scooter 125cc", "precio": 1800, "disponible": true },
  { "modelo": "Urban 150cc", "precio": 2200, "disponible": true }
]
Caso borde
Entrada:

JavaScript
const inventario = [
  { modelo: "Scooter 125cc", precio: 1800, disponible: true }
];
const presupuesto = 1000;
Resultado esperado:

JSON
{
  "accion": "notificar al cliente",
  "motivo": "No hay motocicletas disponibles en stock que se ajusten al presupuesto indicado."
}
Explicacion final
La solución es efectiva porque delega el procesamiento de colecciones al método nativo .filter(), permitiendo aislar de manera limpia predicados booleanos independientes (tieneStock y entraEnPresupuesto). Al juntar las validaciones de entrada iniciales, aseguramos la función contra llamadas erróneas o arreglos vacíos, garantizando un comportamiento predecible bajo cualquier circunstancia.
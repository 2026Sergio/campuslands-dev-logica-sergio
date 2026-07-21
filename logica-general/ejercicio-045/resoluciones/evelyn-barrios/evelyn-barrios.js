/**
 * Datos del menú del food truck.
 */
const menuItems = [
  { nombre: 'Tacos al Pastor', categoria: 'Tacos', precio: 12 },
  { nombre: 'Tacos de Suadero', categoria: 'Tacos', precio: 15 },
  { nombre: 'Hamburguesa Clásica', categoria: 'Hamburguesas', precio: 25 },
  { nombre: 'Hamburguesa Doble', categoria: 'Hamburguesas', precio: 35 },
  { nombre: 'Refresco de Cola', categoria: 'Bebidas', precio: 5 },
  { nombre: 'Agua Fresca', categoria: 'Bebidas', precio: 7 },
];

/**
 * Renderiza los elementos del menú en el DOM.
 * @param {object[]} itemsToShow El arreglo de items a mostrar.
 */
function renderMenu(itemsToShow) {
  const menuContainer = document.getElementById('menu-container');
  // Limpiar el contenedor antes de renderizar nuevos items
  menuContainer.innerHTML = '';

  if (itemsToShow.length === 0) {
    menuContainer.innerHTML = '<p>No hay productos en esta categoría.</p>';
    return;
  }

  itemsToShow.forEach(item => {
    // Crear un div para cada item del menú
    const menuItemDiv = document.createElement('div');
    menuItemDiv.className = 'menu-item';

    // Añadir el contenido (nombre y precio)
    menuItemDiv.innerHTML = `
      <h3>${item.nombre}</h3>
      <p>Precio: $${item.precio}</p>
    `;

    // Añadir el nuevo elemento al contenedor del menú
    menuContainer.appendChild(menuItemDiv);
  });
}

/**
 * Configura los event listeners para los botones de filtro.
 */
function setupFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const categoria = button.dataset.categoria;

      if (categoria === 'todos') {
        renderMenu(menuItems);
      } else {
        const itemsFiltrados = menuItems.filter(item => item.categoria === categoria);
        renderMenu(itemsFiltrados);
      }
    });
  });
}

// --- Ejecución Inicial ---

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  renderMenu(menuItems); // Renderizar el menú completo al cargar la página
  setupFilters();      // Configurar los filtros
});
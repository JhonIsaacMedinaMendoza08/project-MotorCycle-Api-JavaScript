// Obtenemos los elementos del DOM donde se mostrarán los datos y el botón para borrar todo
const viewDataResult = document.getElementById("viewDataResult");
const clearAllBtn = document.getElementById("clearAllBtn");

// Función para cargar los datos desde localStorage y mostrarlos en pantalla
function loadData() {
  // Obtenemos los datos guardados o un array vacío si no hay nada
  const storageData = JSON.parse(localStorage.getItem("data")) || [];

  // Si hay datos guardados, los mostramos
  if (storageData.length > 0) {
    // Recorremos cada mensaje y generamos una tarjeta HTML con su información
    viewDataResult.innerHTML = storageData.map((data, index) => `
      <div class="card" style="border: 1px solid #ccc; padding: 1rem; margin: 1rem 0;">
        <h3>Mensaje #${index + 1}</h3>
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Correo:</strong> ${data.email}</p>
        <p><strong>Teléfono:</strong> ${data.number}</p>
        <p><strong>Motocicleta:</strong> ${data.whatMotorcycle}</p>
        <p><strong>Mensaje:</strong> ${data.message}</p>
        <p><strong>Fecha:</strong> ${data.date}</p>
        <button onclick="deleteMessage(${index})">❌ Delete this message </button>
      </div>
    `).join(""); // Unimos todas las tarjetas en un solo string HTML

  } else {
    // Si no hay datos, mostramos un mensaje alternativo
    viewDataResult.innerHTML = "<p>No hay datos guardados</p>";
  }
}

// Función para eliminar un mensaje específico por su índice
function deleteMessage(index) {
  // Obtenemos los datos actuales
  const storageData = JSON.parse(localStorage.getItem("data")) || [];

  // Eliminamos el mensaje en la posición indicada
  storageData.splice(index, 1);

  // Actualizamos el localStorage con los datos modificados
  localStorage.setItem("data", JSON.stringify(storageData));

  // Recargamos la lista de mensajes en pantalla
  loadData();
}

// Evento para el botón de borrar todos los mensajes
clearAllBtn.addEventListener("click", () => {
  // Mostramos un mensaje de confirmación antes de eliminar
  if (confirm("¿Estás seguro que deseas borrar todos los mensajes?")) {
    // Eliminamos la clave "data" del localStorage
    localStorage.removeItem("data");

    // Recargamos la vista vacía
    loadData();
  }
});

// Ejecutamos loadData() al inicio para mostrar los mensajes al cargar la página
loadData();


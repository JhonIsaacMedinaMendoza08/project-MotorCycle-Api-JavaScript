// -----------------------------
// REFERENCIAS AL DIÁLOGO DE "LIKES"
// -----------------------------

const likeButton = document.getElementById("button__likeMotorcycles");
const dialog = document.querySelector("#my__dialog");

// Botón para cerrar el diálogo
const close = document.querySelector("#my__dialog_close");

// Evento: cuando se hace clic en el botón de like, se abre el diálogo
likeButton.addEventListener("click", () => {
  dialog.showModal(); // Muestra el <dialog> como modal
});
// Evento: cuando se hace clic en el botón de cerrar, se cierra el diálogo
close.addEventListener("click", () => {
  dialog.close(); // Cierra el <dialog>
});


// -----------------------------
// FORMULARIO DE CONTACTO
// -----------------------------

const contactFormulary = document.getElementById("contactForm");

contactFormulary.addEventListener("submit", (e) => {
  e.preventDefault(); 

  // Obtenemos los valores de cada campo y les quitamos espacios innecesarios
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const number = document.getElementById("number").value.trim();
  const whatMotorcycle = document.getElementById("whatMotorcycle").value.trim();
  const message = document.getElementById("message").value.trim();

  // Creamos un objeto con toda la info del usuario
  const newData = {
    name,
    email,
    number,
    whatMotorcycle,
    message,
    date: new Date().toLocaleString(), // Agregamos la fecha y hora actuales
  };

  // Cargamos los datos existentes (si hay) o empezamos con un array vacío
  const storedData = JSON.parse(localStorage.getItem("data")) || [];

  // Agregamos el nuevo mensaje al array de datos
  storedData.push(newData);

  // Guardamos el array actualizado en localStorage
  localStorage.setItem("data", JSON.stringify(storedData));

  // Mostramos una alerta para confirmar que se guardó correctamente
  alert("Information saved successfully ✅");

  // Limpiamos el formulario después de enviarlo
  contactFormulary.reset();
});

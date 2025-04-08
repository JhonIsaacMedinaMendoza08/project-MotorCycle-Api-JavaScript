const contenedor = document.getElementById("typesOfMotorcycles");
const searchInput = document.getElementById("searchInput");

// Aquí almacenamos todas las motos obtenidas de la API
let allMotorcycles = [];

/**
 * Función que renderiza las tarjetas de motos en el contenedor.
 * Recibe un array de motocicletas y crea tarjetas con su información.
 */
function renderMotorcycles(motorcycles) {
    contenedor.innerHTML = ""; // Limpiar el contenido anterior del contenedor

    motorcycles.forEach((motorcycle) => {
        // Crear una tarjeta (div) para cada moto
        const card = document.createElement("div");
        card.classList.add("motorcycle-card");

        // Agregar información de la moto al contenido de la tarjeta
        card.innerHTML = `
            <h3>${motorcycle.make} ${motorcycle.model}</h3>
            <p><strong>Year:</strong> ${motorcycle.year}</p>
            <p><strong>Type:</strong> ${motorcycle.type || "Unknown"}</p>
            <p><strong>Power:</strong> ${motorcycle.power || "N/A"}</p>
            <p><strong>Displacement:</strong> ${motorcycle.displacement || "N/A"}</p>
            <p><strong>Torque:</strong> ${motorcycle.torque || "N/A"}</p>
        `;

        // Agregar la tarjeta al contenedor principal
        contenedor.appendChild(card);
    });
}

/**
 * Evento que escucha el input del usuario para hacer una búsqueda en tiempo real.
 * Filtra las motos por marca y modelo según lo que el usuario escriba.
 */
searchInput.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase(); // Convertimos a minúsculas para una búsqueda más flexible

    // Filtramos las motos que incluyan el término en el make + model
    const filtered = allMotorcycles.filter(moto =>
        `${moto.make} ${moto.model}`.toLowerCase().includes(term)
    );

    // Volvemos a renderizar solo las motos que coinciden con la búsqueda
    renderMotorcycles(filtered);
});

/**
 * Función asincrónica que obtiene las motos desde la API.
 * Almacena los datos en allMotorcycles y luego los muestra.
 */
async function getMotorcycles(url) {
    try {
        const response = await fetch(url, {
            headers: {
                // Clave de autenticación para la API de API Ninjas
                "X-Api-Key": "aoeuqtrgBZoMZUBpFJIdcA==lyLdT9WLXXwtU5p4"
            }
        });

        const data = await response.json(); // Convertimos la respuesta a JSON

        allMotorcycles = data; // Guardamos todas las motos para poder filtrarlas luego
        renderMotorcycles(allMotorcycles); // Mostramos todas las motos al cargar
    } catch (error) {
        console.error("Error al obtener las motocicletas:", error);
    }
}

// Llamamos a la función para obtener y mostrar las motos de la marca BMW al cargar la página
getMotorcycles("https://api.api-ninjas.com/v1/motorcycles?make=bmw");

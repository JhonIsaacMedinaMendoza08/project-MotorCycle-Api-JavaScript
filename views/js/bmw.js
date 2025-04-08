const contenedor = document.getElementById("typesOfMotorcycles");

contenedor.innerHTML = "";

const tarjetasContainer = document.createElement("div");
tarjetasContainer.classList.add("tarjetas-container");
contenedor.appendChild(tarjetasContainer);

async function getMotorcycles(url) {
  try {
    const response = await fetch(url, {
      headers: {
        "X-Api-Key": "aoeuqtrgBZoMZUBpFJIdcA==lyLdT9WLXXwtU5p4"
      }
    });
    const data = await response.json();

    data.forEach((motorcycle) => {
      const card = document.createElement("div");
      card.classList.add("motorcycle-card");

      card.innerHTML = `
        <h3>${motorcycle.make} ${motorcycle.model}</h3>
        <p><strong>Año:</strong> ${motorcycle.year}</p>
        <p><strong>Tipo:</strong> ${motorcycle.type}</p>
        <p><strong>Potencia:</strong> ${motorcycle.power || "N/A"}</p>
        <p><strong>Cilindraje:</strong> ${motorcycle.displacement || "N/A"}</p>
        <p><strong>Torque:</strong> ${motorcycle.torque || "N/A"}</p>
      `;

      tarjetasContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error al obtener las motocicletas:", error);
  }
}

getMotorcycles("https://api.api-ninjas.com/v1/motorcycles?make=bmw");

const viewDataResult = document.getElementById("viewDataResult");
const clearAllBtn = document.getElementById("clearAllBtn");

function loadData() {
  const storageData = JSON.parse(localStorage.getItem("data")) || [];

  if (storageData.length > 0) {
    viewDataResult.innerHTML = storageData.map((data, index) => `
      <div class="card">
        <h3>Message #${index + 1}</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone number:</strong> ${data.number}</p>
        <p><strong>Motorcycle:</strong> ${data.whatMotorcycle}</p>
        <p><strong>Message:</strong> ${data.message}</p>
        <p><strong>Date:</strong> ${data.date}</p>
        <button onclick="deleteMessage(${index})">❌ Delete this message</button>
      </div>
    `).join("");
  } else {
    viewDataResult.innerHTML = "<p>No hay datos guardados</p>";
  }
}

function deleteMessage(index) {
  const storageData = JSON.parse(localStorage.getItem("data")) || [];
  storageData.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(storageData));
  loadData();
}

clearAllBtn.addEventListener("click", () => {
  if (confirm("¿Are you sure you want to delete all messages?")) {
    localStorage.removeItem("data");
    loadData();
  }
});

loadData();

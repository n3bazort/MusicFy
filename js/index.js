document.addEventListener("DOMContentLoaded", () => {
    const musicGrid = document.getElementById("music-grid");

    // Generar tarjetas dinámicamente desde el arreglo de objetos
    musicas.forEach((musica) => {
        const card = document.createElement("div");
        card.classList.add("music-card");
        card.setAttribute("data-id", musica.id);
        card.innerHTML = `
            <img src="${musica.imagen}" alt="${musica.titulo}">
            <h3>${musica.titulo}</h3>
            <p>${musica.artista}</p>
        `;
        musicGrid.appendChild(card);
    });

    // Manejar clics en las tarjetas
    musicGrid.addEventListener("click", (event) => {
        const card = event.target.closest(".music-card");
        if (card) {
            const id = card.getAttribute("data-id");
            const selectedMusica = musicas.find((musica) => musica.id == id);
            sessionStorage.setItem("selectedMusica", JSON.stringify(selectedMusica));
            window.location.href = "reproductor.html";
        }
    });
});

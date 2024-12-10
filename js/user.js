document.addEventListener('DOMContentLoaded', () => {
    const helpLink = document.getElementById('helpLink');

    helpLink.addEventListener('click', (event) => {
        event.preventDefault(); // Previene la acción predeterminada del enlace
        window.location.href = 'block-state.html'; // Redirige a la página de error
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const playBtn = document.getElementById('play-btn');
    const shuffleBtn = document.getElementById('shuffle-btn');
    const repeatBtn = document.getElementById('repeat-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    playBtn.addEventListener('click', () => {
        if (playBtn.textContent === '▶') {
            playBtn.textContent = '⏸';
            alert('Reproduciendo música');
        } else {
            playBtn.textContent = '▶';
            alert('Música pausada');
        }
    });

    shuffleBtn.addEventListener('click', () => {
        shuffleBtn.classList.toggle('active');
        alert('Modo aleatorio ' + (shuffleBtn.classList.contains('active') ? 'activado' : 'desactivado'));
    });

    repeatBtn.addEventListener('click', () => {
        if (repeatBtn.textContent === '🔁') {
            repeatBtn.textContent = '🔂';
            alert('Repetir una canción');
        } else if (repeatBtn.textContent === '🔂') {
            repeatBtn.textContent = '🔁';
            repeatBtn.classList.add('active');
            alert('Repetir todas las canciones');
        } else {
            repeatBtn.textContent = '🔁';
            repeatBtn.classList.remove('active');
            alert('Repetición desactivada');
        }
    });

    prevBtn.addEventListener('click', () => {
        alert('Reproduciendo canción anterior');
    });

    nextBtn.addEventListener('click', () => {
        alert('Reproduciendo siguiente canción');
    });


// Obtiene los datos del usuario desde localStorage
const user = JSON.parse(localStorage.getItem('usuarios'));

// Selecciona el contenedor donde se mostrarán los datos
const userInfo = document.getElementById('userInfo');

if (user) {
    // Inserta los datos del usuario en el contenedor
    userInfo.innerHTML = `
        <h3>Nombre de Usuario: ${user.username}</h3>
        <p>Email: ${user.email}</p>
    `;
} else {
    // Muestra un mensaje si no hay datos del usuario
    userInfo.innerHTML = `
        <p>No se encontraron datos de usuario. Por favor, inicia sesión.</p>
    `;
}

});
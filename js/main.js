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
});
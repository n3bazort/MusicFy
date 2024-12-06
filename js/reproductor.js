document.addEventListener('DOMContentLoaded', () => {
    // Elementos
    const albumCover = document.getElementById('album-cover');
    const currentSong = document.getElementById('song-title');
    const currentArtist = document.getElementById('artist');
    const progressBar = document.getElementById('progress');
    const playBtn = document.getElementById('playBtn');
    const favoriteBtn = document.getElementById('favorite-btn');

    // Cargar la última canción seleccionada
    const selectedSong = JSON.parse(sessionStorage.getItem('selectedMusica'));

    if (selectedSong) {
        albumCover.src = selectedSong.imagen;
        currentSong.textContent = selectedSong.titulo;
        currentArtist.textContent = selectedSong.artista;
    }

    // Barra de progreso automática
    let progress = 0;
    const startProgress = () => {
        progressBar.style.width = '0%';
        const interval = setInterval(() => {
            if (progress < 100) {
                progress += 1;
                progressBar.style.width = `${progress}%`;
            } else {
                clearInterval(interval);
            }
        }, 1000); // Avanza cada 100ms
    };

    startProgress(); // Inicia automáticamente al cargar la pantalla

    // Control de reproducción (pausa/play)
    let isPlaying = true;
    playBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        playBtn.textContent = isPlaying ? '⏸' : '▶';
    });

    // Favoritos: Cambiar entre delineado y relleno
    favoriteBtn.addEventListener('click', () => {
        const isActive = favoriteBtn.classList.contains('active');
        favoriteBtn.classList.toggle('active');
        favoriteBtn.textContent = isActive ? '♡' : '❤️'; // Cambia el icono
    });
});

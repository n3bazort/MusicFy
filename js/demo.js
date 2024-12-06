document.addEventListener('DOMContentLoaded', () => {
    const diapos = document.querySelectorAll('.diapo');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;

    const updateDiapos = () => {
        diapos.forEach((diapo, index) => {
            diapo.classList.toggle('active', index === currentIndex);
            indicators[index].classList.toggle('active', index === currentIndex);
        });
    };

    const nextDiapo = () => {
        currentIndex = (currentIndex + 1) % diapos.length;
        updateDiapos();
    };

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateDiapos();
        });
    });

    // Cambia automáticamente cada 5 segundos
    setInterval(nextDiapo, 5000);
});

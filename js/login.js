document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (email && password) {
            alert(`Inicio de sesión exitoso para ${email}`);
            window.location.href = 'user.html';
        } else {
            alert('Por favor, complete todos los campos');
        }
    });
});
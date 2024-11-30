document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (username && email && password) {
            alert(`Registro exitoso para ${username}`);
            window.location.href = 'login.html';
        } else {
            alert('Por favor, complete todos los campos');
        }
    });
});
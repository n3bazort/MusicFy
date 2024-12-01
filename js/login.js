document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Obtén los usuarios almacenados en localStorage
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        // Verifica si el usuario y contraseña coinciden
        const usuarioValido = usuarios.find(
            usuario => usuario.email === email && usuario.password === password
        );

        if (usuarioValido) {
            // Inicio de sesión exitoso
            Swal.fire({
                title: "¡Inicio de sesión exitoso!",
                text: `Bienvenido, ${usuarioValido.username}`,
                icon: "success",
                confirmButtonText: "Ir al feed"
            }).then(() => {
                window.location.href = 'index.html'; // Redirige al index
            });
        } else {
            // Credenciales incorrectas
            Swal.fire({
                title: "Error",
                text: "Correo o contraseña incorrectos. Inténtalo de nuevo.",
                icon: "error",
                confirmButtonText: "Intentar de nuevo"
            });
        }
    });
});

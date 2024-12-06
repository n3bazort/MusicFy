document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (username && email && password) {

            // Obtengo los usuarios almacenados en localStorage
            const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

            // Verifico si el correo ya esta registrado
            const usuarioExistente = usuarios.find(usuario => usuario.email === email);

            if (usuarioExistente) {
                Swal.fire({
                    title: "Error",
                    text: "El correo ya está registrado. Intenta con otro.",
                    icon: "error",
                    confirmButtonText: "Intentar de nuevo"
                });
            } else {
                // Creo un nuevo usuario y guárdalo en localStorage
                usuarios.push({ username, email, password });
                localStorage.setItem('usuarios', JSON.stringify(usuarios));

                Swal.fire({
                    title: "¡Registro exitoso!",
                    text: `Bienvenido, ${username}. Ahora puedes iniciar sesión.`,
                    icon: "success",
                    confirmButtonText: "Ir al login"
                }).then(() => {
                    window.location.href = 'login.html'; // Redirige al login
                });
            }
        } else {
            // Campos incompletos
            Swal.fire({
                title: "Error",
                text: "Por favor, complete todos los campos.",
                icon: "error",
                confirmButtonText: "Intentar de nuevo"
            });
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const termsCheckbox = document.getElementById('terms');
    const registerBtn = document.getElementById('registerBtn');

    // Escucha el cambio del estado del checkbox
    termsCheckbox.addEventListener('change', () => {
        registerBtn.disabled = !termsCheckbox.checked; // Habilita/deshabilita el botón
    });
});


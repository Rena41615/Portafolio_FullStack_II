document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-contacto");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");
    const errorNombre = document.getElementById("error-nombre");
    const errorEmail = document.getElementById("error-email");
    const errorMensaje = document.getElementById("error-mensaje");
    const mensajeExito = document.getElementById("mensaje-exito");

    if(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            let valid = true;

            errorNombre.textContent = "";
            errorEmail.textContent = "";
            errorMensaje.textContent = "";
            mensajeExito.textContent = "";

            if (nombre.value.trim().length < 3) {
                errorNombre.textContent = "Ingresa tu nombre completo.";
                valid = false;
            }

            const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regexCorreo.test(email.value.trim())) {
                errorEmail.textContent = "Ingresa un correo electrónico válido.";
                valid = false;
            }

            if (mensaje.value.trim().length < 10) {
                errorMensaje.textContent = "Tu mensaje debe tener al menos 10 caracteres.";
                valid = false;
            }

            if (valid) {
                fetch("https://formsubmit.co/ajax/rena41615@gmail.com", {
                    method: "POST",
                    headers: { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        nombre: nombre.value,
                        email: email.value,
                        mensaje: mensaje.value,
                        asunto: "Solicitud de Contratación - Portafolio"
                    })
                })
                .then(response => response.json())
                .then(data => {
                    mensajeExito.textContent = "¡Mensaje enviado con éxito!";
                    form.reset();
                })
                .catch(error => {
                    errorMensaje.textContent = "Error de conexión. Intenta nuevamente.";
                });
            }
        });
    }
});
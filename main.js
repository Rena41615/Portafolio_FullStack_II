document.addEventListener(DOMContentLoaded, () => {
    const form = document.getElementById("form-contacto");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");
    const errorNombre = document.getElementById("error-nombre");
    const errorEmail = document.getElementById("error-email");
    const errorMensaje = document.getElementById("error-mensaje");
    const mensajeExito = document.getElementById("mensaje-exito");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let valid = true;

        errorNombre.textContent = "";
        errorEmail.textContent = "";
        errorMensaje.textContent = "";
        mensajeExito.textContent = "";

        if (nombre.ariaValueMax.trim().length < 3){
            errorNombre.textContent = "Ingresa tu nombre completo, se detectaron muy pocos carácteres.";
            valid = false;
        }

        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexCorreo.test(email.value.trim())){
            errorEmail.textContent = "Ingresa un correo válido.";
            valid = false;
        }

        if (mensaje.value.trim().length < 10){
            errorMensaje.textContent = "Mensaje muy corto, escribe al menos 10 carácteres.";
            valid = false;
        }

        if (valid) {
            mensajeExito.textContent = "Mensaje enviado con  éxito.";
            form.reset();
        }

    });
});

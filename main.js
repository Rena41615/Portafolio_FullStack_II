document.addEventListener("DOMContentLoaded", () => {
    const enlaces = document.querySelectorAll(".navbar a");
    const secciones = document.querySelectorAll(".seccion");

    const activarSeccion = (id) => {
        secciones.forEach(sec => sec.style.display = "none");
        enlaces.forEach(enlace => enlace.classList.remove("activo"));
        
        const seccionActiva = document.querySelector(id);
        const enlaceActivo = document.querySelector(`.navbar a[href="${id}"]`);
        
        if (seccionActiva) seccionActiva.style.display = "block";
        if (enlaceActivo) enlaceActivo.classList.add("activo");
    };

    enlaces.forEach(enlace => {
        enlace.addEventListener("click", (e) => {
            e.preventDefault();
            const id = enlace.getAttribute("href");
            activarSeccion(id);
        });
    });

    const subEnlaces = document.querySelectorAll(".sub-navbar a");
    const subSecciones = document.querySelectorAll(".sub-seccion");

    subEnlaces.forEach(enlace => {
        enlace.addEventListener("click", (e) => {
            e.preventDefault();
            
            subEnlaces.forEach(l => l.classList.remove("sub-activo"));
            subSecciones.forEach(s => s.classList.remove("sub-activa"));
            
            enlace.classList.add("sub-activo");
            const targetId = enlace.getAttribute("data-target");
            const target = document.getElementById(targetId);
            if (target) target.classList.add("sub-activa");
        });
    });

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
                mensajeExito.textContent = "¡Mensaje enviado con éxito!";
                form.reset();
            }
        });
    }
});
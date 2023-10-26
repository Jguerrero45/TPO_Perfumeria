document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que se envíe el formulario automáticamente

        // Obtener los valores de los campos del formulario
        var firstname = document.querySelector("input[name='firstname']").value;
        var lastname = document.querySelector("input[name='lastname']").value;
        var address = document.querySelector("input[name='address']").value;
        var number = document.querySelector("input[name='number']").value;
        var telefono = document.querySelector("input[name='telefono']").value;
        var birthdate = document.querySelector("input[name='birthdate']").value;
        var mail = document.querySelector("input[name='mail']").value;
        var clave = document.querySelector("input[name='clave']").value;
        var rclave = document.querySelector("input[name='rclave']").value;

        // Validar que los campos no estén vacíos
        if (
            firstname === "" ||
            lastname === "" ||
            address === "" ||
            number === "" ||
            telefono === "" ||
            birthdate === "" ||
            mail === "" ||
            clave === "" ||
            rclave === ""
        ) {
            alert("Por favor complete todos los campos.");
            return;
        }

        // Validar que las contraseñas coincidan
        if (clave !== rclave) {
            alert("Las contraseñas no coinciden.");
            return;
        }
        // Validar que la contraseña tenga al menos 8 caracteres
        if (clave.length < 8) {
            alert("La contraseña debe tener al menos 8 caracteres.");
            return;
        }

        // Validar el formato del correo electrónico
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(mail)) {
            alert("Por favor ingrese una dirección de correo electrónico válida.");
            return;
        }

        // Si todas las validaciones pasan, puedes enviar el formulario o realizar otras acciones
        form.submit();
    });
});

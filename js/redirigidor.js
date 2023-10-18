// Obtener todas las imágenes de perfume
const imagenesPerfume = document.querySelectorAll('main a');

// Agregar evento de clic a cada imagen de perfume
imagenesPerfume.forEach(imagen => {
    imagen.addEventListener('click', function (event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

        // Obtener la URL de la imagen del perfume clickeado
        const urlImagen = imagen.querySelector('img').getAttribute('src');

        // Redirigir a la misma página HTML y pasar la URL de la imagen como parámetro
        window.location.href = window.location.href.split('?')[0] + '?imagen=' + encodeURIComponent(urlImagen);

        // Agregar clase de estilo a la imagen clickeada
        imagen.classList.add('imagen-destacada');

        // Mostrar información sobre la imagen clickeada
        const infoImagen = document.createElement('p');
        infoImagen.classList.add('informacion-imagen');
        infoImagen.textContent = 'Información de la imagen:' + imagen.querySelector('img').getAttribute('alt');
        document.body.appendChild(infoImagen);
    });
});

// Leer el parámetro de la URL al cargar la página
window.addEventListener('load', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const urlImagen = urlParams.get('imagen');

    // Mostrar solo la imagen del perfume clickeado
    if (urlImagen) {
        const imagenClickeada = document.createElement('img');
        imagenClickeada.src = decodeURIComponent(urlImagen);
        document.body.innerHTML = '';
        document.body.appendChild(imagenClickeada);

        // Agregar clase de estilo a la imagen mostrada de forma individual
        imagenClickeada.classList.add('imagen-destacada');

        // Mostrar información sobre la imagen mostrada de forma individual
        const infoImagen = document.createElement('p');
        infoImagen.classList.add('informacion-imagen');
        infoImagen.textContent = 'Información de la imagen: lorem ' + imagenClickeada.getAttribute('alt');
        document.body.appendChild(infoImagen);
    }
});

// Adjuntar el archivo CSS
const linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = '../css/imgRedirigida.css';
document.head.appendChild(linkElement);
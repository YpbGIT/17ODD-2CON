document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.cube-logo').forEach(cube => {
        cube.addEventListener('click', function(e) {
            e.preventDefault();
            const cubeName = this.getAttribute('data-cube');
            loadCubeIframe(cubeName);
        });
    });
});

function loadCubeIframe(cubeName) {
    const cubeContainer = document.getElementById('cube-container');
    const bannerSpace = document.getElementById('banner-space');
    
    // Supprime l'iframe précédent s'il existe
    const oldIframe = cubeContainer.querySelector('iframe');
    if (oldIframe) {
        oldIframe.remove();
    }

    // Supprime la bannière précédente s'il existe
    const oldBanner = bannerSpace.querySelector('img');
    if (oldBanner) {
        oldBanner.remove();
    }

    // Crée une nouvelle bannière pour le cube spécifique
    const banner = document.createElement('img');
    banner.src = `img/Webbanderollesodd/b${cubeName.slice(3)}.jpg`; // Assurez-vous que le chemin est correct
    banner.alt = `Bannière pour ${cubeName}`;
    banner.classList.add('img-fluid'); // Ajoutez votre classe CSS pour le style de l'image
    banner.style.width = '100%'; // La bannière prend toute la largeur
    bannerSpace.appendChild(banner); // Ajoute la bannière au conteneur dédié

    // Crée un nouvel iframe pour le cube spécifique
    const iframe = document.createElement('iframe');
    iframe.src = `${cubeName}/index.html`; // Assurez-vous que le chemin est correct
    iframe.style.width = '100%';
    iframe.style.height = '100%'; // Prend toute la hauteur du conteneur de cube
    iframe.frameBorder = '0';
    cubeContainer.appendChild(iframe); // Ajoute l'iframe au conteneur de cube
}

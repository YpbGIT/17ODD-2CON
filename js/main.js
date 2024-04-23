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

    // Supprime l'iframe précédent s'il existe
    const oldIframe = cubeContainer.querySelector('iframe');
    if (oldIframe) {
        oldIframe.remove();
    }

    // Supprime la bannière précédente s'il existe
    const oldBanner = document.querySelector('.banner-container');
    if (oldBanner) {
        oldBanner.remove();
    }

    // Crée une nouvelle bannière pour le cube spécifique
    const bannerContainer = document.createElement('div');
    bannerContainer.classList.add('banner-container');
    const banner = document.createElement('img');
    banner.src = `img/Webbanderollesodd/b${cubeName.slice(3)}.jpg`; // Chemin vers la bannière spécifique
    banner.alt = `Bannière pour ${cubeName}`; // Texte alternatif pour la bannière
    banner.style.width = '100%'; // Ajustement pour utiliser toute la largeur
    bannerContainer.appendChild(banner);
    cubeContainer.appendChild(bannerContainer);

    // Crée un nouvel iframe pour le cube spécifique
    const iframe = document.createElement('iframe');
    iframe.src = `${cubeName}/index.html`; // Chemin vers l'index.html du cube spécifique
    iframe.style.width = '100%';
    iframe.style.height = '100%'; // Utiliser toute la hauteur disponible
    iframe.frameBorder = '0';
    cubeContainer.appendChild(iframe);
}

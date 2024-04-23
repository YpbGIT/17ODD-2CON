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

    // Nettoyer l'ancien contenu des bannières et du cube
    bannerSpace.innerHTML = '';
    cubeContainer.innerHTML = '';

    // Crée une nouvelle bannière pour le cube spécifique
    const banner = document.createElement('img');
    banner.src = `img/Webbanderollesodd/b${cubeName.slice(3)}.jpg`;
    banner.alt = `Bannière pour ${cubeName}`;
    banner.classList.add('img-fluid');
    banner.style.width = '100%';  // Utilisation de toute la largeur disponible
    bannerSpace.appendChild(banner);

    // Crée un nouvel iframe pour le cube spécifique
    const iframe = document.createElement('iframe');
    iframe.src = `${cubeName}/index.html`;
    iframe.style.width = '100%';
    iframe.style.height = '100%'; // Utilisation de toute la hauteur disponible
    iframe.frameBorder = '0';
    cubeContainer.appendChild(iframe);
}

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

    // Crée un nouvel iframe pour le cube spécifique
    const iframe = document.createElement('iframe');
    iframe.src = `${cubeName}/index.html`; // Chemin vers l'index.html du cube spécifique
    iframe.style.width = '100%';
    iframe.style.height = '500px'; // Définissez la hauteur selon vos besoins
    iframe.frameBorder = '0'; // Pour supprimer la bordure de l'iframe

    cubeContainer.appendChild(iframe);
}

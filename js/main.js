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

    // Clear previous content
    bannerSpace.innerHTML = '';
    cubeContainer.innerHTML = '';

    // Create a new banner for the specific cube
    const banner = document.createElement('img');
    banner.src = `img/Webbanderollesodd/b${cubeName.slice(3)}.jpg`;
    banner.alt = `Banner for ${cubeName}`;
    banner.classList.add('img-fluid');
    banner.style.width = '100%'; // Ensure the banner fills the width
    bannerSpace.appendChild(banner);

    // Create a new iframe for the specific cube
    const iframe = document.createElement('iframe');
    iframe.src = `${cubeName}/index.html`;
    iframe.style.width = '100%';
    iframe.style.height = '100%'; // Use all available height
    iframe.frameBorder = '0';
    cubeContainer.appendChild(iframe);
}

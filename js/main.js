document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[data-cube]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const cubeName = this.getAttribute('data-cube');
            loadCubeScript(cubeName);
        });
    });
});

function loadCubeScript(cubeName) {
    const scriptPath = `${cubeName}/cube.js`; // Adjust the path as necessary
    const oldScript = document.getElementById('cube-script');
    if (oldScript) {
        oldScript.remove();
    }

    const script = document.createElement('script');
    script.src = scriptPath;
    script.id = 'cube-script';
    document.body.appendChild(script);

    script.onload = () => {
        console.log(`${cubeName} chargé avec succès`);
    };

    script.onerror = () => {
        console.error(`Le script pour ${cubeName} n'a pas pu être chargé`);
    };
}

fetch('/assets/pencil.php')
    .then(response => response.text())
    .then(html => {
        const containers = document.querySelectorAll('#pencil-loader-container');
        containers.forEach(container => {
            container.innerHTML = html;
        });
        console.log('Pencil is loaded !')
    })
    .catch(error => {
        console.error('Error fetching /assets/pencil.php :', error);
    });
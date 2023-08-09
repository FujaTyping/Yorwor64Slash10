fetch('/assets/footbar.php')
    .then(response => response.text())
    .then(html => {
        document.getElementById('footer-container').innerHTML = html;
        console.log('Footer is loaded !')
    })
    .catch(error => {
        console.error('Error fetching /assets/footbar.php :', error);
    });
fetch('/assets/navbar.php')
    .then(response => response.text())
    .then(html => {
        document.getElementById('nav-container').innerHTML = html;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        console.log('Navbar is loaded !')
    })
    .catch(error => {
        console.error('Error fetching /assets/navbar.php :', error);
    });

function playmusic() {
    const audioPlayer = document.getElementById('audioPlayer');

    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}
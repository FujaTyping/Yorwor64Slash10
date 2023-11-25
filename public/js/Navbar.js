fetch('/assets/navbar.php')
    .then(response => response.text())
    .then(html => {
        document.getElementById('nav-container').innerHTML = html;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        console.log('Navbar is loaded !')

        const currentDomain = window.location.hostname;
        const Warnnav = document.getElementById("Olddomain");

        if (currentDomain === 'yorwor.fujatyping.dev') {
            Warnnav.remove()
            console.log("Domain : you're up to date :)");
        } else {
            console.log("Domain : old domain detected !");
        }
    })
    .catch(error => {
        console.error('Error fetching /assets/navbar.php :', error);
    });

function findpage() {
    var pathname = window.location.pathname;
    var filename = pathname.split('/').pop();
    return filename
}

function playmusic() {
    var name = findpage()

    if (name == "ending.html" || name == "ending") {
        const EaudioPlayer = document.getElementById('EndaudioPlayer');

        if (EaudioPlayer.paused) {
            const EndmusicTrigger = document.getElementById('liveToastBtn')
            EndmusicTrigger.click()

            EaudioPlayer.play();
        } else {
            EaudioPlayer.pause();
        }
    } else {
        const audioPlayer = document.getElementById('audioPlayer');

        if (audioPlayer.paused) {
            if (name == "index.html" || name == "") {
                const musicTrigger = document.getElementById('DeliveToastBtn')
                musicTrigger.click()
            }

            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    }
}
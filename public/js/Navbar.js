/*
async function WantNotif() {
    const Notif = await document.getElementById("NotiAl");

    if ('Notification' in window) {
        Notification.requestPermission().then(async function (permission) {
            if (permission === 'granted') {
                console.log("Notification : access granted :D")
            }
            else if (permission === 'denied') {
                console.log("Notification : access denied :(")
                Notif.click();
            }
            else {
                console.log("Notification : user not choose choice >:(")
                Notif.click();
            }
        });
    } else {
        console.log("Notification : notification not support !!")
    }
}
*/

fetch('/assets/navbar.php')
    .then(response => response.text())
    .then(async html => {
        document.getElementById('nav-container').innerHTML = html;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        console.log('Navbar is loaded !')

        const currentDomain = window.location.hostname;
        const Warnnav = document.getElementById("Olddomain");

        Warnnav.remove()

        /*
        if (currentDomain === 'yorwor.fujatyping.dev') {
            Warnnav.remove()
            console.log("Domain : you're up to date :)");
            // await WantNotif();
        } else {
            console.log("Domain : old domain detected !");
        }
        */
    })
    .catch(error => {
        console.error('Error fetching /assets/navbar.php :', error);
    });

function findpage() {
    var pathname = window.location.pathname;
    var filename = pathname.split('/').pop();
    return filename
}

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

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

function ChangeDomain() {
    var pathname = window.location.pathname;
    window.location.href = `https://yorwor.fujatyping.dev${pathname}`;
}
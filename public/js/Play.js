function playmusic() {
    const audioPlayer = document.getElementById('audioPlayer');

    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}
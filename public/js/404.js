const wordArray = ["This year is 2023", "School is killing students :(", "Can i change english teacher", "Music suck", "Low tech"]; // Your word array

function getRandomWord() {
    var randomIndex = Math.floor(Math.random() * wordArray.length);
    return wordArray[randomIndex];
}

function displayRandomWord() {
    var randomWord = getRandomWord();
    var textContainer = document.getElementById('text-container');
    textContainer.textContent = randomWord;
}

window.onload = function () {
    displayRandomWord();
    const loadbt = document.getElementById('Stillload')
    const Finbt = document.getElementById('Finishload')
    loadbt.style.display = 'none';
    Finbt.style.display = 'inline-block';
};
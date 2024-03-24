let currentCharacter;
let matchingCharacter;
let currentTypeIndex = 0; // 0 for hiragana, 1 for katakana
let score = 0;
let total = 0;
const correctAnswers = new Map();

const kanaCharacterElement = document.getElementById('kana-character');
const userInputElement = document.getElementById('user-input');
const librarySelectElement = document.getElementById('library-select');
const scoreElement = document.getElementById('score');
const alertElement = document.getElementById('alert');

function displayNewCharacter() {
    currentTypeIndex = Math.floor(Math.random() * 2); // Selects either 0 (hiragana) or 1 (katakana)

    const kanaSet = window.library[currentTypeIndex].kana.filter(kana => !correctAnswers.has(kana));
    const matchingKanaSet = window.library[1 - currentTypeIndex].kana;

    if (kanaSet.length === 0) {
        alertElement.textContent = 'No kana left. Refresh to start again.';
        userInputElement.disabled = true;
        return;
    }

    const randomIndex = Math.floor(Math.random() * kanaSet.length);
    currentCharacter = kanaSet[randomIndex];
    matchingCharacter = matchingKanaSet[window.library[currentTypeIndex].kana.indexOf(currentCharacter)];

    kanaCharacterElement.textContent = currentCharacter;
    userInputElement.value = '';
}

function checkAnswer() {
    const userInput = userInputElement.value;
    total++;

    if (userInput === matchingCharacter) {
        score++;
        alertElement.textContent = 'Correct!';
        updateLibrarySelect(currentCharacter, matchingCharacter);
    } else {
        alertElement.textContent = `Incorrect. The matching character for ${currentCharacter} was ${matchingCharacter}`;
    }

    displayNewCharacter();
    updateScore();
}

function updateLibrarySelect(kana, matchingKana) {
    if (!correctAnswers.has(kana)) {
        correctAnswers.set(kana, matchingKana);
        const optionElement = document.createElement('option');
        optionElement.value = kana;
        optionElement.textContent = `${kana} ↔ ${matchingKana}`;
        librarySelectElement.appendChild(optionElement);
        librarySelectElement.style.display = 'inline-block'; // Show the select when it has items
    }
}

function updateScore() {
    const totalKana = window.library[0].kana.length; // Assuming both sets have the same length
    const accuracy = total > 0 ? (score / total * 100).toFixed(2) : 0;
    scoreElement.textContent = `Kana: ${score}/${totalKana} - Accuracy: ${accuracy}%`;
}

userInputElement.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});

displayNewCharacter();
updateScore();


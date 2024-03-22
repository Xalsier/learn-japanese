let currentCharacter;
let currentRomaji;
let currentTypeIndex = 0; // 0 for hiragana, 1 for katakana
let score = 0;
let total = 0;
const correctAnswers = new Map(); // Store correct answers

const kanaCharacterElement = document.getElementById('kana-character');
const userInputElement = document.getElementById('user-input');
const librarySelectElement = document.getElementById('library-select');
const scoreElement = document.getElementById('score');
const alertElement = document.getElementById('alert');

function displayNewCharacter() {
    currentTypeIndex = Math.floor(Math.random() * window.library.length);
    const kanaSet = window.library[currentTypeIndex].kana.filter(kana => !correctAnswers.has(kana));

    if (kanaSet.length === 0) {
        alertElement.textContent = 'No kana left. Refresh to start again.';
        userInputElement.disabled = true; // Disable input if no kana left
        return;
    }

    const randomIndex = Math.floor(Math.random() * kanaSet.length);
    currentCharacter = kanaSet[randomIndex];
    currentRomaji = window.library[currentTypeIndex].romaji[window.library[currentTypeIndex].kana.indexOf(currentCharacter)];

    const randomFont = window.fonts[Math.floor(Math.random() * window.fonts.length)];
    kanaCharacterElement.style.fontFamily = randomFont;

    const rotationDegrees = Math.floor(Math.random() * 10);
    kanaCharacterElement.style.transform = `rotate(${rotationDegrees}deg)`;

    kanaCharacterElement.textContent = currentCharacter;
    userInputElement.value = ''; // Clear the input field
}

function checkAnswer() {
    const userInput = userInputElement.value.toLowerCase();
    total++; // Increment total when the answer is checked

    if (userInput === currentRomaji) {
        score++;
        alertElement.textContent = 'Correct!';
        updateLibrarySelect(currentCharacter, currentRomaji);
    } else {
        alertElement.textContent = `Incorrect. The answer for ${currentCharacter} was ${currentRomaji}`;
    }

    displayNewCharacter();
    updateScore();
}

function updateScore() {
    const totalKana = window.library.reduce((sum, item) => sum + item.kana.length, 0);
    const accuracy = total > 0 ? (score / total * 100).toFixed(2) : 0; // Calculate accuracy percentage
    scoreElement.textContent = `Kana: `+ score +`/` + totalKana +` - Accuracy: ${accuracy}%`;
}

function updateLibrarySelect(kana, romaji) {
    if (!correctAnswers.has(kana)) {
        correctAnswers.set(kana, romaji);
        const optionElement = document.createElement('option');
        optionElement.value = kana;
        optionElement.textContent = `${kana} (${romaji})`;
        librarySelectElement.appendChild(optionElement);
        librarySelectElement.style.display = 'inline-block'; // Show the select when it has items
    }
}

userInputElement.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});

displayNewCharacter();
updateScore();


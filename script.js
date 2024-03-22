const hiragana = ['あ', 'い', 'う', 'え', 'お']; // Add the rest of the hiragana characters
const katakana = ['ア', 'イ', 'ウ', 'エ', 'オ']; // Add the rest of the katakana characters

const library = {
    "hiragana": {
        'あ': 'a',
        'い': 'i',
        'う': 'u',
        'え': 'e',
        'お': 'o'
    },
    "katakana": {
        'ア': 'a',
        'イ': 'i',
        'ウ': 'u',
        'エ': 'e',
        'オ': 'o'
    }
};

let currentCharacter;
let currentType = 'hiragana'; // Start with hiragana
let score = 0;
let total = 0;
const fonts = ['Arial', 'Verdana', 'Courier', 'Times New Roman', 'Georgia']; // Example fonts

const kanaCharacterElement = document.getElementById('kana-character');
const userInputElement = document.getElementById('user-input');
const scoreElement = document.getElementById('score');

function displayNewCharacter() {
    // Randomly select the type (hiragana or katakana)
    currentType = Math.random() > 0.5 ? 'hiragana' : 'katakana';

    const characterArray = currentType === 'hiragana' ? hiragana : katakana;
    const randomIndex = Math.floor(Math.random() * characterArray.length);
    currentCharacter = characterArray[randomIndex];

    // Apply a random font to the kana character
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    kanaCharacterElement.style.fontFamily = randomFont;

    kanaCharacterElement.textContent = currentCharacter;
    userInputElement.value = ''; // Clear the input field
}

function convertToRomaji(kana) {
    return library[currentType][kana];
}

function checkAnswer() {
    const userInput = userInputElement.value.toLowerCase();
    const correctRomaji = convertToRomaji(currentCharacter);

    total++; // Increment total when the answer is checked

    if (userInput === correctRomaji) {
        score++;
        alert('Correct!');
    } else {
        alert(`Incorrect. The answer was ${correctRomaji}`);
    }

    displayNewCharacter();
    updateScore();
}

function updateScore() {
    scoreElement.textContent = `${score}/${total} correct`;
}

userInputElement.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});

displayNewCharacter();
updateScore();

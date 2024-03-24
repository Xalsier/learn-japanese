
document.addEventListener('DOMContentLoaded', function() {
    populateSelectBox();
    const initialWord = document.getElementById('wordSelect').value;
    updateCard(initialWord);
});

function populateSelectBox() {
    const wordSelect = document.getElementById('wordSelect');
    for (const key in cardLibrary) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = cardLibrary[key].vocabulary.word;
        wordSelect.appendChild(option);
    }
}

document.getElementById('wordSelect').addEventListener('change', function() {
    updateCard(this.value);
});

function flipCard() {
    const cardContainer = document.querySelector('.card-container');
    cardContainer.classList.toggle('flipped');
}

function revealCard() {
    flipCard();
}

function updateCard(selectedValue) {
    const data = cardLibrary[selectedValue];
    if (!data) return;

    const vocabWord = data.vocabulary.word;
    document.getElementById('rb-vocabulary').innerHTML = `<span style="color: yellow;">${vocabWord}</span>`;
    document.getElementById('rt-vocabulary').textContent = data.vocabulary.reading;

    let definitionContent = data.definition.word;
    definitionContent = definitionContent.replace(new RegExp(vocabWord, 'g'), `<span style="color: yellow;">${vocabWord}</span>`);
    Object.keys(cardLibrary).forEach(key => {
        if (key !== selectedValue) {
            const otherWord = cardLibrary[key].vocabulary.word;
            definitionContent = definitionContent.replace(new RegExp(otherWord, 'g'), `<span style="color: orange;">${otherWord}</span>`);
        }
    });

    document.getElementById('rb-definition').innerHTML = definitionContent;
    document.getElementById('rt-definition').textContent = data.definition.reading;

    const sentencesList = document.getElementById('sentences');
    sentencesList.innerHTML = '';
    data.sentences.forEach(sentence => {
        const li = document.createElement('li');
        let content = sentence.content;
        let highlightedContent = content.replace(new RegExp(vocabWord, 'g'), `<span style="color: yellow;">${vocabWord}</span>`);
        Object.keys(cardLibrary).forEach(key => {
            if (key !== selectedValue) {
                const otherWord = cardLibrary[key].vocabulary.word;
                highlightedContent = highlightedContent.replace(new RegExp(otherWord, 'g'), `<span style="color: orange;">${otherWord}</span>`);
            }
        });

        li.innerHTML = `<ruby><rb>${highlightedContent}</rb><rt>${sentence.reading}</rt></ruby>`;
        sentencesList.appendChild(li);
    });

    const englishReadings = document.getElementById('english-readings');
    englishReadings.innerHTML = `<ruby><rb>${data.english}</rb><rt>${data.vocabulary.reading}</rt></ruby>`;
}

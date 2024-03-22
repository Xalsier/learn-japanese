function flipCard() {
    const cardContainer = document.querySelector('.card-container');
    cardContainer.classList.toggle('flipped');
}

function revealCard() {
    flipCard();
}

document.addEventListener('DOMContentLoaded', function() {
    updateCard(document.getElementById('wordSelect').value);
});

document.getElementById('wordSelect').addEventListener('change', function() {
    updateCard(this.value);
});

const library = {
    kanji: {
        vocabulary: { word: "漢字", reading: "かんじ, kanji" },
        definition: { word: "日本の文字の一つ", reading: "にほんのもじのひとつ" },
        sentences: [
            { content: "漢字は難しいです。", reading: "かんじはむずかしいです。" },
            { content: "漢字を練習しましょう。", reading: "かんじをれんしゅうしましょう。" },
            { content: "日本語には多くの漢字があります。", reading: "にほんごにはおおくのかんじがあります。" }
        ],
        english: "Kanji"
    },
    nihon: {
        vocabulary: { word: "日本", reading: "にほん, nihon" },
        definition: { word: "東アジアの国", reading: "ひがしアジアのくに" },
        sentences: [
            { content: "日本は美しい国です。", reading: "にほんはうつくしいくにです。" },
            { content: "日本には四季があります。", reading: "にほんにはしきがあります。" },
            { content: "日本の文化は古い歴史があります。", reading: "にほんのぶんかはふるいれきしをもっています。" }
        ],
        english: "Japan"
    },
    nihongo: {
        vocabulary: { word: "日本語", reading: "にほんご, nihongo" },
        definition: { word: "日本で話される言語", reading: "にほんではなされるげんご" },
        sentences: [
            { content: "日本語を勉強しています。", reading: "にほんごをべんきょうしています。" },
            { content: "日本語の文法を学びます。", reading: "にほんごのぶんぽうをまなびます。" },
            { content: "日本語で挨拶をしましょう。", reading: "にほんごであいさつをしましょう。" }
        ],
        english: "Japanese language"
    },
    benkyou: {
        vocabulary: { word: "勉強", reading: "べんきょう, benkyou" },
        definition: { word: "学習すること", reading: "がくしゅうすること" },
        sentences: [
            { content: "毎日日本語を勉強します。", reading: "まいにちにほんごをべんきょうします。" },
            { content: "勉強を続けることが大切です。", reading: "べんきょうをつづけることがたいせつです。" },
            { content: "漢字の勉強は面白いです。", reading: "かんじのべんきょうはおもしろいです。" }
        ],
        english: "Study"
    },
    renshuu: {
        vocabulary: { word: "練習", reading: "れんしゅう, renshuu" },
        definition: { word: "技能を向上させるための活動", reading: "ぎのうをこうじょうさせるためのかつどう" },
        sentences: [
            { content: "練習を重ねると上達します。", reading: "れんしゅうをかさねるとじょうたつします。" },
            { content: "毎日ピアノを練習します。", reading: "まいにちピアノをれんしゅうします。" },
            { content: "練習あるのみです。", reading: "れんしゅうあるのみです。" }
        ],
        english: "Practice"
    }
};
function updateCard(selectedValue) {
    const data = library[selectedValue];
    if (!data) return;

    // Update vocabulary and apply highlighting in the vocabulary and definition
    const vocabWord = data.vocabulary.word;
    document.getElementById('rb-vocabulary').innerHTML = `<span style="color: yellow;">${vocabWord}</span>`;
    document.getElementById('rt-vocabulary').textContent = data.vocabulary.reading;

    // Highlight the main word and other deck words in the definition
    let definitionContent = data.definition.word;
    definitionContent = definitionContent.replace(new RegExp(vocabWord, 'g'), `<span style="color: yellow;">${vocabWord}</span>`);
    Object.keys(library).forEach(key => {
        if (key !== selectedValue) {
            const otherWord = library[key].vocabulary.word;
            definitionContent = definitionContent.replace(new RegExp(otherWord, 'g'), `<span style="color: orange;">${otherWord}</span>`);
        }
    });
    document.getElementById('rb-definition').innerHTML = definitionContent;
    document.getElementById('rt-definition').textContent = data.definition.reading;

    // Update sentences
    const sentencesList = document.getElementById('sentences');
    sentencesList.innerHTML = ''; // Clear existing sentences
    data.sentences.forEach(sentence => {
        const li = document.createElement('li');
        let content = sentence.content;
        let highlightedContent = content.replace(new RegExp(vocabWord, 'g'), `<span style="color: yellow;">${vocabWord}</span>`);

        // Highlight other words from different decks in orange
        Object.keys(library).forEach(key => {
            if (key !== selectedValue) {
                const otherWord = library[key].vocabulary.word;
                highlightedContent = highlightedContent.replace(new RegExp(otherWord, 'g'), `<span style="color: orange;">${otherWord}</span>`);
            }
        });

        li.innerHTML = `<ruby><rb>${highlightedContent}</rb><rt>${sentence.reading}</rt></ruby>`;
        sentencesList.appendChild(li);
    });

    // Update English readings
    const englishReadings = document.getElementById('english-readings');
    englishReadings.innerHTML = `<ruby><rb>${data.english}</rb><rt>${data.vocabulary.reading}</rt></ruby>`;
}

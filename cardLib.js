const cardLibrary = {
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
window.cardLibrary = cardLibrary;
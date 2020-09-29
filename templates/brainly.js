const scrape = require('brainly-scraper');

const Brainly = async (msg) => {
    if (msg.body.includes('!brainly')) {
        let question = msg.body.replace('!brainly', '').trim();
        let res = await scrape(question);

        if (res.success) {
            res.data.forEach(question => {
                let source_text = "Pertanyaan : \n";
                source_text += question.pertanyaan + "\n\n";
                question.jawaban.forEach(jawaban => {
                    source_text += "----------------------------------\n";
                    source_text += "Jawaban : \n";
                    source_text += jawaban.text + "\n\n";

                    source_text += "Media : " + "\n";

                    if (jawaban.media.length) {
                        jawaban.media.forEach(media => {
                            source_text += media + "\n";
                        });
                    } else {
                        source_text += "-\n";
                    }
                    
                });
                source_text += "\nDev : @defrindr\n";
                msg.reply(source_text)
            });
        }
    }
}

module.exports = Brainly;
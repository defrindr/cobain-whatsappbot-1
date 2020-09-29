const list_quotes = require('./../resources/quotes.js');

const getRandomize = () => {
    let rand = parseInt(Math.random() * 1000);
    let max = list_quotes.length;

    while (rand < 0) rand = parseInt(Math.random() * 1000);
    if (rand >= max) parseInt(random %= max);
    
    let quote = list_quotes[rand];
    console.log(quote);
    
    return `${quote.text}\n\n- ${quote.author}`;
}

let quote = async (msg) => {
    if (msg.body.includes('!quotes')) {
        msg.reply(getRandomize());
    }
}
module.exports = quote;

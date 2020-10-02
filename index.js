const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const quotes = require("./templates/quotes.js");
const ping = require("./templates/test-ping.js");
const Brainly = require("./templates/brainly.js");
const MakeQ = require("./templates/gen-quote.js");
const Latex = require("./templates/latex.js");

const client = new Client();


client.on('qr', (qr) => {
    qrcode.generate(qr,{small:true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async(msg) => {
    ping(msg);
    quotes(msg);
    Brainly(msg);
    MakeQ(client, msg);
    Latex(client, msg);
});

client.initialize();
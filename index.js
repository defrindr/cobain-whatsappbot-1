const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const coronaJatim = require("./templates/coronaJatim.js");
const ping = require("./templates/test-ping.js");

const client = new Client();


client.on('qr', (qr) => {
    qrcode.generate(qr,{small:true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async(msg) => {
    ping(msg);
    coronaJatim(msg);
});

client.initialize();
const latex = require('../requests/latex/base.js');
const {
    MessageMedia
} = require('whatsapp-web.js');



const generateLatex = async(client, msg) => {
    if(msg.body.includes('!latex')){
        query = msg.body.replace("!latex", "").trim();
        response = await latex(query);

        if(response.success){
            let media = MessageMedia.fromFilePath(response.link);
            client.sendMessage(msg.from, media, {
                caption: "Success !"
            });
        }
    }
}

module.exports = generateLatex;
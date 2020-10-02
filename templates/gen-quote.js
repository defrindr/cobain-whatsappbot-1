const request = require('request-promise');
const { MessageMedia } = require('whatsapp-web.js');


const genQuote = async(client, msg) => {

    if(msg.body.includes('!makeq')){
        let sources = msg.body.replace('!makeq','');
        let text = "", author = "";

        if(sources.split("|").length > 1){
            [text, author] = sources.split("|");
        }else{
            text = sources;
            author = "key bot";
        }

        let url = "http://localhost:8000?text=" + encodeURI(text) + "&author=" + encodeURI(author);

        let data = await request.get(url).then(res => {
            return res;
        });

        data = JSON.parse(data);

        let media = MessageMedia.fromFilePath(data.link);
        client.sendMessage(msg.from, media,{caption: "Success !"});
    }


    
}

module.exports = genQuote;
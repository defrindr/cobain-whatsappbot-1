const testPing = (msg) => {
    if (msg.body == '!ping') {
        msg.reply('pong');
    }
}

module.exports = testPing;
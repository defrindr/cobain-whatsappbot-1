const request = require('./../requests/coronaJatim.js');

let coronaJatim = async(msg) => {
    if (msg.body.includes('!covid-jatim')) {
        if (msg.body.replace("!covid-jatim", "") == "") {
            zone = null
        } else {
            zone = msg.body.replace("!covid-jatim", "")
        }
        let finalmsg = await request(zone).then(res => {
            return res
        })
        msg.reply(finalmsg)
    }
}

module.exports = coronaJatim
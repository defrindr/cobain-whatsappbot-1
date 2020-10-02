/**
 * Deprecated
 */

let fetch = require('request-promise');

let coronaJatim = (zone = null) => {
    let url = "http://api.covid.defrindr.my.id/jatim/";

    if (zone != null) {
        url += zone;
    }

    return response(
        fetch(url).then(res => {
            let returnValue = "";
            JSON.parse(res).data.forEach(d1 => {
                returnValue = template(d1);
            });

            return returnValue;
        })
    );
}

let template = (d1) => {
    let str = `\nInfo Covid-19 Wilayah : ${d1.zona} \n------------------------------\nODP : ${d1.jumlah_odp} \nPDP : ${d1.jumlah_pdp} \nPOSITIF : ${d1.jumlah_positif} \nSEMBUH : ${d1.jumlah_sembuh} \nMENINGGAL : ${d1.jumlah_meninggal} \n`;
    return str;
}

let response = (response) => {
    return new Promise((resolve) => {
        resolve(response);
    });
}

module.exports = coronaJatim

'use strict';
const fs = require('fs');
const request = require("request-promise");
const randomString = require('../../helpers/random');
const { convert } = require('convert-svg-to-png');
const BASE_URL = "https://render.githubusercontent.com/render/math?math=";

const toLatex = async(query) => {
    query = encodeURIComponent(query);

    console.log(BASE_URL+query);
    const service = {
        uri: BASE_URL+query,
        method: 'GET',
        encoding: null
    };

    let image = await request(service).catch(e => e);
    
    const buffer = await convert(image, {
        height: '1200',
        width: '1200',
    });
    let fileName = randomString(40)+".png";
    fs.writeFileSync('requests/latex/image/'+fileName, buffer);

    return {
        success: true,
        link: 'requests/latex/image/'+fileName
    };
}


module.exports = toLatex;


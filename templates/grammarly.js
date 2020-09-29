const grammarly = require('grammarly');

(async function () {
    let correction = await grammarly('i wont to be slep').catch(e => e);
    console.log(correction);
})();


// const grammar = require('grammarly');



// const Grammarly = async (msg) => {
//     // if (msg.body.includes('!grammarly')) {
//         // let question = msg.body.replace('!grammarly', '').trim();
//         let question = msg;
//         let res = await grammar(question);
//         let response = "Original Word :\n"+question;
//         console.log(response)

//     // }
// }

// Grammarly('i lop u');
// // module.exports = Brainly;
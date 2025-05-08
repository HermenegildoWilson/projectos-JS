const xhr = require('xmlhttprequest').XMLHttpRequest;
const cheerio = require('cheerio')

let request = new xhr();

request.open('GET', 'https://angolaapi.herokuapp.com/api/v1/validate/bi/020411342UE058', false);

request.send(null)
const dadosResposta = request.responseText
console.log(dadosResposta);

/*
const $ = cheerio.load(dadosResposta)

$('div').each((index, element) => {
    console.log($(element).text())
})
*/
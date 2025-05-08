const padrao = new RegExp('[a-z]{4,16}[\\d]{0,3}[\@][a-z]{2,5}[\.][a-z]{2,4}');
const padrao2 = /[a-z]{4,16}[\d]{0,3}[\@][a-z]{2,5}[\.][a-z]{2,4}/;

console.log(padrao2.test('hermeneg7@gmail.cm'));

//console.log(new Date(2024, 10, 18).toString());
//console.log('Nome: \r ola');

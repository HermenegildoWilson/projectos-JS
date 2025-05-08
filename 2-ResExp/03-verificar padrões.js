//"car" e "cat"
string = 'cat'
padrao = /[ca]{2}.*/
console.log('"car" e "cat": ', padrao.test(string))

//"pop" e "prop"
string = 'prop'
padrao = /.*[op]{2}$/
console.log('"pop" e "prop": ', padrao.test(string))

//"ferret", "ferry", e "ferrari"
string = 'ferr'
padrao = /[ferr]{4}.*/
console.log('"ferret", "ferry", e "ferrari": ', padrao.test(string))

//Qualquer palavra terminando em "ious"
string = 'ious'
padrao = /.*[ious]{4}$/
console.log('Qualquer palavra terminando em "ious": ', padrao.test(string))

//Um espaço em branco seguido por um ponto, vírgula, dois-pontos, ou ponto-e-vírgula
string = ' .'
padrao = /.* [\.;,:][^\.;,:]*/
console.log(padrao.test(string))

//Uma palavra com mais de seis letras
string = ''
padrao = /./
//console.log(padrao.test(string))

//Uma palavra sem a letra "e"
string = ''
padrao = /./
//console.log(padrao.test(string))
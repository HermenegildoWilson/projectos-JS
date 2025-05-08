function calcular (ola){
    console.log('Ola = '+ola)
    for(i of arguments){
        console.log(i);
    }
}

function fatorial(num) {
    if (num == 1) {
        return num
    }else {
        return num*fatorial(num-1)
    }
}

console.log(fatorial(5))
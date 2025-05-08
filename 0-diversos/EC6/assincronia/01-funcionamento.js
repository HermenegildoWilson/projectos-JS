let promise = new Promise((resolvido, rejeitado) => {
    try {
        setTimeout(() => {
            if (true) {
                resolvido('Ok');
            }else {
                rejeitado('Bug');
            }
        }, 5000);
    }catch{
        throw new Error("Erro de execução...");
    }
});


promise
    .then(dado => {
    console.log(dado);
})
    .catch(dado => {
    console.log(dado);
});

setInterval(() => {
    console.log(' -> ');
}, 1000);
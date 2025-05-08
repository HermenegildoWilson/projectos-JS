function parImpar(num) {

    if (num < 0) {
        num *= -1
    }

    if (num == 0) {
        return `É par!`
    }else if (num == 1) {
        return `É impar!`
    }else {
        return parImpar(num - 2)
    }
}

console.log(parImpar(-9))
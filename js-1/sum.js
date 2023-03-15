function suma(n){
    let counter = 0;
    for (let i = 0; i <= n; i++){
        counter += i;
    }
    return counter;
}

console.log(suma(10));
console.log(suma(4));
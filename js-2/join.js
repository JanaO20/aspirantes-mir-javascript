function join (array){
    let str = "";
    let sp =" ";
    for (var i = 0; i < array.length; i++){
        str += array [i] + sp;
    };
    return str;
}

console.log (join([2, 4, 6, 8, 10]));
function maxIndex(array) {
    if (array.length == 0){
        return -1
    }
    let result = array[0]; 
    let idx = 0;
    for (var i = 0; i < array.length; i ++) {
        if (result < array [i]){
            result = array [i];
            idx = i;
        }
      }
    return idx
}

console.log(maxIndex([1, 3, 2]))
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4]))
console.log(maxIndex([])) 
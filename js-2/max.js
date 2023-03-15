function max(array) {
    if (array.length == 0){
        return undefined
    }
    let result = array[0]; 
    for (var i = 1; i < array.length; i ++) {
        if (result < array [i]){
            result = array [i];
        }
      }
    return result
}
console.log(max([1, 3, 2]))
console.log(max([10, 9, 8, 7, 6, 5, 4]))
console.log(max([]))
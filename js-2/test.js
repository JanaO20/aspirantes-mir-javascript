function maxIndex(array) { 
    if (array.length === 0){
         return -1 } 
         let result = array[0]; 
         let idx = 0; 
         for (let i = 1; i < array.length; i++) { 
            console.log('resul', result, idx) 
            if (result < array[i]){ 
                idx = i; result = array[i]; } 
            } 
            return idx 
        }

console.log (maxIndex([1, 3, 2]))
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4]))
console.log(maxIndex([])) 
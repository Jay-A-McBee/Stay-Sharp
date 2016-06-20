/*Write a function that takes an array of values and moves all elements 
that are zero to the end of the array, otherwise preserving the order of 
the array. The zero elements must also maintain the order in which they occurred.

For example, the following array

[7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

is transformed into

[7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

Zero elements are defined by either 0 or "0". Some tests may include elements
 that are not number literals.

You are NOT allowed to use any temporary arrays or objects. You are also not 
allowed to use any Array.prototype or Object.prototype methods.*/


removeZeros = (array) => {
  
  let swap = function(arr,start, val){
    
    let idx = start;
    
    while(idx < arr.length){
      arr[idx] = arr[idx+1];
      idx++;
    }
    arr[arr.length - 1] = val;
  };
  
  let end = array.length;
  
  for(let i = 0; i<end; i++){
    if(array[i] === 0 || array[i] === '0'){
      swap(array,i,array[i]);
      i--;
      end--;
    }
  }
  
  return array;
}
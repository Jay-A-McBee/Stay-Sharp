

// The task here is to create a class that maintains a sorted list of numbers in ascending order.

// The class will have two methods:

// add(x) will add x to the list
// get(i) will get the ith value in the list
// You should also provide a length property that gives the length of the list.

// Efficiency matters!


class SortedList {
  
  constructor(){
    this.length = 0,
    this.list = []
  }
  
  add(val){
    
    let middleIdx = Math.floor(this.length/2);
    this.length++;
    
    let { i , len }  = val < this.list[middleIdx] ? 
      {i : 0, len: middleIdx} : 
      {i: middleIdx + 1, len: this.length};
 
    for( i; i <= len; i++){
      if(this.list[i] >= val){
        this.list.splice(i,0,val);
        return;
      }
  
    }
  this.list.push(val);
  }

  get(i){
    return this.list[i];
  }

}
// Generators and Iterators are new ES6 features that will allow things like this:

// function* fibonacci() {
//     let [prev, curr] = [0, 1];
//     for (;;) {
//         [prev, curr] = [curr, prev + curr];
//         yield curr;
//     }
// }

// The goal of this kata is to implement pseudo-generators with ES5.

// The first thing to do is to implement the generator function:

// function generator(sequencer) {
//    ...
// }
// generator(sequencer[, arg1, arg2, ...]) receives a sequencer 
// function to generate the sequence and returns and object with 
// a next() method. When the next() method is invoked, the next value 
// is generated. The method could receive as well optional arguments 
// to be passed to the sequencer function.


//solution 

function generator(sequencer) {
  var args = Array.prototype.slice.call(arguments,1);
  return {
    next: sequencer.apply(null,args)
  }
}

function factorialSeq() {
  var curr = 1;
  var count = 0;
  return function(){
    if(count === 0){
    	count++; 
    	return curr;
    }
    curr*=count;
    count++;
    return curr;
  }
};

function fibonacciSeq() {
  var answer = 1;
  var round = -1;
  return function(){
    if(round < 0){
      round++;
      return answer
    }
    var temp = round;
    round = answer;
    answer+=temp
    return answer;
  }
}

function rangeSeq(start, step) {
  var answer = start;
  var increment = step;
  var called = false;
  return function(){
    if(!called){
      called = true; 
      return answer;
    }
    answer+=increment;
    return answer;
  }
}

function primeSeq() {
  var answer = 2;
  var called = false;
  return function(){
    var subRoutine = function(val){
      val+=1;
      while(val % 2 === 0){
        val+=1;
      }
     
    var start = Math.ceil(Math.sqrt(val));
    var prime = true;
      while(start > 1){
        if(val % start === 0){
          prime = false;
          break;
        }
          start--;
      }
    return prime ? val : subRoutine(val);
   }
   if(!called){
    called = true; 
    return answer
  }
   answer = subRoutine(answer); 
   return answer;
  }   
}

function partialSumSeq() {
  var args = Array.prototype.slice.call(arguments);
  var sum = 0;
  var idx = 0;
  return function(){
    if(args[idx]){
      sum+= args[idx];
      idx++;
      return sum;
    }else{
      throw 'next() is undefined';
    }
  }  
}
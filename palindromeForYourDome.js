// Our goal is to determine whether or not a given string is a valid palindrome or not.

// Like the above examples, here are a few test cases which are also populated:

// "Amore, Roma" => valid
// "A man, a plan, a canal: Panama" => valid
// "No 'x' in 'Nixon'" => valid
// "Abba Zabba, you're my only friend" => invalid

// You can see that they are case insensitive and disregards non alphanumeric characters. 
// In addition to a few predefined tests, your function will also be tested against 
// a random string generator 50 times which are guaranteed to produce valid palindromes.

// Notes:

// reverse/reverse! have been disabled for String/Array and reverse() for JS.
// reverse cannot get used in Haskell either
// the empty string "" can be read forward or backward the same, it's a palindrome in our case.


//imperative solution

let palindrome = (string) => {
 
  let cleanString = string
    .replace(/\s|\W/g,"")
    .toLowerCase();
 
  for(let i = 0; i < Math.floor(cleanString.length/2); i++){
    if(cleanString[i] !== cleanString[cleanString.length - 1 - i]){
      return false;
    }
  }
  return true;
}

//declaritive solution

let palindrome = (string) => {
 
let cleanString = string
  .replace(/\s|\W/g,"")
  .toLowerCase()
 
let rev = cleanString
  .split('')
  .reduceRight((rev,char) => rev+=char,'')

  return cleanString === rev;
}
// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

function (sum)(x,y) {
  return x + y;
};

// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

function avg(x, y, z) {
  var total = x + y + z;
  return total / 3;
};


// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

function getLength(Justin) {
  return Justin.length
};


// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

var greaterThan = function(a, b) { 
if (b > a) { 
return true 
} 
else { 
return false 
} 
};


// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

var greet = function(name) { 
console.log('Hello,' + " " + name + '!') 
};


// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function 
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

var madlib = function( word1, word2, word3, word4) { 
  console.log( word1 +  " brown" + word2 + " jumps over the " + word3 + " cow " + word4)    
}





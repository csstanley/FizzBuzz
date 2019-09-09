for (var i = 1; i <= 100; i++) {

    // Creating an variable to represent an empty string //
var answer = "";

// The % assignment operator returns the remainder. If the remainder is 0, it's divisible by either 3, 5, or both. //
// It will return either "Fizz", "Buzz", or "FizzBuzz" by adding the empty string (answer) to the string on the right. // 
if (i % 3 == 0) { answer += "Fizz"; }
if (i % 5 == 0) { answer += "Buzz"; }

// The line of code below tests whether either of the first two conditions were true, then assigns i to the answer if it's determined that they weren't. //  
if (answer == "") { answer = i; }

// This console.logs all answers. //
console.log(answer);

};

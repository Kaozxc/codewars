// Instructions:

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)
// Examples

// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3



function stray(numbers) {
    let strayChar = numbers[0];
    
    if(strayChar !== numbers[1] && strayChar !== numbers[2]) {
      return strayChar;
    }
    
    for(let i = 1; i < numbers.length; i++) {
      if(strayChar !== numbers[i]) {
        return numbers[i]
        }
    }
  }
  
  // Solution 1:  // return numbers = numbers.reduce((a, b) => a ^ b);

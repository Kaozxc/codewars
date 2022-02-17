// Instructions:

// Task

// Given a string str, reverse it omitting all non-alphabetic characters.
// Example
// For str = "krishan", the output should be "nahsirk".
// For str = "ultr53o?n", the output should be "nortlu".
// Input/Output
//     [input] string str
// A string consists of lowercase latin letters, digits and symbols.
//     [output] a string

function reverseLetter(str) {
    let str2 = str.split('').reverse().join('')
    return str2.match(/[A-Z]/ig).join('');
  }


  function reverseLetter(str) {
    return str.match(/[A-Z]/ig).reverse().join('');
  }
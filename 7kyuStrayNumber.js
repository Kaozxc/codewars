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
  
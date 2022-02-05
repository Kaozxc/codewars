export function countPositivesSumNegatives(input) {
    let arr = [0,0];
  if (input === null || input.length < 1) { 
      return [];
    }
  for(let i = 0; i < input.length; i++) {
    if(input[i] > 0) {
      arr[0] += 1;
    }else {
      arr[1] += input[i]
    }
  }
return arr;
}
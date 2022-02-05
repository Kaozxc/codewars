function ascending(a, b) {
    return a - b;
  }
  
  export function waveSort(arr) {
    arr.sort(ascending);
    for (var i = 0; i < arr.length - 1; i += 2) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
    }
  }
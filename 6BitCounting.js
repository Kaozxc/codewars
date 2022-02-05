export const countBits = function(n) {
    let bin = n.toString(2).replace(/[0]/g, '')
    return Number(bin.length);
  };
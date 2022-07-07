module.exports = function reverse (n) {
  if (n < 0) n *= -1;
  let string = String(n);
  let newString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    newString = newString + string[i];
  }
  return newString;
}

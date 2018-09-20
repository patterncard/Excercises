function isWithinNumber(a) {
  return ((Math.abs(100 - a) <= 20) || (Math.abs(400 - a) <= 20));
}
console.log(isWithinNumber(80));

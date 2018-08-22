function sumOfIntegers(a, b) {
  const sumOI = a + b;
  if (a === b) {
    return 3 * sumOI;
  }
  return sumOI;
}
console.log(sumOfIntegers(2, 2));

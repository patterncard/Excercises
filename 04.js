function areaOfTriangle(a, b, c) {
  const p = (a + b + c) / 2;
  const x = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  return x;
}

const firstSide = 5;
const secondSide = 6;
const thirdSide = 7;
const oth = areaOfTriangle(firstSide, secondSide, thirdSide);

console.log(oth);
